import React from 'react';
import { Box, Container, Typography, Grid, Card } from '@mui/material';
import BrainIcon from '@mui/icons-material/Psychology';
import EmergencyIcon from '@mui/icons-material/LocalHospital';
import HeartIcon from '@mui/icons-material/Favorite';
import NeurologyIcon from '@mui/icons-material/BiotechOutlined';

const MedicalCare = () => {
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
          <Box
            component="img"
            src="/images/medical-hero.jpg"
            alt="Medical Care"
            sx={{
              width: '100%',
              height: 400,
              objectFit: 'cover',
              borderRadius: 2,
              mb: 4
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 3,
              textAlign: 'center'
            }}
          >
            Medical Care
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
            At Care Nest, we provide 24/7 medical care and support with a dedicated team of healthcare professionals, including nurses and doctors. We offer 
            personalized care plans, regular health check-ups, and medication management to ensure each resident's specific health needs are met. Additionally, 
            we focus on preventive care and wellness programs, promoting a healthy lifestyle and enhancing the overall quality of life for our residents.
          </Typography>
        </Box>

        {/* Medical Services Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 4,
              textAlign: 'center'
            }}
          >
            Medical Services At Care Nest
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ p: 3, backgroundColor: '#c5e1a5', height: '100%', textAlign: 'center' }}>
                <BrainIcon sx={{ fontSize: 48, color: '#1a472a', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#1a472a' }}>
                  Psychiatry Department
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ p: 3, backgroundColor: '#c5e1a5', height: '100%', textAlign: 'center' }}>
                <EmergencyIcon sx={{ fontSize: 48, color: '#1a472a', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#1a472a' }}>
                  Emergency Department
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ p: 3, backgroundColor: '#c5e1a5', height: '100%', textAlign: 'center' }}>
                <HeartIcon sx={{ fontSize: 48, color: '#1a472a', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#1a472a' }}>
                  Cardiology Department
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ p: 3, backgroundColor: '#c5e1a5', height: '100%', textAlign: 'center' }}>
                <NeurologyIcon sx={{ fontSize: 48, color: '#1a472a', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#1a472a' }}>
                  Neurology Department
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Doctors Team Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 4,
              textAlign: 'center'
            }}
          >
            Our Dedicated Doctors Team
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ mb: 2, color: '#c5e1a5' }}>
                  Dr. Emily Carter
                </Typography>
                <Box
                  component="img"
                  src="/images/doctor1.jpg"
                  alt="Dr. Emily Carter"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    borderRadius: 2,
                    mb: 2
                  }}
                />
                <Typography variant="body1">
                  A renowned cardiologist specializing in preventive heart care and advanced cardiac imaging, 
                  with over 15 years of experience in treating heart diseases and conducting cutting-edge research on hypertension.
                </Typography>
              </Box>

              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ mb: 2, color: '#c5e1a5' }}>
                  Dr. Arjun Patel
                </Typography>
                <Box
                  component="img"
                  src="/images/doctor2.jpg"
                  alt="Dr. Arjun Patel"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    borderRadius: 2,
                    mb: 2
                  }}
                />
                <Typography variant="body1">
                  An expert neurologist with a focus on neurodegenerative disorders, particularly Alzheimer's and Parkinson's disease, 
                  dedicated to patient care and advancing brain health through innovative treatments.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h4" sx={{ mb: 2, color: '#c5e1a5' }}>
                  Dr. Abir Hasan
                </Typography>
                <Box
                  component="img"
                  src="/images/doctor3.jpg"
                  alt="Dr. Abir Hasan"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    borderRadius: 2,
                    mb: 2
                  }}
                />
                <Typography variant="body1">
                  A leading oncologist specializing in cancer immunotherapy and personalized treatment plans, 
                  committed to delivering compassionate care and advancing cancer research for better patient outcomes.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MedicalCare;
