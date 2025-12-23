'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';
import DataSecurityComplianceHero from '@/components/sections/DataSecurityComplianceHero';
import { motion } from 'framer-motion';

export default function DataSecurityCompliancePage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        {/* Hero Section */}
        <DataSecurityComplianceHero />

        {/* Features Section */}
        <section
          className="data-security-services-section"
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
                Our Data Security & Compliance Services
              </h2>
            </motion.div>

            <div
              className="data-security-services-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                rowGap: '4rem',
              }}
            >
              {/* Security Assessment Column */}
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
                    src="/images/Services/Full-stack-service/frontend.png"
                    alt="Security Assessment"
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
                  Security Assessment
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
                  Comprehensive security audits and vulnerability assessments to identify risks and weaknesses in your infrastructure. We evaluate your systems, networks, and applications to ensure robust protection against threats.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  style={{
                    color: '#0F172A',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    transition: 'all 0.3s ease',
                  }}
                >
                  LEARN MORE
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
                </motion.a>
              </motion.div>

              {/* Compliance Management Column */}
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
                    src="/images/Services/Full-stack-service/frontend.png"
                    alt="Compliance Management"
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
                  Compliance Management
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
                  Ensure adherence to GDPR, HIPAA, SOC 2, ISO 27001, and other regulatory standards. We help you implement compliance frameworks, conduct audits, and maintain ongoing compliance with industry regulations.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  style={{
                    color: '#0F172A',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    transition: 'all 0.3s ease',
                  }}
                >
                  LEARN MORE
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
                </motion.a>
              </motion.div>

              {/* Data Encryption Column */}
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
                    src="/images/Services/Full-stack-service/frontend.png"
                    alt="Data Encryption"
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
                  Data Encryption
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
                  Implement end-to-end encryption for data at rest and in transit. Protect sensitive information with advanced encryption technologies and key management solutions that meet industry standards.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  style={{
                    color: '#0F172A',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    transition: 'all 0.3s ease',
                  }}
                >
                  LEARN MORE
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
                </motion.a>
              </motion.div>

              {/* Access Control Column */}
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
                    src="/images/Services/Full-stack-service/frontend.png"
                    alt="Access Control"
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
                  Access Control
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
                  Implement robust access control and identity management systems. Multi-factor authentication, role-based access control, and privileged access management to secure your digital assets.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  style={{
                    color: '#0F172A',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    transition: 'all 0.3s ease',
                  }}
                >
                  LEARN MORE
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
                </motion.a>
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
                Data Security & Compliance Technology Expertise
              </h2>
            </motion.div>

            {/* Statistics Grid */}
            <div
              className="data-security-statistics-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '3rem',
                marginBottom: '5rem',
              }}
            >
              {/* Stat 1 */}
              <motion.div
                className="data-security-stat-item"
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
                className="data-security-stat-item"
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
                className="data-security-stat-item"
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
              className="data-security-what-we-do-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '3rem',
              }}
            >
              {/* Security Audit Column */}
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <circle cx="12" cy="12" r="3" />
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
                  Security Audit
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We conduct comprehensive security audits to identify vulnerabilities and risks in your systems. Our thorough assessments help you understand your security posture and implement necessary safeguards to protect your data and infrastructure.
                </p>
              </motion.div>

              {/* Compliance Implementation Column */}
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
                  Compliance Implementation
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We help you implement and maintain compliance with GDPR, HIPAA, SOC 2, ISO 27001, and other regulatory standards. Our compliance frameworks ensure you meet industry requirements and avoid costly penalties.
                </p>
              </motion.div>

              {/* Ongoing Monitoring Column */}
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
                  Ongoing Monitoring
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We provide continuous security monitoring and compliance tracking to ensure your systems remain protected. Real-time alerts, automated scans, and regular assessments keep your security posture strong and your compliance status current.
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
                Ready to Secure Your Data?
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
                Let's discuss how we can protect your sensitive information and ensure regulatory compliance.
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
          .data-security-services-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .data-security-statistics-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .data-security-stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            padding-bottom: 2rem !important;
          }
          
          .data-security-stat-item:last-child {
            border-bottom: none !important;
          }
          
          .data-security-what-we-do-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </>
  );
}


