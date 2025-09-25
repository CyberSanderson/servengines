// src/app/actions.ts
'use server';

import { Resend } from 'resend';

// Initialize Resend with the API key from the .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: { name: string; email: string; message: string; }) => {
  console.log('Running on server');
  console.log(formData);

  try {
    const { data, error } = await resend.emails.send({
      // IMPORTANT: The "from" address must be 'onboarding@resend.dev' on the free plan
      from: 'onboarding@resend.dev', 
      // This is the email address that will receive the form submissions
      to: ['your-personal-email@example.com'], 
      subject: `New message from ${formData.name} via Servengines Contact Form`,
      // This is the content of the email
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    return { error: 'Something went wrong on the server.' };
  }
};