
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  className,
  style 
}) => {
  return (
    <div 
      className={cn(
        "p-12 rounded-3xl bg-white shadow-sm transition-all duration-300 flex flex-col items-center text-center min-h-[320px]",
        className
      )}
      style={style}
    >
      <div className="mb-6 w-16 h-16 flex items-center justify-center bg-harlie-blush rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-harlie-gray">{title}</h3>
      <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
