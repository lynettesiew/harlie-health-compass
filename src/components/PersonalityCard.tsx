
import React from 'react';
import { cn } from '@/lib/utils';

interface PersonalityCardProps {
  title: string;
  description: string;
  isSelected?: boolean;
  className?: string;
  onClick?: () => void;
}

const PersonalityCard: React.FC<PersonalityCardProps> = ({ 
  title, 
  description, 
  isSelected = false,
  className,
  onClick
}) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-3xl transition-all duration-300 cursor-pointer",
        isSelected 
          ? "bg-harlie-cream border-2 border-harlie-rose" 
          : "bg-white border border-gray-100 hover:border-harlie-neutral hover:shadow-sm",
        "flex flex-col gap-2",
        className
      )}
      onClick={onClick}
    >
      <h3 className="text-lg font-medium text-harlie-gray">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default PersonalityCard;
