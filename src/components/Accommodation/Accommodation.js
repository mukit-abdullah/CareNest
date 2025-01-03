import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia } from '@mui/material';

const Accommodation = ({ onClose }) => {
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
          <CardMedia
            component="img"
            height="400"
            image="/images/accommodation-hero.jpg"
            alt="Senior residents enjoying common area"
            sx={{ borderRadius: 2, mb: 4 }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 3,
              textAlign: 'center'
            }}
          >
            Accommodation
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              textAlign: 'center',
              mb: 6
            }}
          >
            At Care Nest, we provide comfortable and safe living spaces tailored to the needs of our elderly residents. Each room is 
            designed to be easily accessible and includes essential amenities to ensure a home-like environment, promoting 
            independence and well-being.
          </Typography>
        </Box>

        {/* Indoor Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 4,
              textAlign: 'center'
            }}
          >
            Indoor
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'transparent' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/private-room.jpg"
                  alt="Private Room"
                  sx={{ borderRadius: 2 }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ mb: 2, color: '#c5e1a5' }}>
                    Private Rooms
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    At Care Nest, our private rooms provide spacious, comfortable living spaces with en-suite bathrooms, 
                    emergency call systems, and climate control. Residents can personalize their rooms with their own furnishings 
                    and decor, creating a homely and welcoming environment.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'transparent' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/shared-room.jpg"
                  alt="Shared Room"
                  sx={{ borderRadius: 2 }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ mb: 2, color: '#c5e1a5' }}>
                    Shared Rooms
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    At Care Nest, our shared rooms provide a comfortable living space where residents can enjoy companionship 
                    while maintaining individual privacy. Each shared room is designed with accessibility features and includes 
                    separate spaces for personal belongings, fostering a sense of community and support.
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Outdoor Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 4,
              textAlign: 'center'
            }}
          >
            Outdoor
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'transparent' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/outdoor-spaces.jpg"
                  alt="Outdoor Spaces"
                  sx={{ borderRadius: 2 }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ mb: 2, color: '#c5e1a5' }}>
                    Outdoor Spaces
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    At Care Nest, our beautifully landscaped outdoor spaces offer residents a unique environment for relaxation and 
                    recreation. With gardens, walking paths, and seating areas, these spaces provide opportunities for fresh air, 
                    gentle exercise, and socializing with fellow residents in a peaceful setting.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'transparent' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/garden.jpg"
                  alt="Garden"
                  sx={{ borderRadius: 2 }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ mb: 2, color: '#c5e1a5' }}>
                    Garden
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    At Care Nest, our meticulously maintained gardens offer residents a tranquil retreat where they can connect with 
                    nature. These serene outdoor spaces feature walking paths, seating areas, and a variety of flowers and plants, 
                    providing the perfect environment for gentle exercise and socializing with fellow residents.
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Common Areas Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 4,
              textAlign: 'center'
            }}
          >
            Common Areas
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card sx={{ height: '100%', bgcolor: 'transparent' }}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <CardMedia
                    component="img"
                    sx={{ 
                      width: { xs: '100%', md: '48%' },
                      height: 300,
                      borderRadius: 2 
                    }}
                    image="/images/common-area1.jpg"
                    alt="Common Area 1"
                  />
                  <CardMedia
                    component="img"
                    sx={{ 
                      width: { xs: '100%', md: '48%' },
                      height: 300,
                      borderRadius: 2 
                    }}
                    image="/images/common-area2.jpg"
                    alt="Common Area 2"
                  />
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    Residents have access to beautifully furnished common areas, including lounges, dining rooms, and gardens, encouraging 
                    socialization and recreational activities.
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

export default Accommodation;
