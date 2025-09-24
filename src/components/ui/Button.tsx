import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  className?: string;
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string })
);

const sizeClass = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  size = 'md',
  as = 'button',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-block rounded-lg font-bold transition bg-[#37B7C4] text-white hover:bg-[#2596a6] focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:ring-offset-2';
  const classes = `${base} ${sizeClass[size]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
} 