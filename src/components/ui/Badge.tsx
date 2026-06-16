import React from 'react'

interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="inline-flex items-center h-8 px-4 rounded-full text-md text-accent select-none border hover:bg-accent/20 transition-colors duration-200">
      {text}
    </span>
  )
}