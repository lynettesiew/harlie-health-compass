
import React from 'react';
import FeatureCard from './FeatureCard';
import { Calendar, Heart, MessageSquare, Star, User, Users } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "We help you spot patterns early",
      description: "So you can act before small issues become big ones.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "We track your symptoms, meals, and mood",
      description: "All in one place — so you don't have to.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "We highlight nutrition gaps",
      description: "With gentle nudges to help you stay balanced.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "We log your concerns",
      description: "Then flag them when it matters — so nothing gets overlooked.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "We guide you with smart, personalized questions",
      description: "So you walk into every appointment prepared.",
      icon: <User className="w-6 h-6" />
    },
    {
      title: "We match our tone to your vibe",
      description: "Choose calm, curious, or here-to-push-you support.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-harlie-gray">
            How Harlie Helps You Feel Clear, Confident, and In Control
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
