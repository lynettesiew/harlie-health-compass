
import React from 'react';
import { Button } from "@/components/ui/button";

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-harlie-gray text-center">
            You Shouldn't Have to Be a Medical Expert to Be Taken Seriously
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
            <div className="md:w-1/2 flex flex-col items-center">
              <div className="text-7xl md:text-8xl font-bold text-harlie-rose mb-4">66%</div>
              <p className="text-lg text-center text-muted-foreground">
                of women say they've been misdiagnosed or dismissed*
              </p>
            </div>
            
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg mb-4 text-harlie-gray">
                Doctors spend only 13–24 minutes per visit
              </p>
              <p className="text-lg mb-6 text-harlie-gray">
                Harlie helps you speak clearly — with science on your side.
              </p>
              <Button className="rounded-full px-8 py-6 gradient-button text-white font-medium hover:opacity-90 transition-all">
                Learn How Harlie Helps
              </Button>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground mt-8 text-center">
            *Source: Soliant Health 2024 State of Healthcare Report
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
