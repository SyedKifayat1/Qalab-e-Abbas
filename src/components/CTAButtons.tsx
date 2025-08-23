import React from 'react';
import { MessageCircle, Linkedin } from 'lucide-react';

interface CTAButtonsProps {
  service?: string;
  className?: string;
}

export const CTAButtons: React.FC<CTAButtonsProps> = ({ service, className = "" }) => {
  const handleWhatsAppClick = () => {
    const message = service 
      ? `Hello Mr. Qalab-e-Abbas, I'm interested in your ${service} service.`
      : "Hello Mr. Qalab-e-Abbas, I'm interested in your services.";
    const whatsappUrl = `https://wa.me/923214052625?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/qalab-e-abbas-06203b114/', '_blank');
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
        <span>Book on WhatsApp</span>
      </button>
      <button
        onClick={handleLinkedInClick}
        className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
      >
        <Linkedin className="h-5 w-5" />
        <span>Message on LinkedIn</span>
      </button>
    </div>
  );
};