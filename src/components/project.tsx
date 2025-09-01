'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
      className="group relative flex w-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Project Image or Icon */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {useIcon && IconComponent ? (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
            <div className="rounded-full bg-white/90 p-6 shadow-lg backdrop-blur-sm">
              <IconComponent className="h-16 w-16 text-primary" />
            </div>
          </div>
        ) : !imageError ? (
          <>
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
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
          <div className="flex h-full items-center justify-center bg-muted">
            <Icons.github className="h-12 w-12 text-muted-foreground" />
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black transition-all duration-200 hover:bg-white hover:scale-110"
                aria-label={`View ${title} on GitHub`}
              >
                <Icons.github className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <h3 className="mb-2 line-clamp-2 text-xl font-semibold group-hover:text-primary transition-colors">
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
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex gap-3 pt-2 border-t">
          {hasGithubLink ? (
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90"
            >
              <Icons.github className="h-4 w-4" />
              View Code
            </Link>
          ) : (
            <div className="flex flex-1 items-center justify-center rounded-lg bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
              <Icons.briefcase className="mr-2 h-4 w-4" />
              Private Project
            </div>
          )}
        </div>
      </div>

      {/* Featured badge for first few projects */}
      {index < 3 && (
        <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/80 px-3 py-1 text-xs font-medium text-primary-foreground shadow-lg">
          <Icons.star className="h-3 w-3 fill-current" />
          Featured
        </div>
      )}
    </motion.div>
  );
};
