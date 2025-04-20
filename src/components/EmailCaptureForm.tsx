
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface EmailCaptureFormProps {
  buttonText: string;
  placeholder?: string;
  className?: string;
}

const EmailCaptureForm: React.FC<EmailCaptureFormProps> = ({ 
  buttonText, 
  placeholder = "Your email", 
  className = ""
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for joining! We'll be in touch soon.");
      setEmail('');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${className}`}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="rounded-full px-6 py-6 border-harlie-neutral border-opacity-30 bg-white"
      />
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="rounded-full px-6 py-6 gradient-button text-white font-medium hover:opacity-90 transition-all"
      >
        {isSubmitting ? "Joining..." : buttonText}
      </Button>
    </form>
  );
};

export default EmailCaptureForm;
