
import React from 'react';
import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StorySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <MessageSquare className="w-8 h-8 text-harlie-rose" />
            <h2 className="text-3xl md:text-4xl font-bold text-harlie-gray">
              Real Story — Why Harlie Exists
            </h2>
          </div>

          <Card className="bg-harlie-blush/10 border-harlie-neutral/20">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-harlie-gray mb-6">
                A woman in her early 30s had excruciating abdominal pain.
                She was told it was PCOS. Then endometriosis.
              </p>
              
              <p className="text-lg leading-relaxed text-harlie-gray mb-6">
                Doctors performed a hysterectomy — only to discover she never had either condition.
              </p>
              
              <p className="text-lg leading-relaxed text-harlie-gray mb-8">
                Her pain was from a rare appendix cancer that had already spread. It was too late.
              </p>
              
              <p className="text-lg leading-relaxed font-medium text-harlie-gray">
                Harlie exists so stories like this don't repeat. We help you track what others overlook, 
                and prepare for what's next — before it becomes irreversible.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
