import React from 'react';
import { heroContent } from '../data/cvData';
import { Badge } from '../components/ui/Badge';
import { Viewer } from '../components/3d/Viewer';
import { BigBadge } from '../components/ui/BigBadge';

export const Hero: React.FC = () => {
  const { name, role, mainSkills} = heroContent;

  return (
    <section id="about" className="mx-auto flex flex-col justify-between h-[96vh]">

      {/* <img src="/images/net-logo.webp" alt="" className='absolute top-40 right-160 w-60 -ml-10 animate-float-bounce'/>
      <img src="/images/react-logo.png" alt="" className='absolute top-80 right-100 w-60 -ml-10 animate-float-bounce'/>
      <img src="/images/relational-db.png" alt="" className='absolute top-100 right-200 w-60 -ml-10 animate-float-bounce'/> */}

      <div className='flex flex-col gap-8 w-300 mt-40'>
        <p className='text-3xl w-100 font-light leading-tight'>{role}</p>
        <div className='flex gap-3 flex-wrap max-w-[50%]'>
          {mainSkills.map(skill => {
            return (
              <Badge  
              text={skill}
              />
            )
          })}
        </div>
      </div>

      

      <div className="w-180 h-180 absolute -z-1 top-10 right-30">
        <Viewer 
          url="/models/react-logo.glb" 
          speed={1}
          horizontal={1}
          vertical={0}
          deep={4}
        />

        <div className='absolute z-1 top-40 right-30'>
          <BigBadge 
            bold="5+"
            text="Years of experience"
          />
        </div>

        <div className='absolute z-1 top-90 left-10'>
          <BigBadge 
            bold="20+"
            text="Websites built"
          />
        </div>

        <div className='absolute z-1 bottom-40 right-10'>
          <BigBadge 
            bold="+"
            text="Ready for hiring"
          />
        </div>
      </div>
        
      <h1 className='text-[310px] leading-60 lowercase font-semibold select-none'>{name}</h1>
    </section>
  );
};