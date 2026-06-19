import React, { type ReactNode } from "react";

interface BigBadgeProps {
  bold?: ReactNode;
  text: string
}

export const BigBadge: React.FC<BigBadgeProps> = ({ bold, text }) => {
  return (
    <div className="flex items-center gap-3 max-w-max py-4 px-5 backdrop-blur-xs bg-ligh-gray rounded-2xl border border-light-gray shadow-purple">
      <span className='text-5xl font-semibold'>{bold}</span>
      <p className="text-lg font-light">{text}</p>
    </div>
  )
}