"use client";

import { services, formatIndex } from "@/data/content";
import { useExperience } from "@/components/ui/ExperienceProvider";

export function ServiceStrip() {
  const { goToService } = useExperience();

  return (
    <section
      aria-label="WONDER services"
      id="services"
      className="grid grid-cols-4 bg-forest px-[3.2%] pt-[29px] pb-[31px] text-[#f4f1e9] max-lg:md:grid-cols-2 max-md:grid-cols-1 max-md:px-5 max-md:py-3"
    >
      {services.map((service, index) => (
        <button
          type="button"
          key={service.title}
          onClick={() => goToService(index)}
          className={`
            group relative grid min-h-[94px]
            grid-cols-[34px_1fr_34px]
            items-start gap-3
            border-r border-white/25
            bg-transparent
            pt-[6px] pr-7 pb-[5px] pl-3.5
            text-left
            transition-colors duration-300
            hover:bg-white/[.035]
            max-lg:md:py-[22px]
            max-md:min-h-0
            max-md:border-r-0
            max-md:border-b
            max-md:border-white/20
            max-md:px-0 max-md:py-[21px]
            ${index % 2 === 1 ? "max-lg:md:border-r-0" : ""}
            ${index < 2 ? "max-lg:md:border-b max-lg:md:border-white/25" : ""}
            ${index === 3 ? "max-md:border-b-0" : ""}
          `}
        >
          <span className="pt-[7px] text-[10px] opacity-75">
            {formatIndex(index)}
          </span>

          <span>
            <b className="block font-editorial text-[25px] leading-[1.1] font-normal max-[360px]:text-[22px]">
              {service.title}
            </b>

            <small className="mt-2.5 block max-w-[220px] text-xs leading-[1.45] text-[#c9cfc9] max-md:max-w-none">
              {service.short}
            </small>
          </span>

          {/* SVG arrow without circle */}
          <span
            aria-hidden="true"
            className="mt-auto grid h-8 w-8 shrink-0 place-items-center self-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px] motion-reduce:transition-none"
            >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </span>
        </button>
      ))}
    </section>
  );
}
