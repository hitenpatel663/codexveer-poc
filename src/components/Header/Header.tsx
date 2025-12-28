import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { handleSectionClick } from '../../utils/scrollToSection';
import { useStyles } from './Header.styles';
import { useBaseStyles } from '../../styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const classes = useStyles();
  const baseClasses = useBaseStyles();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(classes.header, isScrolled && 'scrolled')}>
      <nav className={clsx(baseClasses.containerLarge)} style={{ padding: '0 1rem' }}>
        <div className={classes.nav}>
          {/* Logo */}
          <Link to="/" className={classes.logoContainer}>
            <div className={classes.logoBox}>
              <span className={classes.logoText}>C</span>
            </div>
            <span className={classes.logoBrand}>CodexVeer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={classes.navLinks} style={{ display: isMobile ? 'none' : 'flex' }}>
            <Link
              to="/"
              className={clsx(classes.navLink, hoveredLink === 'home' && classes.navLinkActive)}
              onMouseEnter={() => setHoveredLink('home')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={clsx(classes.navLink, hoveredLink === 'services' && classes.navLinkActive)}
              onMouseEnter={() => setHoveredLink('services')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Services
            </Link>
            {location.pathname === '/' ? (
              <>
                <a
                  href="#about"
                  onClick={(e) => handleSectionClick(e, 'about')}
                  className={clsx(classes.navLink, hoveredLink === 'about' && classes.navLinkActive)}
                  onMouseEnter={() => setHoveredLink('about')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleSectionClick(e, 'contact')}
                  className={clsx(classes.navLink, hoveredLink === 'contact' && classes.navLinkActive)}
                  onMouseEnter={() => setHoveredLink('contact')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/#about"
                  className={clsx(classes.navLink, hoveredLink === 'about' && classes.navLinkActive)}
                  onMouseEnter={() => setHoveredLink('about')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  About
                </Link>
                <Link
                  to="/#contact"
                  className={clsx(classes.navLink, hoveredLink === 'contact' && classes.navLinkActive)}
                  onMouseEnter={() => setHoveredLink('contact')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Contact
                </Link>
              </>
            )}
            <Link
              to={location.pathname === '/' ? '#contact' : '/#contact'}
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleSectionClick(e, 'contact');
                }
              }}
              className={classes.buttonPrimary}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={clsx(classes.mobileMenuButton, !isMobile && classes.mobileMenuButtonHidden)}
            aria-label="Toggle menu"
          >
            <svg
              style={{ width: '24px', height: '24px' }}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={classes.mobileMenu}>
            <Link
              to="/"
              className={classes.mobileMenuLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={classes.mobileMenuLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            {location.pathname === '/' ? (
              <>
                <a
                  href="#about"
                  onClick={(e) => {
                    handleSectionClick(e, 'about');
                    setIsMenuOpen(false);
                  }}
                  className={classes.mobileMenuLink}
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleSectionClick(e, 'contact');
                    setIsMenuOpen(false);
                  }}
                  className={classes.mobileMenuLink}
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/#about"
                  className={classes.mobileMenuLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/#contact"
                  className={classes.mobileMenuLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </>
            )}
            <Link
              to={location.pathname === '/' ? '#contact' : '/#contact'}
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleSectionClick(e, 'contact');
                }
                setIsMenuOpen(false);
              }}
              className={clsx(classes.buttonPrimary, classes.buttonPrimaryMobile)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
