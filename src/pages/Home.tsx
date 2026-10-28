import React from 'react';
import { SEO } from '@/components/ui/SEO';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoryCards } from '@/components/home/CategoryCards';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { IndustriesGrid } from '@/components/home/IndustriesGrid';
import { ProcessSteps } from '@/components/home/ProcessSteps';
import { FeaturedGallery } from '@/components/home/FeaturedGallery';
import { FinalCTA } from '@/components/home/FinalCTA';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Custom Corrugated Boxes & Paper Packaging Manufacturer"
        description="RK Packaging manufactures durable corrugated shipping boxes, custom-printed cartons, and rigid hardboard packaging for businesses in India."
        canonicalPath="/"
      />
      <HeroSection />
      <CategoryCards />
      <WhyChooseUs />
      <IndustriesGrid />
      <ProcessSteps />
      <FeaturedGallery />
      <FinalCTA />
    </>
  );
};
