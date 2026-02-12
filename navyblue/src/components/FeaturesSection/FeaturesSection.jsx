import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmailIcon from '@mui/icons-material/Email';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import './FeaturesSection.css';

const features = [
  {
    icon: AutoAwesomeIcon,
    title: 'POTENCIA DE +100 ANALISTAS',
    description:
      'Las herramientas que construimos buscan, cruzan y resumen información desde tus fuentes para cada caso',
  },
  {
    icon: EmailIcon,
    title: 'LA INFORMACIÓN, VENGA COMO VENGA',
    description:
      'Conectan con tus sistemas y convierten datos dispersos en un resultado limpio y consistente',
  },
  {
    icon: SmartToyIcon,
    title: 'NO SOLO EJECUTA. TAMBIÉN DECIDE.',
    description:
      'Con instrucciones claras, evalúa el contexto del caso y define qué hacer después',
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Box className="feature-card">
    {/* Icon */}
    <Box className="feature-card__icon-wrapper">
      <Icon className="feature-card__icon" />
    </Box>

    <Typography variant="h4" className="feature-card__title">
      {title}
    </Typography>

    <Typography variant="body2" className="feature-card__description">
      {description}
    </Typography>
  </Box>
);

const FeaturesSection = () => {
  return (
    <Box id="features" className="features-section">
      <Container maxWidth="lg">
        {/* Status Label */}
        <Box className="features-section__status">
          <Typography className="features-section__status-text">
            STATUS : OPERATIONAL
          </Typography>
        </Box>

        {/* Section Title */}
        <Box className="features-section__header">
          <Typography className="features-section__title-line1">
            Si hoy lo haces con mouse y teclado...
          </Typography>
          <Typography className="features-section__title-line2">
            probablemente{' '}
            <span className="features-section__highlight">[ NavyBlue ]</span>{' '}
            lo puede hacer por ti
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
