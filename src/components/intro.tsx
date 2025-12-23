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
        className="font-heading from-primary via-secondary to-accent max-w-5xl bg-gradient-to-r bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl"
      >
        <span className="typing-container">
          Hi, I'm{' '}
          <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
            Senum
          </span>
        </span>
        <br />
        <span className="typing-container" style={{ animationDelay: '2s' }}>
          Machine Learning & AI Engineer
        </span>
      </motion.h1>

      {/* Subheading / summary */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-2xl text-lg leading-relaxed"
      >
        Based in Kalutara, Sri Lanka. I build scalable AI & ML solutions in
        Python, TensorFlow, PySpark, and cloud platforms (Azure, AWS).
        Passionate about Generative AI, Computer Vision, TinyML, and IoT
        innovations.
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
            href="https://drive.google.com/file/d/1UMJ23YYYa9cz4hvF8Pt6ZJSef0bNDrmO/view?usp=sharing"
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
