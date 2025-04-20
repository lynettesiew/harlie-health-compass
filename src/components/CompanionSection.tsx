
import React, { useState } from 'react';
import PersonalityCard from './PersonalityCard';

const CompanionSection: React.FC = () => {
  const [selectedPersonality, setSelectedPersonality] = useState<string>("curious");
  
  const personalities = [
    {
      id: "calm",
      title: "Calm",
      description: "Gentle reminders and soothing insights for a stress-free experience"
    },
    {
      id: "curious",
      title: "Curious",
      description: "Thoughtful questions and explorative suggestions to deepen understanding"
    },
    {
      id: "goal-getter",
      title: "Goal-Getter",
      description: "Motivational nudges and actionable steps to keep you progressing"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-harlie-cream bg-opacity-30">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-harlie-gray">
            A Daily Companion. An Advocate When It Counts.
          </h2>
          
          <p className="text-lg mb-2 text-harlie-gray">
            Harlie doesn't just track — she translates.
          </p>
          <p className="text-lg mb-8 text-muted-foreground">
            Your symptoms, nutrition, and thoughts become real insights that guide your health journey and prepare you for what comes next.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {personalities.map((personality) => (
            <PersonalityCard
              key={personality.id}
              title={personality.title}
              description={personality.description}
              isSelected={selectedPersonality === personality.id}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanionSection;
