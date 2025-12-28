import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  section: {
    padding: '5rem 0',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 'clamp(1.875rem, 4vw, 3rem)',
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    opacity: 1,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 0.8s ease-out 0.2s forwards',
  },
  sectionDescription: {
    fontSize: '1.125rem',
    color: '#4b5563',
    textAlign: 'center',
    maxWidth: '672px',
    margin: '0 auto 4rem',
    opacity: 1,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 0.8s ease-out 0.4s forwards',
  },
  '@keyframes fadeInUp': {
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '6rem',
  },
  serviceCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid #e5e7eb',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    opacity: 0,
    transform: 'translateY(30px)',
    '&.visible': {
      opacity: 1,
      transform: 'translateY(0)',
    },
    '&:hover': {
      borderColor: '#93c5fd',
      boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.15), 0 10px 10px -5px rgba(147, 51, 234, 0.1)',
      backgroundColor: '#eff6ff',
      transform: 'translateY(-8px)',
      '& $serviceIcon': {
        transform: 'scale(1.1) rotate(5deg)',
      },
    },
  },
  serviceIcon: {
    color: '#2563eb',
    marginBottom: '1.5rem',
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1rem',
  },
  serviceDescription: {
    color: '#4b5563',
    marginBottom: '1.5rem',
    lineHeight: 1.6,
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 1.5rem',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    color: '#374151',
    marginBottom: '0.5rem',
  },
  checkIcon: {
    width: '20px',
    height: '20px',
    color: '#10b981',
    marginRight: '0.5rem',
    flexShrink: 0,
  },
  serviceLink: {
    color: '#2563eb',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    position: 'relative',
    '& svg': {
      transition: 'transform 0.3s ease',
    },
    '&:hover': {
      color: '#9333ea',
      '& svg': {
        transform: 'translateX(5px)',
      },
    },
  },
  heroButtonLarge: {
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '1.125rem',
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

