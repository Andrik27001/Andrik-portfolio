import React from "react";
import { TechCard } from "../components/ui/TechCard";

export const TechStack: React.FC = () => {
  return (
    <section className="relative flex items-start gap-60 min-h-[50vh] py-5 mb-50">
      <h2 className="text-[80px] text-nowrap font-semibold sticky top-50 w-[25%]">Tech Stack</h2>
      <div className="flex gap-10 flex-wrap">
        <TechCard logo="/public/images/TechLogos/html.png" title="HTML" />
        <TechCard logo="/public/images/TechLogos/html.png" title="React" />
        <TechCard logo="/public/images/TechLogos/html.png" title="React" />
        <TechCard logo="/public/images/TechLogos/html.png" title="React" />
        <TechCard logo="/public/images/TechLogos/html.png" title="React" />
      </div>
    </section>
  )
}
