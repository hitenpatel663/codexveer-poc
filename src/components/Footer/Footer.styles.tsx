import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#111827',
    color: '#d1d5db',
    padding: '3rem 0',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  footerTitle: {
    color: 'white',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerListItem: {
    marginBottom: '0.5rem',
  },
  footerLink: {
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s',
    '&:hover': {
      color: 'white',
    },
  },
  footerDivider: {
    borderTop: '1px solid #374151',
    marginTop: '2rem',
    paddingTop: '2rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#9ca3af',
  },
  footerCompanyInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  footerLogoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  footerLogoBox: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(to bottom right, #2563eb, #9333ea)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerLogoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  footerBrand: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
  },
  footerDescription: {
    fontSize: '0.875rem',
    color: '#9ca3af',
  },
  footerContactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  footerContactText: {
    fontSize: '0.875rem',
  },
}));

