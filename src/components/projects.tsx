'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

const PROJECTS_PER_PAGE = 6;

export const Projects = () => {
  const { ref } = useSectionInView('Projects');
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + PROJECTS_PER_PAGE, projectsData.length));
  };

  const hasMoreProjects = visibleProjects < projectsData.length;

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="A collection of projects showcasing my expertise in AI, ML, and computer vision. Each project demonstrates real-world problem-solving and technical innovation."
        />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <Project key={`${project.title}-${index}`} project={project} index={index} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMoreProjects && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-center"
        >
          <button
            onClick={showMoreProjects}
            className="rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Load More Projects ({projectsData.length - visibleProjects} remaining)
          </button>
        </motion.div>
      )}

      {/* Project Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-center"
      >
        <p className="text-sm text-muted-foreground">
          Showing {Math.min(visibleProjects, projectsData.length)} of {projectsData.length} projects
        </p>
      </motion.div>
    </section>
  );
};
