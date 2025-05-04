'use client';
import { useState, useEffect } from 'react';
import EnhancedChessHero from '../components/sections/EnhancedChessHero';
import StrategicServicesSection from '../components/sections/InteractiveServicesSection';
import AIStrategyAnalyzer from '../components/sections/AIPersonalizedContent';
import ChessTimeline from '../components/sections/ChessTimeline';
import ChessCaseStudies from '../components/sections/ChessCaseStudies';
import ChessGrandmastersTeam from '../components/sections/ChessGrandmastersTeam';
import InteractiveContactForm from '../components/sections/InteractiveContactForm';
import ChessFaqAccordion from '../components/sections/ChessFaqAccordion';
import ChessHeader from '@/components/layout/ChessHeader';
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
          <div className="chess-loader">♔</div>
        </div>
      ) : (
        <>
          <ChessHeader />
          <main>
            <EnhancedChessHero />
            <StrategicServicesSection />
            <AIStrategyAnalyzer />
            <ChessTimeline />
            <ChessCaseStudies />
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
          background-color: #0F172A;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        
        .chess-loader {
          font-size: 4rem;
          color: #E5A244;
          animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}