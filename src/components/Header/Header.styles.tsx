import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&.scrolled': {
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
    },
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  logoBox: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(to bottom right, #2563eb, #9333ea)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'rotate(5deg) scale(1.1)',
    },
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  logoBrand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLink: {
    color: '#374151',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-4px',
      left: 0,
      width: 0,
      height: '2px',
      background: 'linear-gradient(to right, #2563eb, #9333ea)',
      transition: 'width 0.3s ease',
    },
    '&:hover': {
      color: '#2563eb',
      '&::after': {
        width: '100%',
      },
    },
  },
  navLinkActive: {
    color: '#2563eb',
  },
  buttonPrimary: {
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    color: 'white',
    padding: '0.625rem 1.5rem',
    borderRadius: '8px',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem 0',
    borderTop: '1px solid #e5e7eb',
  },
  mobileMenuLink: {
    display: 'block',
    color: '#374151',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.2s',
    '&:hover': {
      color: '#2563eb',
    },
  },
  mobileMenuButton: {
    display: 'block',
    padding: '0.5rem',
    borderRadius: '8px',
    color: '#374151',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f3f4f6',
    },
  },
  mobileMenuButtonHidden: {
    display: 'none',
  },
  buttonPrimaryMobile: {
    display: 'block',
    textAlign: 'center',
  },
}));

