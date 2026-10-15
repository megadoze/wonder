'use client';

import Image from 'next/image';
import { useExperience } from '@/components/ui/ExperienceProvider';
import { formatIndex, projects } from '@/data/content';

export function InteriorStudies() {
  const { openProject } = useExperience();
  return (
    <section aria-labelledby="studies-heading" id="work" className="bg-editorial px-[4.5%] pt-[72px] pb-[91px] text-[#f1f1ea] max-md:px-5 max-md:pt-[58px] max-md:pb-[75px]">
      <div className="flex items-center justify-between gap-6 border-b border-[#e0e4d9]/30 pb-[21px] text-[9px] leading-[1.5] font-medium tracking-[.14em] text-[#c0c4ba] max-md:text-[8px]"><span>02 / INTERIOR STUDIES</span><span className="text-right">A STUDY IN SPACE, LIGHT &amp; MATERIAL</span></div>
      <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(235px,.5fr)] items-end gap-[5vw] pt-[85px] pb-[65px] max-lg:md:grid-cols-[1fr_.7fr] max-lg:md:gap-[35px] max-md:grid-cols-1 max-md:gap-[27px] max-md:pt-[56px] max-md:pb-[42px]">
        <h2 id="studies-heading" className="font-editorial text-[clamp(50px,5.1vw,83px)] leading-[.99] tracking-[-.045em] max-lg:md:text-[clamp(49px,5.8vw,72px)] max-md:text-[clamp(49px,10.1vw,76px)] max-[390px]:text-[clamp(45px,10.6vw,57px)]">Different moods.<br /><em className="font-normal text-[#c6c9be]">One point of view.</em></h2>
        <p className="mb-[5px] max-w-[310px] text-sm leading-[1.75] text-[#c5c9c0] max-md:max-w-[450px] max-md:text-[13px]">One point of view does not mean one look. We shape colour, material and atmosphere around the person, the place and the way the space should feel.</p>
      </div>
      <div className="grid grid-cols-1 items-start gap-y-[42px] md:grid-cols-[minmax(0,1.16fr)_minmax(0,.84fr)] md:gap-x-5 md:gap-y-[45px] lg:gap-x-7 lg:gap-y-16">
        {projects.map((project, index) => (
          <figure key={project.title} className={`${index === 0 ? 'md:col-start-1 md:row-start-1' : index === 1 ? 'md:col-start-2 md:row-start-1 md:mt-[105px] lg:mt-[135px]' : 'md:col-span-2 md:row-start-2 md:mr-[7%] md:w-[65%] md:justify-self-end'} min-w-0`}>
            <button type="button" aria-label={`View ${project.title} interior study`} onClick={() => openProject(index)} className={`group relative block w-full overflow-hidden bg-[#414840] ${index === 0 ? 'md:h-[clamp(350px,43vw,590px)]' : index === 1 ? 'md:h-[clamp(300px,33vw,450px)]' : 'md:h-[clamp(350px,34vw,460px)]'} h-[clamp(280px,69vw,475px)]`}>
              <Image alt={project.alt} src={project.src} fill sizes={index === 2 ? '(max-width: 780px) 100vw, 65vw' : '(max-width: 780px) 100vw, 55vw'} className={`object-cover transition-[scale,filter] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.026] group-hover:saturate-[1.04] motion-reduce:transition-none ${index === 1 ? 'object-[50%_55%]' : 'object-center'}`} />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-[22px] pt-[30px] pb-[22px] text-right text-[9px] tracking-[.14em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">VIEW IMAGE ↗</span>
            </button>
            <figcaption className="mt-[17px] flex items-center justify-between gap-4 text-[9px] leading-[1.6] font-medium tracking-[.12em] text-[#d0d2c9] max-md:mt-[13px] max-md:text-[8px]"><span>{formatIndex(index)} / {project.title.toUpperCase()}</span><span className="text-right text-[#aeb5aa]">{project.descriptor}</span></figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-[66px] max-w-[620px] text-[9px] leading-[1.65] tracking-[.12em] text-[#abb1aa] max-md:mt-[50px] max-md:text-[8px]">INTERIOR STUDIES — CONCEPTUAL IMAGERY CREATED FOR THE WONDER WEBSITE. NOT COMPLETED CLIENT PROJECTS.</p>
    </section>
  );
}
