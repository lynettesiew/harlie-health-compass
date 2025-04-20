
import React from 'react';
import FeatureCard from './FeatureCard';
import { Calendar, Heart, MessageSquare, Star, User } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "Log Everything That Matters",
      description: "Track symptoms, nutrition, mood, and notes all in one place.",
      icon: <Calendar className="w-7 h-7" />
    },
    {
      title: "Spot Early Patterns",
      description: "Identify trends that others might miss before they become bigger issues.",
      icon: <Star className="w-7 h-7" />
    },
    {
      title: "Prepare Doctor Summaries",
      description: "Walk into every appointment with clear, organized information.",
      icon: <MessageSquare className="w-7 h-7" />
    },
    {
      title: "Track Concerns Over Time",
      description: "Flag and monitor symptoms to understand your patterns.",
      icon: <Heart className="w-7 h-7" />
    },
    {
      title: "Personalized Support",
      description: "Get guidance that matches your style and needs.",
      icon: <User className="w-7 h-7" />
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
