// src/app/actions.ts
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: { name: string; email: string; message: string; }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: ['your-personal-email@example.com'], // Remember to change this to your email
      subject: `New message from ${formData.name} via Servengines Contact Form`,
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    // THIS IS THE MISSING PART
    if (error) {
      return { error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    // This handles network errors, etc.
    return { error: 'Something went wrong on the server.' };
  }
};