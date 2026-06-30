import React from 'react'

interface BadgeProps {
  text: string;
  variant: 'white' | 'black';
}

export const Badge: React.FC<BadgeProps> = ({ text, variant }) => {
  return (
    <span className={`${variant == 'white' ? 'bg-bone' : "text-primary border border-primary"} backdrop-blur-md inline-flex items-center h-8 px-4 rounded-full text-md select-none`}>
      {text}
    </span>
  )
}