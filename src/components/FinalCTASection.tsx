
import React from 'react';
import EmailCaptureForm from './EmailCaptureForm';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-harlie-gray">
            Take control of your health — with Harlie by your side.
          </h2>
          
          <div className="flex justify-center mb-4">
            <EmailCaptureForm 
              buttonText="Join the Waitlist" 
              placeholder="Enter your email"
            />
          </div>
          
          <p className="text-sm text-muted-foreground">
            No spam. Just clarity and support.
          </p>
          
          {/* Decorative connecting dots visual */}
          <div className="relative mt-16">
            <div className="flex justify-center space-x-16">
              <div className="sparkle"></div>
              <div className="sparkle" style={{ animationDelay: "0.5s" }}></div>
              <div className="sparkle" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
