
import React from 'react';
import EmailCaptureForm from './EmailCaptureForm';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 gradient-blush opacity-50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="sparkle top-20 left-1/4"></div>
      <div className="sparkle top-40 right-1/3"></div>
      <div className="sparkle bottom-20 left-1/3"></div>
      
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-harlie-gray">
            Your Health. Your Clarity. Your AI Companion.
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            Harlie connects the dots — turning your health data into clarity, guidance, and action.
          </p>
          
          <EmailCaptureForm 
            buttonText="Join Early Access" 
            className="mb-4"
          />
          
          <p className="text-sm text-muted-foreground">
            No spam. Just smart support.
          </p>
        </div>
        
        <div className="mt-12 md:mt-16 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Woman relaxing with journal" 
            className="rounded-2xl shadow-lg max-w-full md:max-w-lg h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
