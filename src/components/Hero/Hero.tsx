import clsx from 'clsx';
import { handleSectionClick } from '../../utils/scrollToSection';
import { useStyles } from './Hero.styles';
import desktopImage from '../../assets/desktop.png';
import mobileImage from '../../assets/mobile.png';

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      {/* Floating Background Shapes */}
      <div className={classes.floatingShapesContainer}>
        <div className={clsx(classes.floatingShape, classes.orangeBlob)} />
        <div className={clsx(classes.floatingShape, classes.orangeDot)} />
        <div className={clsx(classes.floatingShape, classes.orangeTriangle)} />
        <div className={clsx(classes.floatingShape, classes.greenDot)} />
        <div className={clsx(classes.floatingShape, classes.greenTriangle)} />
        <div className={clsx(classes.floatingShape, classes.pinkDot)} />
        <div className={clsx(classes.floatingShape, classes.pinkWavy)} />
        <div className={clsx(classes.floatingShape, classes.blueTriangle)} />
        <div className={clsx(classes.floatingShape, classes.blueCircle)} />
      </div>

      <div className={classes.heroContainer}>
        {/* Left Content */}
        <div className={classes.heroContent}>
          <p className={classes.heroSubtitle}>Business & Digital Marketing</p>
          <h1 className={classes.heroTitle}>
            Grow Your Business With <span className={classes.heroTitleAccent}>CodexVeer!</span>
          </h1>
          <p className={classes.heroDescription}>
            Ever since the 1500s, when an unknown is simply dummy text the printing. 
            Dolor sit amet, consectetur adipisicing elit, sed do eius
          </p>
          <div className={classes.heroButtons}>
            <a
              href="#contact"
              onClick={(e) => handleSectionClick(e, 'contact')}
              className={classes.heroButtonLarge}
            >
              Start Now
            </a>
          </div>
        </div>

        {/* Right Side - Creative Visual */}
        <div className={classes.heroVisual}>
          {/* Animated Gradient Orbs */}
          <div className={classes.gradientOrb1} />
          <div className={classes.gradientOrb2} />
          <div className={classes.gradientOrb3} />
          
          {/* Device Visuals Container */}
          <div className={classes.deviceVisualsContainer}>
            {/* Desktop/Laptop Device */}
            <div className={classes.macLaptopWrapper}>
              <div className={classes.macLaptop}>
                <img src={desktopImage} alt="Website Development" />
              </div>
              {/* Glow Effect */}
              <div className={classes.deviceGlow1} />
            </div>

            {/* Mobile Device */}
            <div className={classes.mobileDeviceWrapper}>
              <div className={classes.mobileDevice}>
                <img src={mobileImage} alt="Mobile App Development" />
              </div>
              {/* Glow Effect */}
              <div className={classes.deviceGlow2} />
            </div>
          </div>

          {/* Floating Service Badges */}
          <div className={classes.serviceBadge1}>
            <div className={classes.badgeIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor"/>
              </svg>
            </div>
            <div className={classes.badgeText}>
              <span className={classes.badgeTitle}>Web</span>
              <span className={classes.badgeSubtitle}>Development</span>
            </div>
          </div>

          <div className={classes.serviceBadge2}>
            <div className={classes.badgeIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19Z" fill="currentColor"/>
              </svg>
            </div>
            <div className={classes.badgeText}>
              <span className={classes.badgeTitle}>Mobile</span>
              <span className={classes.badgeSubtitle}>Apps</span>
            </div>
          </div>

          <div className={classes.serviceBadge3}>
            <div className={classes.badgeIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="currentColor"/>
              </svg>
            </div>
            <div className={classes.badgeText}>
              <span className={classes.badgeTitle}>Custom</span>
              <span className={classes.badgeSubtitle}>Solutions</span>
            </div>
          </div>

          {/* Floating Code Particles */}
          <div className={classes.codeParticle1}>{"< />"}</div>
          <div className={classes.codeParticle2}>{"{ }"}</div>
          <div className={classes.codeParticle3}>{"[ ]"}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
