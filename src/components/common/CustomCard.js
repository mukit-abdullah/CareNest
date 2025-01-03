import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';

const CustomCard = ({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  imageHeight = 140,
  elevation = 1,
}) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
      }} 
      elevation={elevation}
    >
      {image && (
        <CardMedia
          component="img"
          height={imageHeight}
          image={image}
          alt={title}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        {buttonText && (
          <Box sx={{ mt: 'auto' }}>
            <Button 
              size="small" 
              onClick={onButtonClick}
              sx={{ 
                color: '#1a472a',
                '&:hover': {
                  backgroundColor: 'rgba(26, 71, 42, 0.1)',
                },
              }}
            >
              {buttonText}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

CustomCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  imageHeight: PropTypes.number,
  elevation: PropTypes.number,
};

export default CustomCard;
