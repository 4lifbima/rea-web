import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ProductTicker } from '../components/sections/ProductTicker';
import { StatementSection } from '../components/sections/StatementSection';
import { PlatformSection } from '../components/sections/PlatformSection';
import { ProductSuiteSection } from '../components/sections/ProductSuiteSection';
import { SaroAISection } from '../components/sections/SaroAISection';
import { AutomationsSection } from '../components/sections/AutomationsSection';
import { GlobalPayoutsSection } from '../components/sections/GlobalPayoutsSection';
import { ProductTourSection } from '../components/sections/ProductTourSection';
import { WorkspaceSection } from '../components/sections/WorkspaceSection';
import { CardsSection } from '../components/sections/CardsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { BlogSection } from '../components/sections/BlogSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactSection } from '../components/sections/ContactSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <main role="main">
      <HeroSection />
      <ProductTicker />
      <StatementSection />
      <PlatformSection />
      <ProductSuiteSection />
      <SaroAISection />
      <AutomationsSection />
      <GlobalPayoutsSection />
      <ProductTourSection />
      <WorkspaceSection />
      <CardsSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <FinalCTASection />
    </main>
  );
};

