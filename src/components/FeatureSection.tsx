
import React from 'react';
import FeatureCard from './FeatureCard';
import { Calendar, ChevronDown, Heart, MessageSquare, Star, User, Users } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "Spot patterns early",
      description: "We help you identify trends so you can act before small issues become big ones.",
      icon: <Star className="w-7 h-7" />
    },
    {
      title: "Track everything in one place",
      description: "We track your symptoms, meals, and mood all in one place — so you don't have to.",
      icon: <Calendar className="w-7 h-7" />
    },
    {
      title: "Highlight nutrition gaps",
      description: "With gentle nudges, we help you stay balanced.",
      icon: <Heart className="w-7 h-7" />
    },
    {
      title: "Log your concerns",
      description: "We flag concerns when it matters, so nothing gets overlooked",
      icon: <MessageSquare className="w-7 h-7" />
    },
    {
      title: "Smart, personalized guidance",
      description: "We guide you to ask the right questions so you walk into every appointment, prepared.",
      icon: <User className="w-7 h-7" />
    },
    {
      title: "Adapt to your preferences",
      description: "Choose calm, curious or here-to-push-you support.",
      icon: <Users className="w-7 h-7" />
    }
  ];

  const faqs = [
    {
      question: "Is my information secure?",
      answer: "Absolutely. Your data is encrypted and never shared without your explicit permission."
    },
    {
      question: "Do I need to log every day?",
      answer: "While consistent entries provide the best insights, even occasional logging helps build your health timeline."
    },
    {
      question: "Can I export my data for doctor visits?",
      answer: "Yes! You can generate a concise summary perfect for sharing during appointments."
    },
    {
      question: "Is Harlie a replacement for medical advice?",
      answer: "No. Harlie helps you track and understand your symptoms, but always consult healthcare professionals for medical advice."
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-gray-50/50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-harlie-gray">
            How Harlie Helps You Feel Clear, Confident, and In Control
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-harlie-gray">FAQs</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} className="border rounded-lg">
                <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50/50">
                  <span className="font-medium text-harlie-gray">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-200" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0 text-muted-foreground">
                  {faq.answer}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
