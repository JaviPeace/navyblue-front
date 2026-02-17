import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import HandshakeIcon from '@mui/icons-material/Handshake';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import './HowItWorksSection.css';

const steps = [
  {
    icon: DescriptionIcon,
    title: 'CUÉNTANOS TU PROCESO',
    description:
      'Rellena el formulario y dinos qué tareas quieres automatizar o dónde se te está yendo el tiempo.',
  },
  {
    icon: HandshakeIcon,
    title: 'LO ATERRIZAMOS CONTIGO',
    description:
      'Te contactamos, revisamos el proceso real y definimos qué parte hace NavyBlue, qué parte hace tu equipo y qué impacto esperar.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'LO CONSTRUIMOS Y TE DAMOS ACCESO',
    description:
      'Desarrollamos tu herramienta, te entregamos una cuenta para ti y tu equipo, y la usan desde la plataforma de NavyBlue.',
  },
];

const StepCard = ({ icon: Icon, title, description, stepNumber }) => (
  <Box className="step-card">
    <Box className="step-card__icon-wrapper">
      <Icon className="step-card__icon" />
    </Box>
    <Typography variant="h4" className="step-card__title">
      {title}
    </Typography>
    <Typography variant="body1" className="step-card__description">
      {description}
    </Typography>
  </Box>
);

const HowItWorksSection = () => {
  return (
    <Box id="como-funciona" className="how-it-works-section">
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography variant="h3" className="how-it-works-section__title">
          ¿CÓMO FUNCIONA?
        </Typography>

        {/* Steps Grid */}
        <Box className="steps-grid">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={index + 1}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
