import React from 'react';

interface Props {
  text: string;
  primary: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export default function Button({ text, primary, iconLeft, iconRight }: Props) {

  const className = primary
    ? `text-white/90 
    bg-neutral-900
    hover:bg-neutral-800 
    active:bg-neutral-950 
    
    dark:bg-blue-700/50 
    dark:hover:bg-blue-600/50 
    dark:active:bg-blue-800/50`

    : `border border-neutral-200 
    bg-white/50 
    hover:bg-neutral-100/50 
    active:bg-white/50
    
    dark:text-white/80
    dark:border-slate-600
    dark:bg-slate-800/50 
    dark:hover:bg-slate-600/50 
    dark:active:bg-slate-800/50`;

  return (
    <button 
      className={`flex justify-center items-center min-w-fit h-11 gap-2.5 px-8 rounded-md transition-all duration-200 ${className}`}>
      {iconLeft}
      {text}
      {iconRight}
    </button>
  );
}
