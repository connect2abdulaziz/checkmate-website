'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';

export default function SuccessStoriesPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const successStories = [
    {
      id: 1,
      client: 'TechFlow Solutions',
      industry: 'SaaS Platform',
      challenge: 'Needed to scale their infrastructure to handle 10x user growth',
      solution: 'Implemented microservices architecture with auto-scaling on AWS',
      results: [
        { metric: '300%', label: 'Performance Increase' },
        { metric: '99.9%', label: 'Uptime Achieved' },
        { metric: '50%', label: 'Cost Reduction' },
      ],
      testimonial: 'Checkmate transformed our platform. The scalability improvements exceeded our expectations.',
      author: 'Sarah Johnson',
      role: 'CTO, TechFlow Solutions',
      color: 'primary',
      icon: '🚀',
    },
    {
      id: 2,
      client: 'GreenEnergy Corp',
      industry: 'Energy Management',
      challenge: 'Legacy system couldn\'t handle real-time data processing from IoT devices',
      solution: 'Built modern data pipeline with real-time analytics and predictive insights',
      results: [
        { metric: '2.5M', label: 'Data Points/Hour' },
        { metric: '40%', label: 'Energy Savings' },
        { metric: '24/7', label: 'Monitoring' },
      ],
      testimonial: 'The new system gave us insights we never had before. Game-changing for our operations.',
      author: 'Michael Chen',
      role: 'VP of Technology, GreenEnergy Corp',
      color: 'secondary',
      icon: '⚡',
    },
    {
      id: 3,
      client: 'HealthCare Plus',
      industry: 'Healthcare Technology',
      challenge: 'Required HIPAA-compliant patient portal with secure data handling',
      solution: 'Developed secure patient management system with end-to-end encryption',
      results: [
        { metric: '100%', label: 'HIPAA Compliant' },
        { metric: '500K+', label: 'Patients Served' },
        { metric: '60%', label: 'Faster Processing' },
      ],
      testimonial: 'Outstanding security implementation. Our patients trust the platform completely.',
      author: 'Dr. Emily Rodriguez',
      role: 'Chief Medical Officer, HealthCare Plus',
      color: 'primary',
      icon: '🏥',
    },
    {
      id: 4,
      client: 'RetailMax',
      industry: 'E-Commerce',
      challenge: 'Needed AI-powered inventory optimization and demand forecasting',
      solution: 'Built ML models for inventory management with real-time recommendations',
      results: [
        { metric: '35%', label: 'Inventory Reduction' },
        { metric: '90%', label: 'Forecast Accuracy' },
        { metric: '$2M+', label: 'Cost Savings' },
      ],
      testimonial: 'The AI predictions are incredibly accurate. We\'ve optimized our entire supply chain.',
      author: 'David Park',
      role: 'Operations Director, RetailMax',
      color: 'secondary',
      icon: '🛒',
    },
    {
      id: 5,
      client: 'FinanceSecure',
      industry: 'FinTech',
      challenge: 'Required fraud detection system with sub-second response times',
      solution: 'Implemented real-time fraud detection using machine learning and stream processing',
      results: [
        { metric: '99.8%', label: 'Detection Rate' },
        { metric: '<100ms', label: 'Response Time' },
        { metric: '$5M+', label: 'Fraud Prevented' },
      ],
      testimonial: 'The fraud detection system is lightning-fast and incredibly accurate. Essential for our business.',
      author: 'Jennifer Williams',
      role: 'Head of Security, FinanceSecure',
      color: 'primary',
      icon: '🔐',
    },
    {
      id: 6,
      client: 'EduTech Global',
      industry: 'Education Technology',
      challenge: 'Needed scalable LMS platform for 1M+ students across multiple countries',
      solution: 'Built cloud-native learning platform with multi-region deployment',
      results: [
        { metric: '1M+', label: 'Active Students' },
        { metric: '50+', label: 'Countries' },
        { metric: '95%', label: 'Satisfaction Rate' },
      ],
      testimonial: 'The platform scales effortlessly. Our students love the experience across all regions.',
      author: 'Robert Thompson',
      role: 'CEO, EduTech Global',
      color: 'secondary',
      icon: 'education',
    },
  ];

  const stats = [
    { number: '200+', label: 'Projects Delivered', icon: 'projects' },
    { number: '150+', label: 'Happy Clients', icon: 'clients' },
    { number: '98%', label: 'Client Satisfaction', icon: 'satisfaction' },
    { number: '10+', label: 'Years Experience', icon: 'experience' }
  ];

  // Icon components
  const Icons = {
    rocket: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
    energy: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    healthcare: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    cart: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    security: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    education: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    projects: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    clients: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    satisfaction: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    experience: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
  };

  const getStoryIcon = (iconName) => {
    const iconMap = {
      'rocket': Icons.rocket,
      'energy': Icons.energy,
      'healthcare': Icons.healthcare,
      'cart': Icons.cart,
      'security': Icons.security,
      'education': Icons.education,
    };
    return iconMap[iconName] || Icons.rocket;
  };

  const getStatIcon = (iconName) => {
    const iconMap = {
      'projects': Icons.projects,
      'clients': Icons.clients,
      'satisfaction': Icons.satisfaction,
      'experience': Icons.experience,
    };
    return iconMap[iconName] || Icons.projects;
  };

  // Update story icons
  const storyIcons = ['rocket', 'energy', 'healthcare', 'cart', 'security', 'education'];
  successStories.forEach((story, index) => {
    story.icon = storyIcons[index];
  });

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', overflow: 'hidden' }} ref={containerRef}>
        
        {/* Hero Section - Modern Split Design */}
        <section
          style={{
            position: 'relative',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: 'url(/formbg.png)',
            backgroundSize: 'auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            overflow: 'hidden',
          }}
        >
          {/* Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            zIndex: 0,
          }} />

          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: '15%',
              right: '10%',
              width: isMobile ? '60px' : '120px',
              height: isMobile ? '60px' : '120px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              opacity: 0.1,
              zIndex: 1,
            }}
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '5%',
              width: isMobile ? '80px' : '160px',
              height: isMobile ? '80px' : '160px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--color-secondary), var(--color-primary))',
              opacity: 0.08,
              zIndex: 1,
            }}
          />

          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: isMobile ? '8rem 1.5rem 4rem' : '10rem 2rem 6rem',
            position: 'relative',
            zIndex: 2,
            width: '100%',
          }}>
            {/* Centered Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(1, 103, 130, 0.1))',
                  borderRadius: '50px',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  fontFamily: "var(--font-syne), sans-serif",
                }}>
                  Success Stories
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  fontSize: isMobile ? '2.5rem' : '4rem',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: '1.5rem',
                  fontFamily: "var(--font-sora), 'Sora', sans-serif",
                }}
              >
                <span style={{ color: 'var(--text-on-light)' }}>Real Results from</span>
                <br />
                <span style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Client Partnerships
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  fontSize: isMobile ? '1rem' : '1.25rem',
                  color: 'var(--text-on-light-muted)',
                  lineHeight: 1.7,
                  marginBottom: '2.5rem',
                  maxWidth: '700px',
                  margin: '0 auto 2.5rem',
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                Discover how we've helped businesses achieve their goals through 
                innovative technology solutions and strategic partnerships.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <motion.a
                  href="#stories"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '14px 32px',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    color: '#fff',
                    borderRadius: '50px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 8px 30px rgba(99, 102, 241, 0.3)',
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  View Case Studies
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '14px 32px',
                    background: 'transparent',
                    color: 'var(--text-on-light)',
                    borderRadius: '50px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: '2px solid rgba(0,0,0,0.1)',
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  Start Your Story
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: '28px',
                height: '44px',
                border: '2px solid rgba(0,0,0,0.2)',
                borderRadius: '14px',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '8px',
              }}
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                  width: '4px',
                  height: '8px',
                  background: 'var(--color-primary)',
                  borderRadius: '2px',
                }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section - Modern Cards */}
        <section style={{
          padding: isMobile ? '4rem 0' : '6rem 0',
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          position: 'relative',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 1.5rem' : '0 2rem',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? '1rem' : '1.5rem',
            }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: isMobile ? '1.5rem' : '2rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(0,0,0,0.04)',
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(1, 103, 130, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.75rem',
                    color: 'var(--color-primary)',
                  }}>
                    {getStatIcon(stat.icon)}
                  </div>
                  <div style={{
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.5rem',
                    fontFamily: "var(--font-sora), sans-serif",
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: isMobile ? '0.8rem' : '0.875rem',
                    color: 'var(--text-on-light-muted)',
                    fontWeight: 500,
                    fontFamily: "var(--font-inter), sans-serif",
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Story - Full Width Showcase */}
        <section id="stories" style={{
          padding: isMobile ? '4rem 0' : '6rem 0',
          background: '#ffffff',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: isMobile ? '0 1.5rem' : '0 2rem',
          }}>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                textAlign: 'center',
                marginBottom: isMobile ? '3rem' : '4rem',
              }}
            >
              <h2 style={{
                fontSize: isMobile ? '2rem' : '3rem',
                fontWeight: 800,
                color: 'var(--text-on-light)',
                marginBottom: '1rem',
                fontFamily: "var(--font-sora), sans-serif",
              }}>
                Featured <span style={{ color: 'var(--color-secondary)' }}>Case Studies</span>
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-on-light-muted)',
                maxWidth: '600px',
                margin: '0 auto',
                fontFamily: "var(--font-syne), sans-serif",
              }}>
                Deep dive into our most impactful projects and the results we've achieved
              </p>
            </motion.div>

            {/* Bento Grid Layout */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)',
              gridTemplateRows: isMobile ? 'auto' : 'repeat(2, auto)',
              gap: '1.5rem',
            }}>
              {successStories.map((story, index) => {
                // Define grid positions for bento layout
                const gridStyles = isMobile ? {} : [
                  { gridColumn: 'span 8', gridRow: 'span 1' },
                  { gridColumn: 'span 4', gridRow: 'span 1' },
                  { gridColumn: 'span 4', gridRow: 'span 1' },
                  { gridColumn: 'span 4', gridRow: 'span 1' },
                  { gridColumn: 'span 4', gridRow: 'span 1' },
                  { gridColumn: 'span 8', gridRow: 'span 1' },
                ][index];

                const isLarge = !isMobile && (index === 0 || index === 5);

                return (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredCard(story.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      ...gridStyles,
                      background: '#ffffff',
                      borderRadius: '24px',
                      padding: isLarge ? '2.5rem' : '2rem',
                      boxShadow: hoveredCard === story.id 
                        ? '0 20px 60px rgba(0,0,0,0.12)' 
                        : '0 4px 24px rgba(0,0,0,0.06)',
                      border: '1px solid rgba(0,0,0,0.06)',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transform: hoveredCard === story.id ? 'translateY(-8px)' : 'translateY(0)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {/* Gradient Accent */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: story.color === 'primary'
                        ? 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))'
                        : 'linear-gradient(90deg, var(--color-secondary), var(--color-primary))',
                      opacity: hoveredCard === story.id ? 1 : 0.7,
                      transition: 'opacity 0.3s',
                    }} />

                    {/* Hover Glow */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === story.id ? 0.05 : 0 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: story.color === 'primary'
                          ? 'var(--color-primary)'
                          : 'var(--color-secondary)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      {/* Header */}
                      <div style={{
                        display: 'flex',
                        alignItems: isLarge ? 'flex-start' : 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1.5rem',
                        flexDirection: isLarge ? 'row' : 'column',
                        gap: '1rem',
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                        }}>
                          <div style={{
                            width: isLarge ? '64px' : '52px',
                            height: isLarge ? '64px' : '52px',
                            borderRadius: '16px',
                            background: story.color === 'primary'
                              ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(99, 102, 241, 0.05))'
                              : 'linear-gradient(135deg, rgba(1, 103, 130, 0.15), rgba(1, 103, 130, 0.05))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: story.color === 'primary' ? 'var(--color-primary)' : 'var(--color-secondary)',
                          }}>
                            {getStoryIcon(story.icon)}
                          </div>
                          <div>
                            <span style={{
                              display: 'inline-block',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              background: story.color === 'primary'
                                ? 'rgba(99, 102, 241, 0.1)'
                                : 'rgba(1, 103, 130, 0.1)',
                              color: story.color === 'primary'
                                ? 'var(--color-primary)'
                                : 'var(--color-secondary)',
                              fontSize: '0.7rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                              marginBottom: '0.5rem',
                              fontFamily: "var(--font-syne), sans-serif",
                            }}>
                              {story.industry}
                            </span>
                            <h3 style={{
                              fontSize: isLarge ? '1.75rem' : '1.25rem',
                              fontWeight: 700,
                              color: 'var(--text-on-light)',
                              fontFamily: "var(--font-sora), sans-serif",
                            }}>
                              {story.client}
                            </h3>
                          </div>
                        </div>

                        {/* Arrow */}
                        <motion.div
                          animate={{ 
                            x: hoveredCard === story.id ? 0 : -5,
                            opacity: hoveredCard === story.id ? 1 : 0.5,
                          }}
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: story.color === 'primary'
                              ? 'var(--color-primary)'
                              : 'var(--color-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                          </svg>
                        </motion.div>
                      </div>

                      {/* Challenge & Solution - Only for large cards */}
                      {isLarge && (
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '1.5rem',
                          marginBottom: '1.5rem',
                        }}>
                          <div>
                            <h4 style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              color: 'var(--text-on-light-muted)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                              marginBottom: '0.5rem',
                              fontFamily: "var(--font-syne), sans-serif",
                            }}>
                              Challenge
                            </h4>
                            <p style={{
                              fontSize: '0.9rem',
                              color: 'var(--text-on-light)',
                              lineHeight: 1.6,
                              fontFamily: "var(--font-inter), sans-serif",
                            }}>
                              {story.challenge}
                            </p>
                          </div>
                          <div>
                            <h4 style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              color: 'var(--text-on-light-muted)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                              marginBottom: '0.5rem',
                              fontFamily: "var(--font-syne), sans-serif",
                            }}>
                              Solution
                            </h4>
                            <p style={{
                              fontSize: '0.9rem',
                              color: 'var(--text-on-light)',
                              lineHeight: 1.6,
                              fontFamily: "var(--font-inter), sans-serif",
                            }}>
                              {story.solution}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Results */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1rem',
                        padding: isLarge ? '1.5rem' : '1rem',
                        background: 'rgba(0,0,0,0.02)',
                        borderRadius: '16px',
                        marginBottom: isLarge ? '1.5rem' : '0',
                      }}>
                        {story.results.map((result, idx) => (
                          <div key={idx} style={{ textAlign: 'center' }}>
                            <div style={{
                              fontSize: isLarge ? '1.5rem' : '1.25rem',
                              fontWeight: 700,
                              color: story.color === 'primary'
                                ? 'var(--color-primary)'
                                : 'var(--color-secondary)',
                              fontFamily: "var(--font-sora), sans-serif",
                            }}>
                              {result.metric}
                            </div>
                            <div style={{
                              fontSize: '0.7rem',
                              color: 'var(--text-on-light-muted)',
                              fontFamily: "var(--font-inter), sans-serif",
                            }}>
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial - Only for large cards */}
                      {isLarge && (
                        <div style={{
                          padding: '1.5rem',
                          background: story.color === 'primary'
                            ? 'rgba(99, 102, 241, 0.05)'
                            : 'rgba(1, 103, 130, 0.05)',
                          borderRadius: '16px',
                          borderLeft: `4px solid ${story.color === 'primary' ? 'var(--color-primary)' : 'var(--color-secondary)'}`,
                        }}>
                          <p style={{
                            fontSize: '0.95rem',
                            color: 'var(--text-on-light)',
                            lineHeight: 1.7,
                            fontStyle: 'italic',
                            marginBottom: '1rem',
                            fontFamily: "var(--font-inter), sans-serif",
                          }}>
                            "{story.testimonial}"
                          </p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff',
                              fontWeight: 600,
                              fontSize: '0.9rem',
                            }}>
                              {story.author.charAt(0)}
                            </div>
                            <div>
                              <div style={{
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                color: 'var(--text-on-light)',
                                fontFamily: "var(--font-syne), sans-serif",
                              }}>
                                {story.author}
                              </div>
                              <div style={{
                                fontSize: '0.75rem',
                                color: 'var(--text-on-light-muted)',
                              }}>
                                {story.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <section style={{
          padding: '3rem 0',
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          overflow: 'hidden',
        }}>
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              display: 'flex',
              gap: '4rem',
              whiteSpace: 'nowrap',
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
                    {['Innovation', 'Excellence', 'Partnership', 'Growth', 'Success', 'Impact'].map((word, idx) => (
                      <React.Fragment key={idx}>
                        <span style={{
                          fontSize: isMobile ? '1.5rem' : '2.5rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          fontFamily: "var(--font-sora), sans-serif",
                        }}>
                          {word}
                        </span>
                        <svg 
                          width={isMobile ? "20" : "28"} 
                          height={isMobile ? "20" : "28"} 
                          viewBox="0 0 24 24" 
                          fill="rgba(255,255,255,0.4)" 
                          style={{ flexShrink: 0 }}
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      </React.Fragment>
                    ))}
              </div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: isMobile ? '5rem 0' : '8rem 0',
          backgroundImage: 'url(/formbg.png)',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }} />
          
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: isMobile ? '0 1.5rem' : '0 2rem',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(1, 103, 130, 0.1))',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.5rem',
                fontFamily: "var(--font-syne), sans-serif",
              }}>
                Let's Work Together
              </span>
              
              <h2 style={{
                fontSize: isMobile ? '2.5rem' : '3.5rem',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                fontFamily: "var(--font-sora), sans-serif",
              }}>
                <span style={{ color: 'var(--text-on-light)' }}>Ready to Write</span>
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Your Success Story?
                </span>
              </h2>
              
              <p style={{
                fontSize: isMobile ? '1rem' : '1.2rem',
                color: 'var(--text-on-light-muted)',
                marginBottom: '2.5rem',
                maxWidth: '600px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.7,
                fontFamily: "var(--font-syne), sans-serif",
              }}>
                Join the ranks of industry leaders who've transformed their businesses with our innovative solutions.
              </p>
              
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '18px 40px',
                    background: 'linear-gradient(135deg, var(--color-secondary), var(--color-primary))',
                    color: '#ffffff',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 30px rgba(1, 103, 130, 0.35)',
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  Start Your Journey
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '18px 40px',
                    background: '#ffffff',
                    color: 'var(--text-on-light)',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: '2px solid rgba(0,0,0,0.1)',
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  View Our Services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <ChessFooter />
    </>
  );
}