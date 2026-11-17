import { useTranslations } from "next-intl";

const offers = [
  {
    id: "designConsultation",
    price: 150,
  },
  {
    id: "spacePlanning",
    price: 350,
  },
  {
    id: "roomConcept",
    price: 650,
  },
  {
    id: "fullDesign",
    price: null,
  },
] as const;

export function Pricing() {
  const t = useTranslations("Pricing");

  const whatsappNumber = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""
  ).replace(/\D/g, "");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-paper px-[4.5%] pt-[78px] pb-[100px] max-md:px-5 max-md:pt-[60px] max-md:pb-[76px]"
    >
      {/* Section rule */}
      <div className="flex justify-between gap-5 border-b border-wonder-line pb-[21px] text-[9px] tracking-[.15em] text-[#777b74] uppercase">
        <span>{t("sectionLabel")}</span>
        <span className="text-right">{t("sectionRight")}</span>
      </div>

      {/* Introduction */}
      <div className="mt-[56px] grid grid-cols-2 items-end gap-10 max-md:mt-[38px] max-md:grid-cols-1 max-md:gap-6">
        <h2
          id="pricing-heading"
          className="font-editorial text-[clamp(58px,6vw,100px)] leading-[.92] tracking-[-.052em] max-md:text-[clamp(53px,11vw,82px)]"
        >
          {t("headingLine1")}
          <br />
          <em className="font-normal text-[#687368]">{t("headingLine2")}</em>
        </h2>

        <p className="max-w-[460px] pb-2 text-base leading-[1.7] text-[#626861] max-md:pb-0">
          {t("intro")}
        </p>
      </div>

      {/* Pricing cards */}
      <div className="mt-[64px] grid grid-cols-2 gap-3 max-md:mt-[44px] max-md:grid-cols-1">
        {offers.map((offer, index) => {
          const title = t(`offers.${offer.id}.title`);

          const message = t("whatsappMessage", {
            service: title,
          });

          const whatsappUrl = whatsappNumber
            ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
            : "#contact";

          return (
            <article
              key={offer.id}
              className="flex min-h-[290px] flex-col border border-[#d0cec5] bg-paper-soft p-[30px] max-md:min-h-[265px] max-md:p-6"
            >
              <div className="flex items-center justify-between gap-4 text-[14px] tracking-[.14em] text-[#777b74] uppercase">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {/* <span>WONDER</span> */}
              </div>

              <h3 className="mt-9 font-editorial text-[clamp(30px,3vw,44px)] leading-[1.1] tracking-[-.035em] max-md:text-[35px]">
                {title}
              </h3>

              <p className="mt-4 max-w-[430px] text-sm leading-[1.7] text-[#626861]">
                {t(`offers.${offer.id}.description`)}
              </p>

              <div className="mt-auto flex items-end justify-between gap-4 pt-9">
                <div className="text-[23px] leading-[1.2] tracking-[-.025em] text-ink">
                  {offer.price === null ? (
                    <span>{t("customQuote")}</span>
                  ) : (
                    <span>
                      <span className="mr-1 text-sm text-[#72776f]">
                        {t("from")}
                      </span>
                      €{offer.price}
                    </span>
                  )}
                </div>

                <a
                  href={whatsappUrl}
                  target={whatsappNumber ? "_blank" : undefined}
                  rel={whatsappNumber ? "noopener noreferrer" : undefined}
                  aria-label={t("contactAria", {
                    service: title,
                  })}
                  className="group inline-flex shrink-0 items-center gap-2 border-b border-ink pb-1 text-sm transition-colors hover:text-[#657466]"
                >
                  <span>
                    {whatsappNumber ? t("whatsappLink") : t("contactLink")}
                  </span>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[16px] w-[16px] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-7 max-w-[700px] text-xs leading-[1.7] text-[#777b74]">
        {t("priceNote")}
      </p>
    </section>
  );
}
