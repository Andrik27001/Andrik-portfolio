import React from "react";

interface HotCardProps {
  image: string;
  title: string;
  number: number;
  hot: boolean | undefined;
}

export const HotCard: React.FC<HotCardProps> = ({ image, title, number, hot }) => {
  return (
    <div className={`${hot ? 'bg-accent' : 'bg-main/20'} w-full border border-[#acacac2a] rounded-2xl p-3 backdrop-blur-md`}>
      
      <div 
        className="h-64 bg-cover bg-center rounded-xl mb-3 min-h-100"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="flex justify-between items-center p-2">
        <h3 className="text-3xl font-medium">{title}</h3>
        <span className={`${hot ? 'text-white' : 'text-accent'} text-3xl font-medium`}>
          /{number.toString().padStart(2, '0')} {/* Esto transforma el 1 en '01' para un look más tech */}
        </span>
      </div>

    </div>
  );
};