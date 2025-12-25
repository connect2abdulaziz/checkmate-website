'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

// Advanced Icon Components
const AutomationIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const SecurityIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const CodeIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const EngineeringIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3m15.364 6.364l-4.243-4.243m-4.242 0L5.636 17.364m12.728 0l-4.243-4.243m-4.242 0L5.636 6.636" />
  </svg>
);

const CloudIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const AIIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L2.5 20.5a2.5 2.5 0 0 1 0-5l4.54-1.5A2.5 2.5 0 0 1 9.5 2z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44L21.5 20.5a2.5 2.5 0 0 0 0-5l-4.54-1.5A2.5 2.5 0 0 0 14.5 2z" />
  </svg>
);

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayTimerRef = useRef(null);
  const sectionRef = useRef(null);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Case study data
  const caseStudies = [
    {
      id: 1,
      title: 'SimplyFlow - Workflow Automation Platform',
      category: 'Process Automation',
      icon: AutomationIcon,
      iconColor: 'var(--color-accent)',
      description: 'Developed a comprehensive workflow automation platform that streamlines business processes, integrates with multiple tools, and enables teams to automate complex workflows with ease.',
      results: [
        'Automated 85% of manual workflows',
        'Reduced process completion time by 75%',
        'Increased team productivity by 60%'
      ],
      quote: 'SimplyFlow has transformed how we manage our workflows. Cypentra\'s automation solution eliminated bottlenecks and freed up our team to focus on strategic work.',
      author: 'David Chen',
      position: 'Operations Manager, SimplyFlow',
      image: '/mockup/simplyflow.com.png'
    },
    {
      id: 2,
      title: 'GuardXP - Security Management Platform',
      category: 'Data Security & Compliance',
      icon: SecurityIcon,
      iconColor: 'var(--color-accent)',
      description: 'Built a robust security management platform with advanced threat detection, compliance monitoring, and real-time security analytics for enterprise clients.',
      results: [
        'Reduced security incidents by 92%',
        'Achieved 100% compliance across all frameworks',
        'Improved threat response time by 80%'
      ],
      quote: 'GuardXP provides unparalleled security visibility. Cypentra\'s expertise in security architecture helped us build a platform that our clients trust completely.',
      author: 'Sarah Martinez',
      position: 'Security Director, GuardXP',
      image: '/mockup/guardxp.net.png'
    },
    {
      id: 3,
      title: 'Entrepedia - Entrepreneurship Education Platform',
      category: 'Full-Stack Development',
      icon: CodeIcon,
      iconColor: 'var(--color-accent)',
      description: 'Created an interactive learning platform for entrepreneurs with courses, mentorship matching, and community features, supporting thousands of users worldwide.',
      results: [
        'Increased user engagement by 65%',
        'Scaled to support 50,000+ active learners',
        'Improved course completion rates by 48%'
      ],
      quote: 'Entrepedia has become the go-to platform for aspiring entrepreneurs. Cypentra\'s full-stack development expertise created an intuitive and scalable solution.',
      author: 'Michael Johnson',
      position: 'Founder & CEO, Entrepedia',
      image: '/mockup/entrepedia.co.png'
    },
    {
      id: 4,
      title: 'SafeStreet - Community Safety Platform',
      category: 'Software Engineering',
      icon: EngineeringIcon,
      iconColor: 'var(--color-accent)',
      description: 'Developed a community safety platform connecting residents, local authorities, and security services with real-time alerts, incident reporting, and neighborhood watch features.',
      results: [
        'Connected 200+ neighborhoods',
        'Reduced response time by 70%',
        'Increased community engagement by 85%'
      ],
      quote: 'SafeStreet has made our communities safer and more connected. Cypentra\'s software engineering excellence delivered a reliable platform that residents trust.',
      author: 'Emma Wilson',
      position: 'Community Safety Coordinator, SafeStreet',
      image: '/mockup/safestreet.com.au.png'
    },
    {
      id: 5,
      title: 'Qobrix - Canadian Real Estate Management Platform',
      category: 'DevOps & Cloud',
      icon: CloudIcon,
      iconColor: 'var(--color-accent)',
      description: 'Migrated and optimized a Canadian real estate management platform to cloud infrastructure, implementing CI/CD pipelines, automated scaling, and high-availability architecture.',
      results: [
        'Reduced infrastructure costs by 45%',
        'Achieved 99.9% uptime',
        'Improved system performance by 55%'
      ],
      quote: 'The cloud migration was seamless. The DevOps expertise ensured zero downtime and significantly improved our platform\'s reliability and performance.',
      author: 'James Anderson',
      position: 'CTO, Qobrix',
      image: '/mockup/qobrix.com.png'
    },
    {
      id: 6,
      title: 'Terzo.ai - AI-Powered Business Intelligence Platform',
      category: 'AI & Machine Learning',
      icon: AIIcon,
      iconColor: 'var(--color-accent)',
      description: 'Built an AI-powered platform that provides intelligent business intelligence solutions, automated recommendations, and predictive analytics to help businesses optimize their operations and make data-driven decisions.',
      results: [
        'Improved solution accuracy by 78%',
        'Reduced decision-making time by 65%',
        'Increased client satisfaction by 82%'
      ],
      quote: 'Our AI platform has revolutionized how we deliver business intelligence solutions. The machine learning capabilities Terzo.ai implemented provide insights we never had before.',
      author: 'Alex Thompson',
      position: 'Product Lead, Terzo.ai',
      image: '/mockup/terzo.ai.png'
    }
  ];

  // Handle auto-play functionality - always active
  useEffect(() => {
    // Clear any existing interval first
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }

    // Always auto-play
    autoPlayTimerRef.current = setInterval(() => {
      setActiveCase((prev) => {
        const nextIndex = (prev + 1) % caseStudies.length;
        return nextIndex;
      });
    }, 8000);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
    };
  }, []);

  // Handle case click - auto-play continues
  const handleCaseClick = (index) => {
    setActiveCase(index);
    // Auto-play will continue automatically
  };

  // Initialize animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate service cards
      gsap.fromTo(
        '.service-card',
        {
          y: -20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: 'elastic.out(1, 0.5)'
        }
      );

      // Animate section header
      gsap.fromTo(
        '.case-study-header > *',
        {
          y: -30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: 'power2.out'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4,
        ease: 'easeIn'
      }
    }
  };

  const resultItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.2 + (custom * 0.1)
      }
    })
  };

  return (
    <section
      ref={sectionRef}
      className="chess-case-studies"
      style={{
        padding: isMobile ? '3rem 0' : '100px 0',
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '-1px',
      }}
    >
      {/* Background overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--color-bg-medium)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem',
      }}>
        <div className="case-study-header" style={{
          textAlign: 'center',
          marginBottom: isMobile ? '2rem' : '5rem',
          position: 'relative',
          zIndex: 2,
        }}>
          <span style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'linear-gradient(135deg, var(--color-accent), rgba(var(--color-accent-rgb), 0.7))',
            color: 'var(--color-text)',
            fontSize: isMobile ? '0.75rem' : '0.85rem',
            fontWeight: 600,
            borderRadius: '50px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '1.5rem',
            fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
            boxShadow: 'var(--glow-accent-sm)',
          }}>
            Case Studies
          </span>
          <h2 style={{
            fontSize: isMobile ? 'clamp(2rem, 5vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: 'var(--color-text)',
            fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
            lineHeight: 1.2,
          }}>
            Success{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--color-accent), rgba(var(--color-accent-rgb), 0.8))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Stories
            </span>
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
            padding: isMobile ? '0 1rem' : '0',
            fontWeight: 500,
          }}>
            Discover how we've helped businesses transform their technology infrastructure
            and achieve remarkable results through innovative software solutions.
          </p>
        </div>

        {/* Case study showcase */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}>
          {/* Service category selector */}
          <div className="service-selector" style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: isMobile ? '2rem' : '4rem',
            gap: isMobile ? '0.75rem' : '2rem',
            flexWrap: 'wrap',
            padding: isMobile ? '0 0.5rem' : '0',
          }}>
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                className="service-card"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleCaseClick(index)}
                style={{
                  width: isMobile ? '70px' : '100px',
                  height: isMobile ? '70px' : '100px',
                  borderRadius: '12px',
                  backgroundColor: activeCase === index
                    ? 'var(--color-accent)'
                    : 'var(--overlay-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: `2px solid ${activeCase === index
                    ? 'var(--color-accent)'
                    : 'var(--border-light)'}`,
                  boxShadow: activeCase === index
                    ? 'var(--glow-accent-sm)'
                    : 'var(--shadow-sm)',
                }}
              >
                <div style={{
                  marginBottom: '0.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: activeCase === index ? 'var(--color-text)' : 'var(--color-accent)',
                }}>
                  {React.createElement(caseStudy.icon, {
                    size: isMobile ? 28 : 40,
                    color: activeCase === index ? 'var(--color-text)' : 'var(--color-accent)'
                  })}
                </div>
                <span style={{
                  fontSize: isMobile ? '0.6rem' : '0.7rem',
                  fontWeight: 'bold',
                  color: activeCase === index ? 'var(--color-text)' : 'var(--color-text-muted)',
                  textAlign: 'center',
                  padding: '0 0.25rem',
                }}>
                  {caseStudy.category.split(' ')[0]}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Case study content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`case-${activeCase}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '2rem' : '4rem',
                minHeight: isMobile ? 'auto' : '500px',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              {/* Case study details */}
              <div style={{
                flex: isMobile ? '1 1 100%' : '1 1 450px',
                padding: isMobile ? '1.5rem' : '3rem',
                backgroundColor: 'var(--glass-bg)',
                borderRadius: isMobile ? '16px' : '20px',
                border: `1px solid var(--border-light)`,
                boxShadow: 'var(--shadow-md)',
                backdropFilter: 'var(--glass-blur)',
                WebkitBackdropFilter: 'var(--glass-blur)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <h3 style={{
                  fontSize: isMobile ? '1.5rem' : '2.2rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: 'var(--color-text)',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  lineHeight: 1.2,
                }}>
                  {caseStudies[activeCase].title}
                </h3>

                <p style={{
                  fontSize: isMobile ? '0.9375rem' : '1.125rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                }}>
                  {caseStudies[activeCase].description}
                </p>

                {/* Key Results - Back on left side */}
                <div style={{
                  marginBottom: '2rem',
                }}>
                  <h4 style={{
                    fontSize: isMobile ? '1rem' : '1.2rem',
                    fontWeight: 'bold',
                    marginBottom: '1.2rem',
                    color: 'var(--color-accent)',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}>
                    Key Results
                  </h4>

                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}>
                    {caseStudies[activeCase].results.map((result, idx) => (
                      <motion.li
                        key={idx}
                        custom={idx}
                        variants={resultItemVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '1rem',
                        }}
                      >
                        <div style={{
                          width: isMobile ? '20px' : '24px',
                          height: isMobile ? '20px' : '24px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-accent-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: isMobile ? '0.75rem' : '1rem',
                          flexShrink: 0,
                        }}>
                          <div style={{
                            width: isMobile ? '8px' : '10px',
                            height: isMobile ? '8px' : '10px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-accent)',
                          }} />
                        </div>
                        <span style={{
                          color: 'var(--color-text-muted)',
                          fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                          fontSize: isMobile ? '0.875rem' : '1rem',
                        }}>{result}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--color-accent)', color: 'var(--color-text)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
                    marginTop: 'auto',
                    backgroundColor: 'transparent',
                    border: `2px solid var(--color-accent)`,
                    borderRadius: '50px',
                    color: 'var(--color-accent)',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    alignSelf: 'flex-start',
                    fontSize: isMobile ? '0.875rem' : '1rem',
                  }}
                >
                  Read Full Case Study
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginLeft: '0.5rem' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </motion.button>
              </div>

              {/* Right side - Mockup and additional content */}
              <div style={{
                flex: isMobile ? '1 1 100%' : '1 1 450px',
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '1.5rem' : '2rem',
              }}>
                {/* Case study image - Laptop Mockup */}
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {/* Laptop Mockup Frame */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                      width: '100%',
                      maxWidth: isMobile ? '100%' : '600px',
                      position: 'relative',
                      perspective: '1000px',
                    }}
                  >
                    {/* Laptop Screen */}
                    <div style={{
                      width: '100%',
                      paddingTop: isMobile ? '62%' : '68%', // Adjusted height for better balance
                      position: 'relative',
                      backgroundColor: 'var(--color-accent-dark)',
                      borderRadius: isMobile ? '6px 6px 0 0' : '8px 8px 0 0',
                      boxShadow: 'var(--shadow-xl)',
                      overflow: 'hidden',
                      border: isMobile ? `2px solid var(--color-accent)` : `3px solid var(--color-accent)`,
                    }}>
                      {/* Screen Bezel */}
                      <div style={{
                        position: 'absolute',
                        top: isMobile ? '2px' : '3px',
                        left: isMobile ? '2px' : '3px',
                        right: isMobile ? '2px' : '3px',
                        bottom: isMobile ? '2px' : '3px',
                        backgroundColor: 'var(--color-accent-dark)',
                        borderRadius: isMobile ? '4px 4px 0 0' : '5px 5px 0 0',
                        overflow: 'hidden',
                      }}>
                        {/* Screen Content - Actual Display Area */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'var(--color-bg)',
                        }}>
                          <img
                            src={caseStudies[activeCase].image || '/bg.jpg'}
                            alt={caseStudies[activeCase].title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              objectPosition: 'center',
                              paddingTop: '4%',
                            }}
                          />
                          {/* Subtle screen reflection */}
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(180deg, rgba(var(--color-text-rgb), 0.03) 0%, transparent 30%)`,
                            pointerEvents: 'none',
                          }} />
                        </div>
                      </div>

                      {/* Camera notch */}
                      <div style={{
                        position: 'absolute',
                        top: isMobile ? '4px' : '6px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isMobile ? '40px' : '50px',
                        height: isMobile ? '3px' : '4px',
                        backgroundColor: 'var(--color-accent-dark)',
                        borderRadius: '0 0 6px 6px',
                        zIndex: 10,
                      }} />
                    </div>

                    {/* Laptop Base */}
                    <div style={{
                      width: '100%',
                      height: isMobile ? '8px' : '12px',
                      backgroundColor: 'var(--color-accent)',
                      borderRadius: isMobile ? '0 0 12px 12px' : '0 0 16px 16px',
                      marginTop: '-1px',
                      boxShadow: 'var(--shadow-lg)',
                      position: 'relative',
                    }}>
                      {/* Trackpad indicator */}
                      <div style={{
                        position: 'absolute',
                        bottom: '3px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isMobile ? '60px' : '100px',
                        height: '2px',
                        backgroundColor: 'var(--color-accent-dark)',
                        borderRadius: '2px',
                      }} />
                    </div>

                    {/* Case highlight badge */}
                    <div style={{
                      position: 'absolute',
                      top: isMobile ? '12px' : '20px',
                      right: isMobile ? '12px' : '20px',
                      padding: isMobile ? '0.375rem 0.75rem' : '0.5rem 1rem',
                      borderRadius: '50px',
                      backgroundColor: 'var(--color-accent)',
                      color: 'var(--color-text)',
                      fontWeight: 'bold',
                      fontSize: isMobile ? '0.7rem' : '0.8rem',
                      boxShadow: 'var(--glow-accent-sm)',
                      zIndex: 10,
                    }}>
                      {caseStudies[activeCase].category}
                    </div>
                  </motion.div>
                </div>

                {/* Testimonial quote - On right side */}
                <div style={{
                  padding: isMobile ? '1.25rem' : '1.5rem',
                  borderRadius: isMobile ? '12px' : '16px',
                  backgroundColor: 'var(--overlay-subtle)',
                  borderLeft: `4px solid var(--color-accent)`,
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    left: '15px',
                    color: 'var(--color-text-subtle)',
                    fontSize: isMobile ? '2.5rem' : '3rem',
                    fontFamily: 'serif',
                    lineHeight: 1,
                  }}>
                    "
                  </span>

                  <p style={{
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    fontStyle: 'italic',
                    color: 'var(--color-text-muted)',
                    marginBottom: '1rem',
                    position: 'relative',
                    zIndex: 1,
                    paddingLeft: '1.5rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}>
                    {caseStudies[activeCase].quote}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <div style={{
                      width: isMobile ? '36px' : '40px',
                      height: isMobile ? '36px' : '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text)',
                      fontWeight: 'bold',
                      marginRight: '1rem',
                      fontSize: isMobile ? '0.875rem' : '1rem',
                    }}>
                      {caseStudies[activeCase].author.charAt(0)}
                    </div>

                    <div>
                      <h5 style={{
                        fontSize: isMobile ? '0.875rem' : '1rem',
                        fontWeight: 'bold',
                        color: 'var(--color-text)',
                        margin: 0,
                        fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                      }}>
                        {caseStudies[activeCase].author}
                      </h5>
                      <span style={{
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        color: 'var(--color-text-muted)',
                        fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                      }}>
                        {caseStudies[activeCase].position}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: isMobile ? '2rem' : '3rem',
            gap: '0.5rem',
          }}>
            {caseStudies.map((_, index) => (
              <motion.div
                key={index}
                onClick={() => handleCaseClick(index)}
                style={{
                  width: isMobile ? '10px' : '12px',
                  height: isMobile ? '10px' : '12px',
                  borderRadius: '50%',
                  backgroundColor: activeCase === index
                    ? 'var(--color-accent)'
                    : 'var(--overlay-medium)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;