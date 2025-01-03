export const styles = {
  footer: {
    bgcolor: '#1a472a',
    color: 'white',
    pt: 6,
    pb: 3
  },
  logo: {
    height: '60px'
  },
  socialIcons: {
    display: 'flex',
    gap: 1,
    justifyContent: { 
      xs: 'center', 
      md: 'flex-start' 
    }
  },
  socialIcon: {
    color: 'white',
    '&:hover': { 
      color: '#d4af37' 
    }
  },
  sectionTitle: {
    mb: 2,
    textAlign: { 
      xs: 'center', 
      md: 'left' 
    },
    fontFamily: "'Playfair Display', serif"
  },
  linkColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: { 
      xs: 'center', 
      md: 'flex-start' 
    }
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    '&:hover': {
      color: '#d4af37'
    }
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    alignItems: { 
      xs: 'center', 
      md: 'flex-start' 
    }
  },
  contactIcon: {
    color: '#d4af37'
  },
  divider: {
    my: 3,
    borderColor: 'rgba(255,255,255,0.1)'
  },
  copyright: {
    pt: 2,
    opacity: 0.8,
    fontFamily: "'Playfair Display', serif"
  }
};
