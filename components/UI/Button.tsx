
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98] rounded-md font-display";

  const variants = {
    primary: "bg-brand-black text-white hover:bg-black shadow-sm dark:bg-zinc-50 dark:text-brand-black dark:hover:bg-white",
    secondary: "bg-white text-brand-black border border-zinc-200 hover:bg-zinc-50 shadow-sm",
    outline: "bg-transparent text-brand-grey border border-zinc-200 hover:border-zinc-400 hover:text-brand-black",
    ghost: "bg-transparent text-brand-grey hover:text-brand-black hover:bg-zinc-50"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-5 text-base"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
