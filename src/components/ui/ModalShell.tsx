'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { MouseEvent, ReactNode } from 'react';

type ModalShellProps = {
  children: ReactNode;
  onClose: () => void;
  labelledBy?: string;
  label?: string;
  className?: string;
};

/** React-managed modal with a portal, keyboard focus trap and backdrop dismissal.
 * No dependence on HTMLDialogElement.showModal() or browser-specific styles. */
export function ModalShell({ children, onClose, labelledBy, label, className = '' }: ModalShellProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('[data-modal-close]')?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const selectors = 'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
      const elements = [...(panelRef.current?.querySelectorAll<HTMLElement>(selectors) ?? [])]
        .filter(element => element.getClientRects().length > 0);
      if (!elements.length) { event.preventDefault(); return; }
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
      previous?.focus({ preventScroll: true });
    };
  }, [onClose]);

  function onBackdropClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) onClose();
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-[#0c110e]/80 p-3 backdrop-blur-[3px] max-md:p-2"
      onMouseDown={onBackdropClick}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-label={label}
        tabIndex={-1}
        className={`relative max-h-[92dvh] overflow-y-auto bg-[#e9e8e2] text-ink shadow-[0_35px_100px_rgba(0,0,0,.35)] ${className}`}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
