'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';
import FullStackDevelopmentHero from '@/components/sections/FullStackDevelopmentHero';
import { motion } from 'framer-motion';

export default function FullStackDevelopmentPage() {
  const features = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces built with React, Next.js, Vue.js, and Angular. We create intuitive experiences that users love.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions using Node.js, Python, Java, and .NET. Robust APIs and microservices architecture.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
    },
    {
      title: 'Database Design',
      description: 'Optimized database architecture with PostgreSQL, MongoDB, MySQL. Efficient data modeling and query optimization.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
    {
      title: 'API Integration',
      description: 'RESTful APIs, GraphQL endpoints, and third-party integrations. Seamless connectivity between services and platforms.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
  ];

  const technologies = [
    { name: 'React & Next.js', category: 'Frontend' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'Python & Django', category: 'Backend' },
    { name: 'PostgreSQL & MongoDB', category: 'Database' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'GraphQL', category: 'API' },
    { name: 'AWS & Azure', category: 'Cloud' },
    { name: 'Docker & Kubernetes', category: 'DevOps' },
  ];

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        {/* Hero Section */}
        <FullStackDevelopmentHero />

        {/* Features Section */}
        <section
          className="fullstack-services-section"
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
                Our Full-Stack Development Services
              </h2>
            </motion.div>

            <div
              className="fullstack-services-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                rowGap: '4rem',
              }}
            >
              {/* Frontend Column */}
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
                {/* Image Container */}
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
                    src="/images/Services/Full-stack-service/frontrnd-dev.jpeg"
                    alt="Frontend Development"
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
                  Frontend
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
                  Deliver next-level web experiences for users on any device with our front-end development services. We design and implement UI/UX for your web solution that is accessible, responsive, and user-centric, no matter which browser or device your users prefer.
                </p>
              </motion.div>

              {/* Backend Column */}
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
                {/* Image Container */}
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
                    src="/images/Services/Full-stack-service/backend-dev.png"
                    alt="Backend Development"
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
                  Backend
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
                  Ensure your solution's longevity, success, and cost-efficiency with our backend architecture services. We'll pinpoint the most suitable architecture for your business objectives and user needs to drive engagement, maximize performance, and facilitate maintenance and scaling.
                </p>
              </motion.div>

              {/* Database Column */}
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
                {/* Image Container */}
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
                    src="/images/Services/Full-stack-service/database.jpg"
                    alt="Database Design"
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
                  Database
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
                  Optimized database architecture with PostgreSQL, MongoDB, MySQL, and more. Efficient data modeling, query optimization, and scalable database solutions that ensure your application's data layer performs flawlessly.
                </p>
              </motion.div>

              {/* API Integration Column */}
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
                {/* Image Container */}
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
                    src="/images/Services/Full-stack-service/api-integration.jpg"
                    alt="API Integration"
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
                  API Integration
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
                  RESTful APIs, GraphQL endpoints, and third-party integrations. Seamless connectivity between services and platforms to create unified, efficient systems that communicate flawlessly.
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
                Full Stack Development Technology Expertise
              </h2>
            </motion.div>

            {/* Statistics Grid */}
            <div
              className="fullstack-statistics-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '3rem',
                marginBottom: '5rem',
              }}
            >
              {/* Stat 1 */}
              <motion.div
                className="fullstack-stat-item"
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
                className="fullstack-stat-item"
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
                className="fullstack-stat-item"
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
              className="fullstack-what-we-do-grid"
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
                {/* Icon */}
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
                  Research
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We never go in blind to design a product's architecture. Instead, we conduct thorough research to have a full grasp of what your users need and want, as well as your product and business. As a result, we deliver a comprehensive analysis of the project's feasibility, platform maturity and technology strategy.
                </p>
              </motion.div>

              {/* Prototyping Column */}
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
                {/* Icon */}
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
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                    <circle cx="12" cy="10" r="2" />
                    <path d="M8 10h8" />
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
                  Prototyping
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We transform user research and business and functional requirements into prototypes. Our streamlined processes allow us to deliver prototypes and transform them into functioning full-stack applications rapidly, accelerating your product's time-to-market.
                </p>
              </motion.div>

              {/* Design System Column */}
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
                {/* Icon */}
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
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <line x1="6.5" y1="6.5" x2="17.5" y2="17.5" />
                    <line x1="17.5" y1="6.5" x2="6.5" y2="17.5" />
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
                  Design System
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.7',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  We help you unify your digital experiences with a comprehensive design system. With our full-stack development services, you receive a complete library of UI/UX components, styles and patterns to streamline building new applications and maintain consistency across your platform.
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
                Ready to Build Your Full-Stack Application?
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
          .fullstack-services-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .fullstack-statistics-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .fullstack-stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            padding-bottom: 2rem !important;
          }
          
          .fullstack-stat-item:last-child {
            border-bottom: none !important;
          }
          
          .fullstack-what-we-do-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </>
  );
}

