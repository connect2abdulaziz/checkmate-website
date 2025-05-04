'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const ChessFooter = () => {
  const footerRef = useRef(null);
  const boardRef = useRef(null);
  const topWaveRef = useRef(null);
  
  // Footer links data
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Web Development', url: '/services/web-development' },
        { label: 'AI Integration', url: '/services/ai-integration' },
        { label: 'Software Optimization', url: '/services/optimization' },
        { label: 'Bug Fixes', url: '/services/bug-fixes' },
        { label: 'Mobile App Development', url: '/services/mobile-app' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', url: '/about' },
        { label: 'Our Team', url: '/about/team' },
        { label: 'Case Studies', url: '/projects/case-studies' },
        { label: 'Testimonials', url: '/testimonials' },
        { label: 'Careers', url: '/careers' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', url: '/blog' },
        { label: 'Documentation', url: '/docs' },
        { label: 'FAQ', url: '/faq' },
        { label: 'Support', url: '/support' },
        { label: 'Contact', url: '/contact' },
      ]
    },
  ];
  
  // Social links
  const socialLinks = [
    { icon: 'twitter', url: 'https://twitter.com/checkmate' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/checkmate' },
    { icon: 'github', url: 'https://github.com/checkmate' },
    { icon: 'instagram', url: 'https://instagram.com/checkmate' },
  ];
  
  // GSAP Animations
  useEffect(() => {
    // Animate the chess board pieces
    const ctx = gsap.context(() => {
      if (boardRef.current) {
        const pieces = boardRef.current.querySelectorAll('.chess-piece');
        
        gsap.fromTo(
          pieces,
          {
            y: 'random(-20, 20)',
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'back.out(1.7)',
          }
        );
      }
      
      // Animate the wave
      if (topWaveRef.current) {
        gsap.fromTo(
          topWaveRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 }
        );
      }
    }, footerRef);
    
    return () => ctx.revert();
  }, []);
  
  // Social media icon component
  const SocialIcon = ({ icon }) => {
    switch (icon) {
      case 'twitter':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        );
      case 'github':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        );
      case 'instagram':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      default:
        return null;
    }
  };
  
  // Render chess pieces in the small board
  const renderChessPieces = () => {
    const pieces = [
      { symbol: '♖', position: 'a8', color: '#D95D67' },
      { symbol: '♘', position: 'b8', color: '#D95D67' },
      { symbol: '♗', position: 'c8', color: '#D95D67' },
      { symbol: '♕', position: 'e8', color: '#D95D67' },
      { symbol: '♔', position: 'd8', color: '#D95D67' },
      { symbol: '♙', position: 'a7', color: '#D95D67' },
      { symbol: '♙', position: 'b7', color: '#D95D67' },
      { symbol: '♙', position: 'h7', color: '#D95D67' },
      { symbol: '♟', position: 'a2', color: '#50AC8E' },
      { symbol: '♟', position: 'g2', color: '#50AC8E' },
      { symbol: '♟', position: 'h2', color: '#50AC8E' },
      { symbol: '♜', position: 'a1', color: '#50AC8E' },
      { symbol: '♞', position: 'b1', color: '#50AC8E' },
      { symbol: '♝', position: 'c1', color: '#50AC8E' },
      { symbol: '♛', position: 'd1', color: '#50AC8E' },
      { symbol: '♚', position: 'e1', color: '#50AC8E' },
    ];
    
    return pieces.map((piece, index) => {
      // Calculate the position
      const file = piece.position.charCodeAt(0) - 97; // 'a' is 97 in ASCII
      const rank = 8 - parseInt(piece.position[1], 10);
      
      return (
        <div
          key={`piece-${index}`}
          className="chess-piece"
          style={{
            position: 'absolute',
            top: `${rank * 12.5}%`,
            left: `${file * 12.5}%`,
            width: '12.5%',
            height: '12.5%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: piece.color,
            opacity: 0,
            zIndex: 2,
          }}
        >
          {piece.symbol}
        </div>
      );
    });
  };
  
  return (
    <footer
      ref={footerRef}
      className="chess-footer"
      style={{
        position: 'relative',
        backgroundColor: '#0F172A',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* Top wave shape */}
      <div
        ref={topWaveRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          transform: 'rotate(180deg)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: 'relative',
            display: 'block',
            width: 'calc(100% + 1.3px)',
            height: '70px',
            transform: 'rotateY(180deg)',
          }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#111"
          ></path>
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="footer-main" style={{ padding: '120px 0 80px' }}>
        <div
          className="container"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '4rem',
            }}
          >
            {/* Company info column */}
            <div>
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="logo"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div 
                    style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: '#E5A244',
                      position: 'relative',
                    }}
                  >
                    ♔
                    <span
                      style={{
                        position: 'absolute',
                        top: '-4px',
                        right: '-4px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#D95D67',
                        filter: 'blur(2px)',
                        opacity: 0.8,
                      }}
                    />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        letterSpacing: '1px',
                      }}
                    >
                      CHECKMATE
                    </span>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        color: '#8B64C0',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginTop: '-2px',
                      }}
                    >
                      Strategic Software Solutions
                    </span>
                  </div>
                </motion.div>
              </Link>
              
              <p
                style={{
                  color: '#94A3B8',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                  maxWidth: '300px',
                }}
              >
                We specialize in developing custom software solutions with strategic precision, 
                helping businesses achieve their digital objectives through quality-driven, 
                secure, and innovative implementations.
              </p>
              
              {/* Mini chessboard */}
              <div
                ref={boardRef}
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(8, 1fr)',
                  gridTemplateRows: 'repeat(8, 1fr)',
                  position: 'relative',
                  marginBottom: '2rem',
                  boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
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
                        backgroundColor: isBlack ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.02)',
                      }}
                    />
                  );
                })}
                
                {/* Chess pieces */}
                {renderChessPieces()}
                
                {/* Checkmate overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(2px)',
                    zIndex: 3,
                  }}
                >
                  <span
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#E5A244',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                    }}
                  >
                    Checkmate
                  </span>
                </motion.div>
              </div>
              
              {/* Social links */}
              <div 
                style={{
                  display: 'flex',
                  gap: '1rem',
                }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={`social-${index}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, backgroundColor: '#E5A244', color: '#fff' }}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#94A3B8',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <SocialIcon icon={social.icon} />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Footer links columns */}
            {footerLinks.map((column, colIndex) => (
              <div key={`footer-col-${colIndex}`}>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    marginBottom: '1.5rem',
                    color: '#fff',
                    position: 'relative',
                    paddingBottom: '0.75rem',
                  }}
                >
                  {column.title}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '40px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #E5A244, transparent)',
                      borderRadius: '3px',
                    }}
                  />
                </h3>
                
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {column.links.map((link, linkIndex) => (
                    <li key={`footer-link-${colIndex}-${linkIndex}`} style={{ marginBottom: '0.75rem' }}>
                      <Link href={link.url}>
                        <motion.div
                          whileHover={{ x: 5, color: '#E5A244' }}
                          style={{
                            color: '#94A3B8',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <svg width="6" height="6" viewBox="0 0 6 6">
                            <rect width="6" height="6" fill={colIndex === 0 ? '#4D8DDA' : colIndex === 1 ? '#50AC8E' : '#D95D67'} />
                          </svg>
                          {link.label}
                        </motion.div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Newsletter column */}
            <div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: '#fff',
                  position: 'relative',
                  paddingBottom: '0.75rem',
                }}
              >
                Stay Updated
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #E5A244, transparent)',
                    borderRadius: '3px',
                  }}
                />
              </h3>
              
              <p
                style={{
                  color: '#94A3B8',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                }}
              >
                Subscribe to our newsletter for the latest updates and insights on software development and strategic solutions.
              </p>
              
              {/* Newsletter form */}
              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                  }}
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      paddingLeft: '2.5rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                    }}
                  />
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '0.75rem',
                      transform: 'translateY(-50%)',
                    }}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#E5A244' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#E5A244',
                    border: 'none',
                    color: '#fff',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  Subscribe
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </motion.button>
              </form>
              
              {/* Contact info */}
              <div
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span style={{ color: '#94A3B8' }}>+1 (555) 123-4567</span>
                </div>
                
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <span style={{ color: '#94A3B8' }}>info@checkmatesolutions.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright bar */}
      <div
        className="footer-bottom"
        style={{
          padding: '1.5rem 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0 }}>
            © {new Date().getFullYear()} Checkmate Software Solutions. All rights reserved.
          </p>
          
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
            }}
          >
            <Link href="/privacy">
              <motion.span
                whileHover={{ color: '#E5A244' }}
                style={{
                  color: '#94A3B8',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
              >
                Privacy Policy
              </motion.span>
            </Link>
            
            <Link href="/terms">
              <motion.span
                whileHover={{ color: '#E5A244' }}
                style={{
                  color: '#94A3B8',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
              >
                Terms of Service
              </motion.span>
            </Link>
            
            <Link href="/sitemap">
              <motion.span
                whileHover={{ color: '#E5A244' }}
                style={{
                  color: '#94A3B8',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
              >
                Sitemap
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-bottom .container {
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default ChessFooter;