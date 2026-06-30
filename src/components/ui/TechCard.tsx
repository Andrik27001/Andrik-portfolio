import React from "react";

interface TechCardProps {
  logo: string;
  title: string;
}

export const TechCard: React.FC<TechCardProps> = ({ logo, title }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white gap-3 rounded-2xl py-10 px-15">
      <img src={logo} alt={title} className="w-full h-22.5 object-contain" />
      <h3 className="text-[22px] font-bold">{title}</h3>
    </div>
  )
}