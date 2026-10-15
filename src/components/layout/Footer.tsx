export function Footer() {
  return (
    <footer className="bg-footer px-[4.5%] pt-[53px] pb-[26px] text-[#e6e8df] max-md:px-5 max-md:pt-[41px] max-md:pb-[27px]">
      <div className="flex items-end justify-between gap-6 pb-[81px] max-md:flex-col max-md:items-start max-md:gap-[43px] max-md:pb-[73px]">
        <a
          href="#top"
          aria-label="WONDER — back to top"
          className="whitespace-nowrap text-[clamp(55px,17.7vw,134px)] leading-[.9] font-semibold tracking-[-.095em] md:text-[13vw] lg:text-[clamp(95px,13.55vw,216px)]"
        >
          WONDER
        </a>
        <div className="flex flex-col items-end gap-[26px] pb-[5px] text-right text-[9px] leading-[1.6] tracking-[.13em] whitespace-nowrap text-[#cbd0c5] max-lg:text-[8px] max-md:items-start max-md:gap-[22px] max-md:text-left max-md:text-[9px]">
          <span>CONTEMPORARY INTERIOR DESIGN STUDIO</span>
          <a href="#top" className="hover:underline hover:underline-offset-4">
            BACK TO TOP ↑
          </a>
        </div>
      </div>
      <div className="flex justify-between gap-7 border-t border-[#526052] pt-6 text-[9px] leading-[1.65] tracking-[.12em] text-[#adb6aa] max-md:flex-col max-md:gap-3.5 max-md:text-[8px]">
        <span>
          INTERIOR DESIGN · SPACE PLANNING · FURNITURE &amp; MATERIALS · DESIGN
          SUPPORT
        </span>
        <span className="text-right whitespace-nowrap max-md:text-left">
          © 2026 WONDER
        </span>
      </div>
    </footer>
  );
}
