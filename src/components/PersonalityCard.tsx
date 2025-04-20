
import React from 'react';
import { cn } from '@/lib/utils';

interface PersonalityCardProps {
  title: string;
  description: string;
  isSelected?: boolean;
  className?: string;
}

const PersonalityCard: React.FC<PersonalityCardProps> = ({ 
  title, 
  description, 
  isSelected = false,
  className 
}) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-2xl border transition-all duration-300",
        isSelected 
          ? "bg-harlie-cream border-harlie-rose" 
          : "bg-white border-gray-100 hover:border-harlie-neutral hover:shadow-sm",
        "flex flex-col gap-2",
        className
      )}
    >
      <h3 className="text-lg font-medium text-harlie-gray">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default PersonalityCard;
