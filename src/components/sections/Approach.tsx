import { useTranslations } from "next-intl";
import { formatIndex } from "@/data/content";
import { SectionRule } from "@/components/ui/SectionRule";

const steps = ["discover", "define", "develop", "refine"] as const;

export function Approach() {
  const t = useTranslations("Approach");

  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="bg-mist px-[4.5%] py-[85px] max-md:px-5 max-md:py-16"
    >
      <SectionRule left={t("sectionLabel")} right={t("sectionRight")} />

      <div className="grid grid-cols-[.75fr_1.25fr] gap-[7vw] pt-[62px] max-lg:grid-cols-1 max-md:pt-[45px]">
        <div>
          <h2
            id="approach-heading"
            className="mb-8 font-editorial text-[clamp(55px,5.1vw,86px)] leading-[.95] tracking-[-.035em] max-md:text-[clamp(52px,13vw,72px)]"
          >
            {t("headingLine1")}
            <br />
            <em className="font-normal text-[#5d675f]">{t("headingLine2")}</em>
          </h2>

          <p className="max-w-[420px] text-[15px] leading-[1.75] text-[#626760]">
            {t("intro")}
          </p>
        </div>

        <div className="grid grid-cols-2 border-t border-l border-wonder-line max-md:grid-cols-1">
          {steps.map((step, index) => (
            <article
              key={step}
              className="group flex min-h-[205px] flex-col border-r border-b border-wonder-line px-7 pt-7 pb-8 transition-colors duration-300 hover:bg-white/30 max-md:min-h-0 max-md:py-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[.14em] text-[#7a7e78]">
                  {formatIndex(index)}
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-7 bg-[#b5b9af] transition-[width] duration-300 group-hover:w-11 motion-reduce:transition-none"
                />
              </div>

              <h3 className="mt-8 mb-3 font-editorial text-[32px] font-normal tracking-[-.025em] max-md:mt-6">
                {t(`steps.${step}.title`)}
              </h3>

              <p className="mt-auto max-w-[270px] pt-1 text-[13px] leading-[1.65] text-[#626760]">
                {t(`steps.${step}.body`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
