"use client";

import Image from "next/image";
import { SectionRule } from "@/components/ui/SectionRule";
import { useExperience } from "@/components/ui/ExperienceProvider";
import { formatIndex, services } from "@/data/content";

export function ServiceDetails() {
  const { expandedService, toggleService } = useExperience();
  return (
    <section
      id="service-details"
      className="bg-paper px-[4.5%] pt-[72px] pb-[85px] max-md:px-5 max-md:py-16"
    >
      <SectionRule left="06 / WHAT WE DO" right="FOUR FOCUSED SERVICES" />
      <div className="grid grid-cols-[.8fr_1.2fr] gap-[8vw] pt-[66px] max-lg:md:grid-cols-[1fr_1.25fr] max-md:grid-cols-1 max-md:pt-12">
        <div>
          <h2 className="mb-[26px] font-editorial text-[clamp(53px,5vw,82px)] leading-[.92] tracking-[-.035em] max-md:text-[clamp(50px,13vw,70px)]">
            Four ways to work
            <br />
            <em className="font-normal text-[#5d675f]">with WONDER.</em>
          </h2>

          <p className="max-w-[390px] text-sm leading-[1.7] text-[#626760]">
            From complete interior concepts to focused design consultations,
            each service offers a considered approach to a different stage of
            your project.
          </p>

          <div className="relative mt-[45px] h-[185px] w-[70%] max-md:h-[170px] max-md:w-[62%]">
            <Image
              alt="Curated material and textile samples"
              src="/images/material-palette.webp"
              fill
              sizes="(max-width: 780px) 65vw, 30vw"
              className="object-cover saturate-[.82]"
            />
          </div>
        </div>
        <div className="border-t border-[#bfc1b9]">
          {services.map((service, index) => (
            <details
              key={service.title}
              open={expandedService === index}
              className="group border-b border-[#bfc1b9] open:bg-white/[.18]"
            >
              <summary
                data-service-summary={index}
                aria-expanded={expandedService === index}
                className="grid cursor-pointer grid-cols-[42px_1fr_30px] items-center gap-3 px-0 py-[25px]"
                onClick={(event) => {
                  event.preventDefault();
                  toggleService(index);
                }}
              >
                <span className="text-[10px] text-[#777b74]">
                  {formatIndex(index)}
                </span>
                <b className="font-editorial text-[32px] font-normal tracking-[-.02em] max-md:text-[27px]">
                  {service.title}
                </b>
                <span
                  aria-hidden="true"
                  className="grid h-[30px] w-[30px] shrink-0 place-items-center"
                >
                  <span className="relative block h-[18px] w-[18px] origin-center rotate-0 transition-transform duration-300 ease-in-out group-open:rotate-45 motion-reduce:transition-none">
                    <span className="absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                    <span className="absolute top-1/2 left-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                  </span>
                </span>
              </summary>
              <div className="max-w-[680px] pb-[30px]">
                <p className="max-w-[530px] text-[13px] leading-[1.65] text-[#5f645d]">
                  {service.description}
                </p>
                <ul className="mt-[17px] flex list-none flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="border border-[#c5c7bf] px-2.5 py-2 text-[10px] text-[#60645e]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
