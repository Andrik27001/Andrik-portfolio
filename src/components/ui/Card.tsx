import React from "react";

interface CardProps {
  image: string;
  title: string;
  number: number;
  hot: boolean | undefined;
}

export const Card: React.FC<CardProps> = ({ image, title, number, hot }) => {
  return (
    <div className={`${hot ? 'bg-accent' : 'bg-bg-surface'} w-full border border-secondary rounded-2xl p-3`}>
      
      <div 
        className="h-64 bg-cover bg-center rounded-xl mb-3"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <span className={`${hot ? 'text-white' : 'text-accent'} text-lg font-bold`}>
          /{number.toString().padStart(2, '0')} {/* Esto transforma el 1 en '01' para un look más tech */}
        </span>
      </div>

    </div>
  );
};