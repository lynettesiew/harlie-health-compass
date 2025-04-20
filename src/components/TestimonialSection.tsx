
import React from 'react';
const TestimonialSection: React.FC = () => {
  return <section className="py-16 md:py-24 px-4 bg-harlie-blush bg-opacity-30">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block p-1 rounded-full bg-white mb-6 mx-auto"> {/* Added mx-auto to center the image container */}
              <img 
                alt="User testimonial" 
                className="w-24 h-24 object-cover rounded-full object-center" {/* Added object-center to center the image content */}
                src="/lovable-uploads/9899e851-b6a4-4799-9b0e-1db26dbae6dd.jpg" 
              />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-harlie-gray">
              "This is so needed."
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6">
              — Momo, early supporter
            </p>
          </div>
          
          <div className="pt-6 border-t border-harlie-neutral border-opacity-20">
            <p className="text-lg font-medium text-harlie-gray mb-2">
              Built by a woman who's been there.
            </p>
            <p className="text-lg text-muted-foreground">
              Backed by women who are done being dismissed.
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="relative mt-12">
            <div className="absolute left-0 right-0 h-px bg-harlie-neutral bg-opacity-30"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
              <div className="w-4 h-4 rounded-full bg-harlie-rose animate-sparkle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialSection;
