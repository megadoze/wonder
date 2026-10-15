import type { ReactNode } from 'react';

export function SectionRule({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="flex justify-between gap-5 border-t border-wonder-line pt-[13px] text-[9px] tracking-[.15em] text-[#777b74] uppercase max-md:text-[8px]">
      <span>{left}</span><span className="text-right">{right}</span>
    </div>
  );
}
