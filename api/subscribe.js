// API de suscripción para Vercel Serverless Functions (Node.js)
import { z } from 'zod';

// Esquema de validación para el formulario de suscripción
const subscriberSchema = z.object({
  email: z.string().email("Por favor, introduce un email válido")
});

// Almacenamiento en memoria para suscriptores (solo para demostración)
// En producción, deberías usar una base de datos persistente
let subscribers = new Map();
let currentId = 1;

// Función principal para manejar las solicitudes (Node.js)
export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Manejar solicitudes OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Solo permitir solicitudes POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Solo se aceptan solicitudes POST'
    });
  }

  try {
    // Obtener el cuerpo de la solicitud
    const body = req.body;

    if (!body) {
      return res.status(400).json({
        success: false,
        message: "Error al procesar la solicitud. Por favor, intenta de nuevo."
      });
    }

    // Validar los datos del formulario
    try {
      subscriberSchema.parse(body);
    } catch (validationError) {
      return res.status(400).json({
        success: false,
        message: "Email inválido",
        errors: validationError.errors
      });
    }

    // Verificar si el email ya está suscrito
    const emailExists = Array.from(subscribers.values()).some(
      (sub) => sub.email === body.email
    );

    if (emailExists) {
      return res.status(409).json({
        success: false,
        message: "Email ya suscrito"
      });
    }

    // Guardar la suscripción
    const id = currentId++;
    const subscriber = { ...body, id };
    subscribers.set(id, subscriber);

    return res.status(201).json({
      success: true,
      message: "Suscripción exitosa",
      subscriber
    });
  } catch (error) {
    console.error("Error al procesar la suscripción:", error);

    return res.status(500).json({
      success: false,
      message: "Error al procesar la suscripción"
    });
  }
}
