import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  hero: {
    paddingTop: '8rem',
    paddingBottom: '5rem',
    position: 'relative',
    overflow: 'hidden',
    background: '#ffffff',
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    alignItems: 'center',
  },
  floatingShapesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  floatingShape: {
    position: 'absolute',
    animation: '$float 6s ease-in-out infinite',
  },
  orangeBlob: {
    width: '300px',
    height: '300px',
    top: '-10%',
    left: '-5%',
    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3), rgba(147, 51, 234, 0.2))',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: '$floatBlob 8s ease-in-out infinite',
    animationDelay: '0s',
  },
  orangeDot: {
    width: '20px',
    height: '20px',
    top: '15%',
    right: '10%',
    background: '#2563eb',
    borderRadius: '50%',
    animation: '$floatDot1 5s ease-in-out infinite',
    animationDelay: '1s',
  },
  orangeTriangle: {
    width: 0,
    height: 0,
    top: '75%',
    left: '28%',
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderBottom: '25px solid rgb(183, 128, 235)',
    animation: '$floatTriangle1 7s ease-in-out infinite',
    animationDelay: '0.5s',
  },
  greenDot: {
    width: '16px',
    height: '16px',
    top: '40%',
    right: '15%',
    background: '#9333ea',
    borderRadius: '50%',
    animation: '$floatDot2 6s ease-in-out infinite',
    animationDelay: '2s',
  },
  greenTriangle: {
    width: 0,
    height: 0,
    top: '60%',
    left: '5%',
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
    borderBottom: '20px solid #9333ea',
    animation: '$floatTriangle2 8s ease-in-out infinite',
    animationDelay: '1.5s',
  },
  blueTriangle: {
    width: 0,
    height: 0,
    top: '25%',
    right: '28%',
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderBottom: '25px solid rgb(183, 128, 235)',
    animation: '$floatTriangle1 7s ease-in-out infinite',
    animationDelay: '0.5s',
  },
  pinkDot: {
    width: '18px',
    height: '18px',
    top: '50%',
    right: '8%',
    background: '#7c3aed',
    borderRadius: '50%',
    animation: '$floatDot3 5.5s ease-in-out infinite',
    animationDelay: '3s',
  },
  pinkWavy: {
    width: '40px',
    height: '8px',
    top: '50%',
    right: '20%',
    background: 'linear-gradient(90deg, #2563eb, #9333ea)',
    borderRadius: '20px',
    animation: '$floatWavy 6.5s ease-in-out infinite',
    animationDelay: '2.5s',
  },
  blueCircle: {
    width: '30px',
    height: '30px',
    top: '30%',
    right: '5%',
    background: 'rgba(147, 51, 234, 0.3)',
    borderRadius: '50%',
    animation: '$floatCircle 7s ease-in-out infinite',
    animationDelay: '1s',
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 2rem',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 968px)': {
      gridTemplateColumns: '1fr',
      gap: '3rem',
      textAlign: 'center',
    },
  },
  heroContent: {
    zIndex: 2,
    animation: '$fadeInLeft 0.8s ease-out',
    paddingRight: '2rem',
    '@media (max-width: 968px)': {
      textAlign: 'center',
      paddingRight: '0',
    },
  },
  heroSubtitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#2563eb',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    '@media (max-width: 968px)': {
      textAlign: 'center',
    },
  },
  heroVisual: {
    position: 'relative',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: '$fadeInRight 0.8s ease-out',
    overflow: 'visible',
    '@media (max-width: 968px)': {
      height: '500px',
      marginTop: '2rem',
    },
  },
  // Animated Gradient Orbs
  gradientOrb1: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    top: '10%',
    right: '10%',
    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4), rgba(147, 51, 234, 0.2), transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: '$pulseOrb1 4s ease-in-out infinite',
    zIndex: 0,
    '@media (max-width: 968px)': {
      width: '300px',
      height: '300px',
      top: '5%',
      right: '5%',
    },
  },
  gradientOrb2: {
    position: 'absolute',
    width: '350px',
    height: '350px',
    bottom: '15%',
    left: '15%',
    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3), rgba(37, 99, 235, 0.15), transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(50px)',
    animation: '$pulseOrb2 5s ease-in-out infinite',
    zIndex: 0,
    '@media (max-width: 968px)': {
      width: '250px',
      height: '250px',
      bottom: '10%',
      left: '10%',
    },
  },
  gradientOrb3: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    top: '50%',
    right: '20%',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35), rgba(147, 51, 234, 0.2), transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(45px)',
    animation: '$pulseOrb3 6s ease-in-out infinite',
    zIndex: 0,
    '@media (max-width: 968px)': {
      width: '200px',
      height: '200px',
    },
  },
  // Device Visuals Container
  deviceVisualsContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    perspective: '1200px',
  },
  macLaptopWrapper: {
    position: 'absolute',
    left: '50%',
    top: '57%',
    transform: 'translate(-65%, -55%)',
    zIndex: 3,
    '@media (max-width: 968px)': {
      transform: 'translate(-60%, -50%) scale(0.75)',
    },
  },
  mobileDeviceWrapper: {
    position: 'absolute',
    left: '67%',
    top: '50%',
    transform: 'translate(5%, -35%)',
    zIndex: 4,
    '@media (max-width: 968px)': {
      transform: 'translate(10%, -30%) scale(0.7)',
    },
  },
  deviceGlow1: {
    position: 'absolute',
    width: '500px',
    height: '400px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'radial-gradient(ellipse, rgba(37, 99, 235, 0.3), transparent 70%)',
    filter: 'blur(40px)',
    animation: '$glowPulse1 3s ease-in-out infinite',
    zIndex: 1,
    pointerEvents: 'none',
  },
  deviceGlow2: {
    position: 'absolute',
    width: '250px',
    height: '350px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'radial-gradient(ellipse, rgba(147, 51, 234, 0.25), transparent 70%)',
    filter: 'blur(30px)',
    animation: '$glowPulse2 3.5s ease-in-out infinite',
    zIndex: 1,
    pointerEvents: 'none',
  },
  // Service Badges
  serviceBadge1: {
    position: 'absolute',
    top: '15%',
    left: '5%',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
    backdropFilter: 'blur(20px)',
    padding: '0.875rem 1.25rem',
    borderRadius: '50px',
    boxShadow: '0 8px 32px rgba(37, 99, 235, 0.2), 0 0 0 1px rgba(37, 99, 235, 0.1)',
    zIndex: 5,
    animation: '$floatBadge1 6s ease-in-out infinite',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 40px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.2)',
    },
    '@media (max-width: 968px)': {
      top: '5%',
      left: '2%',
      padding: '0.625rem 1rem',
      transform: 'scale(0.85)',
    },
  },
  serviceBadge2: {
    position: 'absolute',
    top: '70%',
    right: '1%',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
    backdropFilter: 'blur(20px)',
    padding: '0.875rem 1.25rem',
    borderRadius: '50px',
    boxShadow: '0 8px 32px rgba(147, 51, 234, 0.2), 0 0 0 1px rgba(147, 51, 234, 0.1)',
    zIndex: 5,
    animation: '$floatBadge2 7s ease-in-out infinite',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 40px rgba(147, 51, 234, 0.3), 0 0 0 1px rgba(147, 51, 234, 0.2)',
    },
    '@media (max-width: 968px)': {
      top: '55%',
      right: '2%',
      padding: '0.625rem 1rem',
      transform: 'scale(0.85)',
    },
  },
  serviceBadge3: {
    position: 'absolute',
    bottom: '10%',
    left: '15%',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
    backdropFilter: 'blur(20px)',
    padding: '0.875rem 1.25rem',
    borderRadius: '50px',
    boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2), 0 0 0 1px rgba(99, 102, 241, 0.1)',
    zIndex: 5,
    animation: '$floatBadge3 5.5s ease-in-out infinite',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 40px rgba(99, 102, 241, 0.3), 0 0 0 1px rgba(99, 102, 241, 0.2)',
    },
    '@media (max-width: 968px)': {
      bottom: '5%',
      left: '10%',
      padding: '0.625rem 1rem',
      transform: 'scale(0.85)',
    },
  },
  badgeIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #2563eb, #9333ea)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexShrink: 0,
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
    '@media (max-width: 968px)': {
      width: '32px',
      height: '32px',
      '& svg': {
        width: '18px',
        height: '18px',
      },
    },
  },
  badgeText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.125rem',
  },
  badgeTitle: {
    fontSize: '0.875rem',
    fontWeight: 700,
    color: '#111827',
    lineHeight: 1.2,
    '@media (max-width: 968px)': {
      fontSize: '0.75rem',
    },
  },
  badgeSubtitle: {
    fontSize: '0.75rem',
    fontWeight: 500,
    color: '#6b7280',
    lineHeight: 1.2,
    '@media (max-width: 968px)': {
      fontSize: '0.625rem',
    },
  },
  // Code Particles
  codeParticle1: {
    position: 'absolute',
    top: '15%',
    right: '15%',
    fontSize: '2rem',
    fontWeight: 700,
    color: 'rgba(37, 99, 235, 0.4)',
    fontFamily: 'monospace',
    animation: '$floatCode1 8s ease-in-out infinite',
    zIndex: 1,
    pointerEvents: 'none',
    '@media (max-width: 968px)': {
      fontSize: '1.5rem',
      top: '20%',
      right: '10%',
    },
  },
  codeParticle2: {
    position: 'absolute',
    bottom: '5%',
    right: '25%',
    fontSize: '1.75rem',
    fontWeight: 700,
    color: 'rgba(147, 51, 234, 0.4)',
    fontFamily: 'monospace',
    animation: '$floatCode2 7s ease-in-out infinite',
    zIndex: 1,
    pointerEvents: 'none',
    '@media (max-width: 968px)': {
      fontSize: '1.25rem',
      bottom: '20%',
      right: '15%',
    },
  },
  codeParticle3: {
    position: 'absolute',
    top: '50%',
    left: '-20%',
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'rgba(99, 101, 241, 1)',
    fontFamily: 'monospace',
    animation: '$floatCode3 9s ease-in-out infinite',
    zIndex: 1,
    pointerEvents: 'none',
    '@media (max-width: 968px)': {
      fontSize: '1rem',
      top: '40%',
      left: '5%',
    },
  },
  isometricPanel: {
    position: 'relative',
    width: '90%',
    height: '80%',
    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1))',
    borderRadius: '24px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  illustrationPlaceholder: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1200px',
    '@media (max-width: 968px)': {
      flexDirection: 'column',
      gap: '1.5rem',
    },
  },
  macLaptop: {
    position: 'relative',
    width: '480px',
    height: '320px',
    transform: 'perspective(1200px) rotateY(-15deg) rotateX(8deg)',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: '$floatDevice1 6s ease-in-out infinite',
    zIndex: 3,
    cursor: 'pointer',
    '&:hover': {
      transform: 'perspective(1200px) rotateY(-15deg) rotateX(8deg) scale(1.05) translateY(-10px)',
    },
    // Screen
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '240px',
      top: 0,
      left: 0,
      background: '#ffffff',
      borderRadius: '18px 18px 6px 6px',
      border: '6px solid #e5e7eb',
      borderBottom: 'none',
      overflow: 'hidden',
      zIndex: 2,
      boxShadow: 'inset 0 0 0 2px rgba(0, 0, 0, 0.05), 0 12px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1)',
    },
    // MacBook base/keyboard
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '160px',
      height: '24px',
      top: '240px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(180deg, #f9fafb 0%, #e5e7eb 50%, #d1d5db 100%)',
      borderRadius: '0 0 10px 10px',
      zIndex: 1,
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
    },
    '& img': {
      position: 'absolute',
      width: 'calc(100% - 18px)',
      height: 'calc(240px - 18px)',
      top: '14px',
      left: '14px',
      objectFit: 'cover',
      display: 'block',
      borderRadius: '10px',
      zIndex: 3,
      border: '1px solid rgba(0, 0, 0, 0.1)',
    },
    '@media (max-width: 968px)': {
      width: '380px',
      height: '260px',
      transform: 'perspective(1000px) rotateY(-12deg) rotateX(6deg)',
      '&::before': {
        height: '210px',
      },
      '&::after': {
        top: '210px',
        width: '140px',
        height: '22px',
      },
      '& img': {
        width: 'calc(100% - 26px)',
        height: 'calc(210px - 26px)',
        top: '13px',
        left: '13px',
      },
      '&:hover': {
        transform: 'perspective(1000px) rotateY(-12deg) rotateX(6deg) scale(1.03) translateY(-8px)',
      },
    },
  },
  mobileDevice: {
    position: 'relative',
    width: '130px',
    height: '260px',
    transform: 'perspective(1200px) rotateY(18deg) rotateX(-10deg)',
    transformStyle: 'preserve-3d',
    background: '#ffffff',
    borderRadius: '15px',
    border: '7px solid #e5e7eb',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25), inset 0 0 0 2px rgba(255, 255, 255, 0.9), 0 0 0 1px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: '$floatDevice2 7s ease-in-out infinite',
    zIndex: 4,
    cursor: 'pointer',
    '&:hover': {
      transform: 'perspective(1200px) rotateY(18deg) rotateX(-10deg) scale(1.08) translateY(-8px)',
    },
    // Notch
    // '&::before': {
    //   content: '""',
    //   position: 'absolute',
    //   top: '12px',
    //   left: '50%',
    //   transform: 'translateX(-50%)',
    //   width: '70px',
    //   height: '28px',
    //   background: '#ffffff',
    //   borderRadius: '0 0 18px 18px',
    //   zIndex: 10,
    //   border: '4px solid #e5e7eb',
    //   borderTop: 'none',
    //   boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(0, 0, 0, 0.05)',
    // },
    // Home indicator
    // '&::after': {
    //   content: '""',
    //   position: 'absolute',
    //   bottom: '12px',
    //   left: '50%',
    //   transform: 'translateX(-50%)',
    //   width: '45px',
    //   height: '6px',
    //   background: '#d1d5db',
    //   borderRadius: '4px',
    //   zIndex: 10,
    //   boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(0, 0, 0, 0.1)',
    // },
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      borderRadius: '26px',
    },
    '@media (max-width: 968px)': {
      width: '110px',
      height: '220px',
      transform: 'perspective(1000px) rotateY(15deg) rotateX(-8deg)',
      '&::before': {
        width: '60px',
        height: '24px',
        top: '11px',
      },
      '&::after': {
        width: '40px',
        height: '5px',
        bottom: '11px',
      },
      '&:hover': {
        transform: 'perspective(1000px) rotateY(15deg) rotateX(-8deg) scale(1.06) translateY(-6px)',
      },
    },
  },
  folder: {
    position: 'absolute',
    width: '160px',
    height: '140px',
    background: 'rgba(147, 51, 234, 0.2)',
    borderRadius: '8px',
    bottom: '25%',
    right: '20%',
    border: '2px solid rgba(147, 51, 234, 0.3)',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
    fontWeight: 800,
    color: '#111827',
    marginBottom: '1.75rem',
    lineHeight: 1.2,
    textAlign: 'left',
    letterSpacing: '-0.02em',
    '@media (max-width: 968px)': {
      textAlign: 'center',
    },
  },
  heroTitleAccent: {
    color: '#2563eb',
  },
  heroDescription: {
    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
    color: '#6b7280',
    marginBottom: '2.5rem',
    lineHeight: 1.7,
    maxWidth: '580px',
    textAlign: 'left',
    fontWeight: 400,
    '@media (max-width: 968px)': {
      margin: '0 auto 2.5rem',
      textAlign: 'center',
      maxWidth: '100%',
    },
  },
  heroButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      justifyContent: 'center',
      flexDirection: 'column',
    },
    '@media (max-width: 640px)': {
      flexDirection: 'column',
    },
  },
  heroButtonLarge: {
    background: 'linear-gradient(135deg, #2563eb, #9333ea)',
    color: 'white',
    padding: '1.125rem 2.5rem',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '1.125rem',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
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
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 20px 30px -5px rgba(37, 99, 235, 0.5), 0 10px 15px -5px rgba(147, 51, 234, 0.3)',
      '&::before': {
        left: '100%',
      },
    },
    '&:active': {
      transform: 'translateY(-1px) scale(0.98)',
    },
  },
  '@keyframes fadeInLeft': {
    from: {
      opacity: 0,
      transform: 'translateX(-50px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  '@keyframes fadeInRight': {
    from: {
      opacity: 0,
      transform: 'translateX(50px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px)',
    },
    '50%': {
      transform: 'translateY(-30px) translateX(20px)',
    },
  },
  '@keyframes floatBlob': {
    '0%, 100%': {
      transform: 'translate(0, 0) scale(1)',
    },
    '33%': {
      transform: 'translate(50px, -80px) scale(1.2)',
    },
    '66%': {
      transform: 'translate(-40px, 40px) scale(0.9)',
    },
  },
  '@keyframes floatDot1': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px)',
    },
    '25%': {
      transform: 'translateY(-25px) translateX(15px)',
    },
    '50%': {
      transform: 'translateY(-15px) translateX(-10px)',
    },
    '75%': {
      transform: 'translateY(-30px) translateX(10px)',
    },
  },
  '@keyframes floatDot2': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px)',
    },
    '25%': {
      transform: 'translateY(-20px) translateX(-15px)',
    },
    '50%': {
      transform: 'translateY(-10px) translateX(20px)',
    },
    '75%': {
      transform: 'translateY(-25px) translateX(-5px)',
    },
  },
  '@keyframes floatDot3': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px)',
    },
    '25%': {
      transform: 'translateY(-18px) translateX(12px)',
    },
    '50%': {
      transform: 'translateY(-8px) translateX(-18px)',
    },
    '75%': {
      transform: 'translateY(-22px) translateX(8px)',
    },
  },
  '@keyframes floatTriangle1': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px) rotate(0deg)',
    },
    '25%': {
      transform: 'translateY(-30px) translateX(20px) rotate(15deg)',
    },
    '50%': {
      transform: 'translateY(-20px) translateX(-15px) rotate(-10deg)',
    },
    '75%': {
      transform: 'translateY(-35px) translateX(10px) rotate(20deg)',
    },
  },
  '@keyframes floatTriangle2': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px) rotate(0deg)',
    },
    '25%': {
      transform: 'translateY(-25px) translateX(-20px) rotate(-15deg)',
    },
    '50%': {
      transform: 'translateY(-15px) translateX(25px) rotate(10deg)',
    },
    '75%': {
      transform: 'translateY(-30px) translateX(-8px) rotate(-20deg)',
    },
  },
  '@keyframes floatWavy': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px) rotate(0deg)',
    },
    '25%': {
      transform: 'translateY(-20px) translateX(15px) rotate(5deg)',
    },
    '50%': {
      transform: 'translateY(-10px) translateX(-20px) rotate(-5deg)',
    },
    '75%': {
      transform: 'translateY(-25px) translateX(10px) rotate(8deg)',
    },
  },
  '@keyframes floatCircle': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px) scale(1)',
    },
    '25%': {
      transform: 'translateY(-22px) translateX(18px) scale(1.1)',
    },
    '50%': {
      transform: 'translateY(-12px) translateX(-22px) scale(0.9)',
    },
    '75%': {
      transform: 'translateY(-28px) translateX(12px) scale(1.05)',
    },
  },
  '@keyframes pulseOrb1': {
    '0%, 100%': {
      transform: 'translate(0, 0) scale(1)',
      opacity: 0.6,
    },
    '50%': {
      transform: 'translate(30px, -40px) scale(1.2)',
      opacity: 0.8,
    },
  },
  '@keyframes pulseOrb2': {
    '0%, 100%': {
      transform: 'translate(0, 0) scale(1)',
      opacity: 0.5,
    },
    '50%': {
      transform: 'translate(-25px, 35px) scale(1.15)',
      opacity: 0.7,
    },
  },
  '@keyframes pulseOrb3': {
    '0%, 100%': {
      transform: 'translate(0, 0) scale(1)',
      opacity: 0.4,
    },
    '50%': {
      transform: 'translate(20px, -30px) scale(1.1)',
      opacity: 0.6,
    },
  },
  '@keyframes glowPulse1': {
    '0%, 100%': {
      opacity: 0.5,
      transform: 'translate(-50%, -50%) scale(1)',
    },
    '50%': {
      opacity: 0.8,
      transform: 'translate(-50%, -50%) scale(1.1)',
    },
  },
  '@keyframes glowPulse2': {
    '0%, 100%': {
      opacity: 0.4,
      transform: 'translate(-50%, -50%) scale(1)',
    },
    '50%': {
      opacity: 0.7,
      transform: 'translate(-50%, -50%) scale(1.15)',
    },
  },
  '@keyframes floatDevice1': {
    '0%, 100%': {
      transform: 'perspective(1200px) rotateY(-15deg) rotateX(8deg) translateY(0px)',
    },
    '50%': {
      transform: 'perspective(1200px) rotateY(-15deg) rotateX(8deg) translateY(-15px)',
    },
  },
  '@keyframes floatDevice2': {
    '0%, 100%': {
      transform: 'perspective(1200px) rotateY(18deg) rotateX(-10deg) translateY(0px)',
    },
    '50%': {
      transform: 'perspective(1200px) rotateY(18deg) rotateX(-10deg) translateY(-12px)',
    },
  },
  '@keyframes floatBadge1': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px)',
    },
    '25%': {
      transform: 'translateY(-10px) translateX(5px)',
    },
    '50%': {
      transform: 'translateY(-5px) translateX(-5px)',
    },
    '75%': {
      transform: 'translateY(-12px) translateX(3px)',
    },
  },
  '@keyframes floatBadge2': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px)',
    },
    '25%': {
      transform: 'translateY(-8px) translateX(-6px)',
    },
    '50%': {
      transform: 'translateY(-4px) translateX(8px)',
    },
    '75%': {
      transform: 'translateY(-10px) translateX(-3px)',
    },
  },
  '@keyframes floatBadge3': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px)',
    },
    '25%': {
      transform: 'translateY(-12px) translateX(4px)',
    },
    '50%': {
      transform: 'translateY(-6px) translateX(-6px)',
    },
    '75%': {
      transform: 'translateY(-14px) translateX(2px)',
    },
  },
  '@keyframes floatCode1': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px) rotate(0deg)',
      opacity: 0.3,
    },
    '25%': {
      transform: 'translateY(-20px) translateX(10px) rotate(5deg)',
      opacity: 0.5,
    },
    '50%': {
      transform: 'translateY(-10px) translateX(-15px) rotate(-5deg)',
      opacity: 0.4,
    },
    '75%': {
      transform: 'translateY(-25px) translateX(8px) rotate(3deg)',
      opacity: 0.5,
    },
  },
  '@keyframes floatCode2': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px) rotate(0deg)',
      opacity: 0.3,
    },
    '25%': {
      transform: 'translateY(-15px) translateX(-12px) rotate(-4deg)',
      opacity: 0.5,
    },
    '50%': {
      transform: 'translateY(-8px) translateX(18px) rotate(4deg)',
      opacity: 0.4,
    },
    '75%': {
      transform: 'translateY(-18px) translateX(-8px) rotate(-3deg)',
      opacity: 0.5,
    },
  },
  '@keyframes floatCode3': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px) rotate(0deg)',
      opacity: 0.25,
    },
    '25%': {
      transform: 'translateY(-18px) translateX(8px) rotate(6deg)',
      opacity: 0.4,
    },
    '50%': {
      transform: 'translateY(-9px) translateX(-12px) rotate(-6deg)',
      opacity: 0.35,
    },
    '75%': {
      transform: 'translateY(-22px) translateX(6px) rotate(4deg)',
      opacity: 0.4,
    },
  },
}));


