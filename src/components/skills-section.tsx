// src/components/skills-section.tsx
'use client';

import React from 'react';

import { skillsData } from '@/lib/data';

export function SkillsSection() {
  return (
    <section className="relative py-16">
      {/* Background elements */}
      <div className="from-primary/5 to-secondary/5 absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br via-transparent blur-3xl"></div>

      <div className="container mx-auto px-4">
        <h2 className="from-primary to-secondary mb-12 bg-gradient-to-r bg-clip-text text-center text-3xl font-bold text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="glass flex flex-col items-center space-y-2 rounded-xl p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="size-12 transition-transform duration-200 hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-primary text-center text-sm font-medium">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
