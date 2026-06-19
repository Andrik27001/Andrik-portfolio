import React, { useState } from "react";
import { Hamburger } from "../ui/Hamburger";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center w-422.5 mx-auto fixed top-0 left-0 right-0 py-10 z-10">
        <span className={`${open ? "text-bone" : "text-primary"} text-2xl font-semibold select-none`}>
          andrik
          <span className="text-primary text-2xl font-semibold pr-2 py-1 bg-accent rounded-full rounded-bl-none">.dev</span>
        </span>
        <Hamburger open={open} onClick={() => setOpen(!open)}/>

      </nav>
      <div
        className={`
          absolute top-0 left-0 w-screen h-screen bg-primary z-0
          transition-all duration-300 linear
          ${open ? "opacity-100 " : "opacity-0  pointer-events-none"}
        `}
      >
      </div>
    </>
  )
}