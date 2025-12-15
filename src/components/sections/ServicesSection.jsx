'use client';

import React from 'react';

const ServicesSection = () => {
  
  // Custom SVG Icons Component
  const ServiceIcon = ({ iconType, size = 48 }) => {
    const iconStyle = {
      width: size,
      height: size,
      color: 'var(--color-primary)',
    };

    switch (iconType) {
      case 'fullstack':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <path d="M7 8h10M7 12h10" />
          </svg>
        );
      case 'software':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <path d="M9 9h6M9 15h6M9 12h6" />
            <circle cx="7" cy="9" r="1" fill="currentColor" />
            <circle cx="7" cy="12" r="1" fill="currentColor" />
            <circle cx="7" cy="15" r="1" fill="currentColor" />
          </svg>
        );
      case 'devops':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        );
      case 'security':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        );
      case 'ai':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6M12 18v-6" />
            <path d="M8 10l4-4 4 4M8 14l4 4 4-4" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        );
      case 'automation':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={iconStyle}>
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M6 10h4M6 14h4" />
            <path d="M14 10h4M14 14h4" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <path d="M2 12h2M20 12h2" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Cypentra Services
  const services = [
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      iconType: 'fullstack',
      description: 'Complete end-to-end development solutions from frontend to backend, delivering scalable applications that grow with your business.',
      features: [
        'React, Next.js, and modern frontend frameworks',
        'Node.js, Python, and robust backend systems',
        'RESTful APIs and GraphQL integration',
        'Database design and optimization (PostgreSQL, MongoDB)'
      ]
    },
    {
      id: 'software',
      title: 'Software Engineering',
      iconType: 'software',
      description: 'Custom software solutions built with clean architecture, best practices, and scalable design patterns for long-term success.',
      features: [
        'Custom backend systems and APIs',
        'Business logic and database architecture',
        'Third-party integrations and microservices',
        'Code documentation and deployment pipelines'
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud Security',
      iconType: 'devops',
      description: 'Infrastructure automation, CI/CD pipelines, and cloud security to ensure your applications are reliable, scalable, and secure.',
      features: [
        'AWS, GCP, and Azure cloud setup',
        'CI/CD pipeline automation (GitHub Actions, Jenkins)',
        '24/7 monitoring and alerting systems',
        'Infrastructure as Code (Terraform, Ansible)'
      ]
    },
    {
      id: 'security',
      title: 'Data Security & Compliance',
      iconType: 'security',
      description: 'Comprehensive security solutions and compliance support to protect your data and meet regulatory requirements.',
      features: [
        'Vulnerability scanning and security audits',
        'SOC 2 and GDPR compliance support',
        'Encrypted backups and IAM reviews',
        'Security dashboards and incident response'
      ]
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      iconType: 'ai',
      description: 'Intelligent solutions powered by AI and machine learning to automate processes, gain insights, and enhance user experiences.',
      features: [
        'Custom AI model development and training',
        'Natural language processing and chatbots',
        'Computer vision and image recognition',
        'Predictive analytics and data insights'
      ]
    },
    {
      id: 'automation',
      title: 'Process Automation',
      iconType: 'automation',
      description: 'Streamline workflows and eliminate manual tasks with intelligent automation solutions that boost efficiency and reduce errors.',
      features: [
        'Workflow automation and orchestration',
        'API integrations and data synchronization',
        'Robotic Process Automation (RPA)',
        'Automated testing and deployment pipelines'
      ]
    }
  ];
  
  
  return (
    <>
      <section 
        className="services-section"
        style={{
          position: 'relative',
          padding: '100px 0',
          backgroundColor: 'var(--background)',
          overflow: 'hidden',
        }}
      >
        
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1,
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}>
            <h6 className="section-label">
              Our Services
            </h6>
            <h2 className="section-title">
              Professional Packaged Services
            </h2>
            <p className="section-description">
              Secure Development & Cloud Ops, powered by expert engineers. 
              From full-stack applications to cloud infrastructure, we deliver scalable solutions.
            </p>
          </div>
          
          <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Service icon */}
              <div className="service-icon">
                <ServiceIcon iconType={service.iconType} size={48} />
              </div>
              
              {/* Circle background */}
              <div className="service-circle-bg" />
              
              {/* Service content */}
              <h3 className="service-title">
                {service.title}
              </h3>
              
              <p className="service-description">
                {service.description}
              </p>
              
              {/* Features list */}
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <span className="feature-dot" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Learn more link */}
              <a
                href={`/services/${service.id}`}
                className="service-link"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                Learn more
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ marginLeft: '0.5rem' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .services-section {
          padding: 100px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-label {
          font-size: 1rem;
          font-weight: bold;
          color: var(--color-primary);
          text-transform: uppercase;
          margin-bottom: 1rem;
          letter-spacing: 2px;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: var(--text-on-light);
          font-family: var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif;
        }

        .section-description {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto;
          color: var(--text-on-light-muted);
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid rgba(0,0,0,0.06);
          position: relative;
          overflow: hidden;
        }

        .service-icon {
          margin-bottom: 1.5rem;
          color: var(--color-primary);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .service-circle-bg {
          position: absolute;
          top: 2rem;
          right: 2rem;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--color-primary-light);
          z-index: 0;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: var(--text-on-light);
          font-family: var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif;
        }

        .service-description {
          font-size: 1rem;
          color: var(--text-on-light-muted);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .service-features {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .service-feature {
          display: flex;
          align-items: center;
          margin-bottom: 0.8rem;
          font-size: 0.95rem;
          color: var(--text-on-light-muted);
        }

        .feature-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-primary);
          margin-right: 10px;
          flex-shrink: 0;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          margin-top: 1.5rem;
          color: var(--color-primary);
          font-weight: bold;
          font-size: 0.95rem;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 60px 0;
          }

          .container {
            padding: 0 1rem;
          }

          .section-header {
            margin-bottom: 2rem;
          }

          .section-label {
            font-size: 0.875rem;
            margin-bottom: 0.75rem;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .section-description {
            font-size: 1rem;
            padding: 0 1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-icon {
            margin-bottom: 1rem;
          }

          .service-icon svg {
            width: 40px;
            height: 40px;
          }

          .service-circle-bg {
            width: 60px;
            height: 60px;
            top: 1.5rem;
            right: 1.5rem;
          }

          .service-title {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
          }

          .service-description {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }

          .service-feature {
            font-size: 0.875rem;
            margin-bottom: 0.6rem;
          }

          .service-link {
            font-size: 0.875rem;
            margin-top: 1rem;
          }
        }

        @media (max-width: 480px) {
          .services-section {
            padding: 40px 0;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .service-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
    </>
  );
};

export default ServicesSection;