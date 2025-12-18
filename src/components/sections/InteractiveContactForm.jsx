'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const InteractiveContactForm = () => {
  const [buttonState, setButtonState] = useState('idle'); // idle, sending, sent
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: 5000,
  });

  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const formSteps = ['Your Details', 'Project Info', 'Message'];
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const submitButtonRef = useRef(null);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize GSAP animations
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, []);

  // Service options - clean design without emojis
  const serviceOptions = [
    { value: 'fullstack', label: 'Full-Stack Development' },
    { value: 'software', label: 'Software Engineering' },
    { value: 'devops', label: 'DevOps & Cloud' },
    { value: 'security', label: 'Security & Compliance' },
    { value: 'ai', label: 'AI & Machine Learning' },
    { value: 'automation', label: 'Process Automation' }
  ];

  // Budget ranges
  const budgetRanges = [
    { value: '1000-5000', label: '$1,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-25000', label: '$10,000 - $25,000' },
    { value: '25000+', label: '$25,000+' }
  ];

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonState('sending');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setButtonState('sent');

      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          budget: '5000-10000',
        });
        setFormStep(0);
        setIsSubmitted(false);
        setButtonState('idle');
      }, 5000);
    }, 1200);
  };

  // Form input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Service selection handler
  const handleServiceSelect = (service) => {
    setFormData({
      ...formData,
      service: service.value
    });
  };

  // Budget selection handler
  const handleBudgetSelect = (budget) => {
    setFormData({
      ...formData,
      budget: budget.value
    });
  };

  // Validation check for each step
  const canProceed = () => {
    if (formStep === 0) {
      return formData.name && formData.email;
    }
    if (formStep === 1) {
      return formData.service && formData.budget;
    }
    return formData.message;
  };

  // Form navigation handlers
  const goToNextStep = () => {
    if (formStep < formSteps.length - 1) {
      setFormStep(current => current + 1);
    }
  };

  const goToPrevStep = () => {
    if (formStep > 0) {
      setFormStep(current => current - 1);
    }
  };

  return (
    <section
      className="interactive-contact-section"
      ref={containerRef}
      style={{
        position: 'relative',
        padding: isMobile ? '2.5rem 0' : '60px 0',
        backgroundImage: 'url(/formbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'var(--background)',
        color: 'var(--text-on-light)',
        overflow: 'visible',
        marginTop: '-1px',
      }}
    >
      {/* Background overlay to reduce intensity */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.70)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      <div
        className="container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 1rem' : '0 2rem',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <motion.div
          ref={headerRef}
          className="section-header"
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '1.5rem' : '2.5rem',
          }}
        >
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: isMobile ? '0.8rem' : '0.875rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '0.75rem',
              fontFamily: "var(--font-syne), var(--font-bricolage), -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            Get In Touch
          </motion.h6>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-text"
            style={{
              fontSize: isMobile ? '1.5rem' : '2.2rem',
              marginBottom: '1rem',
              color: 'var(--text-on-light)',
            }}
          >
            Start Your Project
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: isMobile ? '0.9rem' : '1rem',
              maxWidth: '700px',
              margin: '0 auto',
              color: 'var(--text-on-light-muted)',
              lineHeight: 1.5,
              fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.
          </motion.p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <AnimatePresence mode="wait">
            {/* Success message */}
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: isMobile ? '2.5rem 1.5rem' : '3.5rem 2.5rem',
                  textAlign: 'center',
                  borderRadius: isMobile ? '16px' : '20px',
                  boxShadow: '0 10px 40px var(--glass-shadow)',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div style={{ position: 'relative' }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                    style={{
                      width: isMobile ? '80px' : '100px',
                      height: isMobile ? '80px' : '100px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-secondary-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isMobile ? '2rem' : '2.5rem',
                      margin: '0 auto 2rem',
                      color: 'var(--color-secondary)',
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </motion.div>

                  <h3
                    className="hero-text"
                    style={{
                      fontSize: isMobile ? '1.5rem' : '2rem',
                      marginBottom: '1rem',
                      color: 'var(--text-on-light)',
                    }}
                  >
                    Thank You!
                  </h3>

                  <p style={{
                    color: 'var(--text-on-light-muted)',
                    marginBottom: '0',
                    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    lineHeight: 1.6,
                  }}>
                    Your message has been received. Our team will review your project details and get back to you within 24 hours.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  borderRadius: isMobile ? '16px' : '20px',
                  padding: isMobile ? '1.5rem 1.25rem' : '2rem 2rem',
                  boxShadow: '0 10px 40px var(--glass-shadow)',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div style={{ position: 'relative' }}>
                  {/* Progress Bar */}
                  <div style={{
                    marginBottom: isMobile ? '1.5rem' : '2rem',
                    paddingBottom: isMobile ? '1rem' : '1.25rem',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                    }}>
                      <h3 style={{
                        fontSize: isMobile ? '1rem' : '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-on-light)',
                        fontFamily: "var(--font-syne), var(--font-bricolage), -apple-system, BlinkMacSystemFont, sans-serif",
                        margin: 0,
                        letterSpacing: '-0.01em',
                      }}>
                        {formSteps[formStep]}
                      </h3>
                      <span style={{
                        fontSize: isMobile ? '0.8rem' : '0.85rem',
                        color: 'var(--text-on-light-muted)',
                        fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                        fontWeight: 600,
                      }}>
                        Step {formStep + 1} of {formSteps.length}
                      </span>
                    </div>

                    {/* Progress Bars */}
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem',
                      width: '100%',
                    }}>
                      {formSteps.map((_, index) => (
                        <motion.div
                          key={`progress-${index}`}
                          style={{
                            flex: 1,
                            height: '6px',
                            borderRadius: '3px',
                            backgroundColor: index <= formStep
                              ? 'var(--color-secondary)'
                              : 'var(--color-secondary-light)',
                            transition: 'background-color 0.3s ease',
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {/* Step 1: Your Details */}
                      {formStep === 0 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                            gap: isMobile ? '1rem' : '1.25rem',
                          }}>
                            {/* Name */}
                            <div style={{ gridColumn: isMobile ? '1' : 'span 1' }}>
                              <label
                                htmlFor="name"
                                style={{
                                  display: 'block',
                                  marginBottom: '0.4rem',
                                  color: 'var(--text-on-light)',
                                  fontSize: isMobile ? '0.8rem' : '0.85rem',
                                  fontWeight: 600,
                                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                                }}
                              >
                                Full Name *
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="John Doe"
                                style={{
                                  width: '100%',
                                  padding: isMobile ? '0.7rem 0.875rem' : '0.8rem 1rem',
                                  borderRadius: '8px',
                                  backgroundColor: 'var(--glass-block-1)',
                                  border: '1px solid var(--glass-border)',
                                  color: 'var(--text-on-light)',
                                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                                  transition: 'all 0.2s ease',
                                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                                  outline: 'none',
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                              />
                            </div>

                            {/* Email */}
                            <div style={{ gridColumn: isMobile ? '1' : 'span 1' }}>
                              <label
                                htmlFor="email"
                                style={{
                                  display: 'block',
                                  marginBottom: '0.5rem',
                                  color: 'var(--text-on-light)',
                                  fontSize: isMobile ? '0.875rem' : '0.9rem',
                                  fontWeight: '600',
                                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                                }}
                              >
                                Email Address *
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="john@example.com"
                                style={{
                                  width: '100%',
                                  padding: isMobile ? '0.7rem 0.875rem' : '0.8rem 1rem',
                                  borderRadius: '8px',
                                  backgroundColor: 'var(--glass-block-1)',
                                  border: '1px solid var(--glass-border)',
                                  color: 'var(--text-on-light)',
                                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                                  transition: 'all 0.2s ease',
                                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                                  outline: 'none',
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                              />
                            </div>

                            {/* Phone */}
                            <div style={{ gridColumn: isMobile ? '1' : 'span 1' }}>
                              <label
                                htmlFor="phone"
                                style={{
                                  display: 'block',
                                  marginBottom: '0.5rem',
                                  color: 'var(--text-on-light)',
                                  fontSize: isMobile ? '0.875rem' : '0.9rem',
                                  fontWeight: '600',
                                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                                }}
                              >
                                Phone Number (Optional)
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+1 (555) 000-0000"
                                style={{
                                  width: '100%',
                                  padding: isMobile ? '0.7rem 0.875rem' : '0.8rem 1rem',
                                  borderRadius: '8px',
                                  backgroundColor: 'var(--glass-block-1)',
                                  border: '1px solid var(--glass-border)',
                                  color: 'var(--text-on-light)',
                                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                                  transition: 'all 0.2s ease',
                                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                                  outline: 'none',
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                              />
                            </div>

                            {/* Company */}
                            <div style={{ gridColumn: isMobile ? '1' : 'span 1' }}>
                              <label
                                htmlFor="company"
                                style={{
                                  display: 'block',
                                  marginBottom: '0.5rem',
                                  color: 'var(--text-on-light)',
                                  fontSize: isMobile ? '0.875rem' : '0.9rem',
                                  fontWeight: '600',
                                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                                }}
                              >
                                Company (Optional)
                              </label>
                              <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Your Company"
                                style={{
                                  width: '100%',
                                  padding: isMobile ? '0.7rem 0.875rem' : '0.8rem 1rem',
                                  borderRadius: '8px',
                                  backgroundColor: 'var(--glass-block-1)',
                                  border: '1px solid var(--glass-border)',
                                  color: 'var(--text-on-light)',
                                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                                  transition: 'all 0.2s ease',
                                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                                  outline: 'none',
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Project Info */}
                      {formStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Service Selection */}
                          <div style={{ marginBottom: isMobile ? '1rem' : '1.25rem' }}>
                            <label
                              style={{
                                display: 'block',
                                marginBottom: '0.75rem',
                                color: 'var(--text-on-light)',
                                fontSize: isMobile ? '0.8rem' : '0.85rem',
                                fontWeight: 600,
                                fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                              }}
                            >
                              Select Service *
                            </label>

                            <div style={{
                              display: 'grid',
                              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                              gap: isMobile ? '0.75rem' : '1rem',
                            }}>
                              {serviceOptions.map((service) => (
                                <motion.button
                                  key={service.value}
                                  type="button"
                                  whileHover={{ y: -2 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => handleServiceSelect(service)}
                                  style={{
                                    padding: isMobile ? '0.7rem 0.875rem' : '0.8rem 1rem',
                                    borderRadius: '8px',
                                    backgroundColor: formData.service === service.value
                                      ? 'var(--color-secondary)'
                                      : 'var(--background)',
                                    border: `2px solid ${formData.service === service.value
                                      ? 'var(--color-secondary)'
                                      : 'var(--glass-border)'}`,
                                    color: formData.service === service.value
                                      ? '#ffffff'
                                      : 'var(--text-on-light)',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    transition: 'all 0.2s ease',
                                    fontSize: isMobile ? '0.75rem' : '0.8rem',
                                    fontWeight: formData.service === service.value ? 600 : 500,
                                    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                                    lineHeight: 1.4,
                                  }}
                                >
                                  {service.label}
                                </motion.button>
                              ))}
                            </div>
                          </div>

                          {/* Budget Selection */}
                          <div style={{ marginBottom: isMobile ? '1rem' : '1.25rem' }}>
                            <label
                              style={{
                                display: 'block',
                                marginBottom: '0.75rem',
                                color: 'var(--text-on-light)',
                                fontSize: isMobile ? '0.8rem' : '0.85rem',
                                fontWeight: 600,
                                fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                              }}
                            >
                              Project Budget *
                            </label>

                            <div style={{
                              display: 'grid',
                              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                              gap: isMobile ? '0.75rem' : '1rem',
                            }}>
                              {budgetRanges.map((budget) => (
                                <motion.button
                                  key={budget.value}
                                  type="button"
                                  whileHover={{ y: -2 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => handleBudgetSelect(budget)}
                                  style={{
                                    padding: isMobile ? '0.7rem 0.875rem' : '0.8rem 1rem',
                                    borderRadius: '8px',
                                    backgroundColor: formData.budget === budget.value
                                      ? 'var(--color-secondary)'
                                      : 'var(--background)',
                                    border: `2px solid ${formData.budget === budget.value
                                      ? 'var(--color-secondary)'
                                      : 'var(--glass-border)'}`,
                                    color: formData.budget === budget.value
                                      ? '#ffffff'
                                      : 'var(--text-on-light)',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    transition: 'all 0.2s ease',
                                    fontSize: isMobile ? '0.75rem' : '0.8rem',
                                    fontWeight: formData.budget === budget.value ? 600 : 500,
                                    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                                  }}
                                >
                                  {budget.label}
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: Message */}
                      {formStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div>
                            <label
                              htmlFor="message"
                              style={{
                                display: 'block',
                                marginBottom: '0.4rem',
                                color: 'var(--text-on-light)',
                                fontSize: isMobile ? '0.8rem' : '0.85rem',
                                fontWeight: 600,
                                fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                              }}
                            >
                              Project Details *
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              placeholder="Tell us about your project requirements, goals, and timeline..."
                              rows={isMobile ? 4 : 5}
                              style={{
                                width: '100%',
                                padding: isMobile ? '0.7rem 0.875rem' : '0.8rem 1rem',
                                borderRadius: '8px',
                                backgroundColor: 'var(--glass-block-1)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-on-light)',
                                fontSize: isMobile ? '0.85rem' : '0.9rem',
                                transition: 'all 0.2s ease',
                                resize: 'vertical',
                                fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                                outline: 'none',
                                lineHeight: 1.5,
                              }}
                              onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                              onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: isMobile ? '1.5rem' : '1.75rem',
                      paddingTop: isMobile ? '1.25rem' : '1.5rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}>
                      {formStep > 0 ? (
                        <motion.button
                          type="button"
                          onClick={goToPrevStep}
                          whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: isMobile ? '0.65rem 1.1rem' : '0.75rem 1.25rem',
                            borderRadius: '8px',
                            backgroundColor: 'transparent',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-on-light-muted)',
                            cursor: 'pointer',
                            fontSize: isMobile ? '0.8rem' : '0.85rem',
                            fontWeight: 600,
                            fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                          </svg>
                          Back
                        </motion.button>
                      ) : (
                        <div />
                      )}

                      {formStep < formSteps.length - 1 ? (
                        <motion.button
                          type="button"
                          onClick={goToNextStep}
                          disabled={!canProceed()}
                          whileHover={canProceed() ? { scale: 1.02 } : {}}
                          whileTap={canProceed() ? { scale: 0.98 } : {}}
                          style={{
                            padding: isMobile ? '0.65rem 1.1rem' : '0.75rem 1.25rem',
                            borderRadius: '8px',
                            backgroundColor: canProceed()
                              ? 'var(--color-secondary)'
                              : 'var(--color-secondary-light)',
                            border: 'none',
                            color: canProceed() ? '#ffffff' : 'var(--text-on-light-muted)',
                            cursor: canProceed() ? 'pointer' : 'not-allowed',
                            fontSize: isMobile ? '0.8rem' : '0.85rem',
                            fontWeight: 600,
                            fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}
                        >
                          Next
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </motion.button>
                      ) : (
                        <button
                          ref={submitButtonRef}
                          type="submit"
                          disabled={!canProceed() || isSubmitting}
                          className={`submit-btn ${buttonState}`}
                          style={{
                            padding: isMobile ? '0.65rem 1.1rem' : '0.75rem 1.25rem',
                            borderRadius: '8px',
                            backgroundColor: canProceed() && !isSubmitting
                              ? 'var(--color-secondary)'
                              : 'var(--color-secondary-light)',
                            border: 'none',
                            color: canProceed() && !isSubmitting ? '#ffffff' : 'var(--text-on-light-muted)',
                            cursor: canProceed() && !isSubmitting ? 'pointer' : 'not-allowed',
                            fontSize: isMobile ? '0.8rem' : '0.85rem',
                            fontWeight: 600,
                            fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          <span className="btn-text">
                            {buttonState === 'sent' ? 'Sent!' : 'Send Message'}
                          </span>

                          {/* Paper Airplane Icon */}
                          <svg
                            className="paper-plane"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                          </svg>

                          {/* Checkmark Icon */}
                          {buttonState === 'sent' && (
                            <svg
                              className="checkmark"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}

                          {/* Loading Dots */}
                          {buttonState === 'sending' && (
                            <div className="loading-dots">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Paper Airplane Submit Animation & Other Styles */}
      <style jsx>{`
        /* Paper Airplane Icon */
        .paper-plane {
          width: 16px;
          height: 16px;
          transition: all 0.4s ease;
        }

        /* Button Text */
        .btn-text {
          transition: all 0.3s ease;
        }

        /* When button is clicked/submitting */
        .submit-btn.sending .paper-plane {
          animation: flyAway 1s ease-in-out forwards;
        }

        .submit-btn.sending .btn-text {
          animation: fadeText 1s ease-in-out forwards;
        }

        /* Success state after animation */
        .submit-btn.sent {
          background-color: #48BB78 !important;
        }

        .submit-btn.sent .btn-text {
          opacity: 1;
        }

        /* Paper airplane fly away animation */
        @keyframes flyAway {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 1;
          }
          20% {
            transform: translateX(-5px) translateY(3px) rotate(-10deg);
            opacity: 1;
          }
          50% {
            transform: translateX(20px) translateY(-15px) rotate(15deg);
            opacity: 1;
          }
          100% {
            transform: translateX(100px) translateY(-50px) rotate(45deg);
            opacity: 0;
          }
        }

        /* Button text fade animation */
        @keyframes fadeText {
          0% {
            opacity: 1;
          }
          30% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        /* Loading Dots */
        .loading-dots {
          display: none;
        }

        .submit-btn.sending .loading-dots {
          display: inline-flex;
          gap: 4px;
        }

        .loading-dots span {
          width: 5px;
          height: 5px;
          background-color: white;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .loading-dots span:nth-child(1) {
          animation-delay: -0.32s;
        }

        .loading-dots span:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        /* Checkmark Success Icon */
        .checkmark {
          display: none;
          width: 16px;
          height: 16px;
        }

        .submit-btn.sent .checkmark {
          display: block;
          animation: popIn 0.3s ease-out forwards;
        }

        .submit-btn.sent .paper-plane {
          display: none;
        }

        @keyframes popIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          70% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        input::placeholder,
        textarea::placeholder {
          color: var(--text-on-light-muted);
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default InteractiveContactForm;
