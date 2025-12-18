'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Timeline = () => {
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

  // Animated Icon Component with Gradient and Image-like Effects
  const TimelineIcon = ({ iconType, size = 40, color = 'currentColor' }) => {
    const iconStyle = {
      width: size,
      height: size,
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
    };

    const gradientId1 = `gradient-${iconType}-1`;
    const gradientId2 = `gradient-${iconType}-2`;

    switch (iconType) {
      case 'discovery':
        return (
          <motion.svg
            viewBox="0 0 24 24"
            style={iconStyle}
            initial={{ rotate: 0, scale: 0.9 }}
            animate={{ rotate: [0, 5, -5, 0], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <defs>
              <linearGradient id={gradientId1} x1="0%" y1="0%" x2="100%" y2="100%">
                <motion.stop
                  offset="0%"
                  stopColor="#3B82F6"
                  animate={{ stopColor: ["#3B82F6", "#2563EB", "#3B82F6"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.stop
                  offset="100%"
                  stopColor="#2563EB"
                  animate={{ stopColor: ["#2563EB", "#1D4ED8", "#2563EB"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </linearGradient>
              <linearGradient id={gradientId2} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <motion.path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              fill={`url(#${gradientId1})`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0.7, 1, 0.7], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.polyline
              points="14 2 14 8 20 8"
              fill="none"
              stroke={`url(#${gradientId2})`}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.line
              x1="9" y1="15" x2="15" y2="15"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.line
              x1="12" y1="12" x2="12" y2="18"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }}
            />
          </motion.svg>
        );
      case 'architecture':
        return (
          <motion.svg
            viewBox="0 0 24 24"
            style={iconStyle}
          >
            <defs>
              <linearGradient id={gradientId1} x1="0%" y1="0%" x2="100%" y2="100%">
                <motion.stop
                  offset="0%"
                  stopColor="#10B981"
                  animate={{ stopColor: ["#10B981", "#3B82F6", "#10B981"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.stop
                  offset="100%"
                  stopColor="#3B82F6"
                  animate={{ stopColor: ["#3B82F6", "#8B5CF6", "#3B82F6"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </linearGradient>
            </defs>
            {[
              { x: 3, y: 3 },
              { x: 14, y: 3 },
              { x: 14, y: 14 },
              { x: 3, y: 14 }
            ].map((rect, index) => (
              <motion.rect
                key={index}
                x={rect.x}
                y={rect.y}
                width="7"
                height="7"
                rx="1"
                fill={`url(#${gradientId1})`}
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{
                  opacity: [0, 1, 1, 0.7],
                  scale: [0, 1.15, 1, 0.9],
                  rotate: [-45, 0, 0, -45]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.svg>
        );
      case 'development':
        return (
          <motion.svg
            viewBox="0 0 24 24"
            style={iconStyle}
          >
            <defs>
              <linearGradient id={gradientId1} x1="0%" y1="0%" x2="100%" y2="0%">
                <motion.stop
                  offset="0%"
                  stopColor="#F59E0B"
                  animate={{ stopColor: ["#F59E0B", "#EF4444", "#F59E0B"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.stop
                  offset="100%"
                  stopColor="#EF4444"
                  animate={{ stopColor: ["#EF4444", "#EC4899", "#EF4444"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </linearGradient>
              <radialGradient id={gradientId2}>
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
              </radialGradient>
            </defs>
            <motion.polyline
              points="16 18 22 12 16 6"
              fill="none"
              stroke={`url(#${gradientId1})`}
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.polyline
              points="8 6 2 12 8 18"
              fill="none"
              stroke={`url(#${gradientId1})`}
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.4, ease: "easeInOut" }}
            />
            <motion.circle
              cx="12"
              cy="12"
              r="3"
              fill={`url(#${gradientId2})`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.3, 1, 0], opacity: [0, 1, 0.8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>
        );
      case 'testing':
        return (
          <motion.svg
            viewBox="0 0 24 24"
            style={iconStyle}
          >
            <defs>
              <linearGradient id={gradientId1} x1="0%" y1="0%" x2="100%" y2="100%">
                <motion.stop
                  offset="0%"
                  stopColor="#10B981"
                  animate={{ stopColor: ["#10B981", "#059669", "#10B981"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.stop
                  offset="100%"
                  stopColor="#059669"
                  animate={{ stopColor: ["#059669", "#047857", "#059669"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </linearGradient>
            </defs>
            <motion.path
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              fill={`url(#${gradientId1})`}
              initial={{ opacity: 0.7, scale: 0.9 }}
              animate={{ opacity: [0.7, 1, 0.7], scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M9 12l2 2 4-4"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.circle
              cx="12"
              cy="12"
              r="2"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1.2, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
            />
          </motion.svg>
        );
      case 'deployment':
        return (
          <motion.svg
            viewBox="0 0 24 24"
            style={iconStyle}
          >
            <defs>
              <linearGradient id={gradientId1} x1="0%" y1="0%" x2="100%" y2="100%">
                <motion.stop
                  offset="0%"
                  stopColor="#3B82F6"
                  animate={{ stopColor: ["#3B82F6", "#6366F1", "#3B82F6"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.stop
                  offset="100%"
                  stopColor="#6366F1"
                  animate={{ stopColor: ["#6366F1", "#8B5CF6", "#6366F1"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </linearGradient>
            </defs>
            <motion.path
              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              fill={`url(#${gradientId1})`}
              initial={{ opacity: 0.8, scale: 0.95 }}
              animate={{ opacity: [0.8, 1, 0.8], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.polyline
              points="3.27 6.96 12 12.01 20.73 6.96"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.line
              x1="12" y1="22.08" x2="12" y2="12"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.6, ease: "easeInOut" }}
            />
            <motion.circle
              cx="12"
              cy="12"
              r="1.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.8, 1.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.9, ease: "easeInOut" }}
            />
          </motion.svg>
        );
      case 'support':
        return (
          <motion.svg
            viewBox="0 0 24 24"
            style={iconStyle}
          >
            <defs>
              <linearGradient id={gradientId1} x1="0%" y1="0%" x2="100%" y2="100%">
                <motion.stop
                  offset="0%"
                  stopColor="#EC4899"
                  animate={{ stopColor: ["#EC4899", "#F472B6", "#EC4899"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.stop
                  offset="100%"
                  stopColor="#F472B6"
                  animate={{ stopColor: ["#F472B6", "#FB7185", "#F472B6"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </linearGradient>
            </defs>
            <motion.circle
              cx="12"
              cy="12"
              r="10"
              fill={`url(#${gradientId1})`}
              initial={{ rotate: 0, scale: 0.95 }}
              animate={{ rotate: [0, 360], scale: [0.95, 1.05, 0.95] }}
              transition={{ rotate: { duration: 4, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
            />
            <motion.path
              d="M12 6v6l4 2"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.circle
              cx="12"
              cy="12"
              r="2"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.4, 1.2, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 1, ease: "easeInOut" }}
            />
          </motion.svg>
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
      color: 'var(--color-secondary)',
      content: 'We start by understanding your business requirements, technical constraints, and project goals to create a comprehensive development roadmap.',
      image: '/images/discovery-planning.png'
    },
    {
      id: 2,
      title: 'Architecture & Design',
      date: 'Stage 2',
      iconType: 'architecture',
      color: 'var(--color-secondary)',
      content: 'Our expert engineers design scalable architecture, select optimal tech stack, and create detailed system specifications for your solution.',
      image: '/images/architecture-design.jpg'
    },
    {
      id: 3,
      title: 'Development & Implementation',
      date: 'Stage 3',
      iconType: 'development',
      color: 'var(--color-secondary)',
      content: 'We build your application using modern frameworks, best practices, and secure coding standards, ensuring clean and maintainable code.',
      image: '/images/development-implementation.webp'
    },
    {
      id: 4,
      title: 'Testing & Quality Assurance',
      date: 'Stage 4',
      iconType: 'testing',
      color: 'var(--color-secondary)',
      content: 'Rigorous testing ensures reliability, performance, and security. We conduct automated tests, security audits, and performance optimization.',
      image: '/images/testing-qa.jpg'
    },
    {
      id: 5,
      title: 'Deployment & Launch',
      date: 'Stage 5',
      iconType: 'deployment',
      color: 'var(--color-secondary)',
      content: 'We deploy your application to production with CI/CD pipelines, monitoring systems, and cloud infrastructure configured for scalability.',
      image: '/images/deployment-launch.jpg'
    },
    {
      id: 6,
      title: 'Support & Optimization',
      date: 'Ongoing',
      iconType: 'support',
      color: 'var(--color-secondary)',
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
        backgroundColor: '#ffffff',
        backgroundImage: 'url(/formbg.png)',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* White overlay for subtle background effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem',
        position: 'relative',
        zIndex: 3,
      }}>
        <div className="section-header" style={{
          textAlign: 'center',
          marginBottom: isMobile ? '2.5rem' : '5rem',
        }}>
          <h6 style={{
            fontSize: isMobile ? '0.875rem' : '1rem',
            fontWeight: 700,
            color: 'var(--color-primary)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1rem',
            fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
          }}>
            Our Process
          </h6>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.8rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: '#0F172A',
            lineHeight: 1.2,
            fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
            textShadow: '0 2px 4px rgba(255, 255, 255, 0.5)',
          }}>
            From Concept to Deployment
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            color: '#1A202C',
            lineHeight: 1.6,
            padding: isMobile ? '0 0.5rem' : '0',
            fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
            fontWeight: 500,
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
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
                backgroundColor: 'var(--color-secondary)',
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
          backgroundColor: 'var(--color-secondary-light)',
          color: 'var(--color-secondary)',
          marginBottom: '1rem',
          fontSize: isMobile ? '0.75rem' : '0.9rem',
          fontWeight: 'bold',
          fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
        }}>
          {item.date}
        </span>

        <h3 style={{
          fontSize: isMobile ? '1.25rem' : '1.8rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#333',
          lineHeight: 1.3,
          fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
        }}>
          {item.title}
        </h3>

        <p style={{
          fontSize: isMobile ? '0.9rem' : '1rem',
          color: '#666',
          lineHeight: 1.6,
          marginBottom: '1.5rem',
          fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
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
            border: '2px solid var(--color-secondary)',
            borderRadius: '50px',
            color: 'var(--color-secondary)',
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
          backgroundColor: isActive ? 'var(--color-secondary)' : '#f0f0f0',
          boxShadow: isActive
            ? `0 0 0 ${isMobile ? '3px' : '5px'} var(--color-secondary-light), 0 5px 20px rgba(0,0,0,0.15)`
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
            fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
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
            fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
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
          {/* Actual image background */}
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#f8f9fa',
            position: 'relative',
          }}>
            {/* Subtle overlay for better text visibility */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.1))',
            }} />
          </div>

          {/* Image overlay with gradient */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, var(--color-secondary-medium), transparent)',
            opacity: isActive ? 0.5 : 0,
            transition: 'opacity 0.3s ease',
          }} />
        </motion.div>
      )}
    </div>
  );
};

export default Timeline;