import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-main text-text-primary">
      <Navbar />

      <main className="grow max-w-5xl w-full mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};