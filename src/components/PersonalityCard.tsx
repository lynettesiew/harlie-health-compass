
import React from 'react';
import { cn } from '@/lib/utils';

interface PersonalityCardProps {
  emoji: string;
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

const PersonalityCard: React.FC<PersonalityCardProps> = ({ 
  emoji,
  title, 
  description, 
  className,
  onClick
}) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-3xl transition-all duration-300 cursor-pointer",
        "bg-white/80 backdrop-blur border border-harlie-neutral/20",
        "hover:shadow-lg hover:translate-y-[-2px]",
        "flex flex-col items-center gap-3 text-center",
        className
      )}
      onClick={onClick}
    >
      <span className="text-4xl mb-2" role="img" aria-label={`${title} personality`}>
        {emoji}
      </span>
      <h3 className="text-xl font-semibold text-harlie-gray">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default PersonalityCard;
