import React from "react";
import { Card } from "../components/ui/Card";

const values = {
  title: 'Vertical Freediving',
  image: '/images/VerticalFreediving.png',
}

export const Projects: React.FC = () => {
  return (
    <section className="flex items-center grid-cols-3 gap-7 min-h-[50vh] animate-fade-in">
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
    </section>
  )
}