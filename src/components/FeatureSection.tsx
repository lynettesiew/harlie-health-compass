
import React from 'react';
import FeatureCard from './FeatureCard';
import { Eye, Activity, Apple, Flag, HelpCircle, Smile } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "We help you spot patterns early",
      description: "So you can take action before small issues become big ones.",
      icon: <Eye className="w-7 h-7" />
    },
    {
      title: "We track your symptoms, meals, and mood",
      description: "All in one place — so you don't have to. That's peace of mind.",
      icon: <Activity className="w-7 h-7" />
    },
    {
      title: "We highlight nutrition gaps",
      description: "And offer gentle nudges to help you stay balanced.",
      icon: <Apple className="w-7 h-7" />
    },
    {
      title: "We log your concerns",
      description: "Then flag them when they matter — so nothing gets lost in the doctor's office.",
      icon: <Flag className="w-7 h-7" />
    },
    {
      title: "We guide you with smart, personalized questions",
      description: "So you walk in prepared — not guessing what to ask.",
      icon: <HelpCircle className="w-7 h-7" />
    },
    {
      title: "We match our tone to your vibe",
      description: "Want chill? Curious? A push to stay on track? You choose how Harlie shows up.",
      icon: <Smile className="w-7 h-7" />
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-gray-50/50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-harlie-gray">
            What Harlie Helps You Do
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
