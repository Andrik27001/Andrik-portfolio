// import React, { useEffect, useRef, useState } from 'react';

// interface RevealTextProps {
//   children: string;
// }

// export const RevealText: React.FC<RevealTextProps> = ({ children }) => {
//   const containerRef = useRef<HTMLParagraphElement>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Calculamos cuándo empieza y termina el efecto óptico en el centro de la pantalla
//       const startEval = windowHeight * 0.8; // Empieza a encenderse al entrar por abajo
//       const endEval = windowHeight * 0.3;   // Termina de encenderse al llegar arriba

//       // Mapeamos la posición del elemento a un rango entre 0 y 1
//       const progress = (startEval - rect.top) / (startEval - endEval);
      
//       // Clampeamos el valor para que no baje de 0 ni suba de 1
//       const clampedProgress = Math.max(0, Math.min(1, progress));
//       setScrollProgress(clampedProgress);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll(); // Ejecución inicial para setear el estado base

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // 1. Rompemos el texto en palabras
//   const words = children.split(' ');

//   // Contador global para saber el índice absoluto de cada letra en todo el párrafo
//   let globalCharIndex = 0;

//   return (
//     <p ref={containerRef} className="text-3xl leading-relaxed text-center">
//       {words.map((word, wordIndex) => {
//         // 2. Rompemos cada palabra en caracteres individuales
//         const chars = word.split('');

//         return (
//           <span key={wordIndex} className="word">
//             {chars.map((char) => {
//               const currentCharIndex = globalCharIndex;
//               globalCharIndex++; // Incrementamos para la siguiente letra

//               // Calculamos si a este carácter concreto ya le toca encenderse
//               const totalChars = children.replace(/\s/g, '').length; 
//               const charThreshold = currentCharIndex / totalChars;
              
//               // Si el progreso general de la sección supera el umbral de la letra, se ilumina (1), si no (0)
//               const isLetterActive = scrollProgress > charThreshold ? 1 : 0;

//               return (
//                 <span
//                   key={currentCharIndex}
//                   className="char text-text-primary"
//                   style={{
//                     // Le pasamos la variable personalizada de CSS directamente al nodo del DOM
//                     '--char-progress': isLetterActive,
//                   } as React.CSSProperties}
//                 >
//                   {char}
//                 </span>
//               );
//             })}
//           </span>
//         );
//       })}
//     </p>
//   );
// };