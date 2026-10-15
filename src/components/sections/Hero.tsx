"use client";

import Image from "next/image";
import { useExperience } from "@/components/ui/ExperienceProvider";

export function Hero() {
  const { openContact } = useExperience();
  return (
    <section
      aria-label="WONDER introduction"
      className="grid min-h-[720px] grid-cols-[34%_66%] bg-paper-soft max-lg:md:grid-cols-[38%_62%] max-md:grid-cols-1"
    >
      <div className="flex min-w-0 flex-col pt-[108px] pr-[7.2%] pb-7 pl-[14%] max-lg:md:pr-[7%] max-lg:md:pl-[9%] max-md:min-h-[610px] max-md:px-5 max-md:pt-[100px] max-md:pb-6">
        {/* <p className="mt-[3px] mb-10 text-[9px] tracking-[.15em] text-[#666b64] uppercase max-md:mb-[45px]">INTERIOR DESIGN / PERSONAL BY DESIGN</p> */}
        <h1 className="pt-5 max-w-[560px] font-editorial text-[clamp(74px,7.2vw,128px)] leading-[.78] tracking-[-.052em] max-lg:md:text-[clamp(70px,8.2vw,105px)] max-md:text-[clamp(70px,18.8vw,102px)] max-[360px]:text-[65px]">
          Spaces
          <br />
          <em className="font-normal text-[#5d675f]">that feel</em>
          <br />
          like you.
        </h1>
        <p className="mt-10 mb-6 max-w-[360px] text-lg leading-[1.45] tracking-[-.012em] max-md:mt-9 max-md:max-w-[330px] max-md:text-base">
          Thoughtful interiors with character — shaped around the way you live.
        </p>
        <div className="flex flex-wrap gap-3 max-[360px]:gap-2">
          <button
            type="button"
            onClick={openContact}
            className="group inline-flex min-w-[146px] items-center justify-between gap-6 rounded-full border border-forest bg-forest px-[21px] py-[13px] text-sm text-white transition-colors hover:bg-[#2a382f] max-[360px]:min-w-0 max-[360px]:gap-4 max-[360px]:px-4"
          >
            <span>Start a project</span>
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-full border border-current"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-[17px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </span>
          </button>
          <a
            href="#approach"
            className="group inline-flex min-w-[146px] items-center justify-between gap-6 rounded-full border border-ink bg-transparent px-[21px] py-[13px] text-sm transition-colors hover:bg-white max-[360px]:min-w-0 max-[360px]:gap-4 max-[360px]:px-4"
          >
            <span>Our approach</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
        <div className="mt-auto flex justify-between gap-5 pt-[55px] text-[9px] tracking-[.15em] text-[#777b74] uppercase">
          <span>WONDER / INTERIOR DESIGN</span>
          <span>01 — 04</span>
        </div>
      </div>
      <div className="relative min-h-[720px] overflow-hidden max-md:h-[55vh] max-md:min-h-[430px]">
        <Image
          alt="Contemporary living room with sculptural furniture, warm stone, dark wood and a wide landscape view"
          src="/images/coastal-interior.webp"
          fill
          priority
          sizes="(max-width: 780px) 100vw, 67vw"
          className="object-cover object-[52%_50%]"
        />
        <div className="absolute right-[4.5%] bottom-[27px] flex gap-[26px] text-[9px] tracking-[.15em] text-white uppercase [text-shadow:0_1px_18px_rgba(0,0,0,.35)] max-md:right-5 max-md:left-5 max-md:justify-between">
          <span>CONCEPT STUDY</span>
          <span>COASTAL / WARM MODERN</span>
        </div>
      </div>
    </section>
  );
}
