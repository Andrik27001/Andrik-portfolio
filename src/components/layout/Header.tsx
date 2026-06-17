import React from "react";
import { Hamburger } from "../ui/Hamburger";

export const Header: React.FC = () => {

  return (
    <nav className="flex justify-between w-422.5 mx-auto fixed top-0 left-0 right-0 py-10">
      <span className="text-2xl font-bold">andrik.dev</span>
      <Hamburger />
    </nav>
  )
}