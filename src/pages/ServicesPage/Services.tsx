import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useStyles } from './ServicesPage.styles';
import { useBaseStyles } from '../../styles';

interface ServiceDetail {
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

const Services = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const classes = useStyles();
  const baseClasses = useBaseStyles();

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const services: ServiceDetail[] = [
    {
      icon: (
        <svg style={{ width: '64px', height: '64px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Website Development',
      description: 'We create stunning, high-performance websites that captivate your audience and drive results. From simple landing pages to complex web applications, we deliver solutions that combine beautiful design with powerful functionality.',
      features: [
        'Fully Responsive Design',
        'SEO Optimized',
        'Fast Loading Times',
        'Modern UI/UX Design',
        'Cross-Browser Compatibility',
        'Content Management Systems',
        'E-commerce Solutions',
        'Progressive Web Apps'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'WordPress', 'Shopify']
    },
    {
      icon: (
        <svg style={{ width: '64px', height: '64px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences. We develop apps for iOS and Android that are fast, intuitive, and ready for the app stores.',
      features: [
        'iOS & Android Development',
        'Cross-Platform Solutions',
        'Native Performance',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Secure Authentication',
        'Real-time Updates'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin']
    },
    {
      icon: (
        <svg style={{ width: '64px', height: '64px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Custom Technical Solutions',
      description: 'Tailored software solutions designed to solve your unique business challenges and streamline operations. We build custom systems that integrate seamlessly with your existing infrastructure.',
      features: [
        'Custom Software Development',
        'API Development & Integration',
        'Cloud Solutions & Migration',
        'System Integration',
        'Database Design & Optimization',
        'Microservices Architecture',
        'DevOps & CI/CD',
        'Legacy System Modernization'
      ],
      technologies: ['Python', 'Java', '.NET', 'AWS', 'Azure', 'Docker', 'Kubernetes']
    }
  ];

  return (
    <div className={classes.pageContainer}>
      {/* Hero Section */}
      <section className={clsx(baseClasses.containerLarge, classes.heroSection)}>
        <div className={clsx(classes.heroContent, baseClasses.textCenter)} style={{ maxWidth: '768px', margin: '0 auto' }}>
          <h1 className={classes.heroTitle}>Our Services</h1>
          <p className={classes.heroDescription}>
            Comprehensive technology solutions tailored to transform your business and drive growth
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className={baseClasses.containerLarge}>
        <div className={classes.servicesDetailGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={clsx(
                classes.serviceDetailItem,
                isDesktop && (index % 2 === 0 ? classes.serviceDetailItemDesktop : classes.serviceDetailItemDesktopReverse)
              )}
            >
              <div className={classes.serviceDetailContent}>
                <div className={classes.serviceIcon}>
                  {service.icon}
                </div>
                <h2 className={classes.serviceTitle}>
                  {service.title}
                </h2>
                <p className={classes.serviceDescription}>
                  {service.description}
                </p>

                <div className={classes.featuresGrid}>
                  <div>
                    <h3 className={classes.featuresTitle}>Key Features</h3>
                    <ul className={classes.featureList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={classes.featureItem}>
                          <svg className={classes.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className={classes.featuresTitle}>Technologies</h3>
                    <div className={classes.techTags}>
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className={classes.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/#contact"
                  className={classes.buttonPrimary}
                >
                  Get Started
                </Link>
              </div>

              <div className={classes.serviceDetailVisual}>
                <div className={classes.visualContent}>
                  <div className={classes.visualNumber}>
                    100%
                  </div>
                  <div className={classes.visualLabel}>Client Satisfaction</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={classes.ctaSection}>
        <div className={baseClasses.containerLarge}>
          <h2 className={classes.ctaTitle}>Ready to Start Your Project?</h2>
          <p className={classes.ctaDescription}>
            Let's discuss how we can help bring your vision to life with our expert development services.
          </p>
          <Link
            to="/#contact"
            className={classes.ctaButton}
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
