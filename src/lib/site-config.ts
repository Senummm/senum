// src/lib/siteConfig.ts

import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'D.K. Senum Dodangoda | AI | Machine Learning | DevOps',
  description:
    'D.K. Senum Dodangoda \u2014 AI, Machine Learning & DevOps Engineer in Kalutara, Sri Lanka. Building scalable ML, Deep Learning, MLOps, GenAI and RAG systems using Python, PyTorch, PySpark, and cloud platforms (Azure, AWS).',
  keywords: [
    'Senum Dodangoda',
    'D.K. Senum Dodangoda',
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'MLOps',
    'DevOps',
    'GenAI',
    'RAG',
    'Computer Vision',
    'Retrieval-Augmented Generation',
    'Python',
    'PyTorch',
    'PySpark',
    'Azure',
    'AWS',
    'Docker',
    'Kubernetes',
    'Sri Lanka',
    'Kalutara',
    'Portfolio',
    'Projects',
    'Open Source',
  ],
  // Uses env.SITE_URL at build time (Next.js env docs) :contentReference[oaicite:2]{index=2}
  url: env.SITE_URL || 'https://example.com',
  // Injected into metadata / <meta name="google-site-verification" /> :contentReference[oaicite:3]{index=3}
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
