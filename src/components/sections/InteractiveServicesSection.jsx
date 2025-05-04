'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const StrategicServicesSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const servicesRef = useRef(null);
  
  // Services with chess metaphors
  const services = [
    {
      id: 'strategy',
      title: 'Strategic Planning',
      icon: '♚', // King
      color: '#E5A244',
      description: 'Develop comprehensive business strategies that position your company for long-term success, just as a chess player plans multiple moves ahead.',
      features: [
        'Market analysis and competitive positioning',
        'Long-term vision and goal setting',
        'Strategic roadmap development',
        'Decision-making frameworks'
      ]
    },
    {
      id: 'innovation',
      title: 'Innovation Solutions',
      icon: '♛', // Queen
      color: '#4D8DDA',
      description: "Transform your business with powerful, versatile innovation strategies that adapt to changing market conditions with the flexibility of a queen's movements.",
      features: [
        'Digital transformation initiatives',
        'Product and service innovation',
        'Process optimization',
        'Emerging technology integration'
      ]
    },
    {
      id: 'operations',
      title: 'Operational Excellence',
      icon: '♜', // Rook
      color: '#6C8CC8',
      description: 'Build rock-solid operational foundations that support your business with straight-line efficiency and reliability.',
      features: [
        'Process analysis and optimization',
        'Quality management systems',
        'Supply chain optimization',
        'Performance metrics and KPIs'
      ]
    },
    {
      id: 'leadership',
      title: 'Leadership Development',
      icon: '♝', // Bishop
      color: '#8B64C0',
      description: 'Develop visionary leadership that sees beyond conventional limitations and moves diagonally through challenges.',
      features: [
        'Executive coaching and mentoring',
        'Leadership team alignment',
        'Succession planning',
        'Organizational culture development'
      ]
    },
    {
      id: 'agility',
      title: 'Business Agility',
      icon: '♞', // Knight
      color: '#50AC8E',
      description: 'Navigate complex business obstacles with the unique movement patterns of a knight, finding creative paths to success where others see barriers.',
      features: [
        'Change management',
        'Agile methodology implementation',
        'Organizational adaptability',
        'Rapid response systems'
      ]
    },
    {
      id: 'growth',
      title: 'Growth Acceleration',
      icon: '♟', // Pawn
      color: '#D95D67',
      description: 'Transform potential into powerful outcomes through consistent forward progress, just as pawns advance to become game-changing pieces.',
      features: [
        'Market expansion strategies',
        'Sales enablement',
        'Customer acquisition and retention',
        'Sustainable growth models'
      ]
    }
  ];
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          }
        }
      );
      
      // Service cards staggered animation
      gsap.fromTo(
        '.service-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 70%',
          }
        }
      );
      
      // Chess board background animation
      gsap.fromTo(
        '.chess-bg-square',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 0.03,
          scale: 1,
          stagger: {
            grid: [8, 8],
            from: 'random',
            amount: 1.5
          },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  // Create decorative chess board background
  const renderChessBoardBackground = () => {
    const squares = [];
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const isBlack = (x + y) % 2 === 1;
        squares.push(
          <div 
            key={`bg-${x}-${y}`} 
            className={`chess-bg-square ${isBlack ? 'black' : 'white'}`}
            style={{
              position: 'absolute',
              width: `${100 / 8}%`,
              height: `${100 / 8}%`,
              left: `${x * (100 / 8)}%`,
              top: `${y * (100 / 8)}%`,
              background: isBlack ? '#000' : '#fff',
              opacity: 0,
            }}
          />
        );
      }
    }
    return squares;
  };
  
  // Card variants for hover animations
  const cardVariants = {
    initial: { 
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' 
    },
    hover: { 
      y: -15, 
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  // Icon animation variants
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: 'easeInOut',
        }
      }
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="strategic-services-section"
      style={{
        position: 'relative',
        padding: '100px 0',
        backgroundColor: '#f9f9f9',
        overflow: 'hidden',
      }}
    >
      {/* Chess board background */}
      <div className="chess-bg" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(15deg)',
        width: '150%',
        height: '150%',
        zIndex: 0,
      }}>
        {renderChessBoardBackground()}
      </div>
      
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div ref={headingRef} className="section-header" style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          <h6 style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#E5A244',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            letterSpacing: '2px',
          }}>
            Our Strategic Approach
          </h6>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#333',
          }}>
            Master the Game of Business
          </h2>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            color: '#666',
            lineHeight: 1.6,
          }}>
            Like chess masters, we combine strategic thinking with tactical precision 
            to help your business outmaneuver challenges and capture opportunities.
          </p>
        </div>
        
        <div 
          ref={servicesRef}
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '1px solid rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Service icon */}
              <motion.div
                className="service-icon"
                variants={iconVariants}
                style={{
                  fontSize: '3rem',
                  marginBottom: '1.5rem',
                  color: service.color,
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <span>{service.icon}</span>
              </motion.div>
              
              {/* Circle background */}
              <div
                style={{
                  position: 'absolute',
                  top: '2rem',
                  right: '2rem',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `${service.color}10`,
                  zIndex: 0,
                }}
              />
              
              {/* Service content */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#333',
              }}>
                {service.title}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
              }}>
                {service.description}
              </p>
              
              {/* Features list */}
              <ul style={{
                padding: 0,
                margin: 0,
                listStyle: 'none',
              }}>
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.8rem',
                      fontSize: '0.95rem',
                      color: '#555',
                    }}
                  >
                    <span style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: service.color,
                      marginRight: '10px',
                      flexShrink: 0,
                    }} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              {/* Learn more link */}
              <motion.a
                href={`/services/${service.id}`}
                whileHover={{ x: 5 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginTop: '1.5rem',
                  color: service.color,
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                }}
              >
                Learn more
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
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Mobile responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default StrategicServicesSection;