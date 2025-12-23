'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SoftwareEngineeringHero = () => {
  return (
    <section
      className="software-engineering-hero-section"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 80px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f4f8 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
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
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '-40%',
          right: '-15%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.05) 100%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.03) 100%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
          <div
            className="software-engineering-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Our Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                style={{
                  padding: '0.5rem 1.25rem',
                  border: '2px solid #0F172A',
                  borderRadius: '50px',
                  background: 'transparent',
                  color: '#0F172A',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  transition: 'all 0.3s ease',
                }}
            
              >
                Our Services
              </button>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="software-engineering-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: '4rem',
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                color: '#0F172A',
                fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
              }}
            >
              <span style={{ display: 'block', color: '#0F172A' }}>Software</span>
              <span
                style={{
                  display: 'block',
                  color: '#0F172A',
                }}
              >
                Engineering
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="software-engineering-hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: '#4A5568',
                marginBottom: '2.5rem',
                maxWidth: '550px',
                fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
              }}
            >
              Build robust, scalable software solutions with clean architecture and best practices. Our engineering expertise delivers maintainable code, optimized performance, and future-proof applications that grow with your business.
            </motion.p>

            {/* Get a Quote Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link href="/contact">
                <motion.button
                  className="software-engineering-hero-cta-button"
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(15, 23, 42, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '1rem 2.5rem',
                    borderRadius: '8px',
                    background: '#0F172A',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)',
                  }}
                >
                  Get a Quote
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transition: 'transform 0.3s ease' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="software-engineering-hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            style={{
              position: 'relative',
              height: '600px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/images/Services/Software-Engineering/software-engineering.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#0F172A',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)',
                  zIndex: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .software-engineering-hero-section {
            padding: 100px 0 60px !important;
          }
          
          .software-engineering-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          
          .software-engineering-hero-heading {
            font-size: 3rem !important;
          }
          
          .software-engineering-hero-image {
            height: 400px !important;
          }
        }
        
        @media (max-width: 768px) {
          .software-engineering-hero-section {
            padding: 80px 0 40px !important;
          }
          
          .software-engineering-hero-heading {
            font-size: 2.5rem !important;
          }
          
          .software-engineering-hero-description {
            font-size: 1rem !important;
          }
          
          .software-engineering-hero-image {
            height: 350px !important;
          }
        }
        
        @media (max-width: 480px) {
          .software-engineering-hero-heading {
            font-size: 2rem !important;
          }
          
          .software-engineering-hero-cta-button {
            padding: 0.875rem 2rem !important;
            font-size: 0.9375rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SoftwareEngineeringHero;

