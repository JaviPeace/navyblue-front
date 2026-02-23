import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';

const navItems = [
  { label: 'BENEFICIOS', href: '#beneficios' },
  { label: 'FEATURES', href: '#features' },
  { label: 'CÓMO FUNCIONA', href: '#como-funciona' },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const Logo = () => (
    <Box className="navbar__logo">
      <img 
        src="/logo_navyblue.png" 
        alt="NavyBlue" 
        className="navbar__logo-img"
      />
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0} className="navbar">
        <Container maxWidth="lg">
          <Toolbar className="navbar__toolbar" disableGutters>
            <Logo />

            {!isMobile && (
              <Box className="navbar__nav-links">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="navbar__nav-link"
                    onClick={e => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        const id = item.href.replace('#', '');
                        const el = document.getElementById(id);
                        if (el) {
                          const navbar = document.querySelector('.navbar');
                          const offset = navbar ? navbar.offsetHeight : 0;
                          let top = el.getBoundingClientRect().top + window.pageYOffset;
                          // Si es hero, no compensar offset
                          if (id !== 'hero') {
                            top = top - offset;
                          }
                          window.scrollTo({ top, behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </Box>
            )}

            <Box className="navbar__actions">
              {!isMobile && (
                <>
                  <Button
                    variant="outlined"
                    // size="small"
                    className="navbar__btn-outline"
                  >
                    CREAR CUENTA
                  </Button>
                  <Button
                    variant="contained"
                    // size="small"
                    className="navbar__btn-primary"
                    onClick={() => navigate('/login')}
                  >
                    INICIAR SESIÓN
                  </Button>
                </>
              )}

              {isMobile && (
                <IconButton
                  className="navbar__menu-button"
                  onClick={toggleDrawer(true)}
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        className="navbar__drawer"
        PaperProps={{
          className: 'navbar__drawer-paper',
        }}
      >
        <Box className="navbar__drawer-header">
          <Logo />
          <IconButton
            onClick={toggleDrawer(false)}
            className="navbar__drawer-close"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List className="navbar__drawer-list">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar__drawer-link"
              onClick={e => {
                if (item.href.startsWith('#')) {
                  e.preventDefault();
                  const id = item.href.replace('#', '');
                  const el = document.getElementById(id);
                  if (el) {
                    const navbar = document.querySelector('.navbar');
                    const offset = navbar ? navbar.offsetHeight : 0;
                    let top = el.getBoundingClientRect().top + window.pageYOffset;
                    if (id !== 'hero') {
                      top = top - offset;
                    }
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }
                setDrawerOpen(false);
              }}
            >
              <ListItem>
                <ListItemText
                  primary={item.label}
                  className="navbar__drawer-item-text"
                />
              </ListItem>
            </a>
          ))}
        </List>

        <Box className="navbar__drawer-actions">
          <Button
            variant="outlined"
            fullWidth
            className="navbar__drawer-btn-outline"
          >
            CREAR CUENTA
          </Button>
          <Button
            variant="contained"
            fullWidth
            className="navbar__drawer-btn-primary"
            onClick={() => navigate('/login')}
          >
            INICIAR SESIÓN
          </Button>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Navbar;
