import React from 'react';
import { Footer } from './Footer';
import { Hero } from '../../sections/Hero';
import { About } from '../../sections/About';
import { Projects } from '../../sections/Projects';
import { Header } from './Header';

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
            radial-gradient(circle at 30% 70%, rgba(81, 43, 212, 0.1), transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(97, 220, 251, 0.31), transparent 60%)
          `,
        }}
      />
      
      <Header />

      <main className="w-422.5 mx-auto">
        <Hero />
        <About />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};