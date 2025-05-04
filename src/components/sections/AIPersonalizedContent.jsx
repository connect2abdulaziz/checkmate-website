'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const EnhancedAIStrategyAnalyzer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const analyzerRef = useRef(null);
  const progressRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  // Define questions for business strategy analysis
  const questions = [
    {
      id: 'industry',
      question: 'What industry is your business in?',
      icon: '🏢',
      color: '#4D8DDA',
      options: [
        { value: 'technology', label: 'Technology & Software' },
        { value: 'healthcare', label: 'Healthcare & Medical' },
        { value: 'finance', label: 'Finance & Banking' },
        { value: 'retail', label: 'Retail & E-commerce' },
        { value: 'manufacturing', label: 'Manufacturing & Industrial' },
        { value: 'education', label: 'Education & Training' },
        { value: 'other', label: 'Other Industries' }
      ]
    },
    {
      id: 'size',
      question: 'What is the size of your organization?',
      icon: '👥',
      color: '#E5A244',
      options: [
        { value: 'startup', label: 'Startup (1-10 employees)' },
        { value: 'small', label: 'Small Business (11-50 employees)' },
        { value: 'medium', label: 'Medium Business (51-250 employees)' },
        { value: 'large', label: 'Large Enterprise (251+ employees)' }
      ]
    },
    {
      id: 'goal',
      question: 'What is your primary business goal for the next year?',
      icon: '🎯',
      color: '#50AC8E',
      options: [
        { value: 'growth', label: 'Accelerate Growth & Expansion' },
        { value: 'efficiency', label: 'Improve Operational Efficiency' },
        { value: 'innovation', label: 'Drive Innovation & Development' },
        { value: 'expansion', label: 'Enter New Markets' },
        { value: 'restructure', label: 'Organizational Restructuring' }
      ]
    },
    {
      id: 'challenge',
      question: 'What is your biggest current challenge?',
      icon: '🧩',
      color: '#D95D67',
      options: [
        { value: 'competition', label: 'Increasing Market Competition' },
        { value: 'talent', label: 'Talent Acquisition & Retention' },
        { value: 'digital', label: 'Digital Transformation Needs' },
        { value: 'regulation', label: 'Regulatory & Compliance Issues' },
        { value: 'funding', label: 'Securing Funding or Investment' },
        { value: 'innovation', label: 'Keeping Pace with Innovation' }
      ]
    },
    {
      id: 'timeframe',
      question: 'What is your strategic planning timeframe?',
      icon: '⏱️',
      color: '#8B64C0',
      options: [
        { value: 'short', label: 'Short-term (0-1 year)' },
        { value: 'medium', label: 'Medium-term (1-3 years)' },
        { value: 'long', label: 'Long-term (3-5+ years)' }
      ]
    }
  ];

  // Default strategic recommendation
  const defaultStrategy = {
    name: "Flexible Repertoire Strategy",
    chessIcon: "♟", // Pawn
    color: "#8B64C0",
    description: "An adaptable approach combining defensive positioning with opportunistic advances.",
    moves: [
      "Conduct comprehensive market analysis",
      "Identify key competitive advantages",
      "Develop phased implementation plan",
      "Create measurement framework for success"
    ],
    strengths: "Balanced approach; adaptable to changing conditions",
    weaknesses: "May lack competitive edge in highly competitive markets",
    timeframe: "12-18 months"
  };

  // Chess-themed strategic recommendations based on answers
  const strategicRecommendations = {
    // Technology industry strategies
    technology: {
      startup: {
        growth: {
          name: "Aggressive Queen's Gambit",
          chessIcon: "♛", // Queen
          color: "#4D8DDA",
          description: "A bold strategy that sacrifices short-term resources for long-term market position advantage.",
          moves: [
            "Secure seed funding to fuel rapid development",
            "Prioritize product-market fit over immediate profitability",
            "Invest heavily in market share acquisition",
            "Develop a unique value proposition that differentiates from competitors"
          ],
          strengths: "Establishes strong market presence quickly; positions for rapid scaling",
          weaknesses: "Cash-intensive; requires significant investor confidence",
          timeframe: "12-18 months"
        },
        efficiency: {
          name: "Nimzo-Indian Defense",
          chessIcon: "♜", // Rook
          color: "#D95D67",
          description: "A solid defensive strategy focusing on internal optimization before expansion.",
          moves: [
            "Streamline operational processes",
            "Implement lean methodology",
            "Optimize technology stack for efficiency",
            "Build scalable infrastructure before market expansion"
          ],
          strengths: "Creates sustainable foundation; maximizes limited resources",
          weaknesses: "Slower growth trajectory; may miss market opportunities",
          timeframe: "6-12 months"
        },
        innovation: {
          name: "King's Indian Attack",
          chessIcon: "♚", // King
          color: "#E5A244",
          description: "A flexible innovation strategy that allows for pivoting while maintaining core strengths.",
          moves: [
            "Invest in R&D for breakthrough solutions",
            "Create innovation teams with dedicated resources",
            "Develop IP strategy to protect innovations",
            "Establish partnerships with research institutions"
          ],
          strengths: "Positions company as thought leader; creates future revenue streams",
          weaknesses: "High uncertainty; requires tolerance for failure",
          timeframe: "18-24 months"
        }
      },
      small: {
        growth: {
          name: "Sicilian Dragon Variation",
          chessIcon: "♝", // Bishop
          color: "#50AC8E",
          description: "An aggressive market expansion strategy with concentrated force in new territories.",
          moves: [
            "Identify adjacent markets for expansion",
            "Develop localization strategy for new markets",
            "Create market entry teams with specialized knowledge",
            "Allocate significant resources to penetrate new markets quickly"
          ],
          strengths: "Creates diverse revenue streams; reduces market-specific risks",
          weaknesses: "Stretches resources; challenges company culture",
          timeframe: "12-24 months"
        },
        efficiency: {
          name: "French Defense",
          chessIcon: "♜", // Rook
          color: "#D95D67",
          description: "A methodical approach focused on solidifying your position and optimizing operations.",
          moves: [
            "Implement robust business processes",
            "Invest in automation and operational technology",
            "Create detailed financial controls",
            "Develop comprehensive quality management systems"
          ],
          strengths: "Creates operational excellence; improves margins",
          weaknesses: "May create organizational rigidity",
          timeframe: "6-12 months"
        }
      }
    },
    // Finance industry strategies
    finance: {
      medium: {
        growth: {
          name: "Queen's Indian Defense",
          chessIcon: "♛", // Queen
          color: "#4D8DDA",
          description: "A balanced strategy combining solid defensive positioning with calculated offensive moves.",
          moves: [
            "Strengthen core offerings while exploring new market segments",
            "Develop tiered service approach for different client categories",
            "Create strategic partnerships to expand service capabilities",
            "Invest in advanced analytics for personalized offerings"
          ],
          strengths: "Balances risk and opportunity; builds on existing client relationships",
          weaknesses: "Requires careful resource allocation",
          timeframe: "18-24 months"
        }
      }
    }
  };

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Handle particle animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    const handleResize = () => {
      if (!canvas.parentElement) return;

      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Create particles
    const createParticles = () => {
      const particles = [];
      const particleCount = 100;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: `rgba(255, 255, 255, ${Math.random() * 0.3})`
        });
      }

      particlesRef.current = particles;
    };

    createParticles();

    // Animation loop
    let animationFrame;

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounds checking
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Handle answer selection
  const handleAnswerSelect = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });

    // Show pulse animation
    setShowPulse(true);
    setTimeout(() => setShowPulse(false), 600);

    // Move to next question or finish
    if (currentQuestion < questions.length - 1) {
      // Slight delay for better UX
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 400);
    }
  };

  // Determine if current question has been answered
  const isCurrentQuestionAnswered = () => {
    return !!answers[questions[currentQuestion].id];
  };

  // Analyze answers and generate strategic recommendation
  const analyzeStrategy = () => {
    setIsAnalyzing(true);

    // Simulate AI processing
    setTimeout(() => {
      // Get key parameters from answers
      const industry = answers.industry || 'technology';
      const size = answers.size || 'small';
      const goal = answers.goal || 'growth';

      // Select appropriate strategy based on parameters
      let strategy;

      try {
        // Check if the specific combination exists
        if (
          strategicRecommendations[industry] &&
          strategicRecommendations[industry][size] &&
          strategicRecommendations[industry][size][goal]
        ) {
          strategy = strategicRecommendations[industry][size][goal];
        } else {
          // Use default strategy if specific combination not found
          strategy = defaultStrategy;
        }
      } catch (error) {
        // Fallback to default strategy in case of any errors
        strategy = defaultStrategy;
      }

      // Set result with safety checks
      setResult({
        ...strategy,
        industry: questions[0].options.find(opt => opt.value === (answers.industry || 'technology'))?.label || 'Technology',
        size: questions[1].options.find(opt => opt.value === (answers.size || 'small'))?.label || 'Small Business',
        goal: questions[2].options.find(opt => opt.value === (answers.goal || 'growth'))?.label || 'Growth',
        challenge: questions[3].options.find(opt => opt.value === answers.challenge)?.label || "Various Challenges",
        planningTime: questions[4].options.find(opt => opt.value === answers.timeframe)?.label || "Medium-term"
      });

      // Show results after "processing" is complete
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 1000);
    }, 3000);
  };

  // Reset the analyzer
  const resetAnalyzer = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResults(false);
  };

  // Update progress bar based on current question
  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${((currentQuestion + (isCurrentQuestionAnswered() ? 1 : 0)) / questions.length) * 100}%`,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }, [currentQuestion, answers]);

  // Scroll into view when showing results
  useEffect(() => {
    if (showResults && analyzerRef.current) {
      analyzerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showResults]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const optionVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: custom => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    hover: {
      scale: 1.03,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
    },
    tap: {
      scale: 0.98
    },
    selected: {
      scale: 1.03,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
    }
  };

  const pulseVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
      scale: 1.5,
      opacity: 0,
      transition: { duration: 0.6 }
    }
  };

  const resultTextVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const resultIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const bubbleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: custom => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom * 0.05 + 0.3,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    })
  };

  // Make sure we have a result object with necessary properties even if there's an error
  const safeResult = result || defaultStrategy;

  // Ensure moves is always an array
  const safeResultMoves = Array.isArray(safeResult.moves) ? safeResult.moves : ["Analyze market position", "Identify core strengths", "Develop sustainable advantages", "Create implementation roadmap"];

  return (
    <section
      ref={analyzerRef}
      className="ai-strategy-analyzer-enhanced"
      style={{
        padding: '80px 0',
        position: 'relative',
        background: 'linear-gradient(135deg, #151515 0%, #252525 100%)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Background Canvas for Particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* Background gradient circles */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(229, 162, 68, 0.1) 0%, rgba(229, 162, 68, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(77, 141, 218, 0.1) 0%, rgba(77, 141, 218, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.6rem 1.2rem',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px',
                marginRight: '0.8rem',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z" stroke="#E5A244" strokeWidth="2" />
                <path d="M16 12L10 16.5V7.5L16 12Z" fill="#E5A244" />
              </svg>
            </motion.div>
            <span style={{
              background: 'linear-gradient(90deg, #E5A244, #4D8DDA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}>
              AI-Powered Analysis
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(90deg, #FFFFFF, #AAAAAA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Strategic Move Analyzer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: '1.1rem',
              color: '#e0e0e0',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Our AI will analyze your business needs and recommend a tailored chess-inspired
            strategy to help you outmaneuver your competition and achieve your goals.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          }}
        >
          {!showResults ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '500px',
            }}>
              {/* Progress indicator */}
              <div style={{
                padding: '0.7rem 2rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}>
                <div style={{
                  flex: 1,
                  position: 'relative',
                  height: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '100px',
                  minWidth: '120px',
                }}>
                  <motion.div
                    ref={progressRef}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '0%',
                      background: 'linear-gradient(90deg, #E5A244, #4D8DDA)',
                      borderRadius: '100px',
                    }}
                  />
                </div>

                <span style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  whiteSpace: 'nowrap',
                }}>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>

              {/* Questions */}
              <div style={{
                flex: 1,
                padding: isMobile ? '2rem 1.5rem' : '2.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`question-${currentQuestion}`}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    {/* Question header */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '2rem',
                    }}>
                      <motion.div
                        variants={itemVariants}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '50px',
                          height: '50px',
                          borderRadius: '12px',
                          backgroundColor: questions[currentQuestion].color,
                          fontSize: '1.5rem',
                          marginRight: '1rem',
                          flexShrink: 0,
                        }}
                      >
                        {questions[currentQuestion].icon}
                      </motion.div>

                      <motion.h3
                        variants={itemVariants}
                        style={{
                          fontSize: isMobile ? '1.3rem' : '1.5rem',
                          fontWeight: 'bold',
                          color: 'white',
                        }}
                      >
                        {questions[currentQuestion].question}
                      </motion.h3>
                    </div>

                    {/* Answer options */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
                      gap: '1rem',
                      marginBottom: '2rem',
                    }}>
                      {questions[currentQuestion].options.map((option, idx) => (
                        <motion.button
                          key={option.value}
                          custom={idx}
                          variants={optionVariants}
                          initial="hidden"
                          animate={
                            answers[questions[currentQuestion].id] === option.value
                              ? "selected"
                              : "visible"
                          }
                          whileHover="hover"
                          whileTap="tap"
                          onClick={() => handleAnswerSelect(questions[currentQuestion].id, option.value)}
                          style={{
                            padding: '1.2rem',
                            borderRadius: '12px',
                            backgroundColor: answers[questions[currentQuestion].id] === option.value
                              ? `${questions[currentQuestion].color}15`
                              : 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${answers[questions[currentQuestion].id] === option.value
                                ? questions[currentQuestion].color
                                : 'rgba(255, 255, 255, 0.1)'
                              }`,
                            color: answers[questions[currentQuestion].id] === option.value
                              ? questions[currentQuestion].color
                              : 'white',
                            textAlign: 'left',
                            fontWeight: answers[questions[currentQuestion].id] === option.value
                              ? 'bold'
                              : 'normal',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          {/* Pulse effect when selected */}
                          {showPulse && answers[questions[currentQuestion].id] === option.value && (
                            <motion.div
                              variants={pulseVariants}
                              initial="initial"
                              animate="animate"
                              style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '100%',
                                height: '100%',
                                borderRadius: '12px',
                                backgroundColor: questions[currentQuestion].color,
                                zIndex: 0,
                              }}
                            />
                          )}

                          <span style={{ position: 'relative', zIndex: 1 }}>
                            {option.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>

                    {/* Navigation buttons */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: 'auto',
                    }}>
                      <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                        disabled={currentQuestion === 0}
                        style={{
                          padding: '0.8rem 1.5rem',
                          background: 'transparent',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          color: 'white',
                          cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
                          opacity: currentQuestion === 0 ? 0.5 : 1,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginRight: '0.5rem' }}
                        >
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Previous
                      </motion.button>

                      {currentQuestion === questions.length - 1 ? (
                        <motion.button
                          variants={itemVariants}
                          whileHover={{
                            scale: isCurrentQuestionAnswered() ? 1.05 : 1,
                            backgroundColor: isCurrentQuestionAnswered() ? '#4D8DDA' : undefined
                          }}
                          whileTap={isCurrentQuestionAnswered() ? { scale: 0.95 } : {}}
                          onClick={analyzeStrategy}
                          disabled={!isCurrentQuestionAnswered()}
                          style={{
                            padding: '0.8rem 1.5rem',
                            background: isCurrentQuestionAnswered()
                              ? 'linear-gradient(90deg, #4D8DDA, #5D9DFA)'
                              : 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: isCurrentQuestionAnswered() ? 'pointer' : 'not-allowed',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: isCurrentQuestionAnswered()
                              ? '0 4px 20px rgba(77, 141, 218, 0.3)'
                              : 'none',
                          }}
                        >
                          <span>Analyze Strategy</span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ marginLeft: '0.5rem' }}
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </motion.button>
                      ) : (
                        <motion.button
                          variants={itemVariants}
                          whileHover={{
                            scale: isCurrentQuestionAnswered() ? 1.05 : 1,
                            backgroundColor: isCurrentQuestionAnswered() ? '#4D8DDA' : undefined
                          }}
                          whileTap={isCurrentQuestionAnswered() ? { scale: 0.95 } : {}}
                          onClick={() => isCurrentQuestionAnswered() && setCurrentQuestion(currentQuestion + 1)}
                          disabled={!isCurrentQuestionAnswered()}
                          style={{
                            padding: '0.8rem 1.5rem',
                            background: isCurrentQuestionAnswered()
                              ? 'linear-gradient(90deg, #4D8DDA, #5D9DFA)'
                              : 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: isCurrentQuestionAnswered() ? 'pointer' : 'not-allowed',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: isCurrentQuestionAnswered()
                              ? '0 4px 20px rgba(77, 141, 218, 0.3)'
                              : 'none',
                          }}
                        >
                          <span>Next Question</span>
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
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* AI Processing overlay */}
              {isAnalyzing && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.85)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 100,
                  padding: '2rem',
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: '500px',
                  }}>
                    {/* Neural network animation */}
                    <div style={{
                      position: 'relative',
                      width: '180px',
                      height: '180px',
                      marginBottom: '2rem',
                    }}>
                      {/* Outer ring */}
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          transition: { duration: 8, repeat: Infinity, ease: "linear" }
                        }}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '180px',
                          height: '180px',
                          borderRadius: '50%',
                          border: '2px dashed rgba(255, 255, 255, 0.2)',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />

                      {/* Middle ring */}
                      <motion.div
                        animate={{
                          rotate: [360, 0],
                          transition: { duration: 12, repeat: Infinity, ease: "linear" }
                        }}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '120px',
                          height: '120px',
                          borderRadius: '50%',
                          border: '2px dashed rgba(255, 255, 255, 0.15)',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />

                      {/* Inner ring */}
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          transition: { duration: 6, repeat: Infinity, ease: "linear" }
                        }}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '70px',
                          height: '70px',
                          borderRadius: '50%',
                          border: '2px dashed rgba(255, 255, 255, 0.2)',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />

                      {/* Center pulsing circle */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                          boxShadow: [
                            '0 0 20px rgba(77, 141, 218, 0.5)',
                            '0 0 40px rgba(77, 141, 218, 0.8)',
                            '0 0 20px rgba(77, 141, 218, 0.5)'
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          backgroundColor: '#4D8DDA',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 1,
                        }}
                      />

                      {/* Neural nodes */}
                      {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i / 12) * Math.PI * 2;
                        const ring = i % 3; // 0, 1, or 2 for inner, middle, outer
                        const radius = ring === 0 ? 35 : ring === 1 ? 60 : 90;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        const delay = i * 0.1;

                        return (
                          <motion.div
                            key={i}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.4, 0.8, 0.4],
                            }}
                            transition={{
                              duration: 2,
                              delay: delay,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: i % 2 === 0 ? '#4D8DDA' : '#E5A244',
                              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                            }}
                          />
                        );
                      })}
                    </div>

                    <motion.h3
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        textAlign: 'center',
                        color: 'white',
                      }}
                    >
                      Analyzing Your Business Context
                    </motion.h3>

                    <p style={{
                      fontSize: '1rem',
                      textAlign: 'center',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '2rem',
                      lineHeight: 1.6,
                    }}>
                      Our AI is evaluating market conditions, competitive landscapes, and organizational
                      factors to formulate the optimal strategic approach for your situation.
                    </p>

                    {/* Analysis stages */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      width: '100%',
                      maxWidth: '400px',
                    }}>
                      {[
                        { text: 'Analyzing industry patterns', delay: 0 },
                        { text: 'Evaluating strategic options', delay: 1 },
                        { text: 'Calibrating implementation timeline', delay: 2 },
                        { text: 'Finalizing recommendation', delay: 3 }
                      ].map((stage, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: stage.delay * 0.7 + 0.5, duration: 0.5 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '0.8rem',
                          }}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: idx * 0.2
                            }}
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#4D8DDA',
                              marginRight: '1rem',
                            }}
                          />
                          <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            {stage.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Results display
            <div style={{ padding: '2.5rem' }}>
              <AnimatePresence>
                {result && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                      position: 'relative',
                    }}
                  >
                    {/* Strategy header */}
                    <div style={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : 'row',
                      alignItems: isMobile ? 'center' : 'flex-start',
                      gap: '2rem',
                      marginBottom: '3rem',
                      padding: '2rem',
                      background: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                    }}>
                      {/* Background glow */}
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '80%',
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${safeResult.color}20 0%, ${safeResult.color}00 70%)`,
                        filter: 'blur(40px)',
                        zIndex: 0,
                      }} />

                      {/* Chess piece icon */}
                      <motion.div
                        variants={resultIconVariants}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          backgroundColor: safeResult.color,
                          fontSize: '3.5rem',
                          color: 'white',
                          boxShadow: `0 5px 25px ${safeResult.color}90`,
                          position: 'relative',
                          zIndex: 1,
                          flexShrink: 0,
                        }}
                      >
                        {safeResult.chessIcon}
                      </motion.div>

                      <div style={{
                        position: 'relative',
                        zIndex: 1,
                        textAlign: isMobile ? 'center' : 'left',
                      }}>
                        <motion.h3
                          variants={resultTextVariants}
                          custom={0}
                          style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            marginBottom: '0.5rem',
                            color: 'white',
                          }}
                        >
                          {safeResult.name}
                        </motion.h3>

                        <motion.p
                          variants={resultTextVariants}
                          custom={1}
                          style={{
                            fontSize: '1.1rem',
                            color: '#e0e0e0',
                            lineHeight: 1.6,
                            maxWidth: '700px',
                          }}
                        >
                          {safeResult.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* Strategy content grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                      gap: '2rem',
                      marginBottom: '3rem',
                    }}>
                      {/* Business profile */}
                      <motion.div
                        variants={bubbleVariants}
                        custom={0}
                        style={{
                          padding: '2rem',
                          borderRadius: '16px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        }}
                      >
                        <h4 style={{
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          marginBottom: '1.5rem',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                        }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '30px',
                            height: '30px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            marginRight: '1rem',
                          }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </span>
                          Business Profile
                        </h4>

                        <ul style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                        }}>
                          {[
                            { label: 'Industry', value: result?.industry || 'Technology' },
                            { label: 'Company Size', value: result?.size || 'Small Business' },
                            { label: 'Primary Goal', value: result?.goal || 'Growth' },
                            { label: 'Main Challenge', value: result?.challenge || 'Various Challenges' },
                            { label: 'Planning Timeframe', value: result?.planningTime || 'Medium-term' }
                          ].map((item, idx) => (
                            <li
                              key={idx}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0.8rem 0',
                                borderBottom: idx < 4 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                              }}
                            >
                              <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{item.label}:</span>
                              <span style={{ fontWeight: 'bold', color: 'white' }}>{item.value}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Strategy assessment */}
                      <motion.div
                        variants={bubbleVariants}
                        custom={1}
                        style={{
                          padding: '2rem',
                          borderRadius: '16px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        }}
                      >
                        <h4 style={{
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          marginBottom: '1.5rem',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                        }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '30px',
                            height: '30px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            marginRight: '1rem',
                          }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="9 11 12 14 22 4"></polyline>
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                            </svg>
                          </span>
                          Strategy Assessment
                        </h4>

                        <div style={{ marginBottom: '1.5rem' }}>
                          <h5 style={{
                            fontSize: '1rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            marginBottom: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                          }}>
                            <span style={{
                              display: 'inline-block',
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: '#4D8DDA',
                              marginRight: '0.5rem',
                            }}></span>
                            Strengths
                          </h5>
                          <p style={{
                            padding: '1rem',
                            background: 'rgba(77, 141, 218, 0.1)',
                            borderRadius: '8px',
                            fontSize: '0.95rem',
                            color: 'white',
                            border: '1px solid rgba(77, 141, 218, 0.2)',
                          }}>
                            {safeResult.strengths}
                          </p>
                        </div>

                        <div>
                          <h5 style={{
                            fontSize: '1rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            marginBottom: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                          }}>
                            <span style={{
                              display: 'inline-block',
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: '#E5A244',
                              marginRight: '0.5rem',
                            }}></span>
                            Considerations
                          </h5>
                          <p style={{
                            padding: '1rem',
                            background: 'rgba(229, 162, 68, 0.1)',
                            borderRadius: '8px',
                            fontSize: '0.95rem',
                            color: 'white',
                            border: '1px solid rgba(229, 162, 68, 0.2)',
                          }}>
                            {safeResult.weaknesses}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Strategic moves section */}
                    <motion.div
                      variants={bubbleVariants}
                      custom={2}
                      style={{
                        marginBottom: '3rem',
                      }}
                    >
                      <h4 style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                      }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '30px',
                          height: '30px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          marginRight: '1rem',
                        }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        </span>
                        Strategic Moves
                      </h4>

                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1.5rem',
                      }}>
                        {safeResultMoves.map((move, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                            style={{
                              padding: '1.5rem',
                              borderRadius: '12px',
                              backgroundColor: `${safeResult.color}10`,
                              border: `1px solid ${safeResult.color}30`,
                              position: 'relative',
                              overflow: 'hidden',
                            }}
                          >
                            {/* Move number circle */}
                            <div style={{
                              position: 'absolute',
                              top: '-10px',
                              right: '-10px',
                              width: '60px',
                              height: '60px',
                              borderRadius: '50%',
                              backgroundColor: `${safeResult.color}10`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '1.5rem',
                              fontWeight: 'bold',
                              color: safeResult.color,
                              opacity: 0.6,
                            }}>
                              {idx + 1}
                            </div>

                            <div style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                            }}>
                              <span style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                backgroundColor: safeResult.color,
                                color: 'white',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '1rem',
                                fontWeight: 'bold',
                                fontSize: '0.8rem',
                                flexShrink: 0,
                                marginTop: '0.2rem',
                              }}>
                                {idx + 1}
                              </span>
                              <p style={{
                                fontSize: '1rem',
                                color: 'white',
                                lineHeight: 1.6,
                              }}>
                                {move}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Call to action */}
                    <motion.div
                      variants={bubbleVariants}
                      custom={3}
                      style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '2rem',
                        borderRadius: '16px',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        gap: '2rem',
                      }}
                    >
                      <div>
                        <h4 style={{
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          marginBottom: '0.5rem',
                          color: 'white',
                        }}>
                          Ready to implement your strategy?
                        </h4>
                        <p style={{
                          fontSize: '1rem',
                          color: 'rgba(255, 255, 255, 0.7)',
                        }}>
                          Our strategic consultants can help you execute this plan with precision.
                        </p>
                      </div>

                      <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        justifyContent: isMobile ? 'center' : 'flex-end',
                      }}
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={resetAnalyzer}
                          style={{
                            padding: '0.8rem 1.5rem',
                            background: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            color: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ marginRight: '0.5rem' }}
                          >
                            <path d="M3 2v6h6"></path>
                            <path d="M3 13a9 9 0 1 0 3-7.7L3 8"></path>
                          </svg>
                          Try Again
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05, backgroundColor: '#4D8DDA' }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: '0.8rem 1.5rem',
                            background: 'linear-gradient(90deg, #4D8DDA, #5D9DFA)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: '0 4px 20px rgba(77, 141, 218, 0.3)',
                          }}
                        >
                          Schedule Consultation
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
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Download report button */}
                    <motion.div
                      variants={bubbleVariants}
                      custom={4}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '2rem',
                      }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          padding: '1rem 2rem',
                          background: 'transparent',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '50px',
                          color: 'rgba(255, 255, 255, 0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginRight: '0.5rem' }}
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download Strategic Report
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedAIStrategyAnalyzer;