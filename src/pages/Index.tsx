
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import CompanionSection from '@/components/CompanionSection';
import GapsSection from '@/components/GapsSection';
import StorySection from '@/components/StorySection';
import FAQSection from '@/components/FAQSection';
import SocialProofSection from '@/components/SocialProofSection';
import TestimonialSection from '@/components/TestimonialSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add scroll animation for elements
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll('.animate-fade-in');
      
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
          element.classList.add('opacity-100');
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <StorySection />
        <GapsSection />
        <SocialProofSection />
        <FeatureSection />
        <CompanionSection />
        <TestimonialSection />
        <FinalCTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
