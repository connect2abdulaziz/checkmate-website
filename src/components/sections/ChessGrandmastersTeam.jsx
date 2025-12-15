'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ChessGrandmastersTeam = () => {
  const sectionRef = useRef(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [screenSize, setScreenSize] = useState('desktop');
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Check for screen size with multiple breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 768) {
        setScreenSize('small-tablet');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else if (width < 1280) {
        setScreenSize('desktop');
      } else {
        setScreenSize('large-desktop');
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const isMobile = screenSize === 'mobile';
  const isTablet = screenSize === 'tablet' || screenSize === 'small-tablet';

  // Team members data - only 5 members with theme colors
  const teamMembers = [
    {
      id: 1,
      name: "Abdul Aziz",
      position: "CEO & Founder",
      color: "var(--color-secondary)",
      image: "/images/team/abdulaziz.jpeg",
      description: "Abdul leads our team with vision and strategy. With over 15 years of software development experience, he specializes in architecting scalable solutions and driving innovation.",
      size: "small",
      zIndex: 1,
      social: {
        linkedin: "https://linkedin.com/in/connect2abdulaziz",
        twitter: "https://twitter.com/connect2aziz",
        github: "https://github.com/connect2abdulaziz"
      }
    },
    {
      id: 2,
      name: "Sarah Queen",
      position: "CTO",
      color: "var(--color-primary)",
      image: "/images/team/abdulaziz.jpeg",
      description: "Sarah oversees all technical operations and product development. Her versatile skill set allows her to move across departments, solving complex challenges with elegance.",
      size: "medium",
      zIndex: 2,
      social: {
        linkedin: "https://linkedin.com/in/sarahqueen",
        twitter: "https://twitter.com/sarahqueen",
        github: "https://github.com/sarahqueen"
      }
    },
    {
      id: 3,
      name: "John Smith",
      position: "Senior Developer",
      color: "var(--color-secondary)",
      image: "/images/team/abdulaziz.jpeg",
      description: "John brings extensive experience in full-stack development. His expertise in modern technologies and best practices ensures our projects are built with excellence and scalability.",
      size: "large",
      zIndex: 3,
      social: {
        linkedin: "https://linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith",
        github: "https://github.com/johnsmith"
      }
    },
    {
      id: 4,
      name: "Alice Doe",
      position: "Creative Director",
      color: "var(--color-primary)",
      image: "/images/team/abdulaziz.jpeg",
      description: "Alice heads our design team, bringing creative vision to all our projects. Her background ensures our solutions are not only functional but beautiful and user-friendly.",
      size: "medium",
      zIndex: 2,
      social: {
        linkedin: "https://linkedin.com/in/alicedoe",
        twitter: "https://twitter.com/alicedoe",
        github: "https://github.com/alicedoe"
      }
    },
    {
      id: 5,
      name: "Jim Amis",
      position: "Project Manager",
      color: "var(--color-secondary)",
      image: "/images/team/abdulaziz.jpeg",
      description: "Jim navigates complex project challenges with creative approaches. His ability to coordinate cross-functional teams ensures our projects are delivered on time and within budget.",
      size: "small",
      zIndex: 1,
      social: {
        linkedin: "https://linkedin.com/in/jimamis",
        twitter: "https://twitter.com/jimamis",
        github: "https://github.com/jimamis"
      }
    }
  ];

  // Get image size configuration - responsive sizes
  const getImageSize = (size) => {
    if (screenSize === 'mobile') {
      // Smaller sizes on mobile to fit all 5 images without scroll
      switch (size) {
        case 'large':
          return { width: 60, height: 60, marginTop: 0 };
        case 'medium':
          return { width: 55, height: 55, marginTop: 0 };
        case 'small':
          return { width: 50, height: 50, marginTop: 0 };
        default:
          return { width: 55, height: 55, marginTop: 0 };
      }
    } else if (screenSize === 'small-tablet') {
      switch (size) {
        case 'large':
          return { width: 100, height: 100, marginTop: 0 };
        case 'medium':
          return { width: 90, height: 90, marginTop: 20 };
        case 'small':
          return { width: 80, height: 80, marginTop: 30 };
        default:
          return { width: 90, height: 90, marginTop: 20 };
      }
    } else if (screenSize === 'tablet') {
      switch (size) {
        case 'large':
          return { width: 140, height: 140, marginTop: 0 };
        case 'medium':
          return { width: 120, height: 120, marginTop: 25 };
        case 'small':
          return { width: 100, height: 100, marginTop: 40 };
        default:
          return { width: 120, height: 120, marginTop: 25 };
      }
    } else {
      switch (size) {
        case 'large':
          return { width: 240, height: 240, marginTop: 0 };
        case 'medium':
          return { width: 200, height: 200, marginTop: 50 };
        case 'small':
          return { width: 180, height: 180, marginTop: 80 };
        default:
          return { width: 200, height: 200, marginTop: 50 };
      }
    }
  };

  // Bubble animation effect - cards appear from bottom and float up
  useEffect(() => {
    if (!isInView) return;

    // Animate profile images appearing from bottom
    teamMembers.forEach((member, index) => {
      const imageElement = document.querySelector(`.team-image-${member.id}`);
      const cardElement = document.querySelector(`.team-card-${member.id}`);

      if (imageElement) {
        gsap.set(imageElement, {
          y: 100,
          opacity: 0,
          scale: 0.8,
        });

        gsap.to(imageElement, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.7)",
        });

        // Continuous floating animation
        gsap.to(imageElement, {
          y: -20,
          duration: 2 + (index % 3) * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.1 + 0.8,
        });
      }

      if (cardElement) {
        gsap.set(cardElement, {
          y: 50,
          opacity: 0,
        });

        gsap.to(cardElement, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1 + 0.5,
          ease: "power2.out",
        });
      }
    });
  }, [isInView, teamMembers]);

  // Social Icons Component
  const SocialIcons = ({ color, member }) => {
    const iconSize = screenSize === 'mobile' ? '10px' : screenSize === 'small-tablet' ? '11px' : '12px';
    const buttonSize = screenSize === 'mobile' ? '20px' : screenSize === 'small-tablet' ? '22px' : '24px';

    const socialLinks = [
      {
        name: 'linkedin',
        icon: (
          <svg viewBox="0 0 24 24" fill="white" style={{ width: iconSize, height: iconSize }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        ),
        url: member.social?.linkedin || '#'
      },
      {
        name: 'twitter',
        icon: (
          <svg viewBox="0 0 24 24" fill="white" style={{ width: iconSize, height: iconSize }}>
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        ),
        url: member.social?.twitter || '#'
      },
      {
        name: 'github',
        icon: (
          <svg viewBox="0 0 24 24" fill="white" style={{ width: iconSize, height: iconSize }}>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        ),
        url: member.social?.github || '#'
      },
      {
        name: 'email',
        icon: (
          <svg viewBox="0 0 24 24" fill="white" style={{ width: iconSize, height: iconSize }}>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        ),
        url: '#'
      },
      {
        name: 'link',
        icon: (
          <svg viewBox="0 0 24 24" fill="white" style={{ width: iconSize, height: iconSize }}>
            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
          </svg>
        ),
        url: '#'
      }
    ];

    return (
      <div style={{
        display: 'flex',
        gap: screenSize === 'mobile' ? '0.2rem' : '0.25rem',
        justifyContent: 'center',
        marginTop: '0.5rem',
        flexWrap: 'wrap',
        width: '100%',
      }}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: buttonSize,
              height: buttonSize,
              borderRadius: '50%',
              backgroundColor: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(15, 23, 42, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="chess-team-section"
      style={{
        padding: isMobile ? '3rem 0' : isTablet ? '4rem 0' : '100px 0',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        overflowY: 'hidden',
        marginTop: '-1px',
        minHeight: isMobile ? 'auto' : '100vh',
      }}
    >
      {/* Top fade overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: isMobile ? '80px' : isTablet ? '100px' : '150px',
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.7), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* Bottom fade overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: isMobile ? '80px' : isTablet ? '100px' : '150px',
        background: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.7), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: isMobile ? '0 0.75rem' : isTablet ? '0 1.5rem' : '0 2rem',
        position: 'relative',
        zIndex: 3,
        boxSizing: 'border-box',
      }}>
        {/* Header */}
        <div className="team-header" style={{
          textAlign: 'center',
          marginBottom: isMobile ? '2rem' : isTablet ? '3rem' : '4rem',
          padding: isMobile ? '0 0.5rem' : '0',
        }}>
          <motion.h6
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: isMobile ? '0.75rem' : isTablet ? '0.875rem' : '1rem',
              fontWeight: 'bold',
              color: 'var(--color-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: isMobile ? '0.75rem' : '1rem',
              fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
            }}
          >
            Our Team
          </motion.h6>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: isMobile ? '2rem' : isTablet ? '2.75rem' : '3.75rem',
              marginBottom: isMobile ? '1rem' : '1.5rem',
              color: 'var(--text-on-light)',
              fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Meet our team
          </motion.h1>
        </div>

        {isMobile ? (
          /* Mobile: One image-card pair at a time */
          <>
            {/* Profile Image - Mobile */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
              width: '100%',
              overflow: 'hidden',
              height: 'auto',
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMobileIndex}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      padding: '4px',
                      backgroundColor: '#ffffff',
                      border: `4px solid ${teamMembers[activeMobileIndex].color}`,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={teamMembers[activeMobileIndex].image}
                      alt={teamMembers[activeMobileIndex].name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex';
                        }
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%)',
                      }}
                    />
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(15, 23, 42, 0.05)',
                      display: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: teamMembers[activeMobileIndex].color,
                      fontSize: '2rem',
                      fontWeight: 'bold',
                    }}>
                      {teamMembers[activeMobileIndex].name.charAt(0)}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Info Card - Mobile */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMobileIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1.5rem',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                {/* Name */}
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.05em',
                    color: teamMembers[activeMobileIndex].color,
                    marginBottom: '0.5rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {teamMembers[activeMobileIndex].name.toUpperCase()}
                </h3>

                {/* Position */}
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-on-light-muted)',
                  marginBottom: '1rem',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                }}>
                  {teamMembers[activeMobileIndex].position}
                </p>

                {/* Social Icons */}
                <SocialIcons color={teamMembers[activeMobileIndex].color} member={teamMembers[activeMobileIndex]} />

                {/* Description */}
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-on-light-muted)',
                  marginTop: '1.5rem',
                  lineHeight: 1.7,
                  textAlign: 'left',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  opacity: 0.8,
                  width: '100%',
                }}>
                  {teamMembers[activeMobileIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots - Mobile */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2rem',
            }}>
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveMobileIndex(index)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: activeMobileIndex === index
                      ? teamMembers[index].color
                      : 'rgba(15, 23, 42, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                  aria-label={`View ${teamMembers[index].name}`}
                />
              ))}
            </div>
          </>
        ) : (
          /* Desktop/Tablet: Original overlapping layout */
          <>
            {/* Overlapping Profile Images Row */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginBottom: isTablet ? '2.5rem' : '3rem',
              position: 'relative',
              width: '100%',
              overflowX: 'hidden',
              overflowY: 'hidden',
              height: 'auto',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                marginLeft: isTablet ? '-15px' : '-20px',
                marginRight: isTablet ? '-15px' : '-20px',
                width: '100%',
                overflow: 'hidden',
                overflowY: 'hidden',
                height: 'auto',
              }}>
                {teamMembers.map((member, index) => {
                  const sizeConfig = getImageSize(member.size);
                  const overlapAmount = isTablet ? '-20px' : '-30px';

                  return (
                    <motion.div
                      key={member.id}
                      className={`team-image-${member.id}`}
                      initial={{ y: 100, opacity: 0, scale: 0.8 }}
                      animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: member.zIndex,
                        marginLeft: index === 0 ? 0 : overlapAmount,
                        marginTop: sizeConfig.marginTop,
                        position: 'relative',
                        flexShrink: 0,
                      }}
                    >
                      {/* Profile Image with Colored Ring */}
                      <div
                        style={{
                          width: sizeConfig.width,
                          height: sizeConfig.height,
                          borderRadius: '50%',
                          padding: screenSize === 'small-tablet' ? '3px' : '4px',
                          backgroundColor: '#ffffff',
                          border: `${screenSize === 'small-tablet' ? '3px' : '4px'} solid ${member.color}`,
                          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                          position: 'relative',
                        }}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextSibling) {
                              e.target.nextSibling.style.display = 'flex';
                            }
                          }}
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            filter: 'grayscale(100%)',
                          }}
                        />
                        <div style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(15, 23, 42, 0.05)',
                          display: 'none',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: member.color,
                          fontSize: screenSize === 'small-tablet' ? '1.25rem' : screenSize === 'tablet' ? '1.5rem' : '2rem',
                          fontWeight: 'bold',
                        }}>
                          {member.name.charAt(0)}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Info Cards Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: screenSize === 'small-tablet'
                ? 'repeat(2, 1fr)'
                : screenSize === 'tablet'
                  ? 'repeat(2, 1fr)'
                  : screenSize === 'desktop'
                    ? 'repeat(3, 1fr)'
                    : 'repeat(5, 1fr)',
              gap: screenSize === 'small-tablet' ? '1.25rem' : screenSize === 'tablet' ? '1.25rem' : '1rem',
              marginTop: screenSize === 'small-tablet' ? '1.5rem' : screenSize === 'tablet' ? '1.5rem' : '2rem',
              width: '100%',
              boxSizing: 'border-box',
            }}>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className={`team-card-${member.id}`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.5,
                    ease: "power2.out",
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: screenSize === 'small-tablet' ? '0.875rem' : screenSize === 'tablet' ? '0.75rem' : '0.5rem',
                    width: '100%',
                    boxSizing: 'border-box',
                    minWidth: 0,
                  }}
                >
                  {/* Name */}
                  <h3
                    style={{
                      fontSize: screenSize === 'small-tablet' ? '0.8125rem' : screenSize === 'tablet' ? '0.8125rem' : '0.875rem',
                      fontWeight: 'bold',
                      letterSpacing: '0.05em',
                      color: member.color,
                      marginBottom: '0.25rem',
                      fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                      wordBreak: 'break-word',
                      width: '100%',
                      overflowWrap: 'break-word',
                    }}
                  >
                    {member.name.toUpperCase()}
                  </h3>

                  {/* Position */}
                  <p style={{
                    fontSize: screenSize === 'small-tablet' ? '0.7rem' : screenSize === 'tablet' ? '0.7rem' : '0.75rem',
                    color: 'var(--text-on-light-muted)',
                    marginBottom: '0.5rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    wordBreak: 'break-word',
                    width: '100%',
                    overflowWrap: 'break-word',
                  }}>
                    {member.position}
                  </p>

                  {/* Social Icons */}
                  <SocialIcons color={member.color} member={member} />

                  {/* Description */}
                  <p style={{
                    fontSize: screenSize === 'small-tablet' ? '0.7rem' : screenSize === 'tablet' ? '0.7rem' : '0.75rem',
                    color: 'var(--text-on-light-muted)',
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    textAlign: 'justify',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    opacity: 0.8,
                    width: '100%',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}>
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ChessGrandmastersTeam;
