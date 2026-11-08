
import { useTranslations } from "next-intl";

export function Studio() {
  const t = useTranslations("Studio");

  return (
    <section
      aria-labelledby="studio-heading"
      id="studio"
      className="bg-paper-soft px-[4.5%] pt-[75px] pb-[82px] max-md:px-5 max-md:pt-[55px] max-md:pb-[72px]"
    >
      <div className="flex items-center justify-between gap-6 border-b border-wonder-line pb-[21px] text-[9px] leading-[1.5] font-medium tracking-[.145em] text-[#555a54] max-md:text-[8px]">
        <span>{t("sectionLabel")}</span>
        <span className="text-right">
          {t("sectionRight")}
        </span>
      </div>

      <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-[4.6vw] pt-[88px] max-lg:md:pt-[72px] max-md:grid-cols-1 max-md:gap-[34px] max-md:pt-[64px]">
        <div className="min-w-0">
          <h2
            id="studio-heading"
            className="font-editorial text-[clamp(52px,5.55vw,88px)] leading-[1.05] tracking-[-.045em] max-lg:md:text-[clamp(48px,5vw,74px)] max-md:text-[clamp(49px,11vw,70px)]"
          >
            {t("headingLine1")}
            <br />
            <em className="font-normal text-[#757c70]">
              {t("headingLine2")}
            </em>
          </h2>

          <p className="mt-9 max-w-[410px] text-[16px] leading-[1.65] tracking-[-.01em] text-[#5f655d] max-md:text-[15px]">
            {t("lead")}
          </p>
        </div>

        <div className="min-w-0 border-l border-wonder-line pl-8 max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-7">
          <p className="mb-[18px] text-sm leading-[1.9] text-[#666962]">
            {t("paragraph1")}
          </p>

          <p className="mb-[18px] text-sm leading-[1.9] text-[#666962]">
            {t("paragraph2")}
          </p>

          <a
            href="#service-details"
            className="group mt-6 inline-flex w-max items-center justify-between gap-8 border-b border-ink pb-2.5 text-xs transition-opacity hover:opacity-75"
          >
            <span>{t("servicesLink")}</span>

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
