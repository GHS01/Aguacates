# Solución de problemas del formulario de contacto

Este documento proporciona instrucciones para solucionar problemas comunes con el formulario de contacto en producción.

## Configuración de MailerSend

Para que el formulario de contacto funcione correctamente, es necesario configurar MailerSend:

1. Crea una cuenta en [MailerSend](https://www.mailersend.com/)
2. Verifica un dominio o utiliza el dominio proporcionado por MailerSend (ejemplo: `contacto@tu-dominio-verificado.mlsender.net`)
3. Crea una API Key en el panel de control de MailerSend
4. Configura las siguientes variables de entorno en Vercel:
   - `MAILERSEND_API_KEY`: Tu clave API de MailerSend
   - `MAILERSEND_FROM_EMAIL`: Email verificado en MailerSend (dominio verificado)
   - `MAILERSEND_FROM_NAME`: Nombre del remitente (ej. "Inca Fields Premium")
   - `MAILERSEND_TO_EMAIL`: Email donde recibirás los mensajes de contacto

## Problemas comunes y soluciones

### Error 404 (Not Found)

Si el formulario muestra un error 404 al intentar enviar:

1. Verifica que los archivos `api/contact.js` y `api/contact.config.json` existan en tu repositorio
2. Asegúrate de que el archivo `vercel.json` tenga la configuración correcta para las rutas API
3. Despliega nuevamente el proyecto en Vercel

### Error 500 (Internal Server Error)

Si el formulario muestra un error 500 al intentar enviar:

1. Verifica que las variables de entorno de MailerSend estén correctamente configuradas en Vercel
2. Comprueba los logs de Vercel para ver el error específico
3. Asegúrate de que la API Key de MailerSend sea válida y esté activa

### Error de validación

Si el formulario muestra errores de validación:

1. Asegúrate de que todos los campos requeridos estén completos
2. Verifica que el email tenga un formato válido
3. Asegúrate de que el número de WhatsApp tenga al menos 9 dígitos
4. Verifica que el asunto tenga al menos 5 caracteres
5. Asegúrate de que el mensaje tenga al menos 10 caracteres
6. Marca la casilla de aceptación de la política de privacidad

## Verificación de funcionamiento

Para verificar que el formulario de contacto está funcionando correctamente:

1. Completa todos los campos del formulario con datos válidos
2. Envía el formulario
3. Deberías ver un mensaje de éxito
4. Verifica que el email haya llegado a la dirección configurada en `MAILERSEND_TO_EMAIL`

## Solución de problemas avanzados

### Verificar los logs de Vercel

1. Inicia sesión en tu cuenta de [Vercel](https://vercel.com)
2. Selecciona tu proyecto
3. Ve a la pestaña "Deployments" (Despliegues)
4. Selecciona el despliegue más reciente
5. Ve a la pestaña "Functions" (Funciones)
6. Busca la función `api/contact.js`
7. Haz clic en "View Logs" (Ver logs) para ver los logs de la función

### Probar la API directamente

Puedes probar la API directamente usando curl o Postman:

```bash
curl -X POST https://tu-dominio.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nombre de prueba",
    "email": "prueba@ejemplo.com",
    "whatsapp": "123456789",
    "subject": "Mensaje de prueba",
    "message": "Este es un mensaje de prueba para verificar el funcionamiento del formulario de contacto.",
    "acceptedPrivacy": true
  }'
```

Si recibes una respuesta exitosa, el problema podría estar en el frontend y no en la API.

## Contacto para soporte

Si continúas teniendo problemas con el formulario de contacto, puedes contactar al equipo de soporte en:

- Email: soporte@incafields.com
- WhatsApp: +51 998 148 917
