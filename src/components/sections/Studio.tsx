/**
 * 01 / THE STUDIO — introductory statement from Edition 04.
 * Positioned between the dark service strip and the dark Interior Studies gallery.
 */
export function Studio() {
  return (
    <section
      aria-labelledby="studio-heading"
      id="studio"
      className="bg-paper-soft px-[4.5%] pt-[75px] pb-[100px] max-md:px-5 max-md:pt-[55px] max-md:pb-[80px]"
    >
      <div className="flex items-center justify-between gap-6 border-b border-wonder-line pb-[21px] text-[9px] leading-[1.5] font-medium tracking-[.145em] text-[#555a54] max-md:text-[8px]">
        <span>01 / THE STUDIO</span>
        <span className="text-right">OUR POINT OF VIEW</span>
      </div>

      <div className="grid grid-cols-[minmax(0,1.55fr)_minmax(0,.95fr)] gap-[4vw] pt-[112px] pb-[25px] max-lg:md:gap-[3vw] max-lg:md:pt-[85px] max-md:grid-cols-1 max-md:gap-[38px] max-md:pt-[72px] max-md:pb-0">
        <h2
          id="studio-heading"
          className="font-editorial text-[clamp(52px,5.55vw,88px)] leading-[1.08] tracking-[-.045em] max-lg:md:text-[clamp(48px,5vw,74px)] max-md:text-[clamp(49px,11vw,70px)]"
        >
          A clear vision.
          <br />
          <em className="font-normal text-[#757c70]">A personal space.</em>
        </h2>

        <div className="min-w-0 max-w-[435px] pt-1 md:pl-[25px]">
          <p className="mb-[25px] text-[24px] leading-[1.34] tracking-[-.03em] max-md:text-[22px]">
            A good interior begins with understanding the people who live in it.
          </p>
          <p className="mb-[18px] text-sm leading-[1.85] text-[#666962]">
            We listen to how you use a room, what matters to you, and how you
            want to feel there. From these essentials, a distinctive design
            direction takes shape.
          </p>
          <p className="mb-[18px] text-sm leading-[1.85] text-[#666962]">
            Our work brings together spatial planning, material choices and
            considered details. Every decision has a purpose — and a place in
            the whole.
          </p>
          <a
            href="#service-details"
            className="group mt-5 inline-flex w-max items-center justify-between gap-8 border-b border-ink pb-2.5 text-xs transition-opacity hover:opacity-75"
          >
            <span>Explore our services</span>

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
          </a>
        </div>
      </div>
    </section>
  );
}
