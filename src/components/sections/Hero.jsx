'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Typewriter effect component
  const TypewriterText = ({ text, delay = 0, style = {}, imageStyle = null }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      // Start typing after delay
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay * 1000);

      return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
      if (hasStarted && currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 20); // Faster: 20ms per character

        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, hasStarted]);

    return (
      <motion.span
        style={imageStyle || style}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {displayedText}
      </motion.span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '85vh',
        width: '100%',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '6rem 1rem 2rem' : '10rem 4rem 3rem',
        color: 'var(--text-on-light)',
      }}
    >
      {/* 3D Paper Art Style Background */}

      {/* Decorative Lines - Full Width */}
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            padding: '2rem 4rem',
            justifyContent: 'flex-start',
          }}
        >
          {Array.from({ length: 38 }).map((_, i) => {
            const depth = i % 3;
            const leftOffset = i % 3 === 0 ? 0 : i % 3 === 1 ? 30 : -20;
            const rightOffset = i % 3 === 0 ? 0 : i % 3 === 1 ? -30 : 20;
            const lineOpacity = 0.15 + depth * 0.05;

            // Calculate distance from center (19 is the middle of 38)
            const centerIndex = 19;
            const distanceFromCenter = Math.abs(i - centerIndex);
            const maxDistance = centerIndex;

            // Lines get shorter as they approach center (distance decreases)
            // At edges: 26.25% width, at center: 5.25% width (increased by 5%)
            const lineWidthPercent = 5.25 + (distanceFromCenter / maxDistance) * 21;
            const centerGapPercent = 100 - (lineWidthPercent * 2);

            return (
              <div
                key={`line-${i}`}
                style={{
                  width: '100%',
                  height: '2px',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {/* Left side line */}
                <div
                  style={{
                    width: `${lineWidthPercent}%`,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent 0%, rgba(30, 64, 175, ${lineOpacity}) 50%, rgba(30, 64, 175, ${lineOpacity * 1.5}) 100%)`,
                    transform: `translateX(${leftOffset}px)`,
                    borderRadius: '1px',
                  }}
                />

                {/* Center gap - larger in center, smaller at edges */}
                <div style={{ width: `${centerGapPercent}%`, height: '2px' }} />

                {/* Right side line */}
                <div
                  style={{
                    width: `${lineWidthPercent}%`,
                    height: '2px',
                    background: `linear-gradient(90deg, rgba(30, 64, 175, ${lineOpacity * 1.5}) 0%, rgba(30, 64, 175, ${lineOpacity}) 50%, transparent 100%)`,
                    transform: `translateX(${rightOffset}px)`,
                    borderRadius: '1px',
                  }}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Mobile: Simplified lines */}
      {isMobile && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            padding: '2rem 1rem',
          }}
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const depth = i % 3;
            const lineOpacity = 0.12 + depth * 0.04;

            // Calculate distance from center (12 is the middle of 24)
            const centerIndex = 12;
            const distanceFromCenter = Math.abs(i - centerIndex);
            const maxDistance = centerIndex;

            // Lines get shorter as they approach center
            const lineWidthPercent = 5.25 + (distanceFromCenter / maxDistance) * 21;
            const centerGapPercent = 100 - (lineWidthPercent * 2);

            return (
              <div
                key={`mobile-line-${i}`}
                style={{
                  width: '100%',
                  height: '2px',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {/* Left side line */}
                <div
                  style={{
                    width: `${lineWidthPercent}%`,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent 0%, rgba(30, 64, 175, ${lineOpacity}) 50%, rgba(30, 64, 175, ${lineOpacity * 1.5}) 100%)`,
                    borderRadius: '1px',
                  }}
                />

                {/* Center gap */}
                <div style={{ width: `${centerGapPercent}%`, height: '2px' }} />

                {/* Right side line */}
                <div
                  style={{
                    width: `${lineWidthPercent}%`,
                    height: '2px',
                    background: `linear-gradient(90deg, rgba(30, 64, 175, ${lineOpacity * 1.5}) 0%, rgba(30, 64, 175, ${lineOpacity}) 50%, transparent 100%)`,
                    borderRadius: '1px',
                  }}
                />
              </div>
            );
          })}
        </div>
      )}


      {/* Mobile: Simplified subtle blocks */}
      {isMobile && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '80px',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '2rem 0.5rem',
            alignItems: 'flex-end',
            opacity: 0.4,
          }}
        >
          {Array.from({ length: 5 }).map((_, i) => {
            const offset = i % 2 === 0 ? 0 : -8;
            const depth = i % 2;
            const isCenterBlock = i >= 2 && i <= 3;
            return (
              <div
                key={`right-mobile-block-${i}`}
                style={{
                  width: isCenterBlock ? '50px' : '60px',
                  height: isCenterBlock ? '50px' : '70px',
                  background: `linear-gradient(135deg, rgba(255, 255, 255, ${0.95 - depth * 0.05}) 0%, rgba(255, 255, 255, ${0.88 - depth * 0.05}) 100%)`,
                  backdropFilter: 'blur(15px) saturate(150%)',
                  borderRadius: '6px',
                  boxShadow: `0 ${2 + depth}px ${8 + depth * 2}px var(--glass-shadow)`,
                  transform: `translateX(${offset}px)`,
                  border: `1px solid var(--glass-border)`,
                }}
              />
            );
          })}
        </div>
      )}


      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2rem',
          }}
        >
          {/* Main Heading */}
          <motion.div
            variants={itemVariants}
            style={{
              position: 'relative',
              marginBottom: '2rem',
              maxWidth: '1000px',
            }}
          >
            <motion.h1
              variants={textVariants}
              className="hero-text"
              style={{
                fontSize: isMobile ? '2rem' : '4.5rem',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '1rem',
                color: 'var(--text-on-light)',
                letterSpacing: '-0.01em',
                fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              <motion.span
                style={{ display: 'block' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <motion.span
                  style={{
                    background: 'linear-gradient(90deg, var(--text-on-light) 0%, var(--text-on-light-muted) 50%, var(--text-on-light) 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <TypewriterText text="Build " delay={0.3} />
                </motion.span>
                {' '}
                <motion.span
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"), linear-gradient(135deg, rgba(30, 64, 175, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    position: 'relative',
                    display: 'inline-block',
                    fontWeight: '900',
                  }}
                  animate={{
                    backgroundPosition: ['center center', 'center 60%', 'center center'],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <TypewriterText
                    text="Powerful"
                    delay={0.3 + (5 * 20) / 1000}
                    imageStyle={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"), linear-gradient(135deg, rgba(30, 64, 175, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  />
                </motion.span>
              </motion.span>
              <motion.span
                style={{ display: 'block' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <motion.span
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"), linear-gradient(90deg, rgba(30, 64, 175, 0.2) 0%, rgba(37, 99, 235, 0.2) 50%, rgba(30, 64, 175, 0.2) 100%)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                    fontWeight: '900',
                  }}
                  animate={{
                    backgroundPosition: ['center center', 'center 70%', 'center center'],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <TypewriterText
                    text="Full-Stack Solutions"
                    delay={0.3 + ((5 + 8) * 20) / 1000}
                    imageStyle={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"), linear-gradient(90deg, rgba(30, 64, 175, 0.2) 0%, rgba(37, 99, 235, 0.2) 50%, rgba(30, 64, 175, 0.2) 100%)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  />
                </motion.span>
              </motion.span>
              <motion.span
                style={{
                  display: 'block',
                  fontSize: isMobile ? '1.25rem' : '2rem',
                  fontWeight: '600',
                  marginTop: '0.75rem',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <motion.span
                  style={{
                    background: 'linear-gradient(90deg, var(--text-on-light-muted) 0%, var(--text-on-light) 50%, var(--text-on-light-muted) 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <TypewriterText text="with Expert " delay={0.3 + ((5 + 8 + 20) * 20) / 1000} />
                </motion.span>
                {' '}
                <motion.span
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"), linear-gradient(135deg, rgba(30, 64, 175, 0.25) 0%, rgba(59, 130, 246, 0.25) 50%, rgba(96, 165, 250, 0.25) 100%)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    position: 'relative',
                    display: 'inline-block',
                    fontWeight: '900',
                  }}
                  animate={{
                    backgroundPosition: ['center center', 'center 65%', 'center center'],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <TypewriterText
                    text="Engineering"
                    delay={0.3 + ((5 + 8 + 20 + 11) * 20) / 1000}
                    imageStyle={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"), linear-gradient(135deg, rgba(30, 64, 175, 0.25) 0%, rgba(59, 130, 246, 0.25) 50%, rgba(96, 165, 250, 0.25) 100%)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  />
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
              style={{
                height: '4px',
                background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-medium), var(--color-primary))',
                borderRadius: '2px',
                marginTop: '1rem',
                maxWidth: '200px',
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            style={{
              maxWidth: '800px',
              marginBottom: '2.5rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{
                marginBottom: '3rem',
              }}
            >
              <motion.p
                style={{
                  fontSize: isMobile ? '1.125rem' : '1.5rem',
                  lineHeight: 1.6,
                  fontWeight: '400',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  fontWeight: 600,
                  color: 'var(--text-on-light-muted)',
                  marginBottom: '2rem',
                }}
              >
                Transform your ideas into{' '}
                <motion.span
                  style={{
                    color: 'var(--color-primary)',
                    fontWeight: '600',
                  }}
                >
                  scalable applications
                </motion.span>
                {' '}with our professional packaged services.
              </motion.p>

              {/* Tech Stack - Modern Pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {['Full-Stack Development', 'Software Engineering', 'DevOps & Cloud', 'Data Security', 'AI & Machine Learning', 'Process Automation'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.2 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      padding: isMobile ? '0.5rem 1rem' : '0.625rem 1.5rem',
                      background: '#ffffff',
                      borderRadius: '50px',
                      fontSize: isMobile ? '0.75rem' : '0.9375rem',
                      fontWeight: '500',
                      color: 'var(--text-on-light)',
                      cursor: 'default',
                      fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;

