'use client';

import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';

import Link from 'next/link';

type RippleSharedProps = {
  children: ReactNode;
  className?: string;
  bgClassName?: string;
  contentClassName?: string;
};

function setRippleOrigin(
  event: MouseEvent<HTMLElement>,
  fallbackToCenter = false,
) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = fallbackToCenter ? rect.width / 2 : event.clientX - rect.left;
  const y = fallbackToCenter ? rect.height / 2 : event.clientY - rect.top;

  target.style.setProperty('--ripple-x', `${x}px`);
  target.style.setProperty('--ripple-y', `${y}px`);
}

function RippleSurface({
  children,
  bgClassName = 'bg-lp-text',
  contentClassName = '',
}: RippleSharedProps) {
  return (
    <>
      <span
        aria-hidden='true'
        className={`pointer-events-none absolute top-[var(--ripple-y,50%)] left-[var(--ripple-x,50%)] z-0 aspect-square min-h-[225%] min-w-[225%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-100 group-focus-visible:scale-100 ${bgClassName}`}
      />
      <span
        className={`relative z-10 flex items-center justify-center gap-4 transition-colors duration-300 ${contentClassName}`}
      >
        {children}
      </span>
      <style jsx>{`
        .cta-ripple-root {
          --ripple-x: 50%;
          --ripple-y: 50%;
        }
      `}</style>
    </>
  );
}

export function RippleLink({
  href,
  children,
  className = '',
  bgClassName,
  contentClassName,
}: RippleSharedProps & { href: string }) {
  return (
    <Link
      href={href}
      onMouseEnter={(event) => setRippleOrigin(event)}
      onMouseLeave={(event) => setRippleOrigin(event)}
      onFocus={(event) => {
        const syntheticEvent = event as unknown as MouseEvent<HTMLElement>;
        setRippleOrigin(syntheticEvent, true);
      }}
      className={`cta-ripple-root group relative isolate overflow-hidden ${className}`}
    >
      <RippleSurface
        bgClassName={bgClassName}
        contentClassName={contentClassName}
      >
        {children}
      </RippleSurface>
    </Link>
  );
}

export function RippleButton({
  children,
  className = '',
  bgClassName,
  contentClassName,
  type = 'button',
  ...props
}: RippleSharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      onMouseEnter={(event) => setRippleOrigin(event)}
      onMouseLeave={(event) => setRippleOrigin(event)}
      onFocus={(event) => {
        const syntheticEvent = event as unknown as MouseEvent<HTMLElement>;
        setRippleOrigin(syntheticEvent, true);
      }}
      className={`cta-ripple-root group relative isolate overflow-hidden ${className}`}
      {...props}
    >
      <RippleSurface
        bgClassName={bgClassName}
        contentClassName={contentClassName}
      >
        {children}
      </RippleSurface>
    </button>
  );
}
