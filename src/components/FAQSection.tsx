
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown } from 'lucide-react';

const FAQSection: React.FC = () => {
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
    <section className="py-16 md:py-24 px-4 bg-gray-50/50">
      <div className="container max-w-6xl mx-auto">
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

export default FAQSection;
