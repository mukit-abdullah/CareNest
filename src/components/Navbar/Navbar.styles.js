export const styles = {
  appBar: (scrolled) => ({
    bgcolor: scrolled ? '#1a472a' : 'transparent',
    boxShadow: scrolled ? 1 : 'none',
    transition: 'all 0.3s ease-in-out',
    '& .MuiToolbar-root': {
      padding: { xs: '0.5rem 1rem', md: '1rem 2rem' }
    }
  }),
  logo: {
    height: { xs: '40px', md: '50px' },
    transition: 'height 0.3s ease'
  },
  navButton: (isActive) => ({
    color: 'white',
    textTransform: 'none',
    fontFamily: "'Playfair Display', serif",
    fontSize: '1rem',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: isActive ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)',
      width: '100%',
      height: '2px',
      bgcolor: 'white',
      transition: 'transform 0.3s ease',
    },
    '&:hover::after': {
      transform: 'translateX(-50%) scaleX(1)',
    }
  }),
  mobileDrawer: {
    display: { xs: 'block', md: 'none' },
    '& .MuiDrawer-paper': { 
      boxSizing: 'border-box', 
      width: 240,
      bgcolor: '#1a472a'
    },
  },
  drawerItem: {
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    '&:last-child': { borderBottom: 'none' }
  },
  drawerLink: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.1rem'
  }
};
