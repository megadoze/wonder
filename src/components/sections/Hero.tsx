import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      aria-label={t("ariaLabel")}
      className="grid min-h-[720px] grid-cols-[37%_63%] bg-paper-soft min-[1920px]:min-h-[clamp(820px,40vw,1100px)] max-lg:md:grid-cols-[38%_62%] max-md:grid-cols-1"
    >
      <div className="flex min-w-0 flex-col pt-[108px] pr-[7.2%] pb-7 pl-[14%] max-lg:md:pr-[7%] max-lg:md:pl-[9%] max-md:min-h-0 max-md:px-5 max-md:pt-[80px] max-md:pb-[64px]">
        <h1 className="pt-5 max-w-[560px] font-editorial text-[clamp(74px,7.2vw,128px)] leading-[.78] tracking-[-.052em] max-lg:md:text-[clamp(70px,8.2vw,105px)] max-md:text-[clamp(70px,18.8vw,102px)] max-[360px]:text-[65px]">
          {t("line1")}
          <br />
          <em className="font-normal text-[#5d675f]">{t("line2")}</em>
          <br />
          {t("line3")}
        </h1>

        <p className="mt-10 mb-6 max-w-[360px] text-lg leading-[1.45] tracking-[-.012em] max-md:mt-9 max-md:max-w-[330px] max-md:text-base">
          {t("description")}
        </p>

        <div className="flex flex-wrap gap-3 max-[360px]:gap-2">
          <a
            href="#contact"
            className="group inline-flex min-w-[146px] items-center justify-between gap-6 rounded-full border border-forest bg-forest px-[21px] py-[13px] text-sm text-white transition-colors hover:bg-[#2a382f] max-[360px]:min-w-0 max-[360px]:gap-4 max-[360px]:px-4"
          >
            <span>{t("startProject")}</span>
            <span
              aria-hidden="true"
              className="grid shrink-0 place-items-center"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-[17px] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
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
          </a>

          <a
            href="#approach"
            className="group inline-flex min-w-[146px] items-center justify-between gap-6 rounded-full border border-ink bg-transparent px-[21px] py-[13px] text-sm transition-colors hover:bg-white max-[360px]:min-w-0 max-[360px]:gap-4 max-[360px]:px-4"
          >
            <span>{t("ourApproach")}</span>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-[17px] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
      <div className="relative min-h-[720px] overflow-hidden min-[1920px]:min-h-[clamp(820px,40vw,1100px)] max-md:h-[55vh] max-md:min-h-[430px]">
        <Image
          alt={t("imageAlt")}
          src="/images/coastal-interior.webp"
          fill
          priority
          sizes="(max-width: 780px) 100vw, 67vw"
          className="object-cover object-[52%_50%]"
        />
        <div className="absolute right-[4.5%] bottom-[27px] min-[1200px]:bottom-[160px] flex gap-[26px] text-[9px] tracking-[.15em] text-white uppercase [text-shadow:0_1px_18px_rgba(0,0,0,.35)] max-md:right-5 max-md:left-5 max-md:justify-between">
          <span>{t("conceptStudy")}</span>
          <span>{t("imageMood")}</span>
        </div>
      </div>
    </section>
  );
}
