import React from 'react';
import { ContactSection } from '../components/sections/ContactSection';
import { FAQSection } from '../components/sections/FAQSection';

export const ContactPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <ContactSection />
      <FAQSection />
    </div>
  );
};

