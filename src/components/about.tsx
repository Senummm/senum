'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* Background glow */}
      <div className="from-primary/5 via-secondary/5 to-accent/5 absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r blur-3xl"></div>

      <SectionHeading heading="About Me" />
      <div className="glass -mt-5 flex max-w-3xl flex-col items-center rounded-2xl p-6 text-center leading-7 md:flex-row md:items-start md:space-x-4 md:text-left">
        <Image
          src="/images/my.jpg"
          alt="Senum Dodangoda"
          width={160}
          height={160}
          className="mb-6 rounded-full object-cover transition-all duration-300 hover:scale-105 md:mb-0"
          priority
        />
        <div>
          <p className="mb-4">
            I&apos;m{' '}
            <span className="text-primary font-semibold">D.K. Senum Dodangoda</span>,
            based in Kalutara, Sri Lanka. I am a dedicated individual exploring
            innovations and research related to Machine Learning, Deep Learning,
            MLOps, DevOps, GenAI, and Retrieval-Augmented Generation (RAG)
            systems, with strong teamwork and communication skills.
          </p>
          <p className="mb-4">
            I worked as a Machine Learning Engineer Intern at OCTAVE – John
            Keells Holdings PLC (Dec 2024–Jun 2025), where I designed a custom
            model drift detection framework for large-scale environments, built
            a document and signature classification system, and gained project
            management experience with Agile-Scrum & Extreme Projects (R&D)
            best practices.
          </p>
          <p>
            I&apos;m eager to apply my skills in Python, PySpark, PyTorch,
            FastAPI, and cloud platforms like Azure and AWS to build scalable,
            production-ready solutions. Beyond ML, I enjoy electronics, IoT
            projects, and exploring new technologies.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
