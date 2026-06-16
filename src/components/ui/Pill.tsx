import React from "react";

interface PillProps {
  background: string;
  text: string;

}

export const Pill: React.FC<PillProps> = ({ background, text }) => {
  return (
    <div className={`bg-[${background}] p-4 rounded-full`}>
      {text}
    </div>
  )
}
