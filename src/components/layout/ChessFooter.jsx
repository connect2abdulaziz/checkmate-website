'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ChessFooter = () => {
  // Footer links data - updated to match the site
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Full-Stack Development', url: '/services/fullstack-development' },
        { label: 'Software Engineering', url: '/services/software-engineering' },
        { label: 'DevOps & Cloud', url: '/services/devops-cloud-security' },
        { label: 'AI & Machine Learning', url: '/services/ai-machine-learning' },
        { label: 'Process Automation', url: '/services/process-automation' },
        { label: 'Data Security & Compliance', url: '/services/data-security-compliance' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', url: '/about/company' },
        { label: 'Our Team', url: '/about/team' },
        { label: 'Our Process', url: '/about/process' },
        { label: 'Case Studies', url: '/projects/case-studies' },
        { label: 'Portfolio', url: '/projects/portfolio' },
      ]
    },
  ];

  // Social links - updated URLs
  const socialLinks = [
    {
      icon: 'github',
      url: 'https://github.com/connect2abdulaziz',
      ariaLabel: 'GitHub'
    },
    {
      icon: 'linkedin',
      url: 'https://linkedin.com/in/connect2abdulaziz',
      ariaLabel: 'LinkedIn'
    },
    {
      icon: 'twitter',
      url: 'https://twitter.com/connect2aziz',
      ariaLabel: 'Twitter'
    },
  ];

  // Social media icon component
  const SocialIcon = ({ icon }) => {
    const iconStyle = {
      width: 20,
      height: 20,
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    };

    switch (icon) {
      case 'github':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        );
      case 'linkedin':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        );
      case 'twitter':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer
      className="footer"
      style={{
        position: 'relative',
        
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        overflow: 'hidden',
      }}
    >
      {/* Top Wave Border */}
      <div style={{
        position: 'absolute',
        top: '-1px',
        left: 0,
        width: '100%',
        height: '100px',
        transform: 'translateY(-99px)',
        zIndex: 1,
      }}>
        <svg
          viewBox="0 0 1440 100"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C360,90 720,10 1080,50 C1260,70 1380,40 1440,50 L1440,100 L0,100 Z"
            fill="var(--color-bg)"
          />
        </svg>
      </div>

      {/* Dark glass overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'var(--glass-bg-dark)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        zIndex: 0,
      }} />

      {/* Subtle dot pattern overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-text-faint) 1px, transparent 0)',
        backgroundSize: '50px 50px',
        opacity: 0.3,
        zIndex: 1,
      }} />

      

      {/* Main footer content */}
      <div className="footer-main" style={{
        padding: '60px 0 30px',
        position: 'relative',
        zIndex: 2,
      }}>
        <div
          className="container"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              marginBottom: '2rem',
            }}
          >
            {/* Company info column */}
            <div style={{ gridColumn: 'span 1' }}>
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="logo"
                  style={{
                    display: 'inline-block',
                    marginBottom: '1.25rem',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="cypentra.dev"
                    style={{
                      height: '56px',
                      width: 'auto',
                      objectFit: 'contain',
                      filter: 'brightness(1.1) contrast(1.05)',
                    }}
                  />
                </motion.div>
              </Link>

              <p
                style={{
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  maxWidth: '320px',
                  fontSize: '0.9375rem',
                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                We specialize in delivering cutting-edge software solutions with strategic precision,
                helping businesses achieve their digital transformation through quality-driven development.
              </p>

              {/* Social links */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={`social-${index}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    whileHover={{
                      y: -3,
                      backgroundColor: 'var(--color-accent)',
                      borderColor: 'var(--color-accent)',
                      boxShadow: 'var(--glow-accent-sm)',
                    }}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--overlay-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-muted)',
                      border: '1px solid var(--border-light)',
                      transition: 'var(--transition-normal)',
                    }}
                  >
                    <SocialIcon icon={social.icon} />
                  </motion.a>
                ))}
              </div>

              {/* Contact info */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                }}
              >
                <a
                  href="mailto:info@cypentra.dev"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                    transition: 'var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--overlay-light)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <span>info@cypentra.dev</span>
                </a>
              </div>
            </div>

            {/* Footer links columns */}
            {footerLinks.map((column, colIndex) => (
              <div key={`footer-col-${colIndex}`}>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    marginBottom: '1.25rem',
                    color: 'var(--color-text)',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  {column.title}
                </h3>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {column.links.map((link, linkIndex) => (
                    <li key={`footer-link-${colIndex}-${linkIndex}`}>
                      <Link href={link.url}>
                        <motion.div
                          whileHover={{ x: 3, color: 'var(--color-text)' }}
                          style={{
                            color: 'var(--color-text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'var(--transition-fast)',
                            fontSize: '0.9375rem',
                            fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                          }}
                        >
                          <motion.span
                            whileHover={{ scale: 1.2 }}
                            style={{
                              width: '4px',
                              height: '4px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--color-accent)',
                              flexShrink: 0,
                              opacity: 0.6,
                            }}
                          />
                          {link.label}
                        </motion.div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div
        className="footer-bottom"
        style={{
          padding: '1.5rem 0',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--color-bg-dark)',
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: '0.875rem',
            margin: 0,
            fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
          }}>
            © {new Date().getFullYear()} cypentra.dev. All rights reserved.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/privacy">
              <motion.span
                whileHover={{ color: 'var(--color-accent)' }}
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Privacy Policy
              </motion.span>
            </Link>

            <Link href="/terms">
              <motion.span
                whileHover={{ color: 'var(--color-accent)' }}
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Terms of Service
              </motion.span>
            </Link>

            <Link href="/sitemap">
              <motion.span
                whileHover={{ color: 'var(--color-accent)' }}
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Sitemap
              </motion.span>
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-main {
            padding: 50px 0 25px !important;
          }
          .container {
            padding: 0 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            padding: 40px 0 20px !important;
          }
          .container {
            padding: 0 1.25rem !important;
          }
          .footer-bottom {
            padding: 1.25rem 0 !important;
          }
          .footer-bottom .container {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            gap: 0.875rem !important;
          }
        }

        @media (max-width: 480px) {
          .footer-main {
            padding: 35px 0 20px !important;
          }
          .container {
            padding: 0 1rem !important;
          }
          .footer-bottom {
            padding: 1rem 0 !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default ChessFooter;