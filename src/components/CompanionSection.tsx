
import React from 'react';
import PersonalityCard from './PersonalityCard';

const CompanionSection: React.FC = () => {
  const personalities = [
    {
      id: "calm",
      emoji: "🪷",
      title: "Calm",
      description: "Gentle nudges and low-pressure encouragement"
    },
    {
      id: "curious",
      emoji: "🧠",
      title: "Curious",
      description: "Thoughtful insights to help you better understand what's going on"
    },
    {
      id: "goal-getter",
      emoji: "🔥",
      title: "Goal-Getter",
      description: "High-energy nudges and motivation to stay on track"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-harlie-cream bg-opacity-30">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-harlie-gray">
            Support That Feels Like You
          </h2>
          <p className="text-lg text-muted-foreground">
            Health isn't one-size-fits-all. Choose how Harlie shows up for you — and switch anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {personalities.map((personality) => (
            <PersonalityCard
              key={personality.id}
              emoji={personality.emoji}
              title={personality.title}
              description={personality.description}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanionSection;
