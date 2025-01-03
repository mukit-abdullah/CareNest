import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(rgba(26, 71, 42, 0.7), rgba(26, 71, 42, 0.7)), url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
      }}
    >
      <Container>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: "'Playfair Display', serif",
            mb: 3
          }}
        >
          Welcome to CareNest
        </Typography>
        <Typography
          variant="h5"
          sx={{
            maxWidth: '600px',
            mb: 4
          }}
        >
          A Place Where Care Meets Comfort
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
