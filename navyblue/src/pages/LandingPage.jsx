import React from 'react';
import { Box } from '@mui/material';
import BlurBlob from '../components/BlurryElement/blurryElement';
import {
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
        <HeroSection />
        <BenefitsSection />
        
        {/* Blur element between Benefits and Features - Left side */}
        <Box className="landing-page__blur-left">
          <BlurBlob />
        </Box>
    
        <FeaturesSection />
        
        {/* Blur element for HowItWorks - Right side */}
        <Box className="landing-page__blur-how-it-works">
          <BlurBlob />
        </Box>
        
        <HowItWorksSection />
        <VideoSection />
        
        {/* Blur element between Video and TargetAudience - Left side */}
        <Box className="landing-page__blur-video">
          <BlurBlob />
        </Box>
        
        <TargetAudienceSection />
        <CTASection />
        
        {/* Blur element in Footer - Right side */}
        <Box className="landing-page__blur-footer">
          <BlurBlob />
        </Box>
        
        <Footer />
      </Box>
    </Box>
  );
};

export default LandingPage;
