import React from "react";
import { RevealText } from "../components/ui/RevealText";

export const About: React.FC = () => {
  return (
    <section className="w-6xl mx-auto flex flex-col justify-center min-h-[70vh] animate-fade-in">
      <RevealText>
        Tengo más de 4 años de experiencia construyendo interfaces de usuario modernas y optimizando APIs robustas y escalables. Me apasiona estar a la vanguardia de la programación y resolver problemas complejos de extremo a extremo (end-to-end).
      </RevealText>
    </section>
  )
}