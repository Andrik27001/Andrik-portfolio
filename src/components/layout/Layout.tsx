import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Hero } from '../../sections/Hero';
import { About } from '../../sections/About';

export const Layout: React.FC = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 option-grain">
        <div className="absolute top-[-15%] right-[10%] w-125 h-125 bg-pink-600/15 blur-[60px] animate-aurora-slow" />
        <div className="absolute top-[20%] left-[15%] w-140 h-140 bg-purple-600/20 blur-[60px] animate-aurora-delayed" />
        <div className="absolute bottom-[-5%] right-[-10%] w-125 h-125 bg-teal-500/20 blur-[60px] animate-aurora-slow" />
      </div>

      <Navbar />

      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
      </main>

      <Footer />
    </div>
  );
};