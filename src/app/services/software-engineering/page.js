'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';
import SoftwareEngineeringHero from '@/components/sections/SoftwareEngineeringHero';
import { motion } from 'framer-motion';

export default function SoftwareEngineeringPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        {/* Hero Section */}
        <SoftwareEngineeringHero />

        {/* Features Section */}
        <section
          className="software-engineering-services-section"
          style={{
            padding: '100px 0',
            backgroundImage: 'url(/formbg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background overlay for lower intensity */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 2rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: 'center',
                marginBottom: '4rem',
              }}
            >
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#0F172A',
                  marginBottom: '1rem',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}
              >
                Our Software Engineering Services
              </h2>
            </motion.div>

            <div
              className="software-engineering-services-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                rowGap: '4rem',
              }}
            >
              {/* System Architecture Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#f8f9fa',
                  }}
                >
                  <img
                    src="/images/Services/Software-Engineering/system-artitecture.webp"
                    alt="System Architecture"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '1.5rem',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  System Architecture
                </h3>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#4A5568',
                    lineHeight: '1.8',
                    marginBottom: '2rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  Design scalable, maintainable software architectures that support growth and adapt to changing requirements. We create clean code principles and SOLID design patterns to ensure your solution's longevity and success.
                </p>
              </motion.div>

              {/* Code Quality Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#f8f9fa',
                  }}
                >
                  <img
                    src="/images/Services/Software-Engineering/code-quality.png"
                    alt="Code Quality"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '1.5rem',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  Code Quality
                </h3>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#4A5568',
                    lineHeight: '1.8',
                    marginBottom: '2rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  Maintain high code quality standards with comprehensive testing, code reviews, and documentation. We ensure your codebase is clean, readable, and maintainable for long-term success.
                </p>
              </motion.div>

              {/* Performance Optimization Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#f8f9fa',
                  }}
                >
                  <img
                    src="/images/Services/Software-Engineering/Performance-Optimization.webp"
                    alt="Performance Optimization"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '1.5rem',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  Performance Optimization
                </h3>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#4A5568',
                    lineHeight: '1.8',
                    marginBottom: '2rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  Optimize application performance through profiling, caching strategies, and efficient algorithms. Deliver fast, responsive software that meets user expectations and scales with your business.
                </p>
              </motion.div>

              {/* Agile Development Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#f8f9fa',
                  }}
                >
                  <img
                    src="/images/Services/Software-Engineering/Agile.webp"
                    alt="Agile Development"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '1.5rem',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  Agile Development
                </h3>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#4A5568',
                    lineHeight: '1.8',
                    marginBottom: '2rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  Follow agile methodologies with iterative development, continuous integration, and regular releases. Collaborate effectively with stakeholders throughout the process to deliver value incrementally.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section
          style={{
            padding: '100px 0',
            background: '#0F172A',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 2rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: 'center',
                marginBottom: '4rem',
              }}
            >
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}
              >
                Software Engineering Technology Expertise
              </h2>
            </motion.div>

            {/* Statistics Grid */}
            <div
              className="software-engineering-statistics-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '3rem',
                marginBottom: '5rem',
              }}
            >
              {/* Stat 1 */}
              <motion.div
                className="software-engineering-stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  style={{
                    fontSize: '4rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '1rem',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  20+
                </div>
                <div
                  style={{
                    fontSize: '1.125rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  years of experience
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                className="software-engineering-stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  style={{
                    fontSize: '4rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '1rem',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  100+
                </div>
                <div
                  style={{
                    fontSize: '1.125rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  successfully completed projects
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                className="software-engineering-stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    fontSize: '4rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '1rem',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  10m+
                </div>
                <div
                  style={{
                    fontSize: '1.125rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  people use our-built mobile apps and websites
                </div>
              </motion.div>
            </div>

            {/* What we do Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                textAlign: 'center',
                marginBottom: '4rem',
              }}
            >
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}
              >
                What we do
              </h3>
            </motion.div>

            {/* What we do Content Grid */}
            <div
              className="software-engineering-what-we-do-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '3rem',
              }}
            >
              {/* Research Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    marginBottom: '1.5rem',
                    color: '#ffffff',
                  }}
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                    <line x1="9" y1="5" x2="9" y2="21" />
                    <line x1="12" y1="3" x2="12" y2="7" />
                  </svg>
                </div>
                <h4
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '1rem',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  Architecture Design
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We analyze your requirements and design scalable software architectures that support growth. Our team creates clean, maintainable system designs using SOLID principles and modern design patterns to ensure your solution's longevity and success.
                </p>
              </motion.div>

              {/* Code Quality Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    marginBottom: '1.5rem',
                    color: '#ffffff',
                  }}
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h4
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '1rem',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  Code Quality
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We maintain high code quality standards through comprehensive testing, code reviews, and documentation. Our rigorous quality assurance processes ensure your codebase is clean, readable, and maintainable for long-term success and easy collaboration.
                </p>
              </motion.div>

              {/* Performance Optimization Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    marginBottom: '1.5rem',
                    color: '#ffffff',
                  }}
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h4
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '1rem',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  Performance Optimization
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We optimize application performance through profiling, caching strategies, and efficient algorithms. Our performance engineering ensures your software runs fast, scales effectively, and delivers exceptional user experiences that meet modern performance expectations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: '80px 0',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/formbg.png)',
              backgroundSize: 'auto',
              backgroundPosition: 'center',
              backgroundRepeat: 'repeat',
              opacity: 0.1,
            }}
          />
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: '0 2rem',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#0F172A',
                  marginBottom: '1.5rem',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}
              >
                Ready to Build Quality Software?
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#0F172A',
                  marginBottom: '2.5rem',
                  lineHeight: '1.7',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                }}
              >
                Let's discuss your project and create a solution that scales with your business.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  background: '#0F172A',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  transition: 'all 0.3s ease',
                }}
              >
                Get Started Today
              </motion.a>
            </motion.div>
        </div>
        </section>
      </main>
      <ChessFooter />

      <style jsx global>{`
        @media (max-width: 1024px) {
          .software-engineering-services-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .software-engineering-statistics-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .software-engineering-stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            padding-bottom: 2rem !important;
          }
          
          .software-engineering-stat-item:last-child {
            border-bottom: none !important;
          }
          
          .software-engineering-what-we-do-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </>
  );
}
