import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import TableChartIcon from '@mui/icons-material/TableChart';
import MicIcon from '@mui/icons-material/Mic';
import './ToolPage.css';

/**
 * ============================================
 *  TOOLS REGISTRY
 *  Mirrors the dashboard tools config.
 *  Add new tools here to create their pages.
 * ============================================
 */
const toolsRegistry = {
  estatutos: {
    id: 'her-001',
    code: 'HER.001',
    icon: DescriptionIcon,
    title: 'INFORME DE ESTATUTOS',
    statusLabel: 'ACTIVE',
  },
  facturas: {
    id: 'her-002',
    code: 'HER.002',
    icon: TableChartIcon,
    title: 'PLANILLA DE FACTURAS',
    statusLabel: 'ACTIVE',
  },
  audio: {
    id: 'her-003',
    code: 'HER.003',
    icon: MicIcon,
    title: 'AUDIO A REPORTE',
    statusLabel: 'ACTIVE',
  },
};

const ToolPage = () => {
  const { toolSlug } = useParams();
  const navigate = useNavigate();
  const tool = toolsRegistry[toolSlug];

  // Fallback if tool not found
  if (!tool) {
    return (
      <Box className="toolpage" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ color: '#fff', fontFamily: 'Space Grotesk', letterSpacing: 2 }}>
          HERRAMIENTA NO ENCONTRADA
        </Typography>
      </Box>
    );
  }


  return (
    <Box className="toolpage">
      {/* Main body */}
      <Box className="toolpage__body">
      </Box>

      {/* Ship watermark */}
      <Box className="toolpage__watermark">
        <img src="/barco.png" alt="" className="toolpage__watermark-img" />
      </Box>

      {/* Footer */}
      <Box className="toolpage__footer">
        {/* User avatar — left */}
        <Box className="toolpage__footer-user" onClick={() => navigate('/dashboard')}>
          <PersonOutlineIcon className="toolpage__footer-user-icon" />
        </Box>

        {/* Ship logo — center */}
        <Box className="toolpage__footer-logo">
          <img src="/barco.png" alt="Navy Blue" className="toolpage__footer-logo-img" />
        </Box>

        {/* Status — right */}
        <Box className="toolpage__footer-status">
          <Typography className="toolpage__footer-status-text">STATUS: {tool.statusLabel}</Typography>
          <Typography className="toolpage__footer-copy">©NAVY BLUE / 2026</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ToolPage;
