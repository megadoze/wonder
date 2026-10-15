'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { services } from '@/data/content';
import { ModalShell } from './ModalShell';

export function ContactDialog({ onClose }: { onClose: () => void }) {
  const [feedback, setFeedback] = useState('');
  const [fallbackText, setFallbackText] = useState('');
  const fallbackRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (fallbackText) {
      fallbackRef.current?.focus();
      fallbackRef.current?.select();
    }
  }, [fallbackText]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const brief = `WONDER — PROJECT ENQUIRY\n\nName: ${values.get('name')}\nEmail: ${values.get('email')}\nService: ${values.get('service')}\n\nAbout the space:\n${values.get('project')}`;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(brief);
      setFallbackText('');
      setFeedback('Enquiry copied. Nothing has been sent — paste it into your email when ready.');
    } catch {
      setFallbackText(brief);
      setFeedback('Your enquiry is ready below. Select and copy it; nothing has been sent.');
    }
  }

  return (
    <ModalShell labelledBy="contact-dialog-heading" onClose={onClose} className="w-[min(620px,92vw)] p-[52px] max-md:p-[24px]">
      <button data-modal-close type="button" aria-label="Close contact form" onClick={onClose} className="absolute top-4 right-4 z-10 bg-paper-soft px-3 py-2.5 text-[9px] tracking-[.1em] transition-colors hover:bg-forest hover:text-white">CLOSE ✕</button>
      <p className="mb-[18px] text-[9px] tracking-[.15em] text-[#777b74] uppercase">WONDER / PROJECT ENQUIRY</p>
      <h2 id="contact-dialog-heading" className="mb-6 font-editorial text-[clamp(44px,8vw,60px)] leading-[.9] tracking-[-.035em]">Tell us about<br /><em className="font-normal text-[#5e695f]">your space.</em></h2>
      <p className="text-xs leading-[1.6] text-[#73776f]">Prototype enquiry form — nothing is sent from this page. It prepares a concise project brief for you to copy.</p>
      <form onSubmit={submit} className="mt-7 grid gap-4">
        <label className="block text-[9px] tracking-[.1em] text-[#6d716a] uppercase">Your name<input autoComplete="name" name="name" required type="text" placeholder="Name" className="mt-2 block w-full rounded-none border-0 border-b border-[#9da198] bg-transparent px-0 py-2.5 text-sm normal-case tracking-normal text-ink outline-offset-2" /></label>
        <label className="block text-[9px] tracking-[.1em] text-[#6d716a] uppercase">Email address<input autoComplete="email" name="email" required type="email" placeholder="Email" className="mt-2 block w-full rounded-none border-0 border-b border-[#9da198] bg-transparent px-0 py-2.5 text-sm normal-case tracking-normal text-ink outline-offset-2" /></label>
        <label className="block text-[9px] tracking-[.1em] text-[#6d716a] uppercase">How can we help?<select name="service" defaultValue="Interior Design" className="mt-2 block w-full rounded-none border-0 border-b border-[#9da198] bg-transparent px-0 py-2.5 text-sm normal-case tracking-normal text-ink">{services.map(service => <option key={service.title} value={service.title}>{service.title}</option>)}</select></label>
        <label className="block text-[9px] tracking-[.1em] text-[#6d716a] uppercase">About your space<textarea name="project" required rows={4} placeholder="Tell us about the space, what you want to change and where you are in the process…" className="mt-2 block w-full resize-y rounded-none border-0 border-b border-[#9da198] bg-transparent px-0 py-2.5 text-sm normal-case tracking-normal text-ink" /></label>
        <button type="submit" className="mt-2 flex w-fit min-w-[146px] justify-between gap-6 rounded-full border border-forest bg-forest px-5 py-3 text-sm text-white transition-colors hover:bg-[#2a382f]">Copy enquiry text <span>↗</span></button>
        <p aria-live="polite" role="status" className="min-h-[18px] text-[11px] text-[#5f655d]">{feedback}</p>
        {fallbackText && <textarea ref={fallbackRef} aria-label="Prepared enquiry text to copy" rows={7} value={fallbackText} readOnly onFocus={event => event.currentTarget.select()} className="w-full border border-[#aaa] bg-paper-soft p-3 text-xs" />}
      </form>
    </ModalShell>
  );
}
