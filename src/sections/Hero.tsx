import React from 'react';
import { heroContent } from '../data/cvData';
import { Badge } from '../components/ui/Badge';
import { Viewer } from '../components/3d/Viewer';

export const Hero: React.FC = () => {
  const { greeting, name, role, mainSkills} = heroContent;

  return (
    <section id="about" className="mx-auto flex flex-col justify-end h-[96vh]">
      <div className="w-180 h-180 absolute -z-1 top-12 right-30">
        <Viewer 
          url="/models/react-logo.glb" 
          speed={1}
          horizontal={1}
          vertical={0}
          deep={4}
        />
      </div>
      
      <div className='flex flex-col gap-15'>
        <div className='flex justify-between'>
          <p className='text-[26px] w-100 font-semibold leading-tight'>{role}</p>
          <div className='grid grid-cols-1 place-items-end align-middle gap-3 flex-wrap max-w-[50%]'>
            {mainSkills.map(skill => {
              return (
                <Badge  
                text={skill}
                />
              )
            })}
          </div>
        </div>
        <h1 className='text-[310px] leading-60 lowercase font-semibold select-none'>{name}</h1>
      </div>
    </section>
  );
};