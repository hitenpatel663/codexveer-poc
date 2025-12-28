import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  pageContainer: {
    paddingTop: '8rem',
    paddingBottom: '5rem',
  },
  heroSection: {
    marginBottom: '5rem',
  },
  heroContent: {
    maxWidth: '768px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1.5rem',
    lineHeight: 1.2,
  },
  heroDescription: {
    fontSize: '1.25rem',
    color: '#4b5563',
    marginBottom: '2.5rem',
    lineHeight: 1.6,
    maxWidth: '672px',
    margin: '0 auto 2.5rem',
  },
  servicesDetailGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6rem',
  },
  serviceDetailItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    alignItems: 'center',
  },
  serviceDetailItemDesktop: {
    flexDirection: 'row',
  },
  serviceDetailItemDesktopReverse: {
    flexDirection: 'row-reverse',
  },
  serviceDetailContent: {
    flex: 1,
  },
  serviceIcon: {
    color: '#2563eb',
    marginBottom: '1.5rem',
  },
  serviceTitle: {
    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1rem',
  },
  serviceDescription: {
    fontSize: '1.125rem',
    color: '#4b5563',
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  featuresTitle: {
    fontWeight: 600,
    color: '#111827',
    marginBottom: '0.75rem',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
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
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTag: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#eff6ff',
    color: '#1e40af',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  serviceDetailVisual: {
    flex: 1,
    width: '100%',
    background: 'linear-gradient(to bottom right, #eff6ff, #faf5ff)',
    borderRadius: '16px',
    padding: '2rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  visualContent: {
    textAlign: 'center',
  },
  visualNumber: {
    fontSize: '3.75rem',
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: '0.5rem',
  },
  visualLabel: {
    color: '#4b5563',
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
  ctaSection: {
    marginTop: '6rem',
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    color: 'white',
    padding: '4rem 0',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  ctaDescription: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '2rem',
    maxWidth: '672px',
    margin: '0 auto 2rem',
  },
  ctaButton: {
    backgroundColor: 'white',
    color: '#2563eb',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '1.125rem',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    },
  },
}));

