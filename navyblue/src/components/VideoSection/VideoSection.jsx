import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <Box className="video-section">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box className="video-section__header">
          <Typography variant="h3" className="video-section__title">
            MIRA LA MAGIA EN ACCIÓN
          </Typography>
          <Typography className="video-section__subtitle">
            // EXPLORA LA PLATAFORMA DE NAVYBLUE Y DESCUBRE CÓMO AUTOMATIZAMOS TUS PROCESOS
          </Typography>
        </Box>

        {/* Video Container */}
        <Box className="video-section__container">
          <Box className="video-section__video-wrapper">
            {/* Video Placeholder */}
            <Box className="video-section__video-placeholder">
              <IconButton className="video-section__play-button" aria-label="Play video">
                <PlayArrowIcon className="video-section__play-icon" />
              </IconButton>
            </Box>

            {/* Video Metadata */}
            <Box className="video-section__metadata">
              <Typography className="video-section__metadata-text">
                REC 00:00
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoSection;
