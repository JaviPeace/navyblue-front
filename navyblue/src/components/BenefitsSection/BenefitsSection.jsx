import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import './BenefitsSection.css';

const benefits = [
  {
    title: 'MÁS VOLUMEN. MISMO EQUIPO.',
    description:
      'Procesa más casos sin contratar a nadie: NavyBlue absorbe lo repetitivo y tu capacidad sube.',
  },
  {
    title: 'TU EQUIPO VUELVE A HACER TRABAJO DE SENIOR.',
    description:
      'La herramienta se queda con el copiar/pegar; tu gente decide, resuelve excepciones y cierra casos complejos.',
  },
  {
    title: 'MENOS ERRORES. MÁS CONSISTENCIA.',
    description:
      'Mismas reglas, mismo estándar, mismo resultado. No depende de quién lo hizo ni de nada más.',
  },
  {
    title: 'DE HORAS... A MINUTOS.',
    description:
      'Lo que hoy toma una tarde entre pantallas y PDFs, mañana sale en minutos y de mejor forma.',
  },
];

const BenefitCard = ({ title, description }) => (
  <Box className="benefit-card">
    <Box className="benefit-card__inner">
      <Typography variant="h4" className="benefit-card__title">
        {title}
      </Typography>
      <Typography variant="body1" className="benefit-card__description">
        {description}
      </Typography>
    </Box>
  </Box>
);

const BenefitsSection = () => {
  return (
    <Box id="beneficios" className="benefits-section">
      {/* Background gradient */}
      <Box className="benefits-section__bg" />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box className="benefits-section__header">
          <Box className="benefits-section__header-content">
            <Box className="benefits-section__header-icon" />
            <Typography variant="h3" className="benefits-section__title">
              BENEFICIOS
            </Typography>
          </Box>
        </Box>

        {/* Benefits Grid */}
        <Box className="benefits-grid">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} title={benefit.title} description={benefit.description} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
