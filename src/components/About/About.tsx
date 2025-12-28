import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useStyles } from './About.styles';
import { useBaseStyles } from '../../styles';

const About = () => {
  const classes = useStyles();
  const baseClasses = useBaseStyles();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="about" className={classes.aboutSection}>
      <div className={baseClasses.containerLarge}>
        <div className={clsx(classes.aboutContent, baseClasses.textCenter)}>
          <h2 className={classes.sectionTitle}>About Us</h2>
          <p className={clsx(classes.sectionDescription)} style={{ marginBottom: '3rem' }}>
            Welcome to CodexVeer, your trusted partner in digital transformation. We specialize in 
            creating innovative web and mobile solutions that drive business growth.
          </p>
        </div>

        <div className={classes.aboutGrid}>
          <div>
            <h3 className={classes.aboutMainTitle}>
              Innovation Meets Excellence
            </h3>
            <p className={classes.aboutMainText}>
              At CodexVeer, we're more than just a development company. We're a team of passionate 
              technologists dedicated to bringing your vision to life. With years of experience in 
              web development, mobile applications, and custom software solutions, we've helped 
              hundreds of businesses achieve their digital goals.
            </p>
            <p className={classes.aboutMainText}>
              Our approach combines cutting-edge technology with user-centric design, ensuring that 
              every solution we deliver not only looks great but performs flawlessly. We believe in 
              building long-term partnerships with our clients, understanding their unique needs, 
              and delivering solutions that drive real business value.
            </p>
            <div className={classes.aboutTags}>
              <div className={classes.aboutTag}>
                <div className={classes.aboutTagText}>Agile Methodology</div>
              </div>
              <div className={classes.aboutTag}>
                <div className={classes.aboutTagText}>Quality First</div>
              </div>
              <div className={classes.aboutTag}>
                <div className={classes.aboutTagText}>Client-Focused</div>
              </div>
            </div>
          </div>

          <div className={classes.aboutCardsContainer}>
            <div 
              ref={(el) => { cardRefs.current[0] = el; }}
              className={clsx(classes.aboutCard, visibleCards.has(0) && 'visible')}
              style={{ transitionDelay: visibleCards.has(0) ? '0.1s' : '0s' }}
            >
              <div className={classes.aboutCardHeader}>
                <div className={classes.aboutCardIcon}>
                  <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={classes.aboutCardTitle}>Proven Track Record</h4>
                  <p className={classes.aboutCardText}>
                    Delivered 500+ successful projects across various industries and technologies.
                  </p>
                </div>
              </div>
            </div>

            <div 
              ref={(el) => { cardRefs.current[1] = el; }}
              className={clsx(classes.aboutCard, visibleCards.has(1) && 'visible')}
              style={{ transitionDelay: visibleCards.has(1) ? '0.2s' : '0s' }}
            >
              <div className={classes.aboutCardHeader}>
                <div className={classes.aboutCardIcon}>
                  <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={classes.aboutCardTitle}>Expert Team</h4>
                  <p className={classes.aboutCardText}>
                    Skilled developers, designers, and strategists working together to exceed expectations.
                  </p>
                </div>
              </div>
            </div>

            <div 
              ref={(el) => { cardRefs.current[2] = el; }}
              className={clsx(classes.aboutCard, visibleCards.has(2) && 'visible')}
              style={{ transitionDelay: visibleCards.has(2) ? '0.3s' : '0s' }}
            >
              <div className={classes.aboutCardHeader}>
                <div className={classes.aboutCardIcon}>
                  <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className={classes.aboutCardTitle}>Fast Delivery</h4>
                  <p className={classes.aboutCardText}>
                    Efficient processes and modern tools ensure timely delivery without compromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
