import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { handleSectionClick } from '../../utils/scrollToSection';
import { useStyles } from './Services.styles';
import { useBaseStyles } from '../../styles';

interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
}

const Services = () => {
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

  const services: Service[] = [
    {
      icon: (
        <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Website Development',
      description: 'Create stunning, high-performance websites that captivate your audience and drive results.',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Performance',
        'Modern UI/UX'
      ]
    },
    {
      icon: (
        <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS & Android',
        'Cross-Platform',
        'Native Performance',
        'App Store Ready'
      ]
    },
    {
      icon: (
        <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Custom Technical Solutions',
      description: 'Tailored software solutions designed to solve your unique business challenges and streamline operations.',
      features: [
        'Custom Software',
        'API Development',
        'Cloud Solutions',
        'System Integration'
      ]
    }
  ];

  return (
    <section id="services" className={classes.section}>
      <div className={baseClasses.containerLarge}>
        <div className={baseClasses.textCenter}>
          <h2 className={classes.sectionTitle}>Our Services</h2>
          <p className={classes.sectionDescription}>
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className={classes.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={clsx(classes.serviceCard, visibleCards.has(index) && 'visible')}
              style={{
                transitionDelay: visibleCards.has(index) ? `${index * 0.1}s` : '0s',
              }}
            >
              <div className={classes.serviceIcon}>
                {service.icon}
              </div>
              
              <h3 className={classes.serviceTitle}>
                {service.title}
              </h3>
              
              <p className={classes.serviceDescription}>
                {service.description}
              </p>
              
              <ul className={classes.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={classes.featureItem}>
                    <svg className={classes.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/services"
                className={classes.serviceLink}
              >
                Learn More
                <svg style={{ width: '16px', height: '16px', marginLeft: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className={baseClasses.textCenter}>
          <a
            href="#contact"
            onClick={(e) => handleSectionClick(e, 'contact')}
            className={classes.heroButtonLarge}
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
