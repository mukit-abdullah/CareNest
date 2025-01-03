import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  IconButton,
  Link as MuiLink,
  Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: '#1a472a', color: 'white', pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Social Links */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ mb: 3 }}>
              <Link to="/">
                <Box
                  component="img"
                  src="/images/logo.png"
                  alt="CareNest Logo"
                  sx={{ height: '60px' }}
                />
              </Link>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <IconButton 
                component={MuiLink} 
                href="https://facebook.com" 
                target="_blank"
                sx={{ color: 'white', '&:hover': { color: '#d4af37' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                component={MuiLink} 
                href="https://instagram.com" 
                target="_blank"
                sx={{ color: 'white', '&:hover': { color: '#d4af37' } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                component={MuiLink} 
                href="https://twitter.com" 
                target="_blank"
                sx={{ color: 'white', '&:hover': { color: '#d4af37' } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                component={MuiLink} 
                href="https://linkedin.com" 
                target="_blank"
                sx={{ color: 'white', '&:hover': { color: '#d4af37' } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                textAlign: { xs: 'center', md: 'left' },
                fontFamily: "'Playfair Display', serif"
              }}
            >
              Quick Links
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                  <Link to="/" style={{ color: 'white', textDecoration: 'none', marginBottom: '0.5rem' }}>
                    Home
                  </Link>
                  <Link to="/services" style={{ color: 'white', textDecoration: 'none', marginBottom: '0.5rem' }}>
                    Services
                  </Link>
                  <Link to="/about" style={{ color: 'white', textDecoration: 'none', marginBottom: '0.5rem' }}>
                    About Us
                  </Link>
                  <Link to="/gallery" style={{ color: 'white', textDecoration: 'none', marginBottom: '0.5rem' }}>
                    Gallery
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                  <Link to="/testimonial" style={{ color: 'white', textDecoration: 'none', marginBottom: '0.5rem' }}>
                    Testimonial
                  </Link>
                  <Link to="/donation" style={{ color: 'white', textDecoration: 'none', marginBottom: '0.5rem' }}>
                    Donation
                  </Link>
                  <Link to="/contact" style={{ color: 'white', textDecoration: 'none', marginBottom: '0.5rem' }}>
                    Contact Us
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                textAlign: { xs: 'center', md: 'left' },
                fontFamily: "'Playfair Display', serif"
              }}
            >
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: '#d4af37' }} />
                <Typography>
                  123 Care Street, Elderly Lane<br />
                  Comfort City, CC 12345
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: '#d4af37' }} />
                <Typography>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: '#d4af37' }} />
                <Typography>
                  info@carenest.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            pt: 2,
            opacity: 0.8,
            fontFamily: "'Playfair Display', serif"
          }}
        >
          {currentYear} CareNest. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
