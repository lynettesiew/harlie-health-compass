
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const StorySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-harlie-gray text-center mb-12">
            A Real Story — And Why Harlie Exists
          </h2>

          <Card className="bg-harlie-blush/10 border-harlie-neutral/20">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-harlie-gray mb-6">
                A woman in her 30s had severe abdominal pain.
                Doctors said PCOS, then endometriosis. They removed her uterus — only to discover it was a rare cancer, now too advanced.
              </p>
              
              <p className="text-lg leading-relaxed font-medium text-harlie-gray">
                Harlie exists so you're never unprepared, unheard, or misdiagnosed again.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
