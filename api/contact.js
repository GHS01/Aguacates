// API de contacto para Vercel Serverless Functions (Node.js)
import { z } from 'zod';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

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
 * Servicio para enviar emails usando el SDK oficial de MailerSend
 */
class MailerSendService {
  constructor() {
    this.apiKey = process.env.MAILERSEND_API_KEY || '';

    // Dominio verificado en MailerSend
    this.fromEmail = process.env.MAILERSEND_FROM_EMAIL || 'contacto@test-eqvygm0n68zl0p7w.mlsender.net';
    this.fromName = process.env.MAILERSEND_FROM_NAME || 'Inca Fields Premium';

    // Correo al que se enviarán los mensajes
    this.toEmail = process.env.MAILERSEND_TO_EMAIL || 'peru.aguacates@gmail.com';

    // Inicializar el cliente de MailerSend
    this.mailerSend = new MailerSend({
      apiKey: this.apiKey
    });
  }

  /**
   * Envía un email usando el SDK oficial de MailerSend
   */
  async sendEmail(params) {
    if (!this.apiKey) {
      console.log('⚠️ No se puede enviar el email: MAILERSEND_API_KEY no está configurada');
      return false;
    }

    try {
      console.log(`📧 Enviando email desde ${params.from.email} a ${params.to[0].email}`);

      // Crear los parámetros del email usando el SDK
      const emailParams = new EmailParams()
        .setFrom(new Sender(params.from.email, params.from.name))
        .setTo([new Recipient(params.to[0].email)])
        .setSubject(params.subject)
        .setHtml(params.html)
        .setText(params.text);

      // Enviar el email con un timeout de 25 segundos
      const emailPromise = Promise.race([
        this.mailerSend.email.send(emailParams),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout al enviar el email')), 25000)
        )
      ]);

      await emailPromise;
      console.log('✅ Email enviado correctamente');
      return true;
    } catch (error) {
      console.log(`❌ Error al enviar el email: ${error.message || String(error)}`);

      // Si hay detalles adicionales del error, mostrarlos
      if (error.response && error.response.data) {
        console.log(`Detalles del error: ${JSON.stringify(error.response.data)}`);
      }

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

    // HTML simplificado para reducir el tamaño y el tiempo de procesamiento
    const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
  <div style="background-color:#2D5C34;color:white;padding:10px 20px;border-radius:5px 5px 0 0">
    <h2>Nuevo Mensaje de Contacto</h2>
  </div>
  <div style="padding:20px;border:1px solid #ddd;border-top:none;border-radius:0 0 5px 5px">
    <p><strong style="color:#2D5C34">Nombre:</strong> ${contact.name}</p>
    <p><strong style="color:#2D5C34">Email:</strong> ${contact.email}</p>
    <p><strong style="color:#2D5C34">WhatsApp:</strong> ${contact.whatsapp}</p>
    <p><strong style="color:#2D5C34">Asunto:</strong> ${contact.subject}</p>
    <p><strong style="color:#2D5C34">Mensaje:</strong></p>
    <div style="background-color:#f9f9f9;padding:15px;border-radius:5px">${contact.message.replace(/\n/g, '<br>')}</div>
    <p><strong style="color:#2D5C34">Aceptó política:</strong> ${contact.acceptedPrivacy ? 'Sí' : 'No'}</p>
  </div>
  <div style="margin-top:20px;font-size:12px;color:#777">
    Este mensaje fue enviado desde el formulario de contacto de Inca Fields Premium.
  </div>
</div>
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
      contactSchema.parse(body);
    } catch (validationError) {
      return res.status(400).json({
        success: false,
        message: "Datos del formulario inválidos",
        errors: validationError.errors
      });
    }

    // Almacenar los datos del contacto para referencia futura
    console.log(`✅ Datos de contacto recibidos y validados:
    - Nombre: ${body.name}
    - Email: ${body.email}
    - WhatsApp: ${body.whatsapp}
    - Asunto: ${body.subject}`);

    // Enviar el email (con un timeout de 30 segundos)
    const emailPromise = Promise.race([
      mailerSend.sendContactFormEmail(body),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout al enviar el email')), 30000)
      )
    ]);

    try {
      const emailSent = await emailPromise;
      if (emailSent) {
        console.log('✅ Email enviado correctamente');
        return res.status(201).json({
          success: true,
          message: "Mensaje recibido y email enviado correctamente"
        });
      } else {
        console.log('⚠️ No se pudo enviar el email');
        return res.status(201).json({
          success: true,
          message: "Mensaje recibido pero no se pudo enviar el email"
        });
      }
    } catch (emailError) {
      console.error('❌ Error al enviar el email:', emailError);
      return res.status(201).json({
        success: true,
        message: "Mensaje recibido pero hubo un problema al enviar el email"
      });
    }
  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error);

    return res.status(500).json({
      success: false,
      message: "Error al procesar el formulario de contacto"
    });
  }
}
