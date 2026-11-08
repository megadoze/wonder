import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-footer px-[4.5%] pt-[53px] pb-[26px] text-[#e6e8df] max-md:px-5 max-md:pt-[41px] max-md:pb-[27px]">
      <div className="flex items-end justify-between gap-6 pb-[81px] max-md:flex-col max-md:items-start max-md:gap-[43px] max-md:pb-[73px]">
        {/* Large WONDER wordmark */}
        <a
          href="#top"
          aria-label={t("brandAria")}
          className="whitespace-nowrap text-[clamp(55px,17.7vw,134px)] leading-[.9] font-semibold tracking-[-.095em] md:text-[13vw] lg:text-[clamp(95px,13.55vw,216px)]"
        >
          WONDER
        </a>

        {/* Studio information */}
        <div className="flex max-w-[320px] flex-col items-end gap-[26px] pb-[5px] text-right text-[9px] leading-[1.6] tracking-[.13em] text-[#cbd0c5] max-lg:text-[8px] max-md:items-start max-md:gap-[22px] max-md:text-left max-md:text-[9px]">
          <span>{t("tagline")}</span>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span>{t("backToTop")}</span>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[15px] w-[15px] shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <path d="M12 19V5" />
              <path d="m6 11 6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom information */}
      <div className="flex justify-between gap-7 border-t border-[#526052] pt-6 text-[9px] leading-[1.65] tracking-[.12em] text-[#adb6aa] max-md:flex-col max-md:gap-3.5 max-md:text-[8px]">
        <span>{t("servicesLine")}</span>

        <div className="flex shrink-0 flex-col items-end gap-3 max-md:items-start">
          <LanguageSwitcher className="text-[#e6e8df]" />

          <span className="whitespace-nowrap text-right max-md:text-left">
            © 2026 WONDER
          </span>
        </div>
      </div>
    </footer>
  );
}
