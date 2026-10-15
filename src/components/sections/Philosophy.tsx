import Image from "next/image";

export function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      id="philosophy"
      className="grid min-h-[660px] grid-cols-[49%_51%] bg-philosophy text-[#252824] max-md:grid-cols-1 max-md:min-h-0"
    >
      {/* Editorial image */}
      <div className="relative min-h-[660px] overflow-hidden max-md:h-[clamp(340px,61vw,505px)] max-md:min-h-0">
        <Image
          alt="Sunlit dining room with sculptural leather chairs, a large paper lantern and abstract artwork"
          src="/images/philosophy-dining.webp"
          fill
          sizes="(max-width: 780px) 100vw, 49vw"
          className="object-cover object-center"
        />
      </div>

      {/* Philosophy content */}
      <div className="flex min-w-0 flex-col justify-between px-[clamp(35px,5vw,85px)] pt-[66px] pb-[43px] max-lg:md:px-[38px] max-lg:md:pt-[52px] max-lg:md:pb-[35px] max-md:min-h-[560px] max-md:px-5 max-md:pt-[50px] max-md:pb-[30px]">
        <p className="text-[9px] leading-[1.6] font-medium tracking-[.14em] text-[#676e64]">
          05 / PHILOSOPHY
        </p>

        <div className="py-[45px] max-md:py-[36px]">
          <h2
            id="philosophy-heading"
            className="mb-[30px] font-editorial text-[clamp(56px,5.7vw,90px)] leading-[.97] tracking-[-.042em] max-lg:md:text-[clamp(52px,6vw,78px)] max-md:text-[clamp(55px,11vw,80px)] max-[390px]:text-[clamp(52px,12vw,68px)]"
          >
            Thoughtful by
            <br />
            <em className="font-normal text-[#667263]">design.</em>
          </h2>

          {/* Lead statement */}
          <p className="mb-5 max-w-[435px] text-[19px] leading-[1.5] tracking-[-.01em] text-[#252a24] max-md:text-[18px]">
            An interior can be beautiful at first glance and still have more to
            reveal. A change in light, an unexpected pairing, a detail
            discovered over time — these are the moments that give a space
            depth.
          </p>

          {/* Philosophy statement */}
          <p className="max-w-[435px] text-sm leading-[1.8] text-[#50574f]">
            For WONDER, curiosity is not about adding more. It is about seeing
            more: finding the possibilities already present in a room and
            bringing them into focus with clarity and restraint.
          </p>
        </div>

        {/* Bottom signature */}
        <div className="flex items-center justify-between gap-5 border-t border-[#b5b8ad] pt-[21px] text-[9px] leading-[1.6] tracking-[.14em] text-[#676e64]">
          <span>CURIOSITY / DETAIL / DISCOVERY</span>

          <a
            href="#service-details"
            aria-label="Explore the four WONDER services"
            className="group grid h-[38px] w-[38px] shrink-0 place-items-center text-[#526052]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[21px] w-[21px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
            >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
