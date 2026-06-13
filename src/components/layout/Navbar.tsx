import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-100 border-b border-surface bg-main/20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-accent text-lg tracking-wider">andrik.dev</span>
          <nav className="flex gap-6 text-sm font-medium text-secondary">
            <a href="#about" className="hover:text-accent transition-colors">Sobre mí</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experiencia</a>
            <a href="#skills" className="hover:text-accent transition-colors">Habilidades</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contacto</a>
          </nav>
        </div>
      </header>
  )
}