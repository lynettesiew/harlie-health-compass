
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
        "p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="mb-4 text-harlie-rose w-12 h-12 flex items-center justify-center bg-harlie-cream rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-harlie-gray">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
