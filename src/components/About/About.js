import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ py: 8, scrollMarginTop: '64px' }}>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            mb: 6,
            fontFamily: "'Playfair Display', serif",
            color: '#1a472a'
          }}
        >
          About Us
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Welcome to CareNest, where we provide specialized care and support for seniors in a comfortable, 
              home-like environment. Our dedicated team of professionals ensures that every resident receives 
              personalized attention and care tailored to their unique needs.
            </Typography>
            <Typography variant="body1" paragraph>
              With state-of-the-art facilities and a warm, nurturing atmosphere, we strive to create a 
              community where seniors can enjoy their golden years with dignity, comfort, and joy. Our 
              comprehensive care approach includes medical supervision, nutritious meals, engaging activities, 
              and emotional support.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/about-us.jpg"
              alt="Caring staff with resident"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
