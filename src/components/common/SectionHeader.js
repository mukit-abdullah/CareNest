import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const SectionHeader = ({ title, subtitle, align = 'center', color = 'primary' }) => {
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        align={align}
        sx={{
          mb: subtitle ? 2 : 6,
          fontFamily: "'Playfair Display', serif",
          color: color === 'primary' ? '#1a472a' : 'inherit'
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          align={align}
          sx={{ mb: 6, maxWidth: '800px', mx: align === 'center' ? 'auto' : 0 }}
          color="text.secondary"
        >
          {subtitle}
        </Typography>
      )}
    </>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.oneOf(['primary', 'inherit']),
};

export default SectionHeader;
