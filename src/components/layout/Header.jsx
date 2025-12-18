'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Icon component factory
const Icon = ({ children, ...props }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {children}
  </svg>
);

const icons = {
  Code: () => <Icon><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></Icon>,
  Server: () => <Icon><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></Icon>,
  Cloud: () => <Icon><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></Icon>,
  Shield: () => <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></Icon>,
  Brain: () => <Icon><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L2.5 20.5a2.5 2.5 0 0 1 0-5l4.54-1.5A2.5 2.5 0 0 1 9.5 2z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44L21.5 20.5a2.5 2.5 0 0 0 0-5l-4.54-1.5A2.5 2.5 0 0 0 14.5 2z"></path></Icon>,
  Zap: () => <Icon><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></Icon>,
  Briefcase: () => <Icon><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></Icon>,
  Users: () => <Icon><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></Icon>,
  Building: () => <Icon><path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-4"></path><line x1="9" y1="9" x2="9" y2="9"></line><line x1="9" y1="12" x2="9" y2="12"></line><line x1="9" y1="15" x2="9" y2="15"></line><line x1="9" y1="18" x2="9" y2="18"></line></Icon>,
  Settings: () => <Icon><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m9-9h-6m-6 0H3m15.364 6.364l-4.243-4.243m-4.242 0L5.636 17.364m12.728 0l-4.243-4.243m-4.242 0L5.636 6.636"></path></Icon>,
};

const navItems = [
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Full-Stack Development', path: '/services/fullstack-development', icon: icons.Code },
      { label: 'Software Engineering', path: '/services/software-engineering', icon: icons.Server },
      { label: 'DevOps & Cloud Security', path: '/services/devops-cloud-security', icon: icons.Cloud },
      { label: 'Data Security & Compliance', path: '/services/data-security', icon: icons.Shield },
      { label: 'AI & Machine Learning', path: '/services/ai-machine-learning', icon: icons.Brain },
      { label: 'Process Automation', path: '/services/process-automation', icon: icons.Zap },
    ],
  },
  {
    label: 'Projects',
    path: '/projects',
    dropdown: [
      { label: 'Case Studies', path: '/projects/case-studies', icon: icons.Briefcase },
      { label: 'Our Portfolio', path: '/projects/portfolio', icon: icons.Briefcase },
      { label: 'Success Stories', path: '/projects/success-stories', icon: icons.Briefcase },
    ],
  },
  {
    label: 'About',
    path: '/about',
    dropdown: [
      { label: 'Our Team', path: '/about/team', icon: icons.Users },
      { label: 'Company', path: '/about/company', icon: icons.Building },
      { label: 'Process', path: '/about/process', icon: icons.Settings },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);

    handleResize(); // Set initial state
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (index) => setActiveDropdown(activeDropdown === index ? null : index);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Common styles
  const headerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    padding: isScrolled ? '0.5rem 1rem' : '1rem 1.5rem',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: 'none',
  };

  const panelStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%',
    backgroundColor: isScrolled ? 'var(--color-secondary-dark)' : 'var(--color-secondary)',
    backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(180%)',
    boxShadow: isScrolled
      ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--color-secondary-medium)'
      : '0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--color-secondary-light)',
    borderRadius: '16px',
    border: '1px solid var(--color-secondary-medium)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: 'auto',
  };

  const buttonStyles = {
    padding: '0.75rem 1.5rem',
    background: 'var(--color-secondary)',
    backdropFilter: 'blur(20px) saturate(180%)',
    color: 'var(--text-on-dark)',
    border: '1px solid var(--color-secondary-medium)',
    borderRadius: '10px',
    fontSize: '0.9375rem',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.625rem',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    position: 'relative',
    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
    letterSpacing: '-0.01em',
  };

  return (
    <header className="header" style={headerStyles}>
      <div className="header-panel" style={panelStyles}>
        <div
          className="container"
          style={{
            padding: '0 2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: isScrolled ? '64px' : '72px',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Logo */}
          <Link href="/">
            <motion.div
              ref={logoRef}
              className="logo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <img
                  src="/logo.png"
                  alt="Cypentra.dev"
                  style={{
                    height: isScrolled ? '48px' : '56px',
                    width: 'auto',
                    objectFit: 'contain',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    mixBlendMode: 'screen',
                    filter: 'brightness(1.1) contrast(1.05)',
                  }}
                />
              </motion.div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <ul style={{ display: 'flex', gap: '0.25rem', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
              {navItems.map((item, index) => (
                <li
                  key={`nav-${index}`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                  style={{ position: 'relative' }}
                >
                  <Link href={item.path}>
                    <motion.div
                      whileHover={{
                        color: 'var(--text-on-dark)',
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        color: activeDropdown === index ? 'var(--text-on-dark)' : 'var(--text-on-dark-muted)',
                        fontSize: '0.9375rem',
                        fontWeight: '500',
                        padding: '0.625rem 1rem',
                        cursor: 'pointer',
                        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                        borderRadius: '8px',
                        fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        layoutId={item.dropdown ? "activeBackground" : undefined}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: activeDropdown === index ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                          borderRadius: '8px',
                        }}
                        whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                      <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
                      {item.dropdown && (
                        <motion.svg
                          animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ position: 'relative', zIndex: 1 }}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </motion.svg>
                      )}
                    </motion.div>
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 0.75rem)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            minWidth: '260px',
                            backgroundColor: 'var(--color-secondary-dark)',
                            backdropFilter: 'blur(24px) saturate(180%)',
                            borderRadius: '12px',
                            padding: '0.5rem',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--color-secondary-medium)',
                            border: '1px solid var(--color-secondary-medium)',
                            zIndex: 10,
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              height: '2px',
                              background: 'linear-gradient(90deg, transparent, var(--color-secondary-medium), transparent)',
                              opacity: 0.6,
                            }}
                          />
                          <ul style={{ listStyle: 'none', margin: 0, padding: 0, position: 'relative', zIndex: 1 }}>
                            {item.dropdown.map((dropdownItem, dropIndex) => {
                              const IconComponent = dropdownItem.icon;
                              return (
                                <li key={`dropdown-${index}-${dropIndex}`}>
                                  <Link href={dropdownItem.path}>
                                    <motion.div
                                      initial={{ opacity: 0, x: -8 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: dropIndex * 0.04, duration: 0.2 }}
                                      whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: 'var(--text-on-dark)', x: 4 }}
                                      style={{
                                        padding: '0.875rem 1rem',
                                        borderRadius: '8px',
                                        color: 'var(--text-on-dark-subtle)',
                                        fontSize: '0.875rem',
                                        fontWeight: '500',
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                                        letterSpacing: '-0.01em',
                                      }}
                                    >
                                      <motion.div
                                        style={{
                                          width: '36px',
                                          height: '36px',
                                          borderRadius: '8px',
                                          backgroundColor: 'rgba(15, 23, 42, 0.08)',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          color: '#ffffff',
                                          flexShrink: 0,
                                        }}
                                        whileHover={{ backgroundColor: 'rgba(15, 23, 42, 0.2)', scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        {IconComponent && <IconComponent />}
                                      </motion.div>
                                      <span style={{ flex: 1 }}>{dropdownItem.label}</span>
                                      <motion.svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ opacity: 0.4, flexShrink: 0 }}
                                        whileHover={{ opacity: 1, x: 2 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                      </motion.svg>
                                    </motion.div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link href="/contact">
              <motion.button
                whileHover={{
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  borderColor: 'rgba(59, 130, 246, 0.4)',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)',
                }}
                whileTap={{ scale: 0.98 }}
                style={buttonStyles}
              >
                <span style={{ color: 'var(--text-on-dark)' }}>Get Started</span>
                <motion.svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: 'var(--text-on-dark)' }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </motion.svg>
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button - Only show on mobile */}
          {isMobile && (
            <motion.button
              className="mobile-menu-button"
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: mobileMenuOpen ? 'var(--color-secondary)' : 'var(--overlay-light)',
                borderRadius: '6px',
                border: '1px solid var(--border-light)',
                cursor: 'pointer',
                zIndex: 101,
                transition: 'all 0.2s ease',
                pointerEvents: 'auto',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-on-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
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
                zIndex: 99,
                pointerEvents: 'auto',
              }}
              onClick={closeMobileMenu}
            />
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="mobile-menu"
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '300px',
                height: '100vh',
                backgroundColor: 'var(--color-secondary-dark)',
                backdropFilter: 'blur(10px)',
                padding: '5rem 2rem 2rem',
                zIndex: 100,
                overflowY: 'auto',
                boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.4)',
                border: '1px solid var(--color-secondary-medium)',
                pointerEvents: 'auto',
              }}
            >
              <nav>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {navItems.map((item, index) => (
                    <li key={`mobile-nav-${index}`} style={{ marginBottom: '1rem', position: 'relative' }}>
                      {item.dropdown ? (
                        <motion.div
                          onClick={() => toggleDropdown(index)}
                          whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            width: '100%',
                            userSelect: 'none',
                            pointerEvents: 'auto',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <span style={{ color: activeDropdown === index ? 'var(--text-on-dark)' : 'var(--text-on-dark-muted)', fontSize: '1.1rem', fontWeight: 'bold', flex: 1 }}>
                            {item.label}
                          </span>
                          <motion.svg
                            animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={activeDropdown === index ? 'var(--text-on-dark)' : 'var(--text-on-dark-faint)'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flexShrink: 0 }}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </motion.svg>
                        </motion.div>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={closeMobileMenu}
                          style={{ display: 'block', textDecoration: 'none', pointerEvents: 'auto' }}
                        >
                          <motion.div
                            whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              padding: '0.75rem 1rem',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <motion.span
                              whileHover={{ color: 'var(--text-on-dark)' }}
                              style={{ color: 'var(--text-on-dark-muted)', fontSize: '1.1rem', fontWeight: 'bold' }}
                            >
                              {item.label}
                            </motion.span>
                          </motion.div>
                        </Link>
                      )}
                      {item.dropdown && (
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              style={{ overflow: 'hidden', paddingLeft: '1.5rem', marginTop: '0.5rem' }}
                            >
                              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                                {item.dropdown.map((dropdownItem, dropIndex) => (
                                  <li key={`mobile-dropdown-${index}-${dropIndex}`} style={{ marginBottom: '0.75rem', pointerEvents: 'auto' }}>
                                    <Link
                                      href={dropdownItem.path}
                                      onClick={closeMobileMenu}
                                      style={{ textDecoration: 'none', display: 'block', pointerEvents: 'auto' }}
                                    >
                                      <motion.div
                                        whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: 'var(--text-on-dark)', x: 5 }}
                                        style={{
                                          color: 'var(--text-on-dark-subtle)',
                                          fontSize: '0.95rem',
                                          padding: '0.5rem 0.75rem',
                                          borderRadius: '8px',
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '0.75rem',
                                          transition: 'all 0.2s ease',
                                        }}
                                      >
                                        <span
                                          style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(59, 130, 246, 0.5)',
                                            flexShrink: 0,
                                          }}
                                        />
                                        <span>{dropdownItem.label}</span>
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
              <div style={{ marginTop: '2rem', pointerEvents: 'auto' }}>
                <Link href="/contact" onClick={closeMobileMenu} style={{ textDecoration: 'none', display: 'block', pointerEvents: 'auto' }}>
                  <motion.button
                    whileHover={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      borderColor: 'rgba(59, 130, 246, 0.4)',
                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ ...buttonStyles, width: '100%', padding: '1rem 1.5rem' }}
                  >
                    <span style={{ color: 'var(--text-on-dark)' }}>Get Started</span>
                    <motion.svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: 'var(--text-on-dark)' }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </motion.svg>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style jsx global>{`
        .header {
          padding: 1rem 1.5rem !important;
        }
        .header .header-panel {
          border-radius: 16px;
        }
        .header .desktop-nav {
          display: flex;
        }
        @media (max-width: 1024px) {
          .header {
            padding: 0.75rem 1rem !important;
          }
          .header .header-panel {
            border-radius: 12px;
          }
          .header .desktop-nav {
            display: none !important;
          }
          .header .mobile-menu-button {
            display: flex !important;
          }
          .header .container {
            padding: 0 1.5rem !important;
            height: 64px !important;
          }
          .header .logo span {
            font-size: 1.25rem !important;
          }
        }
        @media (max-width: 768px) {
          .header {
            padding: 0.5rem 0.75rem !important;
          }
          .header .header-panel {
            border-radius: 12px;
          }
          .header .container {
            padding: 0 1.25rem !important;
            height: 60px !important;
          }
          .header .logo span {
            font-size: 1.1rem !important;
          }
          .header .mobile-menu {
            width: 280px !important;
            padding: 4rem 1.5rem 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .header {
            padding: 0.5rem !important;
          }
          .header .header-panel {
            border-radius: 10px;
          }
          .header .container {
            padding: 0 1rem !important;
            height: 56px !important;
          }
          .header .logo span {
            font-size: 0.95rem !important;
          }
          .header .mobile-menu {
            width: 100% !important;
            padding: 3.5rem 1rem 2rem !important;
          }
          .header .mobile-menu-button {
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

