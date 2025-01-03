import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia } from '@mui/material';

const Activities = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#1a472a',
        color: 'white',
        zIndex: 1300,
        overflow: 'auto',
        pt: 8
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 3,
              textAlign: 'center'
            }}
          >
            Interactive Activities
          </Typography>
        </Box>

        {/* Events Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 4,
              textAlign: 'center',
              color: '#c5e1a5'
            }}
          >
            Events
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'transparent' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/indoor-games.jpg"
                  alt="Indoor Games"
                  sx={{ borderRadius: 2 }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ mb: 2, color: '#c5e1a5' }}>
                    Indoor Games
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    Indoor games at our care home offer residents enjoyable activities that stimulate mental agility and social interaction. 
                    They provide a fun way to pass time and foster a sense of camaraderie among residents.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'transparent' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/yoga.jpg"
                  alt="Yoga"
                  sx={{ borderRadius: 2 }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ mb: 2, color: '#c5e1a5' }}>
                    Yoga
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    Yoga at our care home offers residents gentle exercises and relaxation techniques to enhance flexibility, strength, and mental well-being. 
                    It promotes physical health and inner peace in a supportive and calming environment.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'transparent' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/gardening.jpg"
                  alt="Gardening"
                  sx={{ borderRadius: 2 }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ mb: 2, color: '#c5e1a5' }}>
                    Gardening
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    Gardening at our care home allows residents to connect with nature, engage in therapeutic activities, and enjoy the satisfaction of 
                    nurturing plants. It provides a peaceful and meaningful way.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'transparent' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/morning-walk.jpg"
                  alt="Morning Walk"
                  sx={{ borderRadius: 2 }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ mb: 2, color: '#c5e1a5' }}>
                    Morning Walk
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    Morning walks at our care home provide residents with a refreshing start to their day, promoting physical activity and enhancing overall well-being. 
                    It's a simple yet effective way to encourage movement and enjoyment of the outdoors in a safe place.
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Recreational Activities Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 4,
              textAlign: 'center',
              color: '#c5e1a5'
            }}
          >
            Recreational Activities
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card sx={{ bgcolor: 'transparent' }}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <CardMedia
                    component="img"
                    sx={{ 
                      width: { xs: '100%', md: '48%' },
                      height: 300,
                      borderRadius: 2 
                    }}
                    image="/images/recreation1.jpg"
                    alt="Recreation Activity 1"
                  />
                  <CardMedia
                    component="img"
                    sx={{ 
                      width: { xs: '100%', md: '48%' },
                      height: 300,
                      borderRadius: 2 
                    }}
                    image="/images/recreation2.jpg"
                    alt="Recreation Activity 2"
                  />
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    Recreational activities at our care home include a variety of engaging options like arts and crafts, music sessions, and group outings. 
                    These activities are designed to promote social interaction, stimulate creativity, and enhance overall well-being among residents.
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Activities;
