// actions/contactAction.js
'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: { name: string; email: string; message: string }) {
  const { name, email, message } = formData;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'debonsolutions@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #4A90E2; font-size: 24px; text-align: center;">
            Nuevo mensaje de contacto
          </h1>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
            <p style="font-size: 16px;">
              <strong>Nombre:</strong> ${name}
            </p>
            <p style="font-size: 16px;">
              <strong>Correo electrónico:</strong> ${email}
            </p>
            <p style="font-size: 16px;">
              <strong>Mensaje:</strong>
            </p>
            <div style="background-color: #fff; padding: 15px; border-radius: 4px; border: 1px solid #eee; margin-top: 10px;">
              <p style="font-size: 14px; color: #555; line-height: 1.6;">
                ${message}
              </p>
            </div>
          </div>
          <p style="text-align: center; font-size: 14px; color: #777; margin-top: 20px;">
            Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
          </p>
        </div>
      `,
    });

    return { message: 'Correo enviado correctamente!', ok: true };
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return { message: 'Hubo un error al enviar el correo.', ok: false };
  }
}