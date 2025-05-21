// API de suscripción para Vercel Edge Functions
import { z } from 'zod';

// Esquema de validación para el formulario de suscripción
const subscriberSchema = z.object({
  email: z.string().email("Por favor, introduce un email válido")
});

// Almacenamiento en memoria para suscriptores (solo para demostración)
// En producción, deberías usar una base de datos persistente
let subscribers = new Map();
let currentId = 1;

// Función principal para manejar las solicitudes
export default async function handler(req) {
  // Configurar CORS para Edge Functions
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Manejar solicitudes OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers
    });
  }

  // Solo permitir solicitudes POST
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Solo se aceptan solicitudes POST'
      }),
      {
        status: 405,
        headers
      }
    );
  }

  try {
    // Parsear el cuerpo de la solicitud como JSON
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Error al procesar la solicitud. Por favor, intenta de nuevo."
        }),
        {
          status: 400,
          headers
        }
      );
    }

    // Validar los datos del formulario
    try {
      subscriberSchema.parse(body);
    } catch (validationError) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email inválido",
          errors: validationError.errors
        }),
        {
          status: 400,
          headers
        }
      );
    }

    // Verificar si el email ya está suscrito
    const emailExists = Array.from(subscribers.values()).some(
      (sub) => sub.email === body.email
    );
    
    if (emailExists) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email ya suscrito"
        }),
        {
          status: 409,
          headers
        }
      );
    }
    
    // Guardar la suscripción
    const id = currentId++;
    const subscriber = { ...body, id };
    subscribers.set(id, subscriber);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Suscripción exitosa",
        subscriber
      }),
      {
        status: 201,
        headers
      }
    );
  } catch (error) {
    console.error("Error al procesar la suscripción:", error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error al procesar la suscripción"
      }),
      {
        status: 500,
        headers
      }
    );
  }
}
