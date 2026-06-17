import React from 'react';
import { heroContent } from '../data/cvData';
import { Badge } from '../components/ui/Badge';
// import { Viewer } from '../components/3d/Viewer';

export const Hero: React.FC = () => {
  const { name, role, mainSkills} = heroContent;

  return (
    <section id="about" className="mx-auto flex flex-col justify-end h-[96vh]">
      <div className='flex flex-col gap-15'>

        <img src="/images/net-logo.webp" alt="" className='absolute top-40 right-160 w-60 -ml-10'/>
        <img src="/images/react-logo.png" alt="" className='absolute top-80 right-100 w-60 -ml-10'/>

        <div className='flex justify-between'>
          <div className='flex flex-col'>
          <p className='text-3xl w-100 font-light leading-tight'>{role}</p>
            {/* <div className='flex'>
              <img src="/images/net-logo.webp" alt="" className='w-60 -ml-10'/>
              <img src="/images/react-logo.png" alt="" className='w-60 -ml-10'/>
            </div> */}
          </div>
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