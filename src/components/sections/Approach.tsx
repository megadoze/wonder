
import { formatIndex, processSteps } from '@/data/content';
import { SectionRule } from '@/components/ui/SectionRule';

export function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="bg-mist px-[4.5%] py-[85px] max-md:px-5 max-md:py-16"
    >
      <SectionRule
        left="04 / OUR APPROACH"
        right="FROM BRIEF TO DESIGN"
      />

      <div className="grid grid-cols-[.75fr_1.25fr] gap-[7vw] pt-[62px] max-lg:grid-cols-1 max-md:pt-[45px]">

        {/* Introduction */}
        <div>
          <h2
            id="approach-heading"
            className="mb-8 font-editorial text-[clamp(55px,5.1vw,86px)] leading-[.95] tracking-[-.035em] max-md:text-[clamp(52px,13vw,72px)]"
          >
            How an idea
            <br />
            <em className="font-normal text-[#5d675f]">
              takes shape.
            </em>
          </h2>

          <p className="max-w-[420px] text-[15px] leading-[1.75] text-[#626760]">
            A considered process, from understanding the
            space and defining its direction to developing
            the details that bring the design together.
          </p>
        </div>

        {/* Design process */}
        <div className="grid grid-cols-2 border-t border-l border-wonder-line max-md:grid-cols-1">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
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
                {step.title}
              </h3>

              <p className="mt-auto max-w-[270px] pt-1 text-[13px] leading-[1.65] text-[#626760]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
