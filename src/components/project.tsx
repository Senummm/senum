'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const hasGithubLink = links.github && links.github.trim() !== '';

  // Check if image path contains 'icon:' prefix to use icon instead
  const useIcon = image.startsWith('icon:');
  const iconName = useIcon ? image.replace('icon:', '') : '';
  const IconComponent = useIcon && Icons[iconName as keyof typeof Icons];

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="bg-card glass group relative flex w-full flex-col overflow-hidden rounded-xl border p-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Project Image or Icon */}
      <div className="bg-muted relative aspect-video overflow-hidden">
        {useIcon && IconComponent ? (
          <div className="from-primary/10 via-primary/5 flex h-full items-center justify-center bg-gradient-to-br to-transparent">
            <div className="rounded-full bg-white/90 p-6 shadow-lg backdrop-blur-sm">
              <IconComponent className="text-primary size-16" />
            </div>
          </div>
        ) : !imageError ? (
          <>
            {isImageLoading && (
              <div className="bg-muted absolute inset-0 flex items-center justify-center">
                <div className="border-primary size-8 animate-spin rounded-full border-4 border-t-transparent"></div>
              </div>
            )}
            <Image
              src={image}
              alt={title}
              fill
              className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                isImageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setIsImageLoading(false)}
              onError={() => {
                setImageError(true);
                setIsImageLoading(false);
              }}
            />
          </>
        ) : (
          <div className="bg-muted flex h-full items-center justify-center">
            <Icons.github className="text-muted-foreground size-12" />
          </div>
        )}

        {/* Overlay with action buttons */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20">
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {hasGithubLink && (
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-white/90 text-black transition-all duration-200 hover:scale-110 hover:bg-white"
                aria-label={`View ${title} on GitHub`}
              >
                <Icons.github className="size-5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <h3 className="group-hover:text-primary mb-2 line-clamp-2 text-xl font-semibold transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="bg-primary/10 text-primary ring-primary/20 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-3 py-1 text-xs font-medium">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex gap-3 border-t pt-2">
          {hasGithubLink ? (
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
            >
              <Icons.github className="size-4" />
              View Code
            </Link>
          ) : (
            <div className="bg-muted/50 text-muted-foreground flex flex-1 items-center justify-center rounded-lg px-4 py-2 text-sm">
              <Icons.briefcase className="mr-2 size-4" />
              Private Project
            </div>
          )}
        </div>
      </div>

      {/* Featured badge for first few projects */}
      {index < 3 && (
        <div className="glass text-primary-foreground border-primary/50 absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-lg">
          <Icons.star className="text-primary size-3 fill-current" />
          Featured
        </div>
      )}
    </motion.div>
  );
};
