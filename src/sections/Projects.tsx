import React from "react";
import { Card } from "../components/ui/Card";

const values = {
  title: 'Vertical Freediving',
  image: '/images/mockup1.webp',
}

export const Projects: React.FC = () => {

  const tags = ["UI/UX", "React"];


  return (
    <section className="relative flex items-start gap-60 min-h-[50vh] py-5 mb-50">
      <h2 className="text-[80px] font-semibold sticky top-50 w-[25%]">Projects</h2>
      <div className="grid grid-cols-1 flex-1 gap-10">
      <Card
        title={values.title}
        image={values.image}
        number={1}
        hot={undefined}
        tags={tags}
        />
      <Card
        title={values.title}
        image={values.image}
        number={1}
        hot={undefined}
        tags={tags}
        />
      </div>
    </section>
  )
}