import React, { useState } from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DonationPage from '../DonationPage/DonationPage';

const Donation = () => {
  const [showDonationPage, setShowDonationPage] = useState(false);

  const handleDonateClick = () => {
    setShowDonationPage(true);
  };

  const handleCloseDonation = () => {
    setShowDonationPage(false);
  };

  return (
    <>
      <Box 
        sx={{ 
          py: 8,
          backgroundColor: '#1a472a',
          color: 'white',
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
              fontFamily: "'Playfair Display', serif"
            }}
          >
            Donation
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}
          >
            Your generous donation helps us provide better care and facilities for our elderly residents. 
            Every contribution makes a difference in enhancing their quality of life and ensuring they 
            receive the best possible care in their golden years.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mb: 4
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<FavoriteIcon />}
              onClick={handleDonateClick}
              sx={{
                backgroundColor: 'white',
                color: '#1a472a',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              Donate Now
            </Button>
          </Box>
          <Paper
            sx={{
              p: 3,
              maxWidth: 600,
              mx: 'auto',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <Typography variant="h6" gutterBottom>
              Bank Details
            </Typography>
            <Typography variant="body1">
              Account Name: CareNest Foundation
              <br />
              Account Number: XXXX-XXXX-XXXX-XXXX
              <br />
              Bank Name: Example Bank
              <br />
              SWIFT Code: XXXXXX
            </Typography>
          </Paper>
        </Container>
      </Box>

      {showDonationPage && <DonationPage onClose={handleCloseDonation} />}
    </>
  );
};

export default Donation;
