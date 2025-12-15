'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ChessTimeline = () => {
  const timelineRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start']
  });
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Icon Component
  const TimelineIcon = ({ iconType, size = 40, color = 'currentColor' }) => {
    const iconStyle = {
      width: size,
      height: size,
      color: color,
    };

    switch (iconType) {
      case 'discovery':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="9" y1="15" x2="15" y2="15" />
            <line x1="12" y1="12" x2="12" y2="18" />
          </svg>
        );
      case 'architecture':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        );
      case 'development':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case 'testing':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        );
      case 'deployment':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        );
      case 'support':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        );
      default:
        return null;
    }
  };
  
  // Timeline data
  const timelineItems = [
    {
      id: 1,
      title: 'Discovery & Planning',
      date: 'Stage 1',
      iconType: 'discovery',
      color: 'var(--color-primary)',
      content: 'We start by understanding your business requirements, technical constraints, and project goals to create a comprehensive development roadmap.',
      image: '/images/discovery-planning.jpg'
    },
    {
      id: 2,
      title: 'Architecture & Design',
      date: 'Stage 2',
      iconType: 'architecture',
      color: 'var(--color-primary)',
      content: 'Our expert engineers design scalable architecture, select optimal tech stack, and create detailed system specifications for your solution.',
      image: '/images/architecture-design.jpg'
    },
    {
      id: 3,
      title: 'Development & Implementation',
      date: 'Stage 3',
      iconType: 'development',
      color: 'var(--color-primary)',
      content: 'We build your application using modern frameworks, best practices, and secure coding standards, ensuring clean and maintainable code.',
      image: '/images/development-implementation.jpg'
    },
    {
      id: 4,
      title: 'Testing & Quality Assurance',
      date: 'Stage 4',
      iconType: 'testing',
      color: 'var(--color-primary)',
      content: 'Rigorous testing ensures reliability, performance, and security. We conduct automated tests, security audits, and performance optimization.',
      image: '/images/testing-qa.jpg'
    },
    {
      id: 5,
      title: 'Deployment & Launch',
      date: 'Stage 5',
      iconType: 'deployment',
      color: 'var(--color-primary)',
      content: 'We deploy your application to production with CI/CD pipelines, monitoring systems, and cloud infrastructure configured for scalability.',
      image: '/images/deployment-launch.jpg'
    },
    {
      id: 6,
      title: 'Support & Optimization',
      date: 'Ongoing',
      iconType: 'support',
      color: 'var(--color-primary)',
      content: 'Continuous monitoring, updates, and optimization ensure your application performs at peak efficiency. We provide ongoing support and maintenance.',
      image: '/images/support-optimization.jpg'
    }
  ];
  
  // Initialize animations when component mounts
  useEffect(() => {
    if (isMobile) {
      // Simple mobile animations - just fade in
      return;
    }
    
    const ctx = gsap.context(() => {
      // Timeline progress indicator animation
      gsap.to('.timeline-progress-fill', {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          scrub: 0.3,
          start: 'top center',
          end: 'bottom center',
        }
      });
      
      // Timeline items animations - desktop only
      timelineItems.forEach((_, index) => {
        gsap.fromTo(
          `.timeline-item-${index}`,
          { 
            opacity: 0, 
            x: index % 2 === 0 ? -50 : 50 
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: `.timeline-item-${index}`,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, timelineRef);
    
    return () => ctx.revert();
  }, [isMobile]);
  
  // Calculate progress opacity based on scroll
  const progressOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );
  
  return (
    <section 
      ref={timelineRef}
      className="chess-timeline-section"
      style={{
        padding: isMobile ? '3rem 0' : '100px 0',
        background: 'linear-gradient(to bottom, #ffffff, #f8fafc)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Static Binary Code Background - Only on sides */}
      <div className="dev-bg-pattern" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        background: '#ffffff',
      }}>
        {/* Left side binary columns - Creative Cluster Design */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: isMobile ? '8%' : '15%',
          height: '100%',
          display: isMobile ? 'none' : 'flex',
          flexDirection: 'row',
          opacity: 0.4,
        }}>
          {Array.from({ length: isMobile ? 6 : 12 }).map((_, colIndex) => {
            const columnWidth = 100 / 12;
            const randomSeed = colIndex * 1000;
            const digitsPerColumn = 180;
            const columnOpacity = 0.3 + (colIndex % 3) * 0.15;
            const clusterSize = 8 + (randomSeed % 5);
            
            return (
              <div
                key={`left-col-${colIndex}`}
                style={{
                  width: `${columnWidth}%`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontFamily: 'monospace',
                  fontSize: '0.7rem',
                  color: 'var(--color-primary)',
                  lineHeight: '1.3',
                  paddingTop: `${(randomSeed % 30)}px`,
                  opacity: columnOpacity,
                }}
              >
                {Array.from({ length: digitsPerColumn }).map((_, rowIndex) => {
                  const seed = (randomSeed + rowIndex * 11) % 1000;
                  const digit = seed % 2 === 0 ? '0' : '1';
                  
                  // Create opacity gradient - fade in/out in clusters
                  const clusterPosition = rowIndex % clusterSize;
                  const clusterProgress = clusterPosition / clusterSize;
                  let opacity;
                  if (clusterProgress < 0.3) {
                    opacity = clusterProgress / 0.3 * 0.6;
                  } else if (clusterProgress > 0.7) {
                    opacity = (1 - clusterProgress) / 0.3 * 0.6;
                  } else {
                    opacity = 0.6;
                  }
                  
                  const fontSize = clusterPosition === Math.floor(clusterSize / 2) 
                    ? '0.85rem' 
                    : '0.7rem';
                  
                  const isBold = clusterPosition === Math.floor(clusterSize / 2);
                  
                  const colorVariation = seed % 3;
                  const color = colorVariation === 0 
                    ? 'var(--color-primary)' 
                    : colorVariation === 1 
                    ? 'rgba(30, 64, 175, 0.7)' 
                    : 'rgba(30, 64, 175, 0.5)';
                  
                  return (
                    <div
                      key={`left-${colIndex}-${rowIndex}`}
                      style={{
                        marginBottom: '0.25rem',
                        fontWeight: isBold ? '600' : '400',
                        opacity: opacity,
                        whiteSpace: 'nowrap',
                        color: color,
                        fontSize: fontSize,
                        transition: 'all 0.1s ease',
                      }}
                    >
                      {digit}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        
        {/* Right side binary columns - Creative Cluster Design */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: isMobile ? '8%' : '15%',
          height: '100%',
          display: isMobile ? 'none' : 'flex',
          flexDirection: 'row',
          opacity: 0.4,
        }}>
          {Array.from({ length: isMobile ? 6 : 12 }).map((_, colIndex) => {
            const columnWidth = 100 / 12;
            const randomSeed = (colIndex + 700) * 1000;
            const digitsPerColumn = 180;
            const columnOpacity = 0.3 + (colIndex % 3) * 0.15;
            const clusterSize = 8 + (randomSeed % 5);
            
            return (
              <div
                key={`right-col-${colIndex}`}
                style={{
                  width: `${columnWidth}%`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontFamily: 'monospace',
                  fontSize: '0.7rem',
                  color: 'var(--color-primary)',
                  lineHeight: '1.3',
                  paddingTop: `${(randomSeed % 30)}px`,
                  opacity: columnOpacity,
                }}
              >
                {Array.from({ length: digitsPerColumn }).map((_, rowIndex) => {
                  const seed = (randomSeed + rowIndex * 11) % 1000;
                  const digit = seed % 2 === 0 ? '0' : '1';
                  
                  // Create opacity gradient - fade in/out in clusters
                  const clusterPosition = rowIndex % clusterSize;
                  const clusterProgress = clusterPosition / clusterSize;
                  let opacity;
                  if (clusterProgress < 0.3) {
                    opacity = clusterProgress / 0.3 * 0.6;
                  } else if (clusterProgress > 0.7) {
                    opacity = (1 - clusterProgress) / 0.3 * 0.6;
                  } else {
                    opacity = 0.6;
                  }
                  
                  const fontSize = clusterPosition === Math.floor(clusterSize / 2) 
                    ? '0.85rem' 
                    : '0.7rem';
                  
                  const isBold = clusterPosition === Math.floor(clusterSize / 2);
                  
                  const colorVariation = seed % 3;
                  const color = colorVariation === 0 
                    ? 'var(--color-primary)' 
                    : colorVariation === 1 
                    ? 'rgba(30, 64, 175, 0.7)' 
                    : 'rgba(30, 64, 175, 0.5)';
                  
                  return (
                    <div
                      key={`right-${colIndex}-${rowIndex}`}
                      style={{
                        marginBottom: '0.25rem',
                        fontWeight: isBold ? '600' : '400',
                        opacity: opacity,
                        whiteSpace: 'nowrap',
                        color: color,
                        fontSize: fontSize,
                        transition: 'all 0.1s ease',
                      }}
                    >
                      {digit}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        
        {/* Decorative gradient overlays for depth */}
        {!isMobile && (
          <>
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '15%',
              height: '100%',
              background: 'linear-gradient(to right, rgba(30, 64, 175, 0.1), transparent)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: '15%',
              height: '100%',
              background: 'linear-gradient(to left, rgba(30, 64, 175, 0.1), transparent)',
              pointerEvents: 'none',
            }} />
          </>
        )}
      </div>
      
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="section-header" style={{
          textAlign: 'center',
          marginBottom: isMobile ? '2.5rem' : '5rem',
        }}>
          <h6 style={{
            fontSize: isMobile ? '0.875rem' : '1rem',
            fontWeight: 'bold',
            color: 'var(--color-primary)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1rem',
          }}>
            Our Process
          </h6>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.8rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#333',
            lineHeight: 1.2,
          }}>
            From Concept to Deployment
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            color: '#666',
            lineHeight: 1.6,
            padding: isMobile ? '0 0.5rem' : '0',
          }}>
            Our proven development process ensures your project is delivered on time, 
            within budget, and built to scale with your business needs.
          </p>
        </div>
        
        {/* Vertical timeline with progress indicator */}
        <div className="timeline-container" style={{
          position: 'relative',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {/* Timeline progress bar */}
          <motion.div 
            className="timeline-progress"
            style={{
              position: 'absolute',
              left: isMobile ? '20px' : '50%',
              top: 0,
              bottom: 0,
              width: isMobile ? '2px' : '4px',
              backgroundColor: '#e0e0e0',
              transform: isMobile ? 'none' : 'translateX(-50%)',
              opacity: progressOpacity,
            }}
          >
            <div 
              className="timeline-progress-fill"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '0%',
                backgroundColor: 'var(--color-primary)',
              }}
            />
          </motion.div>
          
          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={item.id}
              item={item}
              index={index}
              isEven={index % 2 === 0}
              isActive={activeItem === item.id}
              setActiveItem={setActiveItem}
              total={timelineItems.length}
              TimelineIcon={TimelineIcon}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual timeline item component
const TimelineItem = ({ item, index, isEven, isActive, setActiveItem, total, TimelineIcon, isMobile = false }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.5 });
  
  // Automatically set active item when it comes into view
  useEffect(() => {
    if (isInView) {
      setActiveItem(item.id);
    }
  }, [isInView, item.id, setActiveItem]);
  
  return (
    <div 
      ref={itemRef}
      className={`timeline-item timeline-item-${index}`}
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : (isEven ? 'row' : 'row-reverse'),
        alignItems: isMobile ? 'flex-start' : 'center',
        margin: isMobile ? '3rem 0' : '150px 0',
        position: 'relative',
        paddingLeft: isMobile ? '3rem' : '0',
      }}
    >
      {/* Content side */}
      <motion.div
        initial={{ opacity: isMobile ? 1 : 0, x: isMobile ? 0 : (isEven ? -50 : 50) }}
        animate={isMobile ? { opacity: 1 } : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 })}
        transition={isMobile ? {} : { duration: 0.5 }}
        style={{
          flex: 1,
          padding: isMobile ? '1rem' : '2rem',
          maxWidth: isMobile ? '100%' : '400px',
          marginLeft: isMobile ? 0 : (isEven ? 0 : 'auto'),
          marginRight: isMobile ? 0 : (isEven ? 'auto' : 0),
          width: isMobile ? '100%' : 'auto',
        }}
      >
        <span style={{
          display: 'inline-block',
          padding: isMobile ? '0.25rem 0.7rem' : '0.3rem 0.8rem',
          borderRadius: '50px',
          backgroundColor: 'var(--color-primary-light)',
          color: 'var(--color-primary)',
          marginBottom: '1rem',
          fontSize: isMobile ? '0.75rem' : '0.9rem',
          fontWeight: 'bold',
        }}>
          {item.date}
        </span>
        
        <h3 style={{
          fontSize: isMobile ? '1.25rem' : '1.8rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#333',
          lineHeight: 1.3,
        }}>
          {item.title}
        </h3>
        
        <p style={{
          fontSize: isMobile ? '0.9rem' : '1rem',
          color: '#666',
          lineHeight: 1.6,
          marginBottom: '1.5rem',
        }}>
          {item.content}
        </p>
        
        <motion.button
          whileHover={{ scale: isMobile ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: isMobile ? '0.6rem 1rem' : '0.7rem 1.2rem',
            background: 'transparent',
            border: '2px solid var(--color-primary)',
            borderRadius: '50px',
            color: 'var(--color-primary)',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: isMobile ? '0.8rem' : '0.9rem',
          }}
        >
          Learn More
          <svg 
            width={isMobile ? "14" : "16"} 
            height={isMobile ? "14" : "16"} 
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
      </motion.div>
      
      {/* Timeline node */}
      <motion.div
        initial={{ scale: isMobile ? 1 : 0 }}
        animate={isMobile ? { scale: 1 } : (isInView ? { scale: 1 } : { scale: 0 })}
        transition={isMobile ? {} : { 
          type: 'spring', 
          stiffness: 300, 
          damping: 15, 
          delay: 0.2 
        }}
        style={{
          width: isMobile ? '50px' : '80px',
          height: isMobile ? '50px' : '80px',
          borderRadius: '50%',
          backgroundColor: isActive ? 'var(--color-primary)' : '#f0f0f0',
          boxShadow: isActive 
            ? `0 0 0 ${isMobile ? '3px' : '5px'} var(--color-primary-light), 0 5px 20px rgba(0,0,0,0.15)` 
            : '0 5px 15px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isActive ? 'white' : '#aaa',
          zIndex: 2,
          transition: 'all 0.3s ease',
          position: 'absolute',
          left: isMobile ? '0' : '50%',
          top: isMobile ? '0' : '50%',
          transform: isMobile ? 'translateY(-50%)' : 'translate(-50%, -50%)',
        }}
      >
        <TimelineIcon iconType={item.iconType} size={isMobile ? 24 : 40} color={isActive ? 'white' : '#aaa'} />
        
        {/* Progress indicator for first and last items */}
        {index === 0 && (
          <div style={{
            position: 'absolute',
            top: isMobile ? '-35px' : '-50px',
            left: isMobile ? '50%' : '50%',
            transform: 'translateX(-50%)',
            fontSize: isMobile ? '0.7rem' : '0.8rem',
            fontWeight: 'bold',
            color: '#666',
            whiteSpace: 'nowrap',
          }}>
            START
          </div>
        )}
        
        {index === total - 1 && (
          <div style={{
            position: 'absolute',
            bottom: isMobile ? '-35px' : '-50px',
            left: isMobile ? '50%' : '50%',
            transform: 'translateX(-50%)',
            fontSize: isMobile ? '0.7rem' : '0.8rem',
            fontWeight: 'bold',
            color: '#666',
            whiteSpace: 'nowrap',
          }}>
            SUCCESS
          </div>
        )}
      </motion.div>
      
      {/* Image side */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            flex: 1,
            maxWidth: '400px',
            height: '250px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            marginLeft: isEven ? 'auto' : 0,
            marginRight: isEven ? 0 : 'auto',
            position: 'relative',
          }}
        >
          {/* This would be an actual image in production */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, var(--color-primary-light), rgba(30, 64, 175, 0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary)',
          }}>
            <TimelineIcon iconType={item.iconType} size={80} color="var(--color-primary)" />
          </div>
          
          {/* Image overlay with gradient */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, var(--color-primary-medium), transparent)',
            opacity: isActive ? 0.7 : 0,
            transition: 'opacity 0.3s ease',
          }} />
        </motion.div>
      )}
    </div>
  );
};

export default ChessTimeline;