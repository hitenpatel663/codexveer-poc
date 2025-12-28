import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { handleSectionClick } from '../../utils/scrollToSection';
import { useStyles } from './Footer.styles';
import { useBaseStyles } from '../../styles';

const Footer = () => {
  const location = useLocation();
  const classes = useStyles();
  const baseClasses = useBaseStyles();
  
  return (
    <footer className={classes.footer}>
      <div className={baseClasses.containerLarge}>
        <div className={classes.footerGrid}>
          {/* Company Info */}
          <div className={classes.footerCompanyInfo}>
            <div className={classes.footerLogoContainer}>
              <div className={classes.footerLogoBox}>
                <span className={classes.footerLogoText}>C</span>
              </div>
              <span className={classes.footerBrand}>CodexVeer</span>
            </div>
            <p className={classes.footerDescription}>
              Transforming ideas into powerful digital solutions. Your trusted partner in technology innovation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className={classes.footerTitle}>Services</h3>
            <ul className={classes.footerList}>
              <li className={classes.footerListItem}>
                <Link to="/services" className={classes.footerLink}>
                  Website Development
                </Link>
              </li>
              <li className={classes.footerListItem}>
                <Link to="/services" className={classes.footerLink}>
                  Mobile App Development
                </Link>
              </li>
              <li className={classes.footerListItem}>
                <Link to="/services" className={classes.footerLink}>
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={classes.footerTitle}>Company</h3>
            <ul className={classes.footerList}>
              <li className={classes.footerListItem}>
                {location.pathname === '/' ? (
                  <a
                    href="#about"
                    onClick={(e) => handleSectionClick(e, 'about')}
                    className={classes.footerLink}
                  >
                    About Us
                  </a>
                ) : (
                  <Link to="/#about" className={classes.footerLink}>
                    About Us
                  </Link>
                )}
              </li>
              <li className={classes.footerListItem}>
                {location.pathname === '/' ? (
                  <a
                    href="#contact"
                    onClick={(e) => handleSectionClick(e, 'contact')}
                    className={classes.footerLink}
                  >
                    Contact
                  </a>
                ) : (
                  <Link to="/#contact" className={classes.footerLink}>
                    Contact
                  </Link>
                )}
              </li>
              <li className={classes.footerListItem}>
                <Link to="/" className={classes.footerLink}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={classes.footerTitle}>Get in Touch</h3>
            <ul className={classes.footerList}>
              <li className={clsx(classes.footerListItem, classes.footerContactItem)}>
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className={classes.footerContactText}>hello@codexveer.com</span>
              </li>
              <li className={clsx(classes.footerListItem, classes.footerContactItem)}>
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className={classes.footerContactText}>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.footerDivider}>
          <p>&copy; {new Date().getFullYear()} CodexVeer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
