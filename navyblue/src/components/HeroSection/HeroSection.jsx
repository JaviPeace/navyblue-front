import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BlurBlob from '../BlurryElement/blurryElement';
import Navbar from '../Navbar/Navbar';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();
  // Placeholder logos for trust section
  const logos = Array(5).fill(null);

  return (
    <Box className="hero">
      {/* Blurry Decorative Element - Top Right */}
      <Box className="hero__blur-container">
        <BlurBlob />
      </Box>

      {/* Navbar integrated into hero */}
      <Navbar />

      {/* Grid Background */}
      <Box className="hero__grid-bg" />

      {/* Decorative elements */}
      <Box className="hero__dots-left" />
      <Box className="hero__line-right" />

      {/* Version tag */}
      <Typography variant="body2" className="hero__version">VERSION : V1.7</Typography>

      {/* Coordinates */}
      <Typography variant="body2" className="hero__coordinates">LAT 35.4 · LON 78.9</Typography>

      <Container maxWidth="md">
        <Box className="hero__content">
          {/* Main Title */}
          <Typography variant="h1" className="hero__title-line1">
            Podrías contratar más gente,
          </Typography>

          <Typography variant="h1" className="hero__title-line2">
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
          <Typography className="hero__subtitle" sx={{ textAlign: 'center', maxWidth: '500px', mx: 'auto' }}>
            Automatizamos el trabajo de tu backoffice para escalar volumen sin
            contratar más gente ni gastar tu tiempo en lo repetitivo
          </Typography>

          {/* CTA Buttons */}
          <Box className="hero__buttons">
            <Button variant="contained" size="large" className="hero__btn-primary">
              CUÉNTANOS TU PROCESO
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              className="hero__btn-secondary"
              onClick={() => navigate('/login')}
            >
              [ INICIAR SESIÓN ]
            </Button>
          </Box>

          {/* Trust Section - Companies */}
          <Box className="hero__trust">
            <Typography className="hero__trust-label">
              {'// EMPRESAS QUE YA HAN CONFIADO EN NOSOTROS'}
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
      <Typography variant="body2" className="hero__label-left">SYS_ACTIVE</Typography>
      <Typography variant="body2" className="hero__time-right">TIME 03:42</Typography>
      <Typography variant="body2" className="hero__label-right">A20</Typography>
    </Box>
  );
};

export default HeroSection;
