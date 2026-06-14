import React from 'react';
import { heroContent } from '../data/cvData';
import { Badge } from '../components/ui/Badge';

export const Hero: React.FC = () => {
  const { greeting, name, role, mainSkills} = heroContent;

  return (
    <section id="about" className="w-6xl mx-auto flex flex-col justify-end min-h-[50vh] animate-fade-in">

      {/* <div className='text-center'>
        <span className='text-[140px] font-funnel font-semibold leading-tight'>Andrik </span>
        <span className='text-[140px] font-funnel font-semibold leading-tight'>✦ </span>
        <span className='text-[140px] font-funnel font-semibold bg-blue-600/40 rounded-[40px] px-10'>Solís</span> 
      </div>
      <div className='text-center'>
        <span className='text-[140px] font-funnel font-semibold bg-purple-600/40 rounded-[40px] px-10'>Full-stack</span> 
        <span className='text-[140px] font-funnel font-semibold leading-tight'> engineer</span>
      </div> */}
      
      <span className="text-accent font-mono text-md mb-3 tracking-widest block uppercase">
        {greeting}
      </span>

      <h1 className="text-7xl font-semibold mb-2 tracking-tight text-primary">
        {name}
      </h1>

      <h2 className="text-4xl md:text-4xl font-semibold mb-6 text-secondary">
        {role}
      </h2>

      <div className="flex flex-wrap gap-2">
        {mainSkills.map((skill) => (
          <Badge key={skill} text={skill} />
        ))}
      </div>
    </section>
  );
};