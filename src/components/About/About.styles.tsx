import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  aboutSection: {
    padding: '5rem 0',
    background: 'linear-gradient(to bottom right, #f9fafb, #eff6ff)',
  },
  aboutContent: {
    maxWidth: '896px',
    margin: '0 auto',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center',
    marginTop: '6rem',
  },
  aboutCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 0,
    transform: 'translateY(30px)',
    '&.visible': {
      opacity: 1,
      transform: 'translateY(0)',
    },
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.15)',
      '& $aboutCardIcon': {
        transform: 'scale(1.1) rotate(5deg)',
      },
    },
  },
  aboutCardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  aboutCardIcon: {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(to bottom right, #2563eb, #9333ea)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
    margin: '0 auto 5rem',
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
  aboutCardTitle: {
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem',
  },
  aboutCardText: {
    color: '#4b5563',
  },
  aboutMainTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1rem',
  },
  aboutMainText: {
    color: '#4b5563',
    marginBottom: '1rem',
    lineHeight: 1.6,
  },
  aboutTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  aboutTag: {
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'default',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#eff6ff',
    },
  },
  aboutTagText: {
    fontWeight: 600,
    color: '#111827',
  },
  aboutCardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
}));

