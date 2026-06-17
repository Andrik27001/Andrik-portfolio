import React, { useState } from "react";

export const Hamburger: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <button 
      onClick={() => {
        setOpen(!open)
      }} 
      className="w-14 h-14 p-3 flex flex-col justify-center items-center gap-1.5 cursor-pointer bg-primary rounded-full">
      <span className={`w-full h-0.5 bg-main ${open ? 'rotate-45 translate-y-2' : ''} transition-all`}></span>
      <span className={`w-full h-0.5 bg-main ${open ? 'opacity-0' : ''} transition-all`}></span>
      <span className={`w-full h-0.5 bg-main ${open ? '-rotate-45 -translate-y-2' : ''} transition-all`}></span>
    </button>
  )
}