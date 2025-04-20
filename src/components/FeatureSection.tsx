
import React from 'react';
import FeatureCard from './FeatureCard';
import { Calendar, Heart, MessageSquare, Star, User, Users } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "Spot patterns early",
      description: "We help you identify trends so you can act before small issues become big ones.",
      icon: <Star className="w-7 h-7" />
    },
    {
      title: "Track everything in one place",
      description: "We track your symptoms, meals, and mood all in one place — so you don't have to.",
      icon: <Calendar className="w-7 h-7" />
    },
    {
      title: "Highlight nutrition gaps",
      description: "With gentle nudges, we help you stay balanced.",
      icon: <Heart className="w-7 h-7" />
    },
    {
      title: "Log your concerns",
      description: "We flag concerns when it matters, so nothing gets overlooked",
      icon: <MessageSquare className="w-7 h-7" />
    },
    {
      title: "Smart, personalized guidance",
      description: "We guide you to ask the right questions so you walk into every appointment, prepared.",
      icon: <User className="w-7 h-7" />
    },
    {
      title: "Adapt to your preferences",
      description: "Choose calm, curious, or goal-oriented support that matches your personal style.",
      icon: <Users className="w-7 h-7" />
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-gray-50/50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-harlie-gray">
            How Harlie Helps You Feel Clear, Confident, and In Control
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
