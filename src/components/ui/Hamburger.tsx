import React from "react";

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ open, onClick }) => {
  return (
      <button 
        onClick={onClick}
        className={`${open ? 'bg-bone' : 'bg-primary'} relative w-14 h-14 p-3 flex flex-col justify-center items-center gap-1.5 cursor-pointer rounded-full z-10`}>
        <span className={`w-full h-0.5 ${open ? 'bg-primary rotate-45 translate-y-2' : 'bg-bone'} transition-all`}></span>
        <span className={`w-full h-0.5 ${open ? '' : 'bg-bone'} transition-all`}></span>
        <span className={`w-full h-0.5 ${open ? 'bg-primary -rotate-45 -translate-y-2' : 'bg-bone'} transition-all`}></span>
      </button>
  )
}