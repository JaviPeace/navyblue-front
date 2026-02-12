import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import './HeroSection.css';

const HeroSection = () => {
  // Placeholder logos for trust section
  const logos = Array(5).fill(null);

  return (
    <Box className="hero">
      {/* Grid Background */}
      <Box className="hero__grid-bg" />

      {/* Decorative elements */}
      <Box className="hero__dots-left" />
      <Box className="hero__line-left" />
      <Box className="hero__line-right" />

      {/* Version tag */}
      <Typography className="hero__version">VERSION : V1.7</Typography>

      {/* Coordinates */}
      <Typography className="hero__coordinates">LAT 35.4 · LON 78.9</Typography>

      <Container maxWidth="md">
        <Box className="hero__content">
          {/* Main Title */}
          <Typography variant="h1" className="hero__title-line1">
            Podrías contratar más gente,
          </Typography>

          <Typography variant="h2" className="hero__title-line2">
            O CONTRATAR NAVYBLUE
          </Typography>

          {/* Sailboat Icon */}
          <Box className="hero__sailboat-bg">
            <img 
              src="/barco.png" 
              alt="" 
              className="hero__sailboat-icon"
            />
          </Box>

          {/* Subtitle */}
          <Typography variant="body1" className="hero__subtitle">
            Automatizamos el trabajo de tu backoffice para escalar volumen sin
            contratar más gente ni gastar tu tiempo en lo repetitivo
          </Typography>

          {/* CTA Buttons */}
          <Box className="hero__buttons">
            <Button variant="contained" size="large" className="hero__btn-primary">
              CUÉNTANOS TU PROCESO
            </Button>
            <Button variant="outlined" size="large" className="hero__btn-secondary">
              [ INICIAR SESIÓN ]
            </Button>
          </Box>

          {/* Trust Section - Companies */}
          <Box className="hero__trust">
            <Typography className="hero__trust-label">
              // EMPRESAS QUE YA HAN CONFIADO EN NOSOTROS
            </Typography>
            <Box className="hero__trust-logos">
              {logos.map((_, index) => (
                <Box key={index} className="hero__trust-logo">
                  <img 
                    src="/logo_completo.png" 
                    alt="NavyBlue" 
                    className="hero__trust-logo-img"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Bottom labels */}
      <Typography className="hero__label-left">SYS_ACTIVE</Typography>
      <Typography className="hero__label-center">TONE: UI/XI</Typography>
      <Typography className="hero__label-right">A00</Typography>
    </Box>
  );
};

export default HeroSection;
