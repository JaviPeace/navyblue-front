import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CloseIcon from '@mui/icons-material/Close';
import './TargetAudienceSection.css';

const forYouItems = [
  'Tienes procesos repetitivos y piensas "esto lo debería hacer un robot"',
  'La demanda crece y estás pensando en contratar más gente solo para procesar volumen.',
  'Sientes que se te va el día en tareas triviales y no en trabajo a tu nivel profesional.',
];

const notForYouItems = [
  'Buscas un chatbot para atender clientes o marketing',
  'Cada caso es único y no hay un proceso repetible que se pueda convertir en reglas',
  'Quieres que la IA interactúe directamente con tus clientes finales',
];

const TargetAudienceSection = () => {
  return (
    <Box className="target-audience-section">
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography variant="h3" className="target-audience-section__title">
          ¿PARA QUIÉN ES NAVYBLUE?
        </Typography>

        {/* Cards Grid */}
        <Box className="target-cards-grid">
          {/* For You Card */}
          <Box className="target-card">
            <Box className="target-card__inner">
              <Typography variant="h4" className="target-card__title">
                ES PARA TI SI...
              </Typography>
              <Box className="target-card__list">
                {forYouItems.map((item, index) => (
                  <Box key={index} className="target-card__item">
                    <CheckBoxOutlinedIcon className="target-card__icon target-card__icon--positive" />
                    <Typography className="target-card__text">{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Not For You Card */}
          <Box className="target-card">
            <Box className="target-card__inner">
              <Typography variant="h4" className="target-card__title">
                NO ES PARA TI SI...
              </Typography>
              <Box className="target-card__list">
                {notForYouItems.map((item, index) => (
                  <Box key={index} className="target-card__item">
                    <CloseIcon className="target-card__icon target-card__icon--negative" />
                    <Typography className="target-card__text">{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Label */}
        <Typography variant="body2" className="target-audience-section__label">
          STATUS: OPERATIONAL
        </Typography>
      </Container>
    </Box>
  );
};

export default TargetAudienceSection;
