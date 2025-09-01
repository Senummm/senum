'use server';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    const response = await fetch(
      `https://formspree.io/f/${env.FORMSPREE_FORM_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Formspree error: ${response.status} ${response.statusText}`
      );
    }

    return {
      data: 'Email sent successfully!',
    };
  } catch (error) {
    console.error('Formspree error:', error);
    return {
      error: 'Something went wrong while sending the email.',
    };
  }
};
