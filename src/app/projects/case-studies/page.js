'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';
import AutoScrollImage from '@/components/sections/AutoScrollImage';

export default function CaseStudiesPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    setIsLoaded(true);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // Case studies data - just media, no project names
  const caseStudies = [
    {
      id: 1,
      category: 'ai',
      type: 'video',
      videoUrl: '/case-studies.mp4',
      scrollImageUrl: null,
      imageUrl: null,
      color: 'var(--color-secondary)',
    },
    {
      id: 2,
      category: 'backend',
      type: 'scroll',
      videoUrl: null,
      scrollImageUrl: '/case-study-2.webp',
      imageUrl: null,
      color: 'var(--color-primary)',
    },
    {
      id: 3,
      category: 'backend',
      type: 'image',
      videoUrl: null,
      scrollImageUrl: null,
      imageUrl: '/case-study-3.webp',
      color: 'var(--color-secondary)',
    },
    {
      id: 4,
      category: 'ai',
      type: 'video',
      videoUrl: '/case-study-4.mp4',
      scrollImageUrl: null,
      imageUrl: null,
      color: 'var(--color-primary)',
    },
    {
      id: 5,
      category: 'backend',
      type: 'image',
      videoUrl: null,
      scrollImageUrl: null,
      imageUrl: '/case-study-5.webp',
      color: 'var(--color-secondary)',
    },
    {
      id: 6,
      category: 'ai',
      type: 'image',
      videoUrl: null,
      scrollImageUrl: null,
      imageUrl: '/case-study-6.webp',
      color: 'var(--color-primary)',
    },
    {
      id: 7,
      category: 'backend',
      type: 'image',
      videoUrl: null,
      scrollImageUrl: null,
      imageUrl: '/case-study-7.webp',
      color: 'var(--color-secondary)',
    },
  ];

  const filters = ['all', 'ai', 'backend'];

  const filteredStudies = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.category === activeFilter);

  const getColorValue = (colorVar) => {
    if (colorVar === 'var(--color-secondary)') return '#016782';
    if (colorVar === 'var(--color-primary)') return '#6366F1';
    return colorVar;
  };

  return (
    <>
      <Header />
      <main
        style={{
          backgroundColor: '#ffffff',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        {/* Custom Cursor */}
        <div
          style={{
            position: 'fixed',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9999,
            left: cursorPos.x - 8,
            top: cursorPos.y - 8,
            backgroundColor: hoveredCard && caseStudies.find(s => s.id === hoveredCard)?.color
              ? getColorValue(caseStudies.find(s => s.id === hoveredCard).color)
              : '#000',
            transform: hoveredCard ? 'scale(4)' : 'scale(1)',
            transition: 'all 0.15s ease',
            mixBlendMode: 'difference',
            opacity: showCursor ? 1 : 0,
          }}
        />

        {/* Hero Section */}
        <section
          style={{
            position: 'relative',
            padding: isMobile ? '7rem 0 2.5rem' : '10rem 0 4rem',
            backgroundImage: 'url(/formbg.png)',
            backgroundSize: 'auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            pointerEvents: 'none',
          }} />

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0 2rem',
            position: 'relative',
            zIndex: 1,
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center' }}
            >
              <motion.h6
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontSize: isMobile ? '0.8rem' : '0.875rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '1rem',
                  fontFamily: "var(--font-syne), var(--font-bricolage), -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Case Studies
              </motion.h6>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-text"
                style={{
                  fontSize: isMobile ? '1.75rem' : '3.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--text-on-light)',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  lineHeight: 1.2,
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                In-Depth Analysis of
                {!isMobile && <br />}
                <span style={{ color: 'var(--color-secondary)' }}>Our Solutions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  fontSize: isMobile ? '0.9375rem' : '1.25rem',
                  maxWidth: '700px',
                  margin: '0 auto',
                  color: 'var(--text-on-light-muted)',
                  lineHeight: 1.6,
                  padding: isMobile ? '0 0.5rem' : '0',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                }}
              >
                Detailed case studies showcasing our approach, challenges, and solutions for successful projects.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{
          padding: isMobile ? '3rem 0' : '4rem 0',
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          backgroundImage: 'url(/formbg.png)',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0 2rem',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? '2rem' : '2rem',
            }}>
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '50+', label: 'Happy Clients' },
                { number: '12', label: 'Awards Won' },
                { number: '9+', label: 'Years Experience' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{
                    fontSize: isMobile ? '2rem' : '3rem',
                    fontWeight: 900,
                    color: 'var(--text-on-light)',
                    marginBottom: '0.5rem',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: isMobile ? '0.75rem' : '0.875rem',
                    color: 'var(--text-on-light-muted)',
                    letterSpacing: '0.05em',
                    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section style={{
          padding: isMobile ? '2rem 0' : '3rem 0',
          position: 'sticky',
          top: 0,
          backgroundImage: 'url(/formbg.png)',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          zIndex: 40,
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(228, 228, 228, 0.76)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0 2rem',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}>
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: isMobile ? '8px 20px' : '10px 24px',
                    borderRadius: '50px',
                    fontSize: isMobile ? '0.875rem' : '0.9375rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: 'none',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    ...(activeFilter === filter
                      ? {
                        background: 'var(--text-on-light)',
                        color: '#ffffff',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      }
                      : {
                        background: 'rgba(0, 0, 0, 0.05)',
                        color: 'var(--text-on-light-muted)',
                      }),
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter) {
                      e.target.style.background = 'rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter) {
                      e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                    }
                  }}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study - Large */}
        {filteredStudies.length > 0 && (
          <section style={{
            position: 'relative',
            padding: isMobile ? '3rem 0' : '5rem 0',
            backgroundImage: 'url(/formbg.png)',
            backgroundSize: 'auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(228, 228, 228, 0.76)',
              zIndex: 0,
              pointerEvents: 'none',
            }} />
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: isMobile ? '0 1rem' : '0 2rem',
              position: 'relative',
              zIndex: 1,
            }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setHoveredCard(filteredStudies[0]?.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  aspectRatio: isMobile ? '4/3' : '16/9',
                  background: '#000',
                }}>
                  {filteredStudies[0]?.type === 'video' && filteredStudies[0]?.videoUrl ? (
                    <video
                      src={filteredStudies[0].videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : filteredStudies[0]?.type === 'scroll' && filteredStudies[0]?.scrollImageUrl ? (
                    <AutoScrollImage
                      imageSrc={filteredStudies[0].scrollImageUrl}
                      height={isMobile ? 400 : 500}
                      duration={15}
                      direction="up"
                      borderRadius="24px"
                    />
                  ) : filteredStudies[0]?.imageUrl ? (
                    <img
                      src={filteredStudies[0].imageUrl}
                      alt="Case Study"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.7s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                      }}
                    />
                  ) : null}

                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), transparent)',
                  }} />

                  {/* No content overlay - just media */}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Bento Grid Section */}
        {filteredStudies.length > 1 && (
          <section style={{
            position: 'relative',
            padding: isMobile ? '2rem 0 8rem' : '2.5rem 0 8rem',
            backgroundImage: 'url(/formbg.png)',
            backgroundSize: 'auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(228, 228, 228, 0.76)',
              zIndex: 0,
              pointerEvents: 'none',
            }} />
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: isMobile ? '0 1rem' : '0 2rem',
              position: 'relative',
              zIndex: 1,
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: isMobile ? '1.5rem' : '1.5rem',
              }}>
                {filteredStudies.slice(1).map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{
                      position: 'relative',
                      cursor: 'pointer',
                      gridColumn: !isMobile && index === 0 ? 'span 2' : 'span 1',
                      gridRow: !isMobile && index === 0 ? 'span 2' : 'span 1',
                    }}
                    onMouseEnter={() => setHoveredCard(study.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '16px',
                      aspectRatio: !isMobile && index === 0 ? 'auto' : '4/3',
                      height: !isMobile && index === 0 ? '100%' : 'auto',
                      background: '#000',
                    }}>
                      {study.type === 'video' && study.videoUrl ? (
                        <video
                          src={study.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      ) : study.type === 'scroll' && study.scrollImageUrl ? (
                        <AutoScrollImage
                          imageSrc={study.scrollImageUrl}
                          height={isMobile ? 400 : 500}
                          duration={15}
                          direction="up"
                          borderRadius="16px"
                        />
                      ) : study.imageUrl ? (
                        <img
                          src={study.imageUrl}
                          alt="Case Study"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.7s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                          }}
                        />
                      ) : null}

                      {/* Overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          opacity: 0,
                          transition: 'opacity 0.5s ease',
                          background: `linear-gradient(135deg, ${getColorValue(study.color)}dd, ${getColorValue(study.color)}99)`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = 1;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = 0;
                        }}
                      />

                      {/* Video Icon */}
                      {study.type === 'video' && (
                        <div style={{
                          position: 'absolute',
                          top: '1rem',
                          right: '1rem',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      )}

                      {/* No content - just media */}

                      {/* Arrow */}
                      <motion.div
                        initial={{ x: 16, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          position: 'absolute',
                          top: '1.5rem',
                          right: '1.5rem',
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-on-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </motion.div>

                      {/* Border Glow Effect */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '16px',
                          opacity: 0,
                          transition: 'opacity 0.5s ease',
                          boxShadow: `inset 0 0 0 2px ${getColorValue(study.color)}, 0 0 40px ${getColorValue(study.color)}40`,
                          pointerEvents: 'none',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = 1;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = 0;
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Marquee Section */}
        <section style={{
          padding: isMobile ? '3rem 0' : '4rem 0',
          background: 'var(--text-on-light)',
          overflow: 'hidden',
        }}>
          <div style={{
            display: 'flex',
            animation: 'marquee 20s linear infinite',
            whiteSpace: 'nowrap',
          }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginRight: '2rem' }}>
                {['Innovation', '●', 'Design', '●', 'Development', '●', 'Strategy', '●', 'Growth', '●'].map((text, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: isMobile ? '2rem' : '3rem',
                      fontWeight: 900,
                      color: text === '●' ? 'var(--text-on-light-muted)' : '#ffffff',
                      fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                    }}
                  >
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
          `}</style>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: isMobile ? '4rem 0' : '8rem 0',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(/formbg.png)',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            opacity: 0.2,
            background: `radial-gradient(circle, var(--color-primary), transparent 70%)`,
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0 2rem',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            <h2 style={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 900,
              color: 'var(--text-on-light)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
            }}>
              Have a project
              {!isMobile && <br />}
              <span style={{
                background: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                in mind?
              </span>
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: 'var(--text-on-light-muted)',
              marginBottom: '2.5rem',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
              fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
            }}>
              Let's collaborate and create something extraordinary together.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  position: 'relative',
                  padding: isMobile ? '14px 32px' : '18px 40px',
                  background: 'var(--text-on-light)',
                  color: '#ffffff',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  border: 'none',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `linear-gradient(to right, var(--color-primary), var(--color-secondary))`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--text-on-light)';
                }}
              >
                <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '12px' }}>
                  Start a Project
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
      <ChessFooter />
    </>
  );
}

