import React from 'react';
import { Box } from '@mui/material';
import {
  Navbar,
  HeroSection,
  BenefitsSection,
  FeaturesSection,
  HowItWorksSection,
  VideoSection,
  TargetAudienceSection,
  CTASection,
  Footer,
} from '../components';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <Box className="landing-page">
      {/* Global background grid pattern */}
      <Box className="landing-page__grid-bg" />

      {/* Content */}
      <Box className="landing-page__content">
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <VideoSection />
        <TargetAudienceSection />
        <CTASection />
        <Footer />
      </Box>
    </Box>
  );
};

export default LandingPage;
