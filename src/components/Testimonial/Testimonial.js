import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonial = () => {
  return (
    <Box id="testimonial" sx={{ py: 8, scrollMarginTop: '64px' }}>
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
          Testimonial
        </Typography>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            backgroundColor: 'rgba(26, 71, 42, 0.05)',
            position: 'relative',
            maxWidth: 800,
            mx: 'auto'
          }}
        >
          <FormatQuoteIcon 
            sx={{ 
              fontSize: 60, 
              color: '#1a472a',
              opacity: 0.2,
              position: 'absolute',
              top: 20,
              left: 20
            }} 
          />
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontSize: '1.2rem',
              fontStyle: 'italic',
              mb: 3,
              pt: 3
            }}
          >
            "The care and attention provided at CareNest is exceptional. The staff treats my mother like family, 
            and the facilities are always clean and welcoming. It gives me peace of mind knowing she's in such 
            good hands."
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontFamily: "'Playfair Display', serif",
              color: '#1a472a'
            }}
          >
            - Sarah Mitchell
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
          >
            Resident's Daughter
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Testimonial;
