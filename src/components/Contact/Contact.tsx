import { useState } from 'react';
import { useStyles } from './Contact.styles';
import { useBaseStyles } from '../../styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const classes = useStyles();
  const baseClasses = useBaseStyles();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={classes.section}>
      <div className={baseClasses.containerLarge}>
        <div className={baseClasses.textCenter}>
          <h2 className={classes.sectionTitle}>Contact Us</h2>
          <p className={classes.sectionDescription}>
          Get in touch with us 
          today and let's start building something amazing together
          </p>
        </div>

        <div className={classes.contactGrid}>
          {/* Contact Info */}
          <div>
            <h3 className={classes.contactInfoTitle}>
              Get in Touch
            </h3>
            <p className={classes.contactInfoText}>
              We're here to help you bring your vision to life. Whether you have a specific project 
              in mind or just want to explore possibilities, we'd love to hear from you.
            </p>

            <div className={classes.contactItems}>
              <div className={classes.contactItem}>
                <div className={classes.contactIcon}>
                  <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className={classes.contactItemTitle}>Email</h4>
                  <a href="mailto:hello@codexveer.com" className={classes.contactItemLink}>
                    hello@codexveer.com
                  </a>
                </div>
              </div>

              <div className={classes.contactItem}>
                <div className={classes.contactIcon}>
                  <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className={classes.contactItemTitle}>Phone</h4>
                  <a href="tel:+15551234567" className={classes.contactItemLink}>
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className={classes.contactItem}>
                <div className={classes.contactIcon}>
                  <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={classes.contactItemTitle}>Location</h4>
                  <p className={classes.contactItemText}>San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className={classes.form}>
              <div className={classes.formGroup}>
                <label htmlFor="name" className={classes.formLabel}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={classes.formInput}
                  placeholder="Your name"
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="email" className={classes.formLabel}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={classes.formInput}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="company" className={classes.formLabel}>
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={classes.formInput}
                  placeholder="Your company name"
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="message" className={classes.formLabel}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={classes.formTextarea}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className={classes.heroButtonLarge}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
