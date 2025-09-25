'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: { name: string; email: string; message: string; }) => {
  try {
    const response = await resend.emails.send({
      from: 'sanderson@servengines.com',
      to: ['sanderson@servengines.com'],
      subject: `New message from ${formData.name} via Servengines Contact Form`,
      replyTo: formData.email,
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    // If Resend API provides errors inside the response, handle them here
    if ('error' in response && response.error) {
      return { error: response.error.message || 'Unknown error' };
    }

    return { success: true, data: response };
  } catch (err) {
    console.error('Send email failed:', err); // optional: log the actual error
    return { error: 'Something went wrong on the server.' };
  }
};
