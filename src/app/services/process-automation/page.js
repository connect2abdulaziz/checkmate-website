'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';
import ProcessAutomationHero from '@/components/sections/ProcessAutomationHero';
import { motion } from 'framer-motion';

export default function ProcessAutomationPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        {/* Hero Section */}
        <ProcessAutomationHero />

        {/* Features Section */}
        <section
          className="process-automation-services-section"
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
                Our Process Automation Services
              </h2>
            </motion.div>

            <div
              className="process-automation-services-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                rowGap: '4rem',
              }}
            >
              {/* Workflow Automation Column */}
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
                    src="/images/Services/process-automation/work-flow-automation.avif"
                    alt="Workflow Automation"
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
                  Workflow Automation
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
                  Automate complex business workflows and processes. Reduce manual tasks, eliminate errors, and improve efficiency across your organization with intelligent automation solutions.
                </p>
              </motion.div>

              {/* RPA Solutions Column */}
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
                    src="/images/Services/process-automation/RPA.webp"
                    alt="RPA Solutions"
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
                  RPA Solutions
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
                  Implement Robotic Process Automation to handle repetitive tasks. Bots that work 24/7, never make mistakes, and free your team for strategic work that drives business value.
                </p>
              </motion.div>

              {/* Business Process Integration Column */}
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
                    src="/images/Services/process-automation/BPI.jpg"
                    alt="Business Process Integration"
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
                  Business Process Integration
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
                  Connect disparate systems and applications seamlessly. Enable data flow between platforms and create unified business processes that eliminate silos and improve collaboration.
                </p>
              </motion.div>

              {/* Task Scheduling Column */}
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
                    src="/images/Services/process-automation/sceduling.webp"
                    alt="Task Scheduling"
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
                  Task Scheduling
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
                  Automate scheduled tasks and jobs. Run processes at optimal times, handle batch operations, and ensure critical tasks never get missed with intelligent scheduling systems.
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
                Process Automation Technology Expertise
              </h2>
            </motion.div>

            {/* Statistics Grid */}
            <div
              className="process-automation-statistics-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '3rem',
                marginBottom: '5rem',
              }}
            >
              {/* Stat 1 */}
              <motion.div
                className="process-automation-stat-item"
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
                className="process-automation-stat-item"
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
                className="process-automation-stat-item"
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
              className="process-automation-what-we-do-grid"
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
                  Process Analysis
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We analyze your business processes to identify automation opportunities. Our thorough process mapping helps us understand workflows, bottlenecks, and inefficiencies, enabling us to design automation solutions that deliver maximum value and ROI.
                </p>
              </motion.div>

              {/* Automation Design Column */}
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
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
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
                  Automation Design
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We design intelligent automation solutions using RPA, workflow automation, and integration technologies. Our automation designs eliminate manual tasks, reduce errors, and streamline operations, freeing your team to focus on strategic work.
                </p>
              </motion.div>

              {/* Process Optimization Column */}
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
                  Process Optimization
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We continuously monitor and optimize your automated processes to ensure peak performance. Our solutions adapt to changing business needs, improve efficiency over time, and provide measurable improvements in productivity and cost savings.
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
                Ready to Automate Your Processes?
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
                Let's discuss how automation can transform your workflows and boost productivity.
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
          .process-automation-services-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .process-automation-statistics-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .process-automation-stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            padding-bottom: 2rem !important;
          }
          
          .process-automation-stat-item:last-child {
            border-bottom: none !important;
          }
          
          .process-automation-what-we-do-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </>
  );
}
