import { formatIndex, processSteps } from '@/data/content';
import { SectionRule } from '@/components/ui/SectionRule';

export function Approach() {
  return (
    <section id="approach" className="bg-mist px-[4.5%] py-[85px] max-md:px-5 max-md:py-16">
      <SectionRule left="04 / OUR APPROACH" right="PERSONAL BY DESIGN" />
      <div className="grid grid-cols-[.75fr_1.25fr] gap-[7vw] pt-[62px] max-lg:grid-cols-1 max-md:pt-[45px]">
        <div>
          <h2 className="mb-7 font-editorial text-[clamp(55px,5.1vw,86px)] leading-[.92] tracking-[-.035em] max-md:text-[clamp(52px,13vw,72px)]">A process built<br /><em className="font-normal text-[#5d675f]">around you.</em></h2>
          <p className="max-w-[430px] text-[15px] leading-[1.6] text-[#626760]">We start with the person, not a style. Function, atmosphere and material choices are developed together so the result feels natural rather than imposed.</p>
        </div>
        <div className="grid grid-cols-2 border-t border-l border-wonder-line max-md:grid-cols-1">
          {processSteps.map((step, index) => (
            <article key={step.title} className="min-h-[180px] border-r border-b border-wonder-line px-7 pt-[26px] pb-[30px] transition-colors hover:bg-white/25 max-md:min-h-0">
              <span className="text-[9px] tracking-[.12em] text-[#7a7e78]">{formatIndex(index)}</span>
              <h3 className="mt-6 mb-[9px] font-editorial text-[31px] font-normal">{step.title}</h3>
              <p className="max-w-[250px] text-xs leading-[1.55] text-[#626760]">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
