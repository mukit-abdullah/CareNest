import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  ImageList, 
  ImageListItem,
  Modal,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

// These images should be repeated to match the grid in the image
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

// Repeat each image 6 times to create the grid pattern
const repeatedImages = Array(6).fill(galleryImages).flat();

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={{ bgcolor: '#1a472a', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: 'white',
            mb: 4,
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          Gallery
        </Typography>

        <Grid container spacing={2}>
          {repeatedImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingTop: '75%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  backgroundColor: '#0c2518',
                }}
              >
                <Box
                  component="img"
                  src={image.img}
                  alt={image.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Image Modal */}
        <Modal
          open={Boolean(selectedImage)}
          onClose={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              p: 2
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImage && (
              <>
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: 'calc(90vh - 100px)',
                    objectFit: 'contain',
                  }}
                />
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" component="h2">
                    {selectedImage.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {selectedImage.description}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default GalleryPage;
