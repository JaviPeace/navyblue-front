import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import TableChartIcon from '@mui/icons-material/TableChart';
import MicIcon from '@mui/icons-material/Mic';
import './DashboardPage.css';

const papelBg = `${process.env.PUBLIC_URL}/papel.png`;

/**
 * ============================================
 *  TOOLS CONFIGURATION
 *  Add new tools here to display them as tabs
 * ============================================
 */
const tools = [
  {
    id: 'her-001',
    code: 'HER.001',
    icon: DescriptionIcon,
    title: 'INFORME DE ESTATUTOS',
    description:
      'Ingresa el RUT de la empresa y la herramienta obtiene su estatuto, lo analiza y extrae lo relevante para generar un informe ordenado y estructurado en menos de 1 minuto. Funciona para empresas en un día y también para empresas en régimen general.',
    image: null, // placeholder — set a URL or import an image
    route: '/dashboard/estatutos',
  },
  {
    id: 'her-002',
    code: 'HER.002',
    icon: TableChartIcon,
    title: 'PLANILLA DE FACTURAS',
    description:
      'Sube tus facturas en PDF y la herramienta extrae automáticamente los datos clave, los organiza en una planilla y te entrega un archivo listo para usar.',
    image: null,
    route: '/dashboard/facturas',
  },
  {
    id: 'her-003',
    code: 'HER.003',
    icon: MicIcon,
    title: 'AUDIO A REPORTE',
    description:
      'Graba o sube un audio de una reunión y la herramienta lo transcribe, resume y genera un reporte estructurado con los puntos clave y acuerdos.',
    image: null,
    route: '/dashboard/audio',
  },
];

/**
 * ToolTab — Individual folder tab
 */
const ToolTab = ({ tool, isActive, onClick }) => {
  const Icon = tool.icon;
  return (
    <Box
      className={`dashboard__tab ${isActive ? 'dashboard__tab--active' : ''}`}
      onClick={onClick}
      sx={isActive ? {
        backgroundImage: `url(${process.env.PUBLIC_URL}/papel.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      } : {}}
    >
      <Icon className="dashboard__tab-icon" />
      <Typography className="dashboard__tab-label">{tool.title}</Typography>
    </Box>
  );
};

/**
 * ToolContent — Content inside the folder body
 */
const ToolContent = ({ tool, onNavigate }) => {
  return (
    <Box className="dashboard__tool-content">
      <Box className="dashboard__tool-left">
        <Typography className="dashboard__tool-code">{tool.code}</Typography>
        <Typography className="dashboard__tool-title">{'>'}{tool.title}</Typography>
        <Typography className="dashboard__tool-description">{tool.description}</Typography>
      </Box>
      <Box className="dashboard__tool-right">
        <Box className="dashboard__tool-preview">
          {tool.image ? (
            <img src={tool.image} alt={tool.title} className="dashboard__tool-preview-img" />
          ) : null}
        </Box>
        <Button className="dashboard__tool-btn" onClick={() => onNavigate(tool.route)}>
          USAR HERRAMIENTA →
        </Button>
      </Box>
    </Box>
  );
};

const DashboardPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const userName = 'Tomás'; // Replace with real user data

  return (
    <Box className="dashboard">
      {/* Grid Background */}
      <Box className="dashboard__grid-bg" />

      {/* Decorative spinner - left */}
      <Box className="dashboard__spinner">
        {[...Array(12)].map((_, i) => (
          <Box
            key={i}
            className="dashboard__spinner-dot"
            sx={{ transform: `rotate(${i * 30}deg) translateY(-60px)` }}
          />
        ))}
      </Box>

      {/* Decorative dots top-right */}
      <Box className="dashboard__dots-tr" />

      {/* HUD Labels */}
      <Typography className="dashboard__label-tl">SYS_ACTIVE</Typography>
      <Box className="dashboard__dot-indicator" />
      <Typography className="dashboard__label-time">TIME 03:42</Typography>
      <Box className="dashboard__line-right" />
      <Typography className="dashboard__label-code">A20</Typography>

      {/* Bottom labels */}
      <Typography className="dashboard__label-bl">LAT 33.4 — LON 70.6</Typography>
      <Box className="dashboard__ticker">
        {[...Array(40)].map((_, i) => (
          <Box key={i} className="dashboard__ticker-mark" />
        ))}
      </Box>
      <Box className="dashboard__label-br">
        <Typography className="dashboard__label-status">STATUS: CHOOSING TOOL</Typography>
        <Typography className="dashboard__label-copy">©NAVY BLUE / 2026</Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" className="dashboard__container">
        {/* Greeting */}
        <Box className="dashboard__greeting">
          <Typography className="dashboard__greeting-hello">HOLA {userName.toUpperCase()},</Typography>
          <Typography className="dashboard__greeting-question">¿QUE HERRAMIENTA USARÁS HOY?</Typography>
        </Box>

        {/* Folder UI */}
        <Box className="dashboard__folder-wrapper">
          {/* Background shadow folder */}
          <Box className="dashboard__folder-bg">
            <Box className="dashboard__folder-bg-tabs" />
            <Box className="dashboard__folder-bg-body" />
          </Box>

          {/* Main folder */}
          <Box className="dashboard__folder">
            {/* Tabs */}
            <Box className="dashboard__tabs">
              {tools.map((tool, index) => (
                <ToolTab
                  key={tool.id}
                  tool={tool}
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </Box>

            {/* Folder Body */}
            <Box
              className="dashboard__folder-body"
              sx={{
                backgroundImage: `url(${papelBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <ToolContent tool={tools[activeIndex]} onNavigate={navigate} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DashboardPage;
