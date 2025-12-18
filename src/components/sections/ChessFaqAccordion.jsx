'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const ChessFaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // FAQ data
  const faqItems = [
    {
      id: 1,
      question: "What services does Cypentra.dev offer?",
      answer: "Cypentra.dev offers a comprehensive range of software services including Full-Stack Development, Software Engineering, DevOps & Cloud solutions, Security & Compliance, AI & Machine Learning integration, and Process Automation. Our team specializes in creating custom solutions tailored to your specific business needs with modern architecture and security-first implementation.",
      icon: "code",
      color: "var(--color-primary)"
    },
    {
      id: 2,
      question: "How does your development process work?",
      answer: "Our development process follows a strategic approach: Discovery and planning phase where we understand your requirements, Design and architecture to create the blueprint, Development with continuous testing, and finally Deployment with ongoing support. We involve clients at every step, ensuring transparency and alignment with your vision throughout the project lifecycle.",
      icon: "workflow",
      color: "var(--color-secondary)"
    },
    {
      id: 3,
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including Next.js, React, Node.js, Python, Cloud platforms (AWS, Azure, GCP), Docker, Kubernetes, and more. Our team continuously stays updated with the latest technologies to ensure we deliver cutting-edge solutions that are both performant, scalable, and maintainable.",
      icon: "layers",
      color: "var(--color-primary)"
    },
    {
      id: 4,
      question: "How do you handle project timelines and deadlines?",
      answer: "We break projects into clear milestones with specific deliverables and timelines. Our team uses agile methodologies to ensure efficient workflow and timely completion. We provide regular updates, conduct sprint reviews, and maintain open communication throughout the development process, adapting quickly to any changes in requirements.",
      icon: "clock",
      color: "var(--color-secondary)"
    },
    {
      id: 5,
      question: "What makes Cypentra.dev different from other agencies?",
      answer: "Cypentra.dev combines strategic thinking with deep technical expertise. We focus on quality-driven, secure software with extensive customization and long-term maintainability. Our approach isn't just about coding; it's about creating digital assets that provide real business value, drive growth, and adapt to your evolving needs.",
      icon: "star",
      color: "var(--color-primary)"
    },
    {
      id: 6,
      question: "How do you ensure application security?",
      answer: "Security is integrated into every step of our development process, not added as an afterthought. We implement industry best practices, conduct regular security audits, follow OWASP guidelines, and use secure coding standards. All our applications undergo thorough testing before deployment, and we provide continuous security monitoring and updates.",
      icon: "shield",
      color: "var(--color-secondary)"
    },
    {
      id: 7,
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we provide comprehensive maintenance and support packages to ensure your application remains secure, up-to-date, and optimized. Our services include regular updates, bug fixes, security patches, performance optimization, and technical support. We offer flexible plans tailored to your specific requirements and budget.",
      icon: "tool",
      color: "var(--color-primary)"
    }
  ];

  // Toggle accordion item
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Get icon SVG
  const getIcon = (iconType, size = 24) => {
    const iconStyle = {
      width: size,
      height: size,
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    };

    switch (iconType) {
      case 'code':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case 'workflow':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        );
      case 'layers':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        );
      case 'clock':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      case 'star':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        );
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      case 'tool':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      ref={containerRef}
      className="chess-faq-section"
      style={{
        padding: isMobile ? '3rem 0' : '100px 0',
        backgroundImage: 'url(/formbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '-1px',
      }}
    >
      {/* Background overlay for lower intensity */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="section-header" style={{
          textAlign: 'center',
          marginBottom: isMobile ? '2.5rem' : '4rem',
        }}>
          <motion.h6
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: isMobile ? '0.875rem' : '1rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '1rem',
              fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
            }}
          >
            FAQ
          </motion.h6>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: isMobile ? '1.75rem' : '2.8rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: '#0F172A',
              fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
              textShadow: '0 2px 4px rgba(255, 255, 255, 0.5)',
            }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              maxWidth: '700px',
              margin: '0 auto',
              color: '#1A202C',
              lineHeight: 1.6,
              fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
              fontWeight: 500,
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
              padding: isMobile ? '0 0.5rem' : '0',
            }}
          >
            Common questions about our services and processes.
            If you don't find what you're looking for, feel free to reach out directly.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '2rem' : '3rem',
          alignItems: 'flex-start',
        }}>
          {/* Left Content - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="faq-info-section"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '1.5rem' : '1.25rem',
            }}
          >
            {/* Why Choose Us Card */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: isMobile ? '1.5rem' : '1.5rem',
              borderRadius: '12px',
              border: '2px solid var(--glass-border)',
              boxShadow: '0 4px 12px var(--glass-shadow)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '0.75rem' : '0.75rem',
                marginBottom: '0.75rem',
              }}>
                <div style={{
                  width: isMobile ? '40px' : '44px',
                  height: isMobile ? '40px' : '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: isMobile ? 20 : 22, height: isMobile ? 20 : 22, strokeWidth: 2 }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4 style={{
                  color: 'var(--text-on-light)',
                  margin: 0,
                  fontSize: isMobile ? '1.05rem' : '1.15rem',
                  fontWeight: 700,
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}>
                  Why Cypentra.dev?
                </h4>
              </div>
              <p style={{
                color: 'var(--text-on-light-muted)',
                margin: 0,
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                lineHeight: 1.5,
                fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
              }}>
                We combine deep technical expertise with strategic thinking to deliver solutions that drive real business value. Our focus is on quality, security, and long-term maintainability.
              </p>
            </div>

            {/* Quick Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: isMobile ? '1.25rem' : '1.25rem',
                borderRadius: '12px',
                border: '2px solid var(--glass-border)',
                boxShadow: '0 4px 12px var(--glass-shadow)',
              }}>
                <h5 style={{
                  color: 'var(--color-primary)',
                  fontSize: isMobile ? '1.75rem' : '1.75rem',
                  fontWeight: 700,
                  margin: '0 0 0.4rem 0',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}>
                  24/7
                </h5>
                <p style={{
                  color: 'var(--text-on-light-muted)',
                  margin: 0,
                  fontSize: isMobile ? '0.8rem' : '0.85rem',
                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                }}>
                  Support Available
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: isMobile ? '1.25rem' : '1.25rem',
                borderRadius: '12px',
                border: '2px solid var(--glass-border)',
                boxShadow: '0 4px 12px var(--glass-shadow)',
              }}>
                <h5 style={{
                  color: 'var(--color-secondary)',
                  fontSize: isMobile ? '1.75rem' : '1.75rem',
                  fontWeight: 700,
                  margin: '0 0 0.4rem 0',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}>
                  100%
                </h5>
                <p style={{
                  color: 'var(--text-on-light-muted)',
                  margin: 0,
                  fontSize: isMobile ? '0.8rem' : '0.85rem',
                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                }}>
                  Client Satisfaction
                </p>
              </div>
            </div>

            {/* Services Overview */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: isMobile ? '1.5rem' : '1.5rem',
              borderRadius: '12px',
              border: '2px solid var(--glass-border)',
              boxShadow: '0 4px 12px var(--glass-shadow)',
            }}>
              <h4 style={{
                color: 'var(--text-on-light)',
                margin: '0 0 0.75rem 0',
                fontSize: isMobile ? '1rem' : '1.05rem',
                fontWeight: 700,
                fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
              }}>
                Our Core Services
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}>
                {['Full-Stack Development', 'DevOps & Cloud', 'AI & Machine Learning', 'Security & Compliance'].map((service, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--text-on-light-muted)',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke={idx % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)'} style={{ width: 16, height: 16, strokeWidth: 2, flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                padding: isMobile ? '1.5rem' : '1.5rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '2px solid var(--glass-border)',
                boxShadow: '0 4px 12px var(--glass-shadow)',
              }}
            >
              <h4 style={{
                color: 'var(--text-on-light)',
                margin: '0 0 0.6rem 0',
                fontSize: isMobile ? '1rem' : '1.05rem',
                fontWeight: 700,
                fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
              }}>
                Still have questions?
              </h4>
              <p style={{
                color: 'var(--text-on-light-muted)',
                margin: '0 0 1rem 0',
                fontSize: isMobile ? '0.85rem' : '0.875rem',
                fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                lineHeight: 1.5,
              }}>
                Our team is ready to help you with any specific questions or requirements.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: isMobile ? '0.7rem 1.25rem' : '0.75rem 1.5rem',
                  backgroundColor: 'var(--color-secondary)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                  textDecoration: 'none',
                }}
              >
                Contact Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* FAQ Accordion - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className="faq-accordion">
              {faqItems.map((item, index) => (
                <motion.div
                  key={`faq-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="faq-item"
                  style={{
                    marginBottom: isMobile ? '1rem' : '0.8rem',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: activeIndex === index
                      ? `rgba(${hexToRgb(item.color)}, 0.08)`
                      : 'rgba(255, 255, 255, 0.8)',
                    border: `2px solid ${activeIndex === index
                      ? item.color
                      : 'var(--glass-border)'
                      }`,
                    transition: 'all 0.3s ease',
                    boxShadow: activeIndex === index ? '0 4px 12px var(--glass-shadow)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {/* Question header */}
                  <motion.div
                    className="faq-question"
                    onClick={() => toggleItem(index)}
                    whileHover={{ backgroundColor: 'rgba(30, 64, 175, 0.03)' }}
                    style={{
                      padding: isMobile ? '1.25rem' : '1.25rem',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}>
                      <div style={{
                        width: isMobile ? '32px' : '36px',
                        height: isMobile ? '32px' : '36px',
                        borderRadius: '8px',
                        backgroundColor: activeIndex === index ? item.color : 'var(--glass-block-1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: activeIndex === index ? '#ffffff' : item.color,
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                      }}>
                        {getIcon(item.icon, isMobile ? 18 : 20)}
                      </div>
                      <h3 style={{
                        margin: 0,
                        fontSize: isMobile ? '0.95rem' : '1.025rem',
                        fontWeight: activeIndex === index ? 700 : 600,
                        color: 'var(--text-on-light)',
                        fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                      }}>
                        {item.question}
                      </h3>
                    </div>

                    {/* Toggle icon */}
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        flexShrink: 0,
                        color: activeIndex === index ? item.color : 'var(--text-on-light-muted)',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Answer content */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.3, delay: 0.1 }
                          }
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2 }
                          }
                        }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          className="faq-answer"
                          style={{
                            padding: isMobile ? '0 1.25rem 1.25rem 1.25rem' : '0 1.25rem 1.25rem 1.25rem',
                            color: 'var(--text-on-light-muted)',
                            lineHeight: 1.5,
                            borderTop: '1px solid var(--glass-border)',
                            marginTop: '0.5rem',
                            paddingTop: '0.875rem',
                          }}
                        >
                          <p style={{
                            margin: 0,
                            fontSize: isMobile ? '0.875rem' : '0.925rem',
                            fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif"
                          }}>
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        /* Custom styles if needed */
      `}</style>
    </section>
  );
};

// Helper function
function hexToRgb(hex) {
  // Handle CSS variables
  if (hex.startsWith('var(')) {
    // For CSS variables, return a default value
    return '30, 64, 175'; // Default to primary color
  }

  // Remove the # if present
  hex = hex.replace('#', '');

  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `${r}, ${g}, ${b}`;
}

export default ChessFaqAccordion;