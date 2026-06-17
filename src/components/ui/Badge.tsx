import React from 'react'

interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="backdrop-blur-md inline-flex items-center h-8 px-4 rounded-full text-md text-primary select-none border hover:bg-accent/40 transition-colors duration-200">
      {text}
    </span>
  )
}