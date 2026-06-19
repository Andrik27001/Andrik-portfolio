import React, { useEffect, useRef, useState } from "react";

interface RevealTextProps {
  children: string;
}

export const RevealText: React.FC<RevealTextProps> = ({ children }) => {
  const currentRef = useRef<HTMLParagraphElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!currentRef.current) return

      const windowHeight = window.innerHeight;
      const elementPosition = currentRef.current.getBoundingClientRect();

      const startEval = windowHeight * 0.8; // 784
      const endEval = windowHeight * 0.3; // 294
      const progress = (startEval - elementPosition.top) / (startEval - endEval); // 494
      
      const clampedProgress = Math.max(0, Math.min(1, progress));
      setScrollProgress(clampedProgress);
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const words = children.split(' ')
  let globalCharIndex = 0;

  return (
    <p ref={currentRef} className="text-4xl justify-center leading-relaxed flex flex-wrap gap-x-2">
      {words.map((word, wordIndex) => {
        
        const chars = word.split('');

          return (
            <span key={wordIndex} className="word">
              {chars.map((char, charIndex) => {
                const currentCharIndex = globalCharIndex;
                globalCharIndex++;

                // Calculamos si a este carácter concreto ya le toca encenderse
                const totalChars = children.replace(/\s/g, '').length; 
                const charThreshold = currentCharIndex / totalChars;
                
                // Si el progreso general de la sección supera el umbral de la letra, se ilumina (1), si no (0)
                const isLetterActive = scrollProgress > charThreshold ? 1 : 0;

                return (
                  <span 
                    key={charIndex}
                    className="char"
                    style={{
                      '--char-progress': isLetterActive,
                    } as React.CSSProperties}>
                      {char}
                  </span>
                )
              })}
            </span>
          )
      })}
    </p>
  )
}