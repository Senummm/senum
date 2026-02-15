'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/lib/utils';

// Updated experiencesData based on your CV :contentReference[oaicite:3]{index=3}
const experiencesData = [
  {
    company: 'OCTAVE – John Keells Holdings PLC',
    title: 'Machine Learning Engineer Intern',
    period: 'Dec 2024 – Jun 2025',
    description: [
      'Designed and implemented a custom model drift detection framework capable of detecting both data and concept drift in large-scale environments for predictive and forecasting models.',
      'Deployed the framework as a Python package on Azure, enabling automated real-time drift detection, mitigation, and reporting, with explainable reasons for drift events.',
      'Built a frontend dashboard using Next.js and integrated Azure Logic App and Azure Function App for real-time notifications.',
      'Developed a document and signature classification system for GenAI projects: document classification via noise, texture, and FFT-based analysis; signature classification using morphological operations, edge/contour analysis, and EDSR 4x super-resolution enhancement.',
      'Gained project management experience, including timeline/resource management, progress tracking, and Agile-Scrum & Extreme Projects (R&D) best practices.',
    ],
    technologies: [
      'PySpark MLLib',
      'Python',
      'Azure Databricks',
      'Next.js',
      'Flask',
      'RESTful APIs',
      'OpenCV',
    ],
  },
];

export const Experience = () => {
  const { ref: sectionRef } = useSectionInView('Experience');

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative my-10 scroll-mt-28 md:mb-20"
    >
      {/* Background glow */}
      <div className="from-secondary/5 to-primary/5 absolute inset-0 -z-10 rounded-3xl bg-gradient-to-l via-transparent blur-3xl"></div>

      <SectionHeading
        heading="My Experience"
        content="Professional roles and projects I’ve contributed to."
      />
      <div className="relative max-w-screen-md">
        {experiencesData.map(
          ({ company, title, period, description, technologies }) => (
            <div
              key={company}
              className="relative pl-8 [&:not(:last-child)]:pb-10"
            >
              <div className="from-primary to-secondary absolute left-0 top-2.5 h-full w-[2px] bg-gradient-to-b first:top-6 first:h-[calc(100%-24px)]">
                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.175 }}
                viewport={{ once: true }}
                className={cn('glass space-y-3 rounded-2xl p-6 opacity-0')}
              >
                <div className="flex items-center gap-3">
                  <div className="glass border-primary/50 flex size-9 shrink-0 items-center justify-center rounded-full border">
                    <Icons.building className="text-primary size-5" />
                  </div>
                  <span className="text-primary text-lg font-semibold">
                    {company}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <div className="text-secondary mt-1 flex items-center gap-2 text-sm">
                    <Icons.calendar className="size-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <ul className="text-muted-foreground list-disc pl-5">
                  {description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="glass border-accent/50 text-accent rounded-full border px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
