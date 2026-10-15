"use client";

import Image from "next/image";
import { useExperience } from "@/components/ui/ExperienceProvider";

export function Materials() {
  const { goToService } = useExperience();
  return (
    <section
      aria-labelledby="materials-heading"
      id="materials"
      className="bg-sand px-[4.5%] pt-[68px] pb-[78px] max-md:px-5 max-md:pt-[58px] max-md:pb-[66px]"
    >
      <div className="flex justify-between gap-5 border-t border-wonder-line pt-[13px] text-[9px] tracking-[.15em] text-[#777b74] uppercase">
        <span>MATERIALS &amp; DETAILS</span>
        <span className="text-right">TEXTURE / LIGHT / FORM</span>
      </div>
      <div className="mt-[47px] grid grid-cols-[minmax(290px,.68fr)_minmax(0,1.32fr)] items-stretch gap-[5.2vw] max-lg:md:grid-cols-[minmax(240px,.76fr)_minmax(0,1.24fr)] max-lg:md:gap-[3vw] max-md:mt-[30px] max-md:grid-cols-1 max-md:gap-[34px]">
        <div className="flex flex-col items-start pt-[15px] pb-2.5 max-md:p-0">
          <p className="mb-[30px] text-[9px] tracking-[.15em] text-[#777b74] uppercase max-md:mb-[22px]">
            AN EYE FOR THE DETAILS
          </p>
          <h2
            id="materials-heading"
            className="mb-[42px] font-editorial text-[clamp(62px,5.65vw,94px)] leading-[.88] tracking-[-.052em] max-lg:md:text-[clamp(55px,6vw,73px)] max-md:mb-[26px] max-md:text-[clamp(62px,12.5vw,90px)] max-[360px]:text-[59px]"
          >
            Materials
            <br />
            <em className="font-normal text-[#59655b]">&amp; Details.</em>
          </h2>
          <p className="mb-[18px] max-w-[380px] text-xl leading-[1.35] tracking-[-.022em] max-md:text-[19px]">
            A room is experienced through the details as much as the whole.
          </p>
          <p className="mb-[18px] max-w-[410px] text-sm leading-[1.68] text-[#5f655f]">
            The warmth of timber, the weight of stone, the way light meets a
            surface. We bring furniture, finishes and textures together so every
            choice contributes to a coherent interior.
          </p>
          <button
            type="button"
            onClick={() => goToService(2)}
            className="group mt-3.5 inline-flex min-w-[205px] items-center justify-between gap-10 border-b border-ink bg-transparent py-2.5 text-left text-xs"
          >
            <span>Explore Furniture &amp; Materials</span>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[17px] w-[17px] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </button>
          <div className="mt-auto pt-12 text-[9px] tracking-[.13em] text-[#848980] max-md:pt-6">
            MATERIAL STUDIES / CONCEPT IMAGERY
          </div>
        </div>

        <div
          aria-label="Material and detail studies"
          className="
    grid h-[490px] min-w-0
    grid-cols-[minmax(0,1.36fr)_minmax(0,.82fr)]
    gap-3
    max-lg:md:h-[420px]
    max-md:h-auto
    max-md:grid-cols-1
    max-md:gap-2.5
  "
        >
          {/* LEFT — MAIN IMAGE */}
          <figure
            className="
      group relative m-0 h-full min-h-0 min-w-0
      overflow-hidden bg-[#d4cec1]
      max-md:h-[clamp(280px,66vw,460px)]
    "
          >
            <Image
              alt="Detail of warm bouclé upholstery, natural stone and a sculptural coffee table in soft afternoon light"
              src="/images/materials-stone-and-textiles.webp"
              fill
              sizes="(max-width: 780px) 100vw, 50vw"
              className="object-cover object-[53%_50%] transition-transform duration-700 group-hover:scale-[1.026]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 z-10 flex justify-between gap-4 bg-gradient-to-t from-black/45 to-transparent px-[18px] py-[17px] text-[9px] tracking-[.1em] text-white max-md:px-[13px] max-md:text-[8px] max-[360px]:px-2.5 max-[360px]:text-[7px]">
              <span>01 / TEXTURE &amp; LIGHT</span>
              <span className="text-right text-[8px] opacity-80 max-lg:hidden">
                THE DETAILS THAT DEFINE A SPACE
              </span>
            </figcaption>
          </figure>

          {/* RIGHT — TWO EQUAL ROWS */}
          <div
            className="
      grid h-full min-h-0 min-w-0
      grid-rows-2 gap-3
      max-md:h-[clamp(150px,34vw,225px)]
      max-md:grid-cols-2
      max-md:grid-rows-1
      max-md:gap-2.5
    "
          >
            <figure className="group relative m-0 min-h-0 min-w-0 overflow-hidden bg-[#d4cec1]">
              <Image
                alt="Close detail of textured natural stone crossed by a leafy shadow"
                src="/images/stone-texture.webp"
                fill
                sizes="(max-width: 780px) 50vw, 20vw"
                className="object-cover object-[48%_50%] transition-transform duration-700 group-hover:scale-[1.026]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/45 to-transparent px-[18px] py-[17px] text-[9px] tracking-[.1em] text-white max-md:p-[13px] max-md:text-[8px]">
                02 / STONE &amp; TEXTURE
              </figcaption>
            </figure>

            <figure className="group relative m-0 min-h-0 min-w-0 overflow-hidden bg-[#d4cec1]">
              <Image
                alt="Selection of timber, woven textile and tactile surface samples in natural colours"
                src="/images/material-palette.webp"
                fill
                sizes="(max-width: 780px) 50vw, 20vw"
                className="object-cover object-[50%_45%] transition-transform duration-700 group-hover:scale-[1.026]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/45 to-transparent px-[18px] py-[17px] text-[9px] tracking-[.1em] text-white max-md:p-[13px] max-md:text-[8px]">
                03 / MATERIAL PALETTE
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
