import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login — navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <Box className="login">
      {/* Grid Background */}
      <Box className="login__grid-bg" />

      {/* Decorative spinner - left */}
      <Box className="login__spinner">
        {[...Array(24)].map((_, i) => (
          <Box
            key={i}
            className="login__spinner-dot"
            sx={{
              transform: `rotate(${i * 15}deg) translateY(-170px)`,
            }}
          />
        ))}
      </Box>

      {/* Decorative dots top-right */}
      <Box className="login__dots-tr" />

      {/* Decorative line right */}
      <Box className="login__line-right" />

      {/* Labels */}
      <Typography className="login__label-tl">SYS_ACTIVE</Typography>
      <Box className="login__dot-indicator" />

      <Typography className="login__label-time">TIME 03:42</Typography>
      <Typography className="login__label-code">A20</Typography>

      {/* Bottom labels */}
      <Typography className="login__label-bl">LAT 33.4 — LON 70.6</Typography>
      <Box className="login__ticker">
        {[...Array(40)].map((_, i) => (
          <Box key={i} className="login__ticker-mark" />
        ))}
      </Box>

      <Box className="login__label-br">
        <Typography className="login__label-status">STATUS: CHOOSING TOOL</Typography>
        <Typography className="login__label-copy">©NAVY BLUE / 2026</Typography>
      </Box>

      {/* Login Card */}
      <Box className="login__card" component="form" onSubmit={handleSubmit}>
        {/* Sailboat watermark */}
        <Box className="login__watermark">
          <img src="/barco.png" alt="" className="login__watermark-img" />
        </Box>

        <Box className="login__fields">
          <Box className="login__field">
            <input
              type="email"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="login__input"
              required
            />
          </Box>

          <Box className="login__field">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login__input"
              required
            />
          </Box>
        </Box>

        <button type="submit" className="login__submit">
          <ArrowForwardIcon className="login__submit-icon" />
        </button>
      </Box>
    </Box>
  );
};

export default LoginPage;
