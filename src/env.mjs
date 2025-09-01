import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SITE_URL: z.string().url().optional(),
    GOOGLE_SITE_VERIFICATION_ID: z.string().min(1).optional(),
    FORMSPREE_FORM_ID: z.string().min(1),
  },
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
    FORMSPREE_FORM_ID: process.env.FORMSPREE_FORM_ID,
  },
});
