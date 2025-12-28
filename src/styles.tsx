import { makeStyles } from '@mui/styles';

// Shared/Base styles that can be used across components
export const useBaseStyles = makeStyles(() => ({
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  containerLarge: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  textCenter: {
    textAlign: 'center',
  },
  buttonSecondary: {
    backgroundColor: 'white',
    color: '#374151',
    padding: '1.125rem 2.25rem',
    borderRadius: '12px',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-block',
    border: '2px solid #e5e7eb',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.08), transparent)',
      transition: 'left 0.5s',
    },
    '&:hover': {
      borderColor: '#2563eb',
      color: '#2563eb',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px -5px rgba(37, 99, 235, 0.3)',
      backgroundColor: '#f8fafc',
      '&::before': {
        left: '100%',
      },
    },
    '&:active': {
      transform: 'translateY(-1px)',
    },
  },
  buttonPrimary: {
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    color: 'white',
    padding: '0.625rem 1.5rem',
    borderRadius: '8px',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
      transition: 'left 0.5s',
    },
    '&:hover': {
      transform: 'translateY(-2px) scale(1.02)',
      boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.4), 0 10px 10px -5px rgba(147, 51, 234, 0.2)',
      '&::before': {
        left: '100%',
      },
    },
    '&:active': {
      transform: 'translateY(0) scale(0.98)',
    },
  },
}));
