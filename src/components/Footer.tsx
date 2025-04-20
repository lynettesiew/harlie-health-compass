
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-harlie-cream">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-harlie-gray">harlie.ai</h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-harlie-gray transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-harlie-gray transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-harlie-gray transition-colors">
              Contact
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Harlie Health, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
