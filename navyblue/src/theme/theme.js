import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#495B69',
      light: '#6B7D8A',
      dark: '#344450',
    },
    secondary: {
      main: '#1A2B3C',
      light: '#2A3B4C',
      dark: '#0A1B2C',
    },
    background: {
      default: '#0A1929',
      paper: '#0D2137',
    },
    text: {
      primary: '#CCD0CF',
      secondary: '#CCD0CF',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", sans-serif',
    h1: {
      fontWeight: 300,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      letterSpacing: '0.02em',
      '@media (min-width:600px)': {
        fontSize: '2.75rem',
      },
    },
    h3: {
      fontWeight: 400,
      fontSize: '2.25rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.4 rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.6 rem',
      letterSpacing: '0.1em',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      textAlign: 'inherit',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#8BA3B8',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase',
          padding: '12px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: 1,
          '&:hover': {
            borderWidth: 1,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

export default theme;
