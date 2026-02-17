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
          <Box className="video-section__header-left">
            <Typography variant="body2" className="video-section__label">
              INITIALIZING...
            </Typography>
            <Typography variant="h2" className="video-section__title">
              MIRA LA MAGIA EN ACCIÓN
            </Typography>
          </Box>
          <Typography className="video-section__subtitle">
            {'// EXPLORA LA PLATAFORMA DE NAVYBLUE Y DESCUBRE CÓMO AUTOMATIZAMOS TUS PROCESOS'}
          </Typography>
        </Box>

        {/* Main Video Container with Corner Decorations */}
        <Box className="video-section__main">
          <Box className="video-section__container">
            <Box className="video-section__container-inner">
              {/* Video Placeholder */}
              <Box className="video-section__video-placeholder">
                <IconButton className="video-section__play-button" aria-label="Play video">
                  <PlayArrowIcon className="video-section__play-icon" />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Footer Status Area */}
          <Box className="video-section__footer">
            <Typography variant="body2" className="video-section__status">
              SIGNAL: STABLE
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoSection;
