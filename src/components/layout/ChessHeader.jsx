'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const ChessHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const particlesRef = useRef(null);
  
  // Navigation items
  const navItems = [
    {
      label: 'Services',
      path: '/services',
      dropdown: [
        { label: 'Web Development', path: '/services/web-development' },
        { label: 'AI Integration', path: '/services/ai-integration' },
        { label: 'Software Optimization', path: '/services/optimization' },
        { label: 'Bug Fixes', path: '/services/bug-fixes' },
      ],
      color: '#4D8DDA', // Blue
      piece: '♗', // Bishop
    },
    {
      label: 'Projects',
      path: '/projects',
      dropdown: [
        { label: 'Case Studies', path: '/projects/case-studies' },
        { label: 'Our Portfolio', path: '/projects/portfolio' },
        { label: 'Success Stories', path: '/projects/success-stories' },
      ],
      color: '#50AC8E', // Green
      piece: '♘', // Knight
    },
    {
      label: 'About',
      path: '/about',
      dropdown: [
        { label: 'Our Team', path: '/about/team' },
        { label: 'Company', path: '/about/company' },
        { label: 'Process', path: '/about/process' },
      ],
      color: '#E5A244', // Gold
      piece: '♔', // King
    },
    {
      label: 'Contact',
      path: '/contact',
      dropdown: null,
      color: '#D95D67', // Red
      piece: '♕', // Queen
    },
  ];
  
  // Toggle dark/light mode (placeholder for functionality)
  const [darkMode, setDarkMode] = useState(true);
  
  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Handle GSAP animations
  useEffect(() => {
    if (!particlesRef.current) return;
    
    // Chess piece particles animation
    const particles = Array.from(particlesRef.current.children);
    
    gsap.fromTo(
      particles,
      {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-15, 15)',
        opacity: 0,
      },
      {
        y: 'random(-40, 40)',
        x: 'random(-40, 40)',
        rotation: 'random(-30, 30)',
        opacity: 'random(0.05, 0.2)',
        duration: 'random(2, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.1,
      }
    );
    
    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { scale: 0.95 },
      { 
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
        repeat: -1,
        yoyo: true,
        repeatDelay: 5
      }
    );
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Toggle dropdown
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };
  
  // Handle mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Here you would implement the actual mode switching functionality
  };
  
  return (
    <header
      ref={headerRef}
      className="chess-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(17, 17, 17, 0.95)' : 'rgba(17, 17, 17, 0.5)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(5px)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.15)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Floating chess piece particles */}
      <div 
        ref={particlesRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {['♙', '♘', '♗', '♖', '♕', '♔'].map((piece, index) => (
          <div
            key={`particle-${index}`}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              color: 'rgba(255, 255, 255, 0.05)',
              transform: 'rotate(0deg)',
            }}
          >
            {piece}
          </div>
        ))}
      </div>
      
      <div
        className="container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: isScrolled ? '70px' : '90px',
          transition: 'height 0.3s ease',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Logo */}
        <Link href="/">
          <motion.div
            ref={logoRef}
            className="logo"
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
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
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #B3BAC5 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
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

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            '@media (max-width: 1024px)': {
              display: 'none',
            },
          }}
        >
          <ul
            style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'center',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item, index) => (
              <li
                key={`nav-${index}`}
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                style={{ position: 'relative' }}
              >
                <Link href={item.path}>
                  <motion.div
                    className="nav-item"
                    whileHover={{
                      color: item.color,
                      y: -3,
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      color: activeDropdown === index ? item.color : '#ddd',
                      fontSize: '0.95rem',
                      fontWeight: 'bold',
                      padding: '0.5rem 0',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    <span style={{ fontSize: '0.9rem' }}>{item.piece}</span>
                    {item.label}
                    {item.dropdown && (
                      <motion.svg
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </motion.svg>
                    )}
                  </motion.div>
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          minWidth: '200px',
                          backgroundColor: 'rgba(17, 17, 17, 0.95)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '10px',
                          padding: '0.75rem',
                          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          zIndex: 10,
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '-5px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '10px',
                            height: '10px',
                            backgroundColor: 'rgba(17, 17, 17, 0.95)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRight: 'none',
                            borderBottom: 'none',
                            rotate: '45deg',
                          }}
                        />
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                          {item.dropdown.map((dropdownItem, dropIndex) => (
                            <li key={`dropdown-${index}-${dropIndex}`}>
                              <Link href={dropdownItem.path}>
                                <motion.div
                                  whileHover={{
                                    backgroundColor: `${item.color}20`,
                                    color: item.color,
                                    x: 5,
                                  }}
                                  style={{
                                    padding: '0.75rem 1rem',
                                    borderRadius: '6px',
                                    color: '#ddd',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.2s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                  }}
                                >
                                  <span
                                    style={{
                                      width: '5px',
                                      height: '5px',
                                      borderRadius: '50%',
                                      backgroundColor: item.color,
                                      opacity: 0.6,
                                    }}
                                  />
                                  {dropdownItem.label}
                                </motion.div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#ddd',
                transition: 'all 0.3s ease',
              }}
            >
              {darkMode ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </motion.button>
            
            {/* CTA Button */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#E5A244' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.6rem 1.2rem',
                  backgroundColor: 'transparent',
                  color: '#E5A244',
                  border: '2px solid #E5A244',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                }}
              >
                Get Started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.button>
            </Link>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-button"
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
          style={{
            display: 'none',
            width: '40px',
            height: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            zIndex: 100,
            '@media (max-width: 1024px)': {
              display: 'flex',
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <g>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </g>
            ) : (
              <g>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </g>
            )}
          </svg>
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mobile-menu"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '300px',
              height: '100vh',
              backgroundColor: 'rgba(17, 17, 17, 0.97)',
              backdropFilter: 'blur(10px)',
              padding: '5rem 2rem 2rem',
              zIndex: 99,
              overflowY: 'auto',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <nav>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {navItems.map((item, index) => (
                  <li
                    key={`mobile-nav-${index}`}
                    style={{ marginBottom: '1rem' }}
                  >
                    <div
                      onClick={() => item.dropdown && toggleDropdown(index)}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.75rem 0',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                        cursor: 'pointer',
                      }}
                    >
                      <Link href={item.path} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ 
                          color: item.color, 
                          fontSize: '1.2rem', 
                          marginRight: '0.5rem' 
                        }}>
                          {item.piece}
                        </span>
                        <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'bold' }}>
                          {item.label}
                        </span>
                      </Link>
                      
                      {item.dropdown && (
                        <motion.svg
                          animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={activeDropdown === index ? item.color : '#777'}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </motion.svg>
                      )}
                    </div>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              overflow: 'hidden',
                              paddingLeft: '1.5rem',
                              marginTop: '0.5rem',
                            }}
                          >
                            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                              {item.dropdown.map((dropdownItem, dropIndex) => (
                                <li key={`mobile-dropdown-${index}-${dropIndex}`} style={{ marginBottom: '0.75rem' }}>
                                  <Link href={dropdownItem.path}>
                                    <motion.div
                                      whileHover={{ color: item.color, x: 5 }}
                                      style={{
                                        color: '#aaa',
                                        fontSize: '0.95rem',
                                        padding: '0.5rem 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        transition: 'all 0.2s ease',
                                      }}
                                    >
                                      <span
                                        style={{
                                          width: '5px',
                                          height: '5px',
                                          borderRadius: '50%',
                                          backgroundColor: item.color,
                                          opacity: 0.6,
                                        }}
                                      />
                                      {dropdownItem.label}
                                    </motion.div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile CTA Button */}
            <div style={{ marginTop: '2rem' }}>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: '#E5A244',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </motion.button>
              </Link>
            </div>
            
            {/* Dark Mode Toggle on Mobile */}
            <div style={{ 
              marginTop: '1.5rem', 
              display: 'flex', 
              justifyContent: 'center',
              padding: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  color: '#ddd',
                }}
              >
                {darkMode ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    <span>Dark Mode</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(3px)',
              zIndex: 98,
            }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          
          .mobile-menu-button {
            display: flex;
          }
          
          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default ChessHeader;