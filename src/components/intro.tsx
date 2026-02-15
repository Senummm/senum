'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="relative my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary animate-float absolute left-10 top-20 size-2 rounded-full opacity-60"></div>
        <div
          className="bg-secondary animate-float absolute right-20 top-40 size-1 rounded-full opacity-40"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="bg-accent animate-float absolute bottom-20 left-1/4 size-1.5 rounded-full opacity-50"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Available for work banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'tween', duration: 0.2 }}
      >
        <Link
          href="#contact"
          className="glass flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative flex size-2 rounded-full bg-green-400" />
          </span>
          <span className="font-mono">Available for work!</span>
        </Link>
      </motion.div>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading from-primary via-secondary to-accent mb-6 max-w-[90vw] px-4 bg-gradient-to-r bg-clip-text text-2xl font-extrabold text-transparent sm:max-w-3xl sm:text-3xl md:max-w-5xl md:text-4xl lg:text-5xl"
      >
        <span className="typing-line-1">
          Hi, I&apos;m{' '}
          <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
            Senum
          </span>
        </span>
        <span className="typing-line-2">
          AI | Machine Learning | DevOps
        </span>
      </motion.h1>

      {/* Subheading / summary */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-[90vw] px-4 text-base leading-relaxed sm:max-w-xl sm:text-base md:max-w-2xl md:text-lg"
      >
        Based in Kalutara, Sri Lanka. I explore innovations and research in
        Machine Learning, Deep Learning, MLOps, DevOps, GenAI, and
        Retrieval-Augmented Generation (RAG) systems with strong teamwork and
        communication skills.
      </motion.p>

      {/* Call-to-action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-row gap-3"
      >
        <Button
          asChild
          size="lg"
          className="glass border-primary/50 hover:border-primary transition-all duration-300"
        >
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="glass border-secondary/50 hover:border-secondary hidden transition-all duration-300 sm:flex"
          asChild
        >
          <a
            href="https://drive.google.com/file/d/13y8IQi8otzJF3RZEkMwoHyAvUzvaIdO0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="glass border-accent/50 hover:border-accent transition-all duration-300"
          asChild
        >
          <Link
            href="https://www.linkedin.com/in/senum-dodangoda/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="glass border-primary/50 hover:border-primary transition-all duration-300"
          asChild
        >
          <Link
            href="https://github.com/Senum2001"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.github className="size-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
