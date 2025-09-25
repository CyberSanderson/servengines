// src/app/actions.ts
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: { name: string; email: string; message: string }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['your-personal-email@example.com'], // <-- replace with your real email
      subject: `New message from ${formData.name} via Servengines Contact Form`,
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error); // ✅ actively using error
      return { error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    // ✅ use `err` instead of `error` to avoid confusion with the destructured one
    console.error('Server exception:', err);
    return { error: 'Something went wrong on the server.' };
  }
};
