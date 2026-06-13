import React from 'react'

interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-bg-surface text-accent border border-bg-surface hover:border-accent/30 transition-colors duration-200">
      {text}
    </span>
  )
}