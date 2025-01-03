import React from 'react';
import { Box, Container } from '@mui/material';
import PropTypes from 'prop-types';

const PageContainer = ({
  children,
  backgroundColor = 'transparent',
  maxWidth = 'lg',
  paddingY = 8,
}) => {
  return (
    <Box sx={{ backgroundColor, py: paddingY }}>
      <Container maxWidth={maxWidth}>
        {children}
      </Container>
    </Box>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  paddingY: PropTypes.number,
};

export default PageContainer;
