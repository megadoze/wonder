"use client";

import { useExperience } from "@/components/ui/ExperienceProvider";

/** 05 / START A CONVERSATION — Edition 04 layout with our original pill CTA. */
export function Contact() {
  const { openContact } = useExperience();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#30362f] px-[4.5%] pt-[75px] pb-[48px] text-[#f6f5ed] max-md:px-5 max-md:pt-[62px] max-md:pb-9"
    >
      <div className="flex items-center justify-between gap-6 border-b border-[#626760] pb-[21px] text-[9px] leading-[1.55] font-medium tracking-[.145em] text-[#c0c3bb] max-md:text-[8px]">
        <span>05 / START A CONVERSATION</span>
        <span className="text-right">WONDER / INTERIOR DESIGN</span>
      </div>

      <div className="grid grid-cols-[minmax(0,1.65fr)_minmax(290px,.85fr)] items-end gap-[5vw] pt-[115px] pb-[130px] max-lg:md:gap-[4vw] max-md:grid-cols-1 max-md:gap-12 max-md:pt-[86px] max-md:pb-[94px]">
        <h2
          id="contact-heading"
          className="font-editorial text-[clamp(65px,7vw,117px)] leading-[1.02] tracking-[-.052em] max-lg:md:text-[clamp(60px,6.8vw,105px)] max-md:text-[clamp(54px,11.3vw,79px)]"
        >
          Let’s begin
          <br />
          <em className="font-normal text-[#c2c9bb]">with your space.</em>
        </h2>
        <div className="max-w-[370px] pb-1">
          <p className="mb-10 max-w-[340px] text-[16px] leading-[1.6] text-[#d0d3c9] max-md:mb-7 max-md:text-[15px]">
            Whether you have a clear brief or just the beginnings of an idea,
            tell us what you are planning and where you need design support.
          </p>
          <button
            type="button"
            onClick={openContact}
            className="group inline-flex min-w-[220px] items-center justify-between gap-10 rounded-full border border-paper-soft bg-paper-soft px-[25px] py-[17px] text-[13px] text-ink transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span>Start a conversation</span>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[19px] w-[19px] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-between gap-5 border-t border-[#646960] pt-[25px] text-[9px] leading-[1.55] tracking-[.14em] text-[#c4c8bf] max-md:text-[8px]">
        <span>PERSONAL BY DESIGN.</span>
        <span className="text-right">INTERIORS FOR EVERYDAY LIFE.</span>
      </div>
    </section>
  );
}
