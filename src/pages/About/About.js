import React from 'react';
import { Box, Container, Grid, Typography, Paper, Fade } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ bgcolor: '#1a472a', minHeight: '100vh', py: 8 }}>
      <Container>
        {/* Header Section */}
        <Fade in={true} timeout={1000}>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              color: 'white',
              mb: 6,
              fontFamily: "'Playfair Display', serif",
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            About Us
          </Typography>
        </Fade>

        {/* Main Content */}
        <Grid container spacing={4} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1500}>
              <Box sx={{ color: 'white' }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 3,
                    fontFamily: "'Playfair Display', serif",
                    color: '#d4af37'
                  }}
                >
                  Welcome to CareNest
                </Typography>
                <Typography paragraph>
                  At CareNest, we believe in creating a warm and nurturing environment 
                  where seniors can thrive and enjoy their golden years with dignity 
                  and comfort. Our commitment goes beyond basic care – we strive to 
                  create a true home where every resident feels valued, respected, 
                  and part of our extended family.
                </Typography>
                <Typography paragraph>
                  Our dedicated team of professionals brings together expertise and 
                  compassion to provide comprehensive care that addresses not just 
                  physical needs, but also emotional and social well-being. We 
                  understand that each resident is unique, and we tailor our 
                  services to meet individual preferences and requirements.
                </Typography>
                <Typography paragraph>
                  With state-of-the-art facilities and a range of engaging activities, 
                  we ensure that our residents lead fulfilling lives while receiving 
                  the highest standard of care. Our approach combines modern healthcare 
                  practices with the warmth of traditional family values.
                </Typography>
              </Box>
            </Fade>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={2000}>
              <Paper
                elevation={3}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 4,
                  height: '400px'
                }}
              >
                <Box
                  component="img"
                  src="/images/about/senior-care.jpg"
                  alt="Caring staff with elderly resident"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Paper>
            </Fade>
          </Grid>
        </Grid>

        {/* Values Section */}
        <Box sx={{ mt: 8 }}>
          <Fade in={true} timeout={2500}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                color: '#d4af37',
                mb: 4,
                fontFamily: "'Playfair Display', serif"
              }}
            >
              Our Core Values
            </Typography>
          </Fade>
          <Grid container spacing={3}>
            {[
              {
                title: 'Compassionate Care',
                description: 'We provide care with genuine empathy and understanding, treating each resident as family.'
              },
              {
                title: 'Professional Excellence',
                description: 'Our team maintains the highest standards of professional care and service delivery.'
              },
              {
                title: 'Dignity & Respect',
                description: 'We ensure every resident maintains their dignity and receives the utmost respect.'
              },
              {
                title: 'Engaging Environment',
                description: 'We create an active and stimulating environment that promotes well-being and joy.'
              }
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Fade in={true} timeout={3000 + (index * 500)}>
                  <Paper
                    sx={{
                      p: 3,
                      height: '100%',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        bgcolor: 'rgba(255,255,255,0.15)'
                      }
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        color: '#d4af37',
                        fontFamily: "'Playfair Display', serif"
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography>
                      {value.description}
                    </Typography>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
