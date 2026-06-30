import React from "react";
import { Badge } from "./Badge";
interface CardProps {
  image: string;
  title: string;
  number: number;
  hot: boolean | undefined;
  tags: string[];
}

export const Card: React.FC<CardProps> = ({ image, tags }) => {
  return (
    <div className="flex gap-5 items-end min-h-200 p-10 flex-1 rounded-[50px]" style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      {tags.map(tag => {
        return (
          <Badge
            key={tag} 
            text="Next.js"
            variant="white"
          />
        )
      })}
    </div>
  );
};