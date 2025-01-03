import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function ContactSection() {
  return (
    <Box 
      sx={{ 
        py: 8, 
        backgroundColor: '#f5f5f5',
        scrollMarginTop: '64px'
      }}
    >
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            mb: 4,
            fontFamily: "'Playfair Display', serif",
            color: '#1a472a'
          }}
        >
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box component="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    required
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    type="tel"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#1a472a',
                      color: 'white',
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: '#0f2b1a'
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', minHeight: 300 }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontFamily: "'Playfair Display', serif",
                  color: '#1a472a'
                }}
              >
                Get in Touch
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ color: '#1a472a', mr: 2 }} />
                <Typography>
                  123 Care Street, Elderly Care City, EC 12345
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ color: '#1a472a', mr: 2 }} />
                <Typography>
                  +1 234 567 8900
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ color: '#1a472a', mr: 2 }} />
                <Typography>
                  info@carenest.com
                </Typography>
              </Box>
              <Typography>
                Hours: Monday - Sunday: 24/7
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactSection;
