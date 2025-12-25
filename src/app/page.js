'use client';
import { useState, useEffect } from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import AIPersonalizedContent from '../components/sections/AIPersonalizedContent';
import Timeline from '../components/sections/Timeline';
import CaseStudies from '../components/sections/CaseStudies';
import ChessGrandmastersTeam from '../components/sections/ChessGrandmastersTeam';
import InteractiveContactForm from '../components/sections/InteractiveContactForm';
import ChessFaqAccordion from '../components/sections/ChessFaqAccordion';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';

export default function Home() {
  // State for loading screen or other page-level state if needed
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <div className="skeleton-container">
            {/* Header skeleton */}
            <div className="skeleton-header"></div>

            {/* Hero section skeleton */}
            <div className="skeleton-hero">
              <div className="skeleton-line skeleton-line-lg"></div>
              <div className="skeleton-line skeleton-line-lg"></div>
              <div className="skeleton-line skeleton-line-md"></div>
              <div className="skeleton-button"></div>
            </div>

            {/* Content blocks */}
            <div className="skeleton-content">
              <div className="skeleton-card"></div>
              <div className="skeleton-card"></div>
              <div className="skeleton-card"></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <main style={{ backgroundColor: 'var(--color-bg)' }}>
            <Hero />
            <ServicesSection />
            <AIPersonalizedContent />
            <Timeline />
            <CaseStudies />
            <ChessGrandmastersTeam />
            <InteractiveContactForm />
            <ChessFaqAccordion />
          </main>
          <ChessFooter />
        </>
      )}

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--color-bg);
          z-index: 9999;
          overflow: hidden;
        }

        .loading-screen::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--color-bg-medium);
          z-index: 1;
        }
        
        .skeleton-container {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .skeleton-header {
          width: 100%;
          height: 80px;
          background: linear-gradient(90deg, var(--overlay-medium) 25%, var(--overlay-light) 50%, var(--overlay-medium) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
          margin-bottom: 40px;
        }
        
        .skeleton-hero {
          max-width: 800px;
          margin: 80px auto;
          text-align: center;
        }
        
        .skeleton-line {
          height: 24px;
          background: linear-gradient(90deg, var(--overlay-medium) 25%, var(--overlay-light) 50%, var(--overlay-medium) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          margin-bottom: 16px;
        }
        
        .skeleton-line-lg {
          height: 48px;
        }
        
        .skeleton-line-md {
          width: 60%;
          margin-left: auto;
          margin-right: auto;
        }
        
        .skeleton-button {
          width: 180px;
          height: 48px;
          background: linear-gradient(90deg, var(--color-accent-light) 25%, var(--color-accent-medium) 50%, var(--color-accent-light) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
          margin: 32px auto 0;
        }
        
        .skeleton-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        
        .skeleton-card {
          height: 250px;
          background: linear-gradient(90deg, var(--overlay-medium) 25%, var(--overlay-light) 50%, var(--overlay-medium) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 12px;
        }
        
        .skeleton-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .skeleton-card:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        @media (max-width: 768px) {
          .skeleton-container {
            padding: 16px;
          }
          
          .skeleton-hero {
            margin: 40px auto;
          }
          
          .skeleton-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}