import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import './TrustSection.css';

const TrustSection = () => {
  // Placeholder logos - in production, these would be actual company logos
  const logos = Array(5).fill(null);

  const LogoPlaceholder = () => (
    <Box className="trust-section__logo">
      <img 
        src="/logo_completo.png" 
        alt="NavyBlue" 
        className="trust-section__logo-img"
      />
    </Box>
  );

  return (
    <Box className="trust-section">
      <Container maxWidth="lg">
        {/* Section Label */}
        <Typography className="trust-section__label">
          // EMPRESAS QUE YA HAN CONFIADO EN NOSOTROS
        </Typography>

        {/* Logo Row */}
        <Box className="trust-section__logos">
          {logos.map((_, index) => (
            <LogoPlaceholder key={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TrustSection;
