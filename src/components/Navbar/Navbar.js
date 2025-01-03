import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/', section: null },
  { name: 'Services', path: '/#services', section: 'services' },
  { name: 'About Us', path: '/#about', section: 'about' },
  { name: 'Gallery', path: '/#gallery', section: 'gallery' },
  { name: 'Testimonial', path: '/#testimonial', section: 'testimonial' },
  { name: 'Donation', path: '/#donation', section: 'donation' },
  { name: 'Contact Us', path: '/#contact', section: 'contact' }
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (path, section) => {
    handleCloseNavMenu();
    if (path === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(path);
      }
    }
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: trigger ? '#1a472a' : 'transparent',
        boxShadow: trigger ? 1 : 'none',
        transition: 'background-color 0.3s ease'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            onClick={() => handleNavClick('/', null)}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Playfair Display',
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            CareNest
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navItems.map((item) => (
                <MenuItem 
                  key={item.name} 
                  onClick={() => handleNavClick(item.path, item.section)}
                >
                  <Typography textAlign="center">{item.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            onClick={() => handleNavClick('/', null)}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Playfair Display',
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            CareNest
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => handleNavClick(item.path, item.section)}
                sx={{
                  my: 2,
                  mx: 1,
                  color: 'white',
                  display: 'block',
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
