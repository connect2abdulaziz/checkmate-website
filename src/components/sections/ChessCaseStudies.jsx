'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const ChessCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef(null);
  const sectionRef = useRef(null);
  
  // Case study data
  const caseStudies = [
    {
      id: 1,
      title: 'Strategic Repositioning for TechForward',
      category: 'Technology',
      pieceIcon: '♚', // King
      pieceColor: '#E5A244',
      description: 'Helped a technology firm reposition their offering through strategic market analysis and customer segmentation.',
      results: [
        'Increased market share by 35% in 12 months',
        'Improved customer retention by 28%',
        'Achieved 3x ROI on marketing spend'
      ],
      quote: 'Checkmate\'s strategic approach revolutionized how we position ourselves in an increasingly competitive market.',
      author: 'Jessica Chen',
      position: 'CEO, TechForward',
      image: '/images/tech-case-study.jpg' // This would be an actual image path
    },
    {
      id: 2,
      title: 'Financial Services Transformation',
      category: 'Finance',
      pieceIcon: '♛', // Queen
      pieceColor: '#4D8DDA',
      description: 'Guided a financial services firm through digital transformation, enhancing their service delivery and operational efficiency.',
      results: [
        'Reduced operational costs by 42%',
        'Decreased customer onboarding time from 5 days to 4 hours',
        'Improved customer satisfaction rating from 3.2 to 4.8/5'
      ],
      quote: 'The strategic framework Checkmate implemented has completely transformed our business model for the digital age.',
      author: 'Michael Roberts',
      position: 'COO, Global Financial Partners',
      image: '/images/finance-case-study.jpg'
    },
    {
      id: 3,
      title: 'Healthcare Innovation Strategy',
      category: 'Healthcare',
      pieceIcon: '♝', // Bishop
      pieceColor: '#50AC8E',
      description: 'Developed an innovation roadmap for a healthcare provider, enabling them to leverage emerging technologies and improve patient care.',
      results: [
        'Launched 3 new service lines in 18 months',
        'Reduced patient wait times by 67%',
        'Increased provider satisfaction score by 45%'
      ],
      quote: 'Checkmate helped us see beyond the immediate challenges to identify innovative solutions that benefit both patients and providers.',
      author: 'Dr. Sarah Johnson',
      position: 'Director of Innovation, MediCare Solutions',
      image: '/images/healthcare-case-study.jpg'
    },
    {
      id: 4,
      title: 'Retail Expansion Strategy',
      category: 'Retail',
      pieceIcon: '♞', // Knight
      pieceColor: '#8B64C0',
      description: 'Created a strategic expansion plan for a retail chain, identifying optimal locations and tailoring offerings to regional preferences.',
      results: [
        'Successfully opened 15 new locations in 24 months',
        'Achieved profitability in new stores 40% faster than industry average',
        'Increased overall revenue by 78%'
      ],
      quote: 'The creative approach Checkmate took to our expansion helped us navigate complex market conditions with confidence.',
      author: 'David Martinez',
      position: 'VP of Operations, RetailPlus',
      image: '/images/retail-case-study.jpg'
    }
  ];
  
  // Handle auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveCase((prev) => (prev + 1) % caseStudies.length);
      }, 8000);
    }
    
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, caseStudies.length]);
  
  // Reset auto-play when user interacts with cases
  const handleCaseClick = (index) => {
    setActiveCase(index);
    setIsAutoPlaying(false);
    
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };
  
  // Initialize animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate chess board pieces
      gsap.fromTo(
        '.chess-board-piece',
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
        padding: '100px 0',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)',
        color: 'white',
      }}
    >
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <div className="case-study-header" style={{
          textAlign: 'center',
          marginBottom: '4rem',
        }}>
          <h6 style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#E5A244',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1rem',
          }}>
            Success Stories
          </h6>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(90deg, #FFFFFF, #A0A0A0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Strategic Victories
          </h2>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            color: '#e0e0e0',
            lineHeight: 1.6,
          }}>
            Explore how our strategic approaches have helped businesses
            across industries achieve decisive competitive advantages.
          </p>
        </div>
        
        {/* Case study showcase */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}>
          {/* Chess board piece selector */}
          <div className="chess-board-selector" style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
            gap: '1.5rem',
          }}>
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                className="chess-board-piece"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleCaseClick(index)}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '12px',
                  backgroundColor: activeCase === index 
                    ? caseStudy.pieceColor 
                    : 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: `2px solid ${activeCase === index 
                    ? caseStudy.pieceColor 
                    : 'transparent'}`,
                  boxShadow: activeCase === index 
                    ? `0 0 20px ${caseStudy.pieceColor}80` 
                    : 'none',
                }}
              >
                <span style={{
                  fontSize: '2.5rem',
                  color: activeCase === index ? 'white' : caseStudy.pieceColor,
                  marginBottom: '0.3rem',
                }}>
                  {caseStudy.pieceIcon}
                </span>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 'bold',
                  color: activeCase === index ? 'white' : '#aaa',
                }}>
                  {caseStudy.category}
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
                flexDirection: 'row',
                gap: '3rem',
                minHeight: '450px',
                flexWrap: 'wrap',
              }}
            >
              {/* Case study details */}
              <div style={{
                flex: '1 1 500px',
                padding: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${caseStudies[activeCase].pieceColor}40`,
              }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: 'white',
                }}>
                  {caseStudies[activeCase].title}
                </h3>
                
                <p style={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                }}>
                  {caseStudies[activeCase].description}
                </p>
                
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginBottom: '1.2rem',
                  color: caseStudies[activeCase].pieceColor,
                }}>
                  Key Results
                </h4>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '2rem',
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
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: `${caseStudies[activeCase].pieceColor}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem',
                        flexShrink: 0,
                      }}>
                        <div style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: caseStudies[activeCase].pieceColor,
                        }} />
                      </div>
                      <span style={{ color: '#e0e0e0' }}>{result}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Testimonial quote */}
                <div style={{
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderLeft: `4px solid ${caseStudies[activeCase].pieceColor}`,
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    left: '15px',
                    color: `${caseStudies[activeCase].pieceColor}50`,
                    fontSize: '3rem',
                    fontFamily: 'serif',
                    lineHeight: 1,
                  }}>
                    "
                  </span>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: '#e0e0e0',
                    marginBottom: '1rem',
                    position: 'relative',
                    zIndex: 1,
                    paddingLeft: '1.5rem',
                  }}>
                    {caseStudies[activeCase].quote}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    {/* This would be an actual avatar in production */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: caseStudies[activeCase].pieceColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      marginRight: '1rem',
                    }}>
                      {caseStudies[activeCase].author.charAt(0)}
                    </div>
                    
                    <div>
                      <h5 style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: 'white',
                        margin: 0,
                      }}>
                        {caseStudies[activeCase].author}
                      </h5>
                      <span style={{
                        fontSize: '0.9rem',
                        color: '#aaa',
                      }}>
                        {caseStudies[activeCase].position}
                      </span>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: caseStudies[activeCase].pieceColor }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '1rem 2rem',
                    marginTop: '2rem',
                    backgroundColor: 'transparent',
                    border: `2px solid ${caseStudies[activeCase].pieceColor}`,
                    borderRadius: '50px',
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer',
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
              
              {/* Case study image */}
              <div style={{
                flex: '1 1 400px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                minHeight: '300px',
              }}>
                {/* This would be an actual image in production */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, ${caseStudies[activeCase].pieceColor}30, ${caseStudies[activeCase].pieceColor}10)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '6rem',
                  color: caseStudies[activeCase].pieceColor,
                  position: 'relative',
                }}>
                  {caseStudies[activeCase].pieceIcon}
                  
                  {/* Chess board pattern overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.1,
                    backgroundImage: `
                      linear-gradient(45deg, #000 25%, transparent 25%),
                      linear-gradient(-45deg, #000 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, #000 75%),
                      linear-gradient(-45deg, transparent 75%, #000 75%)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0',
                  }} />
                </div>
                
                {/* Case highlight badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  backgroundColor: caseStudies[activeCase].pieceColor,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                }}>
                  {caseStudies[activeCase].category}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Pagination dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3rem',
            gap: '0.5rem',
          }}>
            {caseStudies.map((_, index) => (
              <motion.div
                key={index}
                onClick={() => handleCaseClick(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: activeCase === index 
                    ? caseStudies[activeCase].pieceColor 
                    : 'rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          
          {/* Auto-play toggle */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                color: '#aaa',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              {isAutoPlaying ? (
                <>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ marginRight: '0.5rem' }}
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                  Pause Auto-play
                </>
              ) : (
                <>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ marginRight: '0.5rem' }}
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  Resume Auto-play
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChessCaseStudies;