import React, { useState } from 'react';
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Accommodation from '../Accommodation/Accommodation';
import MedicalCare from '../MedicalCare/MedicalCare';
import Activities from '../Activities/Activities';

const services = [
  {
    title: 'Accommodation',
    description: 'Comfortable and secure living spaces designed for seniors',
    image: '/images/accommodation.jpg'
  },
  {
    title: 'Medical Care',
    description: '24/7 medical support and regular health checkups',
    image: '/images/medical.jpg'
  },
  {
    title: 'Healthy Diet',
    description: 'Nutritious and customized meal plans for residents',
    image: '/images/diet.jpg'
  },
  {
    title: 'Daily Activities',
    description: 'Engaging social and recreational activities',
    image: '/images/activities.jpg'
  }
];

const Services = () => {
  const [showAccommodation, setShowAccommodation] = useState(false);
  const [showMedicalCare, setShowMedicalCare] = useState(false);
  const [showActivities, setShowActivities] = useState(false);

  const handleInquireClick = (serviceTitle) => {
    switch (serviceTitle) {
      case 'Accommodation':
        setShowAccommodation(true);
        break;
      case 'Medical Care':
        setShowMedicalCare(true);
        break;
      case 'Daily Activities':
        setShowActivities(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Box id="services" sx={{ py: 8, backgroundColor: '#f5f5f5', scrollMarginTop: '64px' }}>
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
            Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                    <Button 
                      variant="contained"
                      size="small" 
                      onClick={() => handleInquireClick(service.title)}
                      sx={{ 
                        mt: 2,
                        backgroundColor: '#1a472a',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#0f2b1a'
                        }
                      }}
                    >
                      Inquire Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {showAccommodation && <Accommodation onClose={() => setShowAccommodation(false)} />}
      {showMedicalCare && <MedicalCare onClose={() => setShowMedicalCare(false)} />}
      {showActivities && <Activities onClose={() => setShowActivities(false)} />}
    </>
  );
};

export default Services;
