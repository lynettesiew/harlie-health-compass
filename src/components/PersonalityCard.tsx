
import React from 'react';
import { cn } from '@/lib/utils';

interface PersonalityCardProps {
  title: string;
  description: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

const PersonalityCard: React.FC<PersonalityCardProps> = ({ 
  title, 
  description, 
  isSelected = false,
  onClick,
  className 
}) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-5 rounded-2xl border-2 border-transparent transition-all duration-300 cursor-pointer",
        isSelected ? "border-harlie-rose bg-harlie-cream" : "bg-white hover:border-harlie-blush",
        className
      )}
    >
      <h3 className="text-lg font-medium mb-2 text-harlie-gray">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default PersonalityCard;
