'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { formatIndex, projects } from '@/data/content';
import { ModalShell } from './ModalShell';

export function ProjectDialog({ projectIndex, onChange, onClose }: {
  projectIndex: number;
  onChange: Dispatch<SetStateAction<number>>;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleArrowKeys(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        onChange(index => (index - 1 + projects.length) % projects.length);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        onChange(index => (index + 1) % projects.length);
      }
    }
    document.addEventListener('keydown', handleArrowKeys);
    return () => document.removeEventListener('keydown', handleArrowKeys);
  }, [onChange]);

  const project = projects[projectIndex];
  return (
    <ModalShell label="Interior image preview" onClose={onClose} className="w-[min(1100px,92vw)] p-3 max-md:w-[calc(100vw-18px)] max-md:p-2">
      <button data-modal-close type="button" aria-label="Close image" onClick={onClose} className="absolute top-5 right-5 z-10 bg-[#f6f4ef] px-3 py-2.5 text-[9px] tracking-[.1em] transition-colors hover:bg-forest hover:text-white">CLOSE ✕</button>
      <Image
        alt={project.alt}
        src={project.src}
        width={project.width}
        height={project.height}
        sizes="92vw"
        className="h-[min(70dvh,720px)] w-full bg-[#d7d5cf] object-contain max-md:h-auto max-md:max-h-[67dvh]"
      />
      <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-4 pb-1">
        <p className="font-editorial text-[23px] max-md:text-[19px]">{formatIndex(projectIndex)} — {project.title}</p>
        <div className="flex items-center gap-3">
          <button aria-label="Previous image" type="button" className="h-9 w-10 border border-[#8a8f86] transition-colors hover:bg-forest hover:text-white" onClick={() => onChange(index => (index - 1 + projects.length) % projects.length)}>←</button>
          <span className="text-[9px] tracking-[.12em]">{formatIndex(projectIndex)} / {formatIndex(projects.length - 1)}</span>
          <button aria-label="Next image" type="button" className="h-9 w-10 border border-[#8a8f86] transition-colors hover:bg-forest hover:text-white" onClick={() => onChange(index => (index + 1) % projects.length)}>→</button>
        </div>
      </div>
      <small className="block px-2 py-2 text-[8px] tracking-[.12em] text-[#797d76]">CONCEPTUAL INTERIOR STUDY — NOT A COMPLETED COMMISSION</small>
    </ModalShell>
  );
}
