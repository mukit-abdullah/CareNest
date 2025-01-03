import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia,
  Button 
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    title: 'Accommodation',
    description: 'Comfortable and well-furnished rooms designed for senior living with safety features and modern amenities.',
    image: '/images/services/accommodation.jpg',
    features: [
      'Private and semi-private rooms',
      '24/7 emergency response system',
      'Housekeeping services',
      'Climate control'
    ]
  },
  {
    title: 'Medical Care',
    description: 'Professional healthcare services with regular check-ups and specialized medical attention when needed.',
    image: '/images/services/medical-care.jpg',
    features: [
      'Regular health monitoring',
      'Medication management',
      'Emergency medical response',
      'Specialist consultations'
    ]
  },
  {
    title: 'Social Activities',
    description: 'Engaging social programs and recreational activities to promote active and fulfilling lifestyle.',
    image: '/images/services/social-activities.jpg',
    features: [
      'Group activities',
      'Cultural events',
      'Educational programs',
      'Entertainment sessions'
    ]
  },
  {
    title: 'Personal Care',
    description: 'Personalized assistance with daily activities while maintaining dignity and independence.',
    image: '/images/services/personal-care.jpg',
    features: [
      'Grooming assistance',
      'Mobility support',
      'Dietary management',
      'Personal hygiene care'
    ]
  }
];

const Services = () => {
  return (
    <Box sx={{ bgcolor: '#1a472a', minHeight: '100vh', py: 8 }}>
      <Container>
        {/* Header */}
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
          Our Services
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    bgcolor: 'rgba(255,255,255,0.15)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={service.image}
                  alt={service.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#d4af37'
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography paragraph>
                    {service.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {service.features.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 1
                        }}
                      >
                        <ArrowForwardIcon sx={{ color: '#d4af37', fontSize: '0.8rem' }} />
                        <Typography variant="body2">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Services Section */}
        <Box sx={{ mt: 8, textAlign: 'center', color: 'white' }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontFamily: "'Playfair Display', serif",
              color: '#d4af37'
            }}
          >
            Additional Services
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {[
              'Transportation Services',
              'Religious Services',
              'Beauty & Salon Services',
              'Laundry Services',
              'Physical Therapy',
              'Memory Care'
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: 'white',
                    borderColor: '#d4af37',
                    py: 2,
                    '&:hover': {
                      borderColor: '#d4af37',
                      bgcolor: 'rgba(212, 175, 55, 0.1)'
                    }
                  }}
                >
                  {service}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
