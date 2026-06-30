import React from "react";

interface ExperienceRowProps {
  title?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export const ExperienceRow: React.FC<ExperienceRowProps> = ({ title, company, startDate, endDate, description }) => {
  return (
    <div className="flex justify-between py-15 border-b-2">
      <div className="">
        <h3 className="text-[44px] font-semibold">{title}</h3>
        <p className="text-[18px] leading-tight mb-7">At {company} company</p>
        <p className="text-[22px]">{description}</p>
      </div>
      <p className="text-[22px] font-semibold">{startDate} - {endDate}</p>
    </div>
  );
};