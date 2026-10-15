'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { ProjectDialog } from './ProjectDialog';
import { ContactDialog } from './ContactDialog';

type ExperienceContextValue = {
  openContact: () => void;
  openProject: (index: number) => void;
  goToService: (index: number) => void;
  expandedService: number | null;
  toggleService: (index: number) => void;
};

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

export function useExperience() {
  const context = useContext(ExperienceContext);
  if (!context) throw new Error('useExperience must be used within ExperienceProvider');
  return context;
}

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [activeDialog, setActiveDialog] = useState<'project' | 'contact' | null>(null);
  const [projectIndex, setProjectIndex] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const openContact = useCallback(() => setActiveDialog('contact'), []);
  const openProject = useCallback((index: number) => {
    setProjectIndex(index);
    setActiveDialog('project');
  }, []);
  const closeDialog = useCallback(() => setActiveDialog(null), []);

  const toggleService = useCallback((index: number) => {
    setExpandedService(current => current === index ? null : index);
  }, []);

  const goToService = useCallback((index: number) => {
    setExpandedService(index);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('service-details')?.scrollIntoView({
      behavior: reduceMotion ? 'instant' : 'smooth',
      block: 'start',
    });
    window.setTimeout(() => {
      document.querySelector<HTMLElement>(`[data-service-summary="${index}"]`)?.focus({ preventScroll: true });
    }, reduceMotion ? 0 : 450);
  }, []);

  return (
    <ExperienceContext.Provider value={{ openContact, openProject, goToService, expandedService, toggleService }}>
      {children}
      {activeDialog === 'project' && <ProjectDialog projectIndex={projectIndex} onChange={setProjectIndex} onClose={closeDialog} />}
      {activeDialog === 'contact' && <ContactDialog onClose={closeDialog} />}
    </ExperienceContext.Provider>
  );
}
