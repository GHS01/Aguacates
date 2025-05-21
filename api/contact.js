// API de contacto para Vercel Edge Functions
import { z } from 'zod';

// Esquema de validación para el formulario de contacto
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor, introduce un email válido"),
  whatsapp: z.string().min(9, "El número de WhatsApp debe tener al menos 9 dígitos"),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  acceptedPrivacy: z.boolean().refine(val => val === true, {
    message: "Debes aceptar la política de privacidad"
  })
});

/**
 * Servicio para enviar emails usando la API de MailerSend
 */
class MailerSendService {
  constructor() {
    this.apiKey = process.env.MAILERSEND_API_KEY || '';
    this.apiUrl = 'https://api.mailersend.com/v1/email';
    
    // Dominio verificado en MailerSend
    this.fromEmail = process.env.MAILERSEND_FROM_EMAIL || 'contacto@test-eqvygm0n68zl0p7w.mlsender.net';
    this.fromName = process.env.MAILERSEND_FROM_NAME || 'Inca Fields Premium';
    
    // Correo al que se enviarán los mensajes
    this.toEmail = process.env.MAILERSEND_TO_EMAIL || 'peru.aguacates@gmail.com';
  }

  /**
   * Envía un email usando la API de MailerSend
   */
  async sendEmail(params) {
    if (!this.apiKey) {
      console.log('⚠️ No se puede enviar el email: MAILERSEND_API_KEY no está configurada');
      return false;
    }

    try {
      console.log(`📧 Enviando email desde ${params.from.email} a ${params.to.map(t => t.email).join(', ')}`);

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify(params)
      });

      // Obtener la respuesta completa para depuración
      const responseText = await response.text();
      let errorData = {};

      try {
        if (responseText) {
          errorData = JSON.parse(responseText);
        }
      } catch (e) {
        console.log(`Advertencia: No se pudo analizar la respuesta como JSON: ${responseText}`);
      }

      if (!response.ok) {
        console.log(`❌ Error al enviar el email: ${response.status} ${response.statusText}`);
        console.log(`Detalles del error: ${JSON.stringify(errorData)}`);
        return false;
      }

      console.log('✅ Email enviado correctamente');
      return true;
    } catch (error) {
      console.log(`❌ Excepción al enviar el email: ${error.message || String(error)}`);
      return false;
    }
  }

  /**
   * Envía un email con los datos del formulario de contacto
   */
  async sendContactFormEmail(contact) {
    const text = `
Nuevo mensaje de contacto:

Nombre: ${contact.name}
Email: ${contact.email}
WhatsApp: ${contact.whatsapp}
Asunto: ${contact.subject}
Mensaje:
${contact.message}

Aceptó política de privacidad: ${contact.acceptedPrivacy ? 'Sí' : 'No'}
`;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #2D5C34; color: white; padding: 10px 20px; border-radius: 5px 5px 0 0; }
    .content { padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #2D5C34; }
    .message { white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px; }
    .footer { margin-top: 20px; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Nuevo Mensaje de Contacto</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Nombre:</span> ${contact.name}
      </div>
      <div class="field">
        <span class="label">Email:</span> ${contact.email}
      </div>
      <div class="field">
        <span class="label">WhatsApp:</span> ${contact.whatsapp}
      </div>
      <div class="field">
        <span class="label">Asunto:</span> ${contact.subject}
      </div>
      <div class="field">
        <span class="label">Mensaje:</span>
        <div class="message">${contact.message.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="field">
        <span class="label">Aceptó política de privacidad:</span> ${contact.acceptedPrivacy ? 'Sí' : 'No'}
      </div>
    </div>
    <div class="footer">
      Este mensaje fue enviado desde el formulario de contacto de Inca Fields Premium.
    </div>
  </div>
</body>
</html>
`;

    // Registrar información de depuración
    console.log(`📧 Intentando enviar email de contacto:
    - From: ${this.fromEmail} (${this.fromName})
    - To: ${this.toEmail}
    - Subject: Nuevo contacto: ${contact.subject}
    - Nombre del contacto: ${contact.name}
    - Email del contacto: ${contact.email}`);

    return this.sendEmail({
      to: [{ email: this.toEmail }],
      from: {
        email: this.fromEmail,
        name: this.fromName
      },
      subject: `Nuevo contacto: ${contact.subject}`,
      text,
      html
    });
  }
}

// Crear una instancia del servicio de MailerSend
const mailerSend = new MailerSendService();

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
      contactSchema.parse(body);
    } catch (validationError) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Datos del formulario inválidos",
          errors: validationError.errors
        }),
        {
          status: 400,
          headers
        }
      );
    }

    // Enviar el email
    const emailSent = await mailerSend.sendContactFormEmail(body);

    if (emailSent) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Mensaje recibido y email enviado correctamente"
        }),
        {
          status: 201,
          headers
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Mensaje recibido pero no se pudo enviar el email"
        }),
        {
          status: 201,
          headers
        }
      );
    }
  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error al procesar el formulario de contacto"
      }),
      {
        status: 500,
        headers
      }
    );
  }
}
