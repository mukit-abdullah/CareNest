import React from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const galleryImages = [
  {
    img: '/images/gallery/social1.jpg',
    title: 'Social Activities'
  },
  {
    img: '/images/gallery/medical1.jpg',
    title: 'Medical Care'
  },
  {
    img: '/images/gallery/care1.jpg',
    title: 'Personal Care'
  },
  {
    img: '/images/gallery/activities1.jpg',
    title: 'Daily Activities'
  }
];

const Gallery = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/gallery');
  };

  return (
    <Box id="gallery" sx={{ py: 8, bgcolor: '#f5f5f5', scrollMarginTop: '64px' }}>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            mb: 6,
            fontFamily: "Playfair Display, serif",
            color: '#1a472a'
          }}
        >
          Our Gallery
        </Typography>
        <Grid container spacing={3}>
          {galleryImages.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.img}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            onClick={handleViewMore}
            sx={{
              color: '#1a472a',
              border: '2px solid #1a472a',
              padding: '8px 16px',
              borderRadius: '4px',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#1a472a',
                color: 'white',
                border: '2px solid #1a472a',
              }
            }}
          >
            View More Photos →
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;
