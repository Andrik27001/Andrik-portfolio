import React from 'react';
import { Footer } from './Footer';
import { Hero } from '../../sections/Hero';
import { About } from '../../sections/About';
import { Projects } from '../../sections/Projects';
import { Header } from './Header';
import { Experience } from '../../sections/Experience';
import { TechStack } from '../../sections/TechStack';

export const Layout: React.FC = () => {
  return (
    <div className='relative'>
      <div
        className="absolute inset-0 -z-1"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.12) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div
        className="absolute inset-0 -z-1"
        style={{
          backgroundImage: `
            radial-gradient(circle at 80% 10%, rgba(159, 139, 231, 0.30), transparent 30%)
          `,
        }}
      />
      
      <Header />

      <main className="w-422.5 mx-auto">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
      </main>
      
      <Footer />
    </div>
  );
};