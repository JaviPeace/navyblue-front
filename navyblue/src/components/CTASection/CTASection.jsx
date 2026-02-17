import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import './CTASection.css';

const CTASection = () => {
  return (
    <Box className="cta-section">
      <Container maxWidth="md">
        <Box className="cta-section__content">
          {/* Title */}
          <Typography variant="h3" className="cta-section__title">
            ¿LISTO PARA EVOLUCIONAR?
          </Typography>

          {/* Subtitle */}
          <Typography variant="body1" className="cta-section__subtitle">
            Cuéntanos qué proceso quieres automatizar y te mostramos cómo NavyBlue puede ayudarte
          </Typography>

          {/* CTA Button */}
          <Button variant="contained" size="large" className="cta-section__button">
            CUÉNTANOS TU PROCESO
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
