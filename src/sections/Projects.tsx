import React from "react";
import { Card } from "../components/ui/Card";
import { HotCard } from "../components/ui/HotCard";

const values = {
  title: 'Vertical Freediving',
  image: '/images/vertical-freediving.png',
}

export const Projects: React.FC = () => {
  return (
    <section className="relative flex flex-col gap-15 min-h-[50vh] py-5">
      {/* <div className="absolute inset-0 -z-10 option-grain">
        <div className="absolute top-[20%] right-[10%] w-150 h-150 bg-purple-600/20 blur-[60px] rounded-full animate-aurora-delayed" />
        <div className="absolute bottom-[-5%] left-[15%] w-100 h-100 bg-teal-500/20 blur-[60px] rounded-full animate-aurora-slow" />
      </div> */}

      <div className="flex items-center grid-cols-2 gap-15">
        <HotCard
          title={values.title}
          image={values.image}
          number={1}
          hot={undefined}
        />
        <HotCard
          title={values.title}
          image={values.image}
          number={1}
          hot={undefined}
        />
      </div>
      <div className="flex items-center grid-cols-2 gap-15">
        <Card
          title={values.title}
          image={values.image}
          number={1}
          hot={undefined}
        />
        <Card
          title={values.title}
          image={values.image}
          number={1}
          hot={undefined}
        />
        <Card
          title={values.title}
          image={values.image}
          number={1}
          hot={undefined}
        />
      </div>
    </section>
  )
}