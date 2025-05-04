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
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start']
  });
  
  // Timeline data
  const timelineItems = [
    {
      id: 1,
      title: 'Initial Strategy',
      date: 'Stage 1',
      icon: '♙', // Pawn
      color: '#E5A244',
      content: 'We begin by understanding your business needs and market positioning, creating a strategic foundation for future growth.',
      image: '/images/strategy-planning.jpg' // This would be a placeholder path
    },
    {
      id: 2,
      title: 'Market Analysis',
      date: 'Stage 2',
      icon: '♘', // Knight
      color: '#4D8DDA',
      content: 'Our expert team employs advanced analytics to identify opportunities and threats in your competitive landscape.',
      image: '/images/market-analysis.jpg'
    },
    {
      id: 3,
      title: 'Solution Development',
      date: 'Stage 3',
      icon: '♗', // Bishop
      color: '#50AC8E',
      content: 'We develop tailored solutions that align with your strategic objectives, leveraging innovative approaches to address challenges.',
      image: '/images/solution-development.jpg'
    },
    {
      id: 4,
      title: 'Implementation',
      date: 'Stage 4',
      icon: '♖', // Rook
      color: '#8B64C0',
      content: 'Our team executes the strategy with precision, ensuring all components are integrated effectively across your organization.',
      image: '/images/implementation.jpg'
    },
    {
      id: 5,
      title: 'Optimization',
      date: 'Stage 5',
      icon: '♕', // Queen
      color: '#D95D67',
      content: 'We continuously refine and optimize the implementation, making powerful adjustments to maximize results.',
      image: '/images/optimization.jpg'
    },
    {
      id: 6,
      title: 'Strategic Advantage',
      date: 'Final Stage',
      icon: '♔', // King
      color: '#E5A244',
      content: 'Your business achieves a dominant market position with a sustainable competitive advantage. Checkmate!',
      image: '/images/strategic-advantage.jpg'
    }
  ];
  
  // Initialize animations when component mounts
  useEffect(() => {
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
      
      // Timeline items animations
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
  }, []);
  
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
        padding: '100px 0',
        background: 'linear-gradient(to bottom, #f9f9f9, #f0f0f0)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Chess-themed background pattern */}
      <div className="chess-bg-pattern" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.03,
        backgroundImage: `
          linear-gradient(45deg, #000 25%, transparent 25%),
          linear-gradient(-45deg, #000 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #000 75%),
          linear-gradient(-45deg, transparent 75%, #000 75%)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0',
        zIndex: 0,
      }} />
      
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="section-header" style={{
          textAlign: 'center',
          marginBottom: '5rem',
        }}>
          <h6 style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#E5A244',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1rem',
          }}>
            Our Process
          </h6>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#333',
          }}>
            The Path to Victory
          </h2>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            color: '#666',
            lineHeight: 1.6,
          }}>
            Like a carefully planned chess game, our strategic process guides your 
            business from opening moves to a winning endgame.
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
              left: '50%',
              top: 0,
              bottom: 0,
              width: '4px',
              backgroundColor: '#e0e0e0',
              transform: 'translateX(-50%)',
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
                backgroundColor: '#E5A244',
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual timeline item component
const TimelineItem = ({ item, index, isEven, isActive, setActiveItem, total }) => {
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
        flexDirection: isEven ? 'row' : 'row-reverse',
        alignItems: 'center',
        margin: '150px 0',
        position: 'relative',
      }}
    >
      {/* Content side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.5 }}
        style={{
          flex: 1,
          padding: '2rem',
          maxWidth: '400px',
          marginLeft: isEven ? 0 : 'auto',
          marginRight: isEven ? 'auto' : 0,
        }}
      >
        <span style={{
          display: 'inline-block',
          padding: '0.3rem 0.8rem',
          borderRadius: '50px',
          backgroundColor: `${item.color}20`,
          color: item.color,
          marginBottom: '1rem',
          fontSize: '0.9rem',
          fontWeight: 'bold',
        }}>
          {item.date}
        </span>
        
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#333',
        }}>
          {item.title}
        </h3>
        
        <p style={{
          fontSize: '1rem',
          color: '#666',
          lineHeight: 1.6,
          marginBottom: '1.5rem',
        }}>
          {item.content}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.7rem 1.2rem',
            background: 'transparent',
            border: `2px solid ${item.color}`,
            borderRadius: '50px',
            color: item.color,
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
        >
          Learn More
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
      </motion.div>
      
      {/* Timeline node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 15, 
          delay: 0.2 
        }}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: isActive ? item.color : '#f0f0f0',
          boxShadow: isActive 
            ? `0 0 0 5px ${item.color}30, 0 5px 20px rgba(0,0,0,0.15)` 
            : '0 5px 15px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          color: isActive ? 'white' : '#aaa',
          zIndex: 2,
          transition: 'all 0.3s ease',
          position: 'relative',
        }}
      >
        {item.icon}
        
        {/* Progress indicator for first and last items */}
        {index === 0 && (
          <div style={{
            position: 'absolute',
            top: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: '#666',
            whiteSpace: 'nowrap',
          }}>
            OPENING
          </div>
        )}
        
        {index === total - 1 && (
          <div style={{
            position: 'absolute',
            bottom: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: '#666',
            whiteSpace: 'nowrap',
          }}>
            CHECKMATE
          </div>
        )}
      </motion.div>
      
      {/* Image side */}
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
          background: `linear-gradient(45deg, ${item.color}30, ${item.color}10)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          color: item.color,
        }}>
          {item.icon}
        </div>
        
        {/* Image overlay with gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(to top, ${item.color}80, transparent)`,
          opacity: isActive ? 0.7 : 0,
          transition: 'opacity 0.3s ease',
        }} />
      </motion.div>
      
      {/* Mobile styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column !important;
            margin: 80px 0 !important;
          }
          
          .timeline-item > div {
            max-width: 100% !important;
            margin: 1rem auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ChessTimeline;