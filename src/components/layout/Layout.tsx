import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Hero } from '../../sections/Hero';
import { About } from '../../sections/About';
import { Projects } from '../../sections/Projects';

export const Layout: React.FC = () => {
  return (
    <div>
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
            #000000
          `,
        }}
      />
      {/* <div className="absolute inset-0 -z-10 option-grain">
        <div className="absolute top-[-15%] right-[10%] w-125 h-125 bg-pink-600/15 blur-[60px] rounded-full animate-aurora-slow" />
        <div className="absolute top-[20%] left-[15%] w-140 h-140 bg-purple-600/20 blur-[60px] rounded-full animate-aurora-delayed" />
        <div className="absolute bottom-[-5%] right-[-10%] w-125 h-125 bg-teal-500/20 blur-[60px] rounded-full animate-aurora-slow" />
      </div> */}

      <Navbar />

      <main className="max-w-400 mx-auto px-4">
        <Hero />
        <About />
        <Projects />
      </main>

      <Footer />
    </div>
  );
};