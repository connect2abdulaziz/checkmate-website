'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';
import AIMachineLearningHero from '@/components/sections/AIMachineLearningHero';
import { motion } from 'framer-motion';

export default function AIMachineLearningPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        {/* Hero Section */}
        <AIMachineLearningHero />

        {/* Features Section */}
        <section
          className="ai-ml-services-section"
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
                Our AI & Machine Learning Services
              </h2>
            </motion.div>

            <div
              className="ai-ml-services-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                rowGap: '4rem',
              }}
            >
              {/* Machine Learning Models Column */}
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
                    src="/images/Services/AI-ML/ml-modals.jpg"
                    alt="Machine Learning Models"
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
                  Machine Learning Models
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
                  Develop custom ML models for predictive analytics, classification, and pattern recognition. From data preprocessing to model deployment, we build intelligent solutions that learn and adapt.
                </p>
              </motion.div>

              {/* Deep Learning Column */}
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
                    src="/images/Services/AI-ML/Deep-learning.png"
                    alt="Deep Learning"
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
                  Deep Learning
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
                  Build neural networks and deep learning solutions for complex problems. Image recognition, natural language processing, and advanced AI capabilities that transform your business operations.
                </p>
              </motion.div>

              {/* Data Analytics Column */}
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
                    src="/images/Services/AI-ML/data-analytics.webp"
                    alt="Data Analytics"
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
                  Data Analytics
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
                  Transform raw data into actionable insights with advanced analytics. Identify trends, patterns, and opportunities in your data to drive informed business decisions and strategic growth.
                </p>
              </motion.div>

              {/* AI Integration Column */}
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
                    src="/images/Services/AI-ML/AI-integrations.jpg"
                    alt="AI Integration"
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
                  AI Integration
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
                  Integrate AI capabilities into your existing applications. Chatbots, recommendation systems, and intelligent automation that enhance user experiences and streamline operations.
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
                AI & Machine Learning Technology Expertise
              </h2>
            </motion.div>

            {/* Statistics Grid */}
            <div
              className="ai-ml-statistics-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '3rem',
                marginBottom: '5rem',
              }}
            >
              {/* Stat 1 */}
              <motion.div
                className="ai-ml-stat-item"
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
                className="ai-ml-stat-item"
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
                className="ai-ml-stat-item"
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
              className="ai-ml-what-we-do-grid"
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
                  Data Analysis
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We analyze your data to identify patterns, trends, and opportunities. Our comprehensive data analysis helps us understand your business context, data quality, and requirements to design effective AI solutions that deliver real value.
                </p>
              </motion.div>

              {/* Model Development Column */}
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
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
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
                  Model Development
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We develop custom machine learning and deep learning models tailored to your specific needs. From data preprocessing to model training and optimization, we build intelligent solutions that learn, adapt, and deliver accurate predictions.
                </p>
              </motion.div>

              {/* AI Integration Column */}
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
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
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
                  AI Integration
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We seamlessly integrate AI capabilities into your existing applications and workflows. From chatbots and recommendation systems to intelligent automation, we enhance user experiences and streamline operations with production-ready AI solutions.
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
                Ready to Leverage AI?
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
                Let's discuss how AI and machine learning can transform your business.
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
          .ai-ml-services-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .ai-ml-statistics-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .ai-ml-stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            padding-bottom: 2rem !important;
          }
          
          .ai-ml-stat-item:last-child {
            border-bottom: none !important;
          }
          
          .ai-ml-what-we-do-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </>
  );
}
