import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-bg-surface py-6 text-center text-sm text-text-secondary">
        <p>© {new Date().getFullYear()} - Diseñado y desarrollado por Andrik Solís</p>
    </footer>
  )
}