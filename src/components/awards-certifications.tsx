'use client';

import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';

const awardsData = [
  {
    title: "Dean's List",
    detail: 'Semester 4, Semester 6, Semester 7',
    icon: 'star',
  },
  {
    title: '43rd Place, MoraXtreme 9.0',
    detail: 'Out of 380+ teams – Oct 2024',
    icon: 'star',
  },
  {
    title: 'Finalist, Sri Lankan Robotics Challenge 2024',
    detail: 'Mar 2024',
    icon: 'star',
  },
  {
    title: 'Finalist, ComFix 2024',
    detail: 'Jun 2024',
    icon: 'star',
  },
  {
    title: 'Finalist, EVOLVE\'24 IoT Mini Research Challenge',
    detail: 'Jul 2024',
    icon: 'star',
  },
  {
    title: '5th Place, Buddhi Prabodhaya Western Province Mathematics Competition',
    detail: 'Jul 2019',
    icon: 'star',
  },
];

const certificationsData = [
  {
    title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
    issuer: 'Oracle',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
  },
  {
    title: 'GANs Specialization',
    issuer: 'DeepLearning.AI',
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'FreeCodeCamp',
  },
];

export function AwardsAndCertifications() {
  return (
    <section className="relative my-10 scroll-mt-28 md:mb-20">
      <div className="from-primary/5 via-accent/5 to-secondary/5 absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r blur-3xl"></div>

      <SectionHeading
        heading="Awards & Certifications"
        content="Recognition and professional certifications."
      />

      <div className="grid max-w-screen-md gap-8 md:grid-cols-2">
        {/* Awards */}
        <div>
          <h3 className="text-primary mb-4 text-xl font-semibold">Awards & Achievements</h3>
          <div className="space-y-3">
            {awardsData.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass flex items-start gap-3 rounded-xl p-4"
              >
                <Icons.star className="text-primary mt-0.5 size-4 shrink-0 fill-current" />
                <div>
                  <p className="font-medium">{award.title}</p>
                  <p className="text-muted-foreground text-sm">{award.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-secondary mb-4 text-xl font-semibold">Certifications</h3>
          <div className="space-y-3">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass flex items-start gap-3 rounded-xl p-4"
              >
                <Icons.briefcase className="text-secondary mt-0.5 size-4 shrink-0" />
                <div>
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
