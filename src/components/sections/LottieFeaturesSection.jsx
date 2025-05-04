'use client';
import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { motion, useInView } from 'framer-motion';

// In a real implementation, you would import actual Lottie JSON files
// For this example, we'll just reference them as if they were imported
// import animationData1 from '../animations/data-analysis.json';
// import animationData2 from '../animations/cloud-security.json';
// import animationData3 from '../animations/mobile-sync.json';
// import animationData4 from '../animations/ai-assistant.json';

// For the example, we'll use placeholder references
const animationData1 = "data-analysis.json";
const animationData2 = "cloud-security.json";
const animationData3 = "mobile-sync.json";
const animationData4 = "ai-assistant.json";

const features = [
  {
    id: 1,
    title: "Advanced Data Analytics",
    description: "Transform raw data into actionable insights with our AI-powered analytics platform. Visualize trends, predict outcomes, and make data-driven decisions with ease.",
    animation: animationData1,
    color: "#3498db"
  },
  {
    id: 2,
    title: "Enterprise-Grade Security",
    description: "Protect your valuable data with our comprehensive security solutions. End-to-end encryption, advanced threat detection, and real-time monitoring keep your information safe.",
    animation: animationData2,
    color: "#2ecc71"
  },
  {
    id: 3,
    title: "Seamless Cross-Platform Experience",
    description: "Access your workspace from anywhere, on any device. Our cloud-based platform ensures perfect synchronization across desktop, tablet, and mobile interfaces.",
    animation: animationData3,
    color: "#e74c3c"
  },
  {
    id: 4,
    title: "AI-Powered Virtual Assistant",
    description: "Meet your new digital teammate. Our AI assistant automates routine tasks, provides intelligent suggestions, and learns from your behaviors to become more helpful over time.",
    animation: animationData4,
    color: "#9b59b6"
  }
];

const LottieFeaturesSection = () => {
  return (
    <section className="lottie-features-section" style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%)'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Powerful Features for Your Business
          </h2>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            color: '#555'
          }}>
            Our platform combines cutting-edge technology with intuitive design to provide solutions that drive growth and efficiency.
          </p>
        </motion.div>
        
        <div className="features-container">
          {features.map((feature, index) => (
            <FeatureItem 
              key={feature.id} 
              feature={feature} 
              index={index} 
              isEven={index % 2 === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ feature, index, isEven }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  // Animation controls
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsAnimationPaused(false); // Resume animation on hover
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    // We don't pause the animation on mouse leave to let it complete its current loop
  };
  
  // Control animation play state based on view
  useEffect(() => {
    if (isInView) {
      setIsAnimationPaused(false);
    } else {
      setIsAnimationPaused(true);
    }
  }, [isInView]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, x: isEven ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2 + 0.3,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="feature-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        alignItems: 'center',
        marginBottom: '5rem',
        padding: '2rem',
        borderRadius: '16px',
        background: 'white',
        boxShadow: isHovered 
          ? `0 20px 40px rgba(0,0,0,0.12), 0 0 0 3px ${feature.color}20` 
          : '0 10px 30px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.3s ease',
        flexWrap: 'wrap'
      }}
    >
      {/* Animation Container */}
      <motion.div
        className="animation-container"
        style={{
          flex: '0 0 45%',
          maxWidth: '400px',
          padding: '1rem',
          margin: '0 auto'
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          transition: { duration: 0.3 }
        }}
      >
        <div 
          style={{ 
            position: 'relative',
            maxWidth: '100%',
            aspectRatio: '1',
          }}
        >
          {/* This would be a real Lottie animation in a production environment */}
          {/* For this example, we'll show a colored placeholder */}
          <div 
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: `${feature.color}20`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              color: feature.color,
              overflow: 'hidden'
            }}
          >
            {/* In a real implementation, this would be replaced with: */}
            {/* <Lottie 
              animationData={feature.animation} 
              loop={true}
              autoplay={!isAnimationPaused}
              style={{ width: '100%', height: '100%' }}
            /> */}
            
            {/* Placeholder for animation */}
            {index === 0 && "📊"}
            {index === 1 && "🔒"}
            {index === 2 && "📱"}
            {index === 3 && "🤖"}
          </div>
          
          {/* Animated ring around the animation */}
          <motion.div
            animate={{
              boxShadow: isHovered 
                ? `0 0 0 3px ${feature.color}50, 0 0 20px ${feature.color}30` 
                : `0 0 0 1px ${feature.color}30`,
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              borderRadius: '50%',
              zIndex: -1
            }}
          />
        </div>
      </motion.div>
      
      {/* Text Content */}
      <motion.div
        className="feature-content"
        variants={textVariants}
        style={{
          flex: '1 1 45%',
          padding: '1rem 2rem',
        }}
      >
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: feature.color
        }}>
          {feature.title}
        </h3>
        
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          color: '#444'
        }}>
          {feature.description}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: '1.5rem',
            padding: '0.8rem 1.5rem',
            background: 'transparent',
            border: `2px solid ${feature.color}`,
            borderRadius: '50px',
            color: feature.color,
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default LottieFeaturesSection;