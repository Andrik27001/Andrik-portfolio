import React from 'react';
import { heroContent } from '../data/cvData';
import { Badge } from '../components/ui/Badge';
import { Viewer } from '../components/3d/Viewer';

export const Hero: React.FC = () => {
  const { greeting, name, role, mainSkills} = heroContent;

  return (
    <section id="about" className="mx-auto flex flex-col justify-end h-[95vh]">
      <div className="w-[300px] h-[300px] absolute -z-1 top-20 right-50">
        <Viewer 
          url="/models/react-logo.glb" 
          speed={1}
        />
      </div>
      <div className="w-[300px] h-[300px] absolute -z-1 top-50 right-120">
        <Viewer 
          url="/models/javascript-logo.glb"
          speed={1}
        />
      </div>
      <p className='text-3xl w-[400px] leading-[2.5rem]'>{role}</p>
      <div className='flex flex-col gap-15'>
        <h1 className='text-[300px] leading-[240px] lowercase font-semibold select-none'>{name}</h1>
        <div className='flex justify-between'>
          <div className='flex gap-3 flex-wrap max-w-[50%]'>
            {mainSkills.map(skill => {
              return (
                <Badge  
                text={skill}
                />
              )
            })}
          </div>
          <p className='text-2xl'>Scroll for more</p>
        </div>
      </div>
    </section>
  );
};