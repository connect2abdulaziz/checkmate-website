'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const ChessFaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const chessBoardRef = useRef(null);
  const knightRef = useRef(null);
  
  // FAQ data
  const faqItems = [
    {
      id: 1,
      question: "What services does Checkmate offer?",
      answer: "Checkmate offers a comprehensive range of software services including web development, AI integration, software optimization, bug fixes, and mobile app development. Our team specializes in creating custom solutions tailored to your specific business needs with modern UI design and security-focused implementation.",
      piece: "♔", // King
      color: "#E5A244", // Gold
      position: "e1"
    },
    {
      id: 2,
      question: "How does your development process work?",
      answer: "Our development process follows a strategic chess-like approach: Initial consultation and planning (Opening), Development and testing (Middle game), and Deployment and maintenance (End game). We involve clients at every step, ensuring transparency and alignment with your vision throughout the project lifecycle.",
      piece: "♕", // Queen
      color: "#D95D67", // Red
      position: "d1"
    },
    {
      id: 3,
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including Next.js, React, Three.js, Framer Motion, GSAP, Tailwind CSS, and more. Our team continuously stays updated with the latest technologies to ensure we deliver cutting-edge solutions that are both performant and visually impressive.",
      piece: "♗", // Bishop
      color: "#4D8DDA", // Blue
      position: "c1"
    },
    {
      id: 4,
      question: "How do you handle project timelines and deadlines?",
      answer: "We break projects into strategic milestones with clear deliverables and timelines. Our project managers use agile methodologies to ensure efficient workflow and timely completion. We provide regular updates and maintain open communication throughout the development process, adapting to any changes in requirements.",
      piece: "♘", // Knight
      color: "#50AC8E", // Green
      position: "b1"
    },
    {
      id: 5,
      question: "What sets Checkmate apart from other development companies?",
      answer: "Checkmate combines strategic thinking with technical expertise – like a chess grandmaster planning several moves ahead. We focus on quality-driven, secure software with extensive customization and maintainability. Our approach isn't just about coding; it's about creating strategic digital assets that provide long-term value to your business.",
      piece: "♖", // Rook
      color: "#8B64C0", // Purple
      position: "a1"
    },
    {
      id: 6,
      question: "How do you ensure the security of applications?",
      answer: "Security is integrated into every step of our development process, not added as an afterthought. We implement industry best practices, conduct regular security audits, and follow OWASP guidelines. All our applications undergo penetration testing before deployment, and we provide continuous security updates to protect against emerging threats.",
      piece: "♙", // Pawn
      color: "#FFB347", // Orange
      position: "a2"
    },
    {
      id: 7,
      question: "Do you offer maintenance after project completion?",
      answer: "Yes, we provide comprehensive maintenance packages to ensure your application remains secure, up-to-date, and optimized. Our maintenance services include regular updates, security patches, performance optimization, and technical support. We offer flexible maintenance plans tailored to your specific requirements and budget.",
      piece: "♙", // Pawn
      color: "#5DADE2", // Light Blue
      position: "b2"
    }
  ];
  
  // Chess board positions (for animation)
  const positions = {
    "a1": { x: 0, y: 7 },
    "b1": { x: 1, y: 7 },
    "c1": { x: 2, y: 7 },
    "d1": { x: 3, y: 7 },
    "e1": { x: 4, y: 7 },
    "a2": { x: 0, y: 6 },
    "b2": { x: 1, y: 6 },
  };
  
  // Knight's possible moves (L-shaped)
  const knightMoves = [
    { x: -2, y: -1 }, { x: -2, y: 1 }, 
    { x: -1, y: -2 }, { x: -1, y: 2 }, 
    { x: 1, y: -2 }, { x: 1, y: 2 }, 
    { x: 2, y: -1 }, { x: 2, y: 1 }
  ];
  
  // Initialize animation
  useEffect(() => {
    if (!chessBoardRef.current || !knightRef.current) return;
    
    // Set up the knight animation
    const knight = knightRef.current;
    
    // Random knight movement
    const moveKnight = () => {
      if (!chessBoardRef.current || !knight) return;
      
      // Get random position
      const fromX = parseInt(knight.dataset.x || 4);
      const fromY = parseInt(knight.dataset.y || 4);
      
      // Filter valid moves (within board)
      const validMoves = knightMoves.filter(move => {
        const newX = fromX + move.x;
        const newY = fromY + move.y;
        return newX >= 0 && newX < 8 && newY >= 0 && newY < 8;
      });
      
      if (validMoves.length === 0) return;
      
      // Pick random valid move
      const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
      const toX = fromX + randomMove.x;
      const toY = fromY + randomMove.y;
      
      // Save new position
      knight.dataset.x = toX;
      knight.dataset.y = toY;
      
      // Animate knight along L-shaped path
      const midX = fromX + randomMove.x / 2;
      const midY = fromY + randomMove.y / 2;
      
      // Calculate position in pixels
      const cellSize = chessBoardRef.current.offsetWidth / 8;
      const startX = fromX * cellSize + cellSize / 2;
      const startY = fromY * cellSize + cellSize / 2;
      const midPointX = midX * cellSize + cellSize / 2;
      const midPointY = midY * cellSize + cellSize / 2;
      const endX = toX * cellSize + cellSize / 2;
      const endY = toY * cellSize + cellSize / 2;
      
      // First half of the L-move
      gsap.to(knight, {
        x: midPointX - startX,
        y: midPointY - startY,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          // Second half of the L-move
          gsap.to(knight, {
            x: endX - startX,
            y: endY - startY,
            duration: 0.5,
            ease: "power2.inOut",
          });
        }
      });
    };
    
    // Set initial position
    knight.dataset.x = 4;
    knight.dataset.y = 4;
    
    // Start random movements
    const interval = setInterval(moveKnight, 3000);
    moveKnight(); // Initial move
    
    return () => clearInterval(interval);
  }, []);
  
  // Toggle accordion item
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  // Calculate chessboard position for piece
  const getPiecePosition = (position) => {
    if (!positions[position]) return { x: 0, y: 0 };
    
    const { x, y } = positions[position];
    return {
      left: `${(x * 12.5) + 6.25}%`,
      top: `${(y * 12.5) + 6.25}%`,
    };
  };
  
  return (
    <section 
      ref={containerRef}
      className="chess-faq-section"
      style={{
        padding: '120px 0',
        background: 'linear-gradient(to right, #1a1a1a, #2a2a2a)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Chess pattern background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.02,
        backgroundImage: `
          linear-gradient(45deg, #fff 25%, transparent 25%),
          linear-gradient(-45deg, #fff 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #fff 75%),
          linear-gradient(-45deg, transparent 75%, #fff 75%)
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
          marginBottom: '4rem',
        }}>
          <motion.h6
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#E5A244',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '1rem',
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(229, 162, 68, 0.1)',
              borderRadius: '50px',
            }}
          >
            Knowledge Base
          </motion.h6>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#fff',
            }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto',
              color: '#aaa',
              lineHeight: 1.6,
            }}
          >
            Common questions about our services and processes. 
            If you don't find what you're looking for, feel free to reach out directly.
          </motion.p>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '4rem',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>
          {/* Chess Board Visualization (desktop only) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="chess-board-container"
            style={{
              flex: '0 0 400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'sticky',
              top: '100px',
            }}
          >
            <div 
              ref={chessBoardRef}
              style={{
                width: '100%',
                aspectRatio: '1/1',
                display: 'grid',
                gridTemplateColumns: 'repeat(8, 1fr)',
                gridTemplateRows: 'repeat(8, 1fr)',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                transform: 'rotateX(20deg)',
              }}
            >
              {/* Chess board cells */}
              {Array.from({ length: 64 }).map((_, index) => {
                const row = Math.floor(index / 8);
                const col = index % 8;
                const isBlack = (row + col) % 2 === 1;
                
                return (
                  <div
                    key={`cell-${index}`}
                    style={{
                      backgroundColor: isBlack ? '#2a2a2a' : '#4a4a4a',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                );
              })}
              
              {/* Chess pieces for FAQ visualization */}
              {faqItems.map((item) => (
                <motion.div
                  key={`piece-${item.id}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: activeIndex === item.id - 1 ? -15 : 0 
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: item.id * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  style={{
                    position: 'absolute',
                    ...getPiecePosition(item.position),
                    fontSize: '2rem',
                    color: activeIndex === item.id - 1 ? item.color : 'rgba(255, 255, 255, 0.5)',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '12.5%',
                    height: '12.5%',
                    zIndex: activeIndex === item.id - 1 ? 10 : 1,
                    filter: activeIndex === item.id - 1 ? `drop-shadow(0 0 10px ${item.color})` : 'none',
                    transition: 'color 0.3s ease, filter 0.3s ease, transform 0.3s ease',
                    transform: activeIndex === item.id - 1 ? 'scale(1.2)' : 'scale(1)',
                    pointerEvents: 'none',
                  }}
                >
                  {item.piece}
                </motion.div>
              ))}
              
              {/* Animated Knight */}
              <motion.div
                ref={knightRef}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '2rem',
                  color: '#50AC8E',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '12.5%',
                  height: '12.5%',
                  zIndex: 2,
                  filter: 'drop-shadow(0 0 8px rgba(80, 172, 142, 0.7))',
                  pointerEvents: 'none',
                }}
              >
                ♘
              </motion.div>
            </div>
            
            <div style={{
              marginTop: '2rem',
              backgroundColor: 'rgba(80, 172, 142, 0.1)',
              padding: '1.5rem',
              borderRadius: '10px',
              border: '1px solid rgba(80, 172, 142, 0.2)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(80, 172, 142, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#50AC8E',
                }}>
                  ♘
                </div>
                <h4 style={{ 
                  color: '#fff', 
                  margin: 0, 
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}>
                  Strategic Approach
                </h4>
              </div>
              <p style={{ color: '#aaa', margin: 0, fontSize: '0.9rem' }}>
                Just like in chess, our solutions combine strategic foresight with
                technical expertise to tackle your business challenges effectively.
              </p>
            </div>
          </motion.div>
          
          {/* FAQ Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: '1 1 500px',
            }}
          >
            <div className="faq-accordion">
              {faqItems.map((item, index) => (
                <motion.div
                  key={`faq-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="faq-item"
                  style={{
                    marginBottom: '1rem',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: activeIndex === index 
                      ? `rgba(${hexToRgb(item.color)}, 0.1)` 
                      : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${activeIndex === index 
                      ? item.color
                      : 'rgba(255, 255, 255, 0.1)'
                    }`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Question header */}
                  <motion.div
                    className="faq-question"
                    onClick={() => toggleItem(index)}
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    style={{
                      padding: '1.5rem',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: `${item.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        color: item.color,
                        flexShrink: 0,
                      }}>
                        {item.piece}
                      </div>
                      <h3 style={{ 
                        margin: 0, 
                        fontSize: '1.1rem',
                        fontWeight: activeIndex === index ? 'bold' : 'normal',
                        color: activeIndex === index ? '#fff' : '#ddd',
                      }}>
                        {item.question}
                      </h3>
                    </div>
                    
                    {/* Toggle icon */}
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        flexShrink: 0,
                        color: activeIndex === index ? item.color : '#aaa',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </motion.div>
                  </motion.div>
                  
                  {/* Answer content */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.3, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2 }
                          }
                        }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div 
                          className="faq-answer"
                          style={{
                            padding: '0 1.5rem 1.5rem 1.5rem',
                            color: '#aaa',
                            lineHeight: 1.6,
                            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                            marginTop: '0.5rem',
                            paddingTop: '1rem',
                          }}
                        >
                          <p style={{ margin: 0 }}>
                            {item.answer}
                          </p>
                          
                          {/* Strategic visual element */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            style={{
                              marginTop: '1rem',
                              padding: '1rem',
                              borderRadius: '8px',
                              backgroundColor: `${item.color}10`,
                              border: `1px solid ${item.color}30`,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.75rem',
                            }}
                          >
                            <div style={{ 
                              fontSize: '1.5rem',
                              color: item.color,
                            }}>
                              {getRelevantIcon(index)}
                            </div>
                            <p style={{ 
                              margin: 0,
                              fontSize: '0.9rem',
                              color: '#ccc',
                            }}>
                              {getStrategicTip(index)}
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            
            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{
                marginTop: '3rem',
                padding: '2rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(229, 162, 68, 0.1)',
                border: '1px solid rgba(229, 162, 68, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h3 style={{ 
                color: '#fff', 
                margin: '0 0 1rem 0',
                fontSize: '1.5rem',
              }}>
                Still have questions?
              </h3>
              <p style={{ 
                color: '#aaa',
                margin: '0 0 1.5rem 0',
                maxWidth: '500px',
              }}>
                Our team is ready to help you with any specific questions or 
                requirements for your project.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#E5A244' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.8rem 2rem',
                  backgroundColor: 'transparent',
                  color: '#E5A244',
                  border: '2px solid #E5A244',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .chess-board-container {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

// Helper functions
function hexToRgb(hex) {
  // Remove the # if present
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
}

function getRelevantIcon(index) {
  const icons = ['👑', '⚙️', '💻', '⏱️', '🔄', '🔒', '🛠️'];
  return icons[index] || '♟️';
}

function getStrategicTip(index) {
  const tips = [
    "Strategic partnerships lead to successful digital transformations.",
    "Our development process adapts to changing requirements like a grandmaster adjusts to opponent moves.",
    "We combine cutting-edge technologies to create solutions that are both powerful and elegant.",
    "Clear communication and transparent timelines are the foundation of successful projects.",
    "Our unique approach focuses on long-term strategic value rather than short-term fixes.",
    "Security by design ensures your application is protected at every layer.",
    "Continuous maintenance and optimization keep your digital assets performing at their best."
  ];
  
  return tips[index] || "Our strategic approach ensures the best outcomes for your project.";
}

export default ChessFaqAccordion;