
import React from 'react';
import FeatureCard from './FeatureCard';
import { Calendar, FileText, Bell, BarChart2, Users } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "Log symptoms, meals, moods, and notes",
      description: "Track everything that matters to your health in one secure place.",
      icon: <Calendar className="w-7 h-7" />
    },
    {
      title: "Catch patterns before they're missed",
      description: "Identify trends early so you can act before small issues become big ones.",
      icon: <BarChart2 className="w-7 h-7" />
    },
    {
      title: "Flag concerns and follow changes",
      description: "Mark what's important and track how it evolves over time.",
      icon: <Bell className="w-7 h-7" />
    },
    {
      title: "Export summaries for your doctor",
      description: "Bring organized, clear information to every appointment.",
      icon: <FileText className="w-7 h-7" />
    },
    {
      title: "Choose how Harlie supports you",
      description: "Select calm, curious, or goal-getter support based on your preference.",
      icon: <Users className="w-7 h-7" />
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
