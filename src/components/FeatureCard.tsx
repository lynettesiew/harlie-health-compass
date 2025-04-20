
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
        "p-8 rounded-3xl bg-white shadow-sm transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="mb-5 text-harlie-rose w-14 h-14 flex items-center justify-center bg-harlie-cream/30 rounded-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-harlie-gray">{title}</h3>
      <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
