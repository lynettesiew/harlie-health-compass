
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const GapsSection: React.FC = () => {
  const gaps = [
    {
      title: "Misdiagnosis & Dismissal",
      points: [
        "Log your full story — not just what fits in a 10-minute visit",
        "Prep with patterns and smart questions",
        "Be heard, not overlooked"
      ]
    },
    {
      title: "Subtle & Asymptomatic Patterns",
      points: [
        "Track your \"normal\"",
        "See early deviations before symptoms escalate",
        "Flag trends that even specialists might miss"
      ]
    },
    {
      title: "Rare or Complex Conditions",
      points: [
        "Capture cross-body symptoms in one place",
        "Bring personalized insights to your next doctor's appointment.",
        "Structure what's been ruled out — and what hasn't"
      ]
    },
    {
      title: "Multi-System Clarity",
      points: [
        "See how food, stress, and cycle influence each other",
        "Understand patterns that don't live in one box",
        "Prep like a team of specialists would"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-harlie-blush bg-opacity-20">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-harlie-gray">
            The Gaps That Get Women Hurt — And How Harlie Helps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {gaps.map((gap, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur border-harlie-neutral/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-harlie-gray">{gap.title}</h3>
                <ul className="space-y-3">
                  {gap.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-harlie-rose">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GapsSection;

