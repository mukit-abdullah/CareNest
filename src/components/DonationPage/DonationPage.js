import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const DonationPage = ({ onClose }) => {
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 8
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <img 
          src="/images/logo.png" 
          alt="Care Nest Logo" 
          style={{ 
            width: '200px', 
            marginBottom: '2rem' 
          }} 
        />
        
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            mb: 2
          }}
        >
          Donate to
        </Typography>
        
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: '#c5e1a5',
            mb: 3
          }}
        >
          Care Nest
        </Typography>
        
        <Typography
          variant="h5"
          sx={{
            mb: 6,
            color: '#c5e1a5'
          }}
        >
          Help Homeless Peoples
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 400,
            mx: 'auto'
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#8bc34a',
              color: 'black',
              py: 2,
              borderRadius: '30px',
              '&:hover': {
                backgroundColor: '#7cb342'
              }
            }}
            startIcon={
              <img 
                src="/images/bkash-logo.png" 
                alt="bKash" 
                style={{ height: '24px' }}
              />
            }
          >
            Donate With Bkash
          </Button>

          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#8bc34a',
              color: 'black',
              py: 2,
              borderRadius: '30px',
              '&:hover': {
                backgroundColor: '#7cb342'
              }
            }}
            startIcon={
              <img 
                src="/images/taptap-logo.png" 
                alt="Tap Tap" 
                style={{ height: '24px' }}
              />
            }
          >
            Donate With Taptap Send
          </Button>

          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#8bc34a',
              color: 'black',
              py: 2,
              borderRadius: '30px',
              '&:hover': {
                backgroundColor: '#7cb342'
              }
            }}
            startIcon={<AccountBalanceIcon />}
          >
            Donate With Bank Account
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default DonationPage;
