import React from "react";
import { ExperienceRow } from "../components/ui/ExperienceRow";

export const Experience: React.FC = () => {
  return (
    <section className="relative flex items-start gap-60 min-h-[50vh] py-5 mb-50">
      <h2 className="text-[80px] font-semibold sticky top-50 w-[25%]">Experience</h2>
      <div className="grid grid-cols-1 flex-1 border-t-2">
        <ExperienceRow
          title="Software Engineer"
          company="Forterro"
          startDate="2020"
          endDate="2023"
          description="Developed and maintained web applications using React and Node.js."
        />
        <ExperienceRow
          title="Software Engineer"
          company="Forterro"
          startDate="2020"
          endDate="2023"
          description="Developed and maintained web applications using React and Node.js."
        />
        <ExperienceRow
          title="Software Engineer"
          company="Forterro"
          startDate="2020"
          endDate="2023"
          description="Developed and maintained web applications using React and Node.js."
        />
        <ExperienceRow
          title="Software Engineer"
          company="Forterro"
          startDate="2020"
          endDate="2023"
          description="Developed and maintained web applications using React and Node.js."
        />
      </div>
    </section>
  );
};
