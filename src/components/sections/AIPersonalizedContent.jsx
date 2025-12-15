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

  // Professional SVG Icons Component
  const QuestionIcon = ({ type }) => {
    const icons = {
      service: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      size: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      goal: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      challenge: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      timeframe: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    };
    return icons[type] || icons.service;
  };

  // Define questions for technology needs analysis
  const questions = [
    {
      id: 'service',
      question: 'What service do you need most?',
      iconType: 'service',
      color: 'var(--color-primary)',
      options: [
        { value: 'fullstack', label: 'Full-Stack Development' },
        { value: 'software', label: 'Software Engineering' },
        { value: 'devops', label: 'DevOps & Cloud Security' },
        { value: 'security', label: 'Data Security & Compliance' },
        { value: 'ai', label: 'AI & Machine Learning' },
        { value: 'automation', label: 'Process Automation' }
      ]
    },
    {
      id: 'size',
      question: 'What is the size of your organization?',
      iconType: 'size',
      color: 'var(--color-primary)',
      options: [
        { value: 'startup', label: 'Startup (1-10 employees)' },
        { value: 'small', label: 'Small Business (11-50 employees)' },
        { value: 'medium', label: 'Medium Business (51-250 employees)' },
        { value: 'large', label: 'Large Enterprise (251+ employees)' }
      ]
    },
    {
      id: 'goal',
      question: 'What is your primary goal?',
      iconType: 'goal',
      color: 'var(--color-primary)',
      options: [
        { value: 'launch', label: 'Launch New Product/Service' },
        { value: 'scale', label: 'Scale Existing Platform' },
        { value: 'security', label: 'Enhance Security & Compliance' },
        { value: 'automate', label: 'Automate Processes' },
        { value: 'migrate', label: 'Migrate to Cloud' }
      ]
    },
    {
      id: 'challenge',
      question: 'What is your biggest technical challenge?',
      iconType: 'challenge',
      color: 'var(--color-primary)',
      options: [
        { value: 'performance', label: 'Performance & Scalability' },
        { value: 'security', label: 'Security Vulnerabilities' },
        { value: 'integration', label: 'System Integration' },
        { value: 'maintenance', label: 'Code Maintenance & Updates' },
        { value: 'deployment', label: 'Deployment & DevOps' },
        { value: 'compliance', label: 'Compliance Requirements' }
      ]
    },
    {
      id: 'timeframe',
      question: 'What is your project timeframe?',
      iconType: 'timeframe',
      color: 'var(--color-primary)',
      options: [
        { value: 'urgent', label: 'Urgent (0-3 months)' },
        { value: 'short', label: 'Short-term (3-6 months)' },
        { value: 'medium', label: 'Medium-term (6-12 months)' },
        { value: 'long', label: 'Long-term (12+ months)' }
      ]
    }
  ];

  // Result Icon Component
  const ResultIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );

  // Default service recommendation
  const defaultStrategy = {
    name: "Comprehensive Development Package",
    icon: <ResultIcon />,
    color: "var(--color-primary)",
    description: "A balanced approach combining full-stack development with cloud infrastructure and security best practices.",
    moves: [
      "Assess current technology stack and infrastructure",
      "Design scalable architecture for your needs",
      "Implement secure development practices",
      "Set up CI/CD pipeline and monitoring"
    ],
    strengths: "Balanced approach; covers all essential aspects",
    weaknesses: "May require phased implementation for complex projects",
    timeframe: "3-6 months"
  };

  // Service-based recommendations based on answers
  const strategicRecommendations = {
    fullstack: {
      startup: {
        launch: {
          name: "Starter Build Package",
          icon: <ResultIcon />,
          color: "var(--color-primary)",
          description: "Perfect for MVPs and small SaaS applications. Get your product to market quickly with a solid foundation.",
          moves: [
            "Build responsive frontend with React/Next.js",
            "Develop RESTful API backend",
            "Set up basic database and authentication",
            "Deploy to cloud with CI/CD pipeline"
          ],
          strengths: "Fast time-to-market; cost-effective for startups",
          weaknesses: "May need upgrades as you scale",
          timeframe: "2-4 months"
        },
        scale: {
          name: "Professional App Package",
          icon: <ResultIcon />,
          color: "var(--color-primary)",
          description: "Scalable architecture for growing applications. Built to handle increased traffic and complexity.",
          moves: [
            "Design scalable microservices architecture",
            "Implement advanced caching and optimization",
            "Set up monitoring and alerting systems",
            "Create comprehensive testing suite"
          ],
          strengths: "Handles growth well; professional-grade quality",
          weaknesses: "Higher initial investment",
          timeframe: "4-6 months"
        }
      },
      small: {
        launch: {
          name: "Professional App Package",
          icon: <ResultIcon />,
          color: "var(--color-primary)",
          description: "Custom UI/UX with secure authentication and robust backend systems.",
          moves: [
            "Custom UI/UX design and implementation",
            "Secure authentication (JWT/OAuth)",
            "API + database (Node, Python, PostgreSQL)",
            "2 weeks post-launch support included"
          ],
          strengths: "Professional quality; includes support",
          weaknesses: "Moderate timeline",
          timeframe: "3-5 months"
        }
      }
    },
    devops: {
      startup: {
        migrate: {
          name: "Cloud Essentials Package",
          icon: <ResultIcon />,
          color: "var(--color-primary)",
          description: "Perfect for startups getting started with cloud infrastructure.",
          moves: [
            "AWS/GCP cloud setup and configuration",
            "CI/CD pipeline automation",
            "Monitoring and alerting setup",
            "Basic security configurations"
          ],
          strengths: "Affordable monthly pricing; essential features",
          weaknesses: "May need upgrades as you grow",
          timeframe: "1-2 months"
        }
      },
      medium: {
        scale: {
          name: "Managed Cloud Ops Package",
          icon: "☁️",
          color: "var(--color-primary)",
          description: "24/7 monitoring and management for growing companies.",
          moves: [
            "24/7 monitoring and alerting",
            "Security patching and updates",
            "Automated backups and rollback",
            "Cost optimization strategies"
          ],
          strengths: "Comprehensive management; peace of mind",
          weaknesses: "Monthly recurring cost",
          timeframe: "Ongoing"
        }
      }
    },
    security: {
      small: {
        security: {
          name: "Basic Security Maintenance",
          icon: "🔒",
          color: "var(--color-primary)",
          description: "Essential security services for small businesses.",
          moves: [
            "Monthly vulnerability scanning",
            "IAM review and optimization",
            "Encrypted backup setup",
            "Security best practices implementation"
          ],
          strengths: "Affordable; essential protection",
          weaknesses: "Basic level coverage",
          timeframe: "Monthly"
        }
      },
      medium: {
        compliance: {
          name: "Compliance Suite",
          icon: "🔒",
          color: "var(--color-primary)",
          description: "Full compliance support for SOC 2 and GDPR requirements.",
          moves: [
            "SOC 2/GDPR readiness assessment",
            "Full security dashboard setup",
            "Compliance documentation",
            "Monthly advisory calls"
          ],
          strengths: "Comprehensive compliance support",
          weaknesses: "Higher investment",
          timeframe: "3-6 months"
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

  // Analyze answers and generate service recommendation
  const analyzeStrategy = () => {
    setIsAnalyzing(true);

    // Simulate AI processing
    setTimeout(() => {
      // Get key parameters from answers
      const service = answers.service || 'fullstack';
      const size = answers.size || 'startup';
      const goal = answers.goal || 'launch';

      // Select appropriate strategy based on parameters
      let strategy;

      try {
        // Check if the specific combination exists
        if (
          strategicRecommendations[service] &&
          strategicRecommendations[service][size] &&
          strategicRecommendations[service][size][goal]
        ) {
          strategy = strategicRecommendations[service][size][goal];
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
        service: questions[0].options.find(opt => opt.value === (answers.service || 'fullstack'))?.label || 'Full-Stack Development',
        size: questions[1].options.find(opt => opt.value === (answers.size || 'startup'))?.label || 'Startup',
        goal: questions[2].options.find(opt => opt.value === (answers.goal || 'launch'))?.label || 'Launch New Product',
        challenge: questions[3].options.find(opt => opt.value === answers.challenge)?.label || "Various Challenges",
        timeframe: questions[4].options.find(opt => opt.value === answers.timeframe)?.label || "Medium-term"
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
      // Calculate progress based on completed questions (starts from 0%)
      const completedQuestions = Object.keys(answers).length;
      const progressPercent = (completedQuestions / questions.length) * 100;
      
      gsap.to(progressRef.current, {
        width: `${progressPercent}%`,
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
        background: '#ffffff',
        color: 'var(--text-on-light)',
        overflow: 'hidden',
      }}
    >
      {/* Background - Different Style Variation */}
      {!isMobile ? (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '24px',
            padding: '4rem 0',
          }}
        >
          {Array.from({ length: 32 }).map((_, i) => {
            const depth = i % 4;
            const lineOpacity = 0.08 + depth * 0.03;

            // Calculate distance from center (16 is the middle of 32)
            const centerIndex = 16;
            const distanceFromCenter = Math.abs(i - centerIndex);
            const maxDistance = centerIndex;

            // Lines get shorter as they approach center - different curve
            const lineWidthPercent = 8 + (distanceFromCenter / maxDistance) * 18;
            const centerGapPercent = 100 - (lineWidthPercent * 2);

            // Add subtle offset for visual interest
            const offset = depth % 2 === 0 ? 15 : -15;

            return (
              <div
                key={`line-${i}`}
                style={{
                  width: '100%',
                  height: '1.5px',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {/* Left side line */}
                <div
                  style={{
                    width: `${lineWidthPercent}%`,
                    height: '1.5px',
                    background: `linear-gradient(90deg, transparent 0%, rgba(30, 64, 175, ${lineOpacity * 0.5}) 30%, rgba(30, 64, 175, ${lineOpacity}) 70%, rgba(30, 64, 175, ${lineOpacity * 1.2}) 100%)`,
                    borderRadius: '2px',
                    transform: `translateX(${offset}px)`,
                    opacity: 0.7 + depth * 0.1,
                  }}
                />

                {/* Center gap */}
                <div style={{ width: `${centerGapPercent}%`, height: '1.5px' }} />

                {/* Right side line */}
                <div
                  style={{
                    width: `${lineWidthPercent}%`,
                    height: '1.5px',
                    background: `linear-gradient(90deg, rgba(30, 64, 175, ${lineOpacity * 1.2}) 0%, rgba(30, 64, 175, ${lineOpacity}) 30%, rgba(30, 64, 175, ${lineOpacity * 0.5}) 70%, transparent 100%)`,
                    borderRadius: '2px',
                    transform: `translateX(${-offset}px)`,
                    opacity: 0.7 + depth * 0.1,
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '20px',
            padding: '2rem 0.5rem',
            minHeight: '100%',
          }}
        >
          {Array.from({ length: 25 }).map((_, i) => {
            const lineOpacity = 0.08;

            // Calculate distance from center (12.5 is the middle of 25)
            const centerIndex = 12.5;
            const distanceFromCenter = Math.abs(i - centerIndex);
            const maxDistance = centerIndex;

            // Lines get shorter as they approach center - mobile optimized
            const lineWidthPercent = 15 + (distanceFromCenter / maxDistance) * 18;
            const centerGapPercent = Math.max(30, 100 - (lineWidthPercent * 2));

            return (
              <div
                key={`mobile-line-${i}`}
                style={{
                  width: '100%',
                  height: '1px',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {/* Left side line */}
                <div
                  style={{
                    width: `${lineWidthPercent}%`,
                    height: '1px',
                    background: `linear-gradient(90deg, transparent 0%, rgba(30, 64, 175, ${lineOpacity}) 50%, rgba(30, 64, 175, ${lineOpacity * 1.5}) 100%)`,
                    borderRadius: '1px',
                  }}
                />

                {/* Center gap */}
                <div style={{ width: `${centerGapPercent}%`, height: '1px' }} />

                {/* Right side line */}
                <div
                  style={{
                    width: `${lineWidthPercent}%`,
                    height: '1px',
                    background: `linear-gradient(90deg, rgba(30, 64, 175, ${lineOpacity * 1.5}) 0%, rgba(30, 64, 175, ${lineOpacity}) 50%, transparent 100%)`,
                    borderRadius: '1px',
                  }}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="container" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {!showResults && (
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
                padding: '0.5rem 1rem',
                background: 'var(--color-primary-light)',
                borderRadius: '8px',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{
                color: 'var(--color-primary)',
                fontWeight: '600',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Service Recommendation Tool
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: isMobile ? '2rem' : '3rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--text-on-light)',
                fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                lineHeight: 1.2,
              }}
            >
              Find Your Perfect Service Package
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: isMobile ? '1rem' : '1.25rem',
                color: 'var(--text-on-light-muted)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Answer a few questions and we'll recommend the perfect Cypentra service package
              tailored to your needs, goals, and timeline.
            </motion.p>
          </div>
        )}

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'transparent',
            borderRadius: '0',
            overflow: 'visible',
            boxShadow: 'none',
            border: 'none',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {!showResults ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: 'auto',
            }}>
              {/* Progress indicator - Advanced & Aesthetic */}
              <div style={{
                padding: '0 0 2.5rem 0',
                marginBottom: '3rem',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '0.875rem',
                      boxShadow: '0 4px 12px rgba(30, 64, 175, 0.25)',
                    }}>
                      {currentQuestion + 1}
                    </div>
                      <div>
                        <div style={{
                          fontSize: '0.875rem',
                          color: 'var(--text-on-light-muted)',
                          fontWeight: '500',
                          marginBottom: '0.125rem',
                        }}>
                          Question {currentQuestion + 1} of {questions.length}
                        </div>
                        <div style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-on-light-muted)',
                          opacity: 0.7,
                        }}>
                          {Math.round((Object.keys(answers).length / questions.length) * 100)}% Complete
                        </div>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: 'var(--color-primary)',
                      fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                    }}>
                      {Math.round((Object.keys(answers).length / questions.length) * 100)}%
                    </div>
                </div>
                
                {/* Advanced Progress Bar */}
                <div style={{
                  position: 'relative',
                  height: '8px',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  borderRadius: '100px',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)',
                }}>
                  {/* Animated background shimmer */}
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                      backgroundSize: '200% 100%',
                      opacity: 0.5,
                    }}
                  />
                  
                  {/* Progress fill */}
                  <motion.div
                    ref={progressRef}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '0%',
                      background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                      borderRadius: '100px',
                      boxShadow: '0 0 12px rgba(30, 64, 175, 0.4)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: 'easeInOut',
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                        width: '50%',
                      }}
                    />
                  </motion.div>
                  
                  {/* Step indicators */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 2px',
                  }}>
                    {Array.from({ length: questions.length }).map((_, idx) => {
                      const isAnswered = answers[questions[idx]?.id];
                      return (
                        <div
                          key={idx}
                          style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: isAnswered 
                              ? 'rgba(255, 255, 255, 0.8)' 
                              : 'rgba(0, 0, 0, 0.1)',
                            boxShadow: isAnswered 
                              ? '0 0 4px rgba(255, 255, 255, 0.6)' 
                              : 'none',
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div style={{
                flex: 1,
                padding: isMobile ? '0 1rem' : '0',
                position: 'relative',
                overflow: 'visible',
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
                    {/* Attractive Question Design */}
                    <div style={{
                      maxWidth: '900px',
                      margin: '0 auto',
                    }}>
                      {/* Question Header */}
                      <motion.div
                        variants={itemVariants}
                        style={{
                          marginBottom: '3rem',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '48px',
                          height: '48px',
                          borderRadius: '10px',
                          backgroundColor: 'var(--color-primary-light)',
                          color: 'var(--color-primary)',
                          marginBottom: '1.5rem',
                        }}>
                          <QuestionIcon type={questions[currentQuestion].iconType} />
                        </div>
                        
                        <motion.h3
                          variants={itemVariants}
                          style={{
                            fontSize: isMobile ? '1.5rem' : '2rem',
                            fontWeight: '700',
                            color: 'var(--text-on-light)',
                            fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                            lineHeight: 1.3,
                            marginBottom: '0.75rem',
                            maxWidth: '800px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }}
                        >
                          {questions[currentQuestion].question}
                        </motion.h3>
                      </motion.div>

                      {/* Answer options - Attractive Card Design */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                        gap: '1rem',
                      }}>
                        {questions[currentQuestion].options.map((option, idx) => {
                          const isSelected = answers[questions[currentQuestion].id] === option.value;
                          return (
                            <motion.button
                              key={option.value}
                              custom={idx}
                              variants={optionVariants}
                              initial="hidden"
                              animate={isSelected ? "selected" : "visible"}
                              whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                              }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleAnswerSelect(questions[currentQuestion].id, option.value)}
                              style={{
                                padding: '1.25rem 1.5rem',
                                background: isSelected 
                                  ? 'var(--color-primary)' 
                                  : 'white',
                                border: `2px solid ${isSelected 
                                  ? 'var(--color-primary)' 
                                  : 'rgba(0, 0, 0, 0.08)'
                                }`,
                                borderRadius: '12px',
                                color: isSelected 
                                  ? 'white' 
                                  : 'var(--text-on-light)',
                                textAlign: 'left',
                                fontWeight: isSelected ? '600' : '500',
                                cursor: 'pointer',
                                position: 'relative',
                                transition: 'all 0.2s ease',
                                fontSize: '1rem',
                                lineHeight: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                boxShadow: isSelected 
                                  ? '0 4px 12px rgba(30, 64, 175, 0.2)' 
                                  : '0 2px 4px rgba(0, 0, 0, 0.04)',
                              }}
                            >
                              {/* Radio indicator */}
                              <motion.div
                                animate={{
                                  scale: isSelected ? 1 : 0.9,
                                }}
                                style={{
                                  width: '20px',
                                  height: '20px',
                                  borderRadius: '50%',
                                  border: `2px solid ${isSelected 
                                    ? 'white' 
                                    : 'var(--text-on-light-muted)'
                                  }`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                                }}
                              >
                                {isSelected && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    style={{
                                      width: '8px',
                                      height: '8px',
                                      borderRadius: '50%',
                                      backgroundColor: 'white',
                                    }}
                                  />
                                )}
                              </motion.div>
                              
                              <span style={{ flex: 1 }}>{option.label}</span>
                              
                              {isSelected && (
                                <motion.svg
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </motion.svg>
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Navigation buttons - Professional Design */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '2.5rem',
                      paddingTop: '2rem',
                      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                    }}>
                      <motion.button
                        whileHover={{ opacity: currentQuestion === 0 ? 0.5 : 0.8 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                        disabled={currentQuestion === 0}
                        style={{
                          padding: '0.75rem 1.25rem',
                          background: 'transparent',
                          border: 'none',
                          borderRadius: '8px',
                          color: 'var(--text-on-light-muted)',
                          cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
                          opacity: currentQuestion === 0 ? 0.3 : 1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontWeight: '500',
                          fontSize: '0.9375rem',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Previous
                      </motion.button>

                      {currentQuestion === questions.length - 1 ? (
                        <motion.button
                          whileHover={isCurrentQuestionAnswered() ? { 
                            scale: 1.02,
                            boxShadow: '0 4px 12px rgba(30, 64, 175, 0.25)'
                          } : {}}
                          whileTap={isCurrentQuestionAnswered() ? { scale: 0.98 } : {}}
                          onClick={analyzeStrategy}
                          disabled={!isCurrentQuestionAnswered()}
                          style={{
                            padding: '0.75rem 1.75rem',
                            background: isCurrentQuestionAnswered()
                              ? 'var(--color-primary)'
                              : 'rgba(0, 0, 0, 0.05)',
                            color: isCurrentQuestionAnswered() ? 'white' : 'var(--text-on-light-muted)',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: '600',
                            fontSize: '0.9375rem',
                            cursor: isCurrentQuestionAnswered() ? 'pointer' : 'not-allowed',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: isCurrentQuestionAnswered()
                              ? '0 2px 8px rgba(30, 64, 175, 0.2)'
                              : 'none',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          Get Recommendation
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </motion.button>
                      ) : (
                        <motion.button
                          whileHover={isCurrentQuestionAnswered() ? { 
                            scale: 1.02,
                            boxShadow: '0 4px 12px rgba(30, 64, 175, 0.25)'
                          } : {}}
                          whileTap={isCurrentQuestionAnswered() ? { scale: 0.98 } : {}}
                          onClick={() => isCurrentQuestionAnswered() && setCurrentQuestion(currentQuestion + 1)}
                          disabled={!isCurrentQuestionAnswered()}
                          style={{
                            padding: '0.75rem 1.75rem',
                            background: isCurrentQuestionAnswered()
                              ? 'var(--color-primary)'
                              : 'rgba(0, 0, 0, 0.05)',
                            color: isCurrentQuestionAnswered() ? 'white' : 'var(--text-on-light-muted)',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: '600',
                            fontSize: '0.9375rem',
                            cursor: isCurrentQuestionAnswered() ? 'pointer' : 'not-allowed',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: isCurrentQuestionAnswered()
                              ? '0 2px 8px rgba(30, 64, 175, 0.2)'
                              : 'none',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          Next
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                      color: 'var(--text-on-light-muted)',
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
                          <span style={{ color: 'var(--text-on-light)' }}>
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
            <div style={{ 
              padding: isMobile ? '2rem 1rem' : '4rem 0',
              position: 'relative',
            }}>
              {/* Background lines for result page */}
              {!isMobile ? (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '24px',
                    padding: '4rem 0',
                  }}
                >
                  {Array.from({ length: 32 }).map((_, i) => {
                    const depth = i % 4;
                    const lineOpacity = 0.08 + depth * 0.03;

                    const centerIndex = 16;
                    const distanceFromCenter = Math.abs(i - centerIndex);
                    const maxDistance = centerIndex;

                    const lineWidthPercent = 8 + (distanceFromCenter / maxDistance) * 18;
                    const centerGapPercent = 100 - (lineWidthPercent * 2);
                    const offset = depth % 2 === 0 ? 15 : -15;

                    return (
                      <div
                        key={`result-line-${i}`}
                        style={{
                          width: '100%',
                          height: '1.5px',
                          position: 'relative',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div
                          style={{
                            width: `${lineWidthPercent}%`,
                            height: '1.5px',
                            background: `linear-gradient(90deg, transparent 0%, rgba(30, 64, 175, ${lineOpacity * 0.5}) 30%, rgba(30, 64, 175, ${lineOpacity}) 70%, rgba(30, 64, 175, ${lineOpacity * 1.2}) 100%)`,
                            borderRadius: '2px',
                            transform: `translateX(${offset}px)`,
                            opacity: 0.7 + depth * 0.1,
                          }}
                        />
                        <div style={{ width: `${centerGapPercent}%`, height: '1.5px' }} />
                        <div
                          style={{
                            width: `${lineWidthPercent}%`,
                            height: '1.5px',
                            background: `linear-gradient(90deg, rgba(30, 64, 175, ${lineOpacity * 1.2}) 0%, rgba(30, 64, 175, ${lineOpacity}) 30%, rgba(30, 64, 175, ${lineOpacity * 0.5}) 70%, transparent 100%)`,
                            borderRadius: '2px',
                            transform: `translateX(${-offset}px)`,
                            opacity: 0.7 + depth * 0.1,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: '20px',
                    padding: '2rem 0.5rem',
                    minHeight: '100%',
                  }}
                >
                  {Array.from({ length: 25 }).map((_, i) => {
                    const lineOpacity = 0.08;
                    const centerIndex = 12.5;
                    const distanceFromCenter = Math.abs(i - centerIndex);
                    const maxDistance = centerIndex;
                    const lineWidthPercent = 15 + (distanceFromCenter / maxDistance) * 18;
                    const centerGapPercent = Math.max(30, 100 - (lineWidthPercent * 2));

                    return (
                      <div
                        key={`result-mobile-line-${i}`}
                        style={{
                          width: '100%',
                          height: '1px',
                          position: 'relative',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div
                          style={{
                            width: `${lineWidthPercent}%`,
                            height: '1px',
                            background: `linear-gradient(90deg, transparent 0%, rgba(30, 64, 175, ${lineOpacity}) 50%, rgba(30, 64, 175, ${lineOpacity * 1.5}) 100%)`,
                            borderRadius: '1px',
                          }}
                        />
                        <div style={{ width: `${centerGapPercent}%`, height: '1px' }} />
                        <div
                          style={{
                            width: `${lineWidthPercent}%`,
                            height: '1px',
                            background: `linear-gradient(90deg, rgba(30, 64, 175, ${lineOpacity * 1.5}) 0%, rgba(30, 64, 175, ${lineOpacity}) 50%, transparent 100%)`,
                            borderRadius: '1px',
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
              
              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      maxWidth: '1000px',
                      margin: '0 auto',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {/* Header Section - Attractive Design */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        textAlign: 'center',
                        marginBottom: '4rem',
                        paddingBottom: '3rem',
                        borderBottom: '2px solid rgba(0, 0, 0, 0.06)',
                      }}
                    >
                      <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.25rem',
                        backgroundColor: 'var(--color-primary-light)',
                        borderRadius: '20px',
                        marginBottom: '1.5rem',
                      }}>
                        <span style={{
                          fontSize: '0.8125rem',
                          fontWeight: '600',
                          color: 'var(--color-primary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                        }}>
                          Recommended Package
                        </span>
                      </div>
                      
                      <h2 style={{
                        fontSize: isMobile ? '2rem' : '3rem',
                        fontWeight: '700',
                        marginBottom: '1.25rem',
                        color: 'var(--text-on-light)',
                        fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                        lineHeight: 1.2,
                      }}>
                        {safeResult?.name || 'Service Package'}
                      </h2>
                      
                      <p style={{
                        fontSize: isMobile ? '1.125rem' : '1.375rem',
                        color: 'var(--text-on-light-muted)',
                        lineHeight: 1.7,
                        maxWidth: '750px',
                        margin: '0 auto',
                        fontWeight: '400',
                      }}>
                        {safeResult?.description || 'A comprehensive service package tailored to your needs.'}
                      </p>
                    </motion.div>

                    {/* Main Content Grid - Attractive Layout */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                      gap: '3rem',
                      marginBottom: '4rem',
                    }}>
                      {/* Left Column - Project Details */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <h3 style={{
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          marginBottom: '2rem',
                          color: 'var(--text-on-light)',
                          fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                          paddingBottom: '1rem',
                          borderBottom: '2px solid var(--color-primary)',
                          display: 'inline-block',
                        }}>
                          Project Overview
                        </h3>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1.5rem',
                        }}>
                          {[
                            { label: 'Service', value: result?.service || 'Full-Stack Development' },
                            { label: 'Company Size', value: result?.size || 'Startup' },
                            { label: 'Primary Goal', value: result?.goal || 'Launch New Product' },
                            { label: 'Main Challenge', value: result?.challenge || 'Various Challenges' },
                            { label: 'Timeframe', value: result?.timeframe || 'Medium-term' }
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                padding: '1.25rem',
                                borderRadius: '12px',
                                backgroundColor: 'var(--color-primary-light)',
                              }}
                            >
                              <span style={{
                                fontSize: '0.8125rem',
                                color: 'var(--text-on-light-muted)',
                                fontWeight: '500',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                              }}>
                                {item.label}
                              </span>
                              <span style={{
                                fontSize: '1.0625rem',
                                fontWeight: '600',
                                color: 'var(--text-on-light)',
                              }}>
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Right Column - Strengths & Considerations */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <h3 style={{
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          marginBottom: '2rem',
                          color: 'var(--text-on-light)',
                          fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                          paddingBottom: '1rem',
                          borderBottom: '2px solid var(--color-primary)',
                          display: 'inline-block',
                        }}>
                          Assessment
                        </h3>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1.5rem',
                        }}>
                          <div style={{
                            padding: '1.5rem',
                            borderRadius: '12px',
                            backgroundColor: 'var(--color-primary-light)',
                            borderLeft: '4px solid var(--color-primary)',
                          }}>
                            <h4 style={{
                              fontSize: '1rem',
                              fontWeight: '700',
                              color: 'var(--text-on-light)',
                              marginBottom: '0.75rem',
                              fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                            }}>
                              Strengths
                            </h4>
                            <p style={{
                              fontSize: '1rem',
                              color: 'var(--text-on-light)',
                              lineHeight: 1.7,
                              margin: 0,
                            }}>
                              {safeResult?.strengths || 'Comprehensive solution tailored to your needs.'}
                            </p>
                          </div>

                          <div style={{
                            padding: '1.5rem',
                            borderRadius: '12px',
                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                            borderLeft: '4px solid var(--text-on-light-muted)',
                          }}>
                            <h4 style={{
                              fontSize: '1rem',
                              fontWeight: '700',
                              color: 'var(--text-on-light)',
                              marginBottom: '0.75rem',
                              fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                            }}>
                              Considerations
                            </h4>
                            <p style={{
                              fontSize: '1rem',
                              color: 'var(--text-on-light)',
                              lineHeight: 1.7,
                              margin: 0,
                            }}>
                              {safeResult?.weaknesses || 'May require phased implementation.'}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Implementation Steps - Attractive Design */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      style={{
                        marginBottom: '4rem',
                      }}
                    >
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '2rem',
                        color: 'var(--text-on-light)',
                        fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                        paddingBottom: '1rem',
                        borderBottom: '2px solid var(--color-primary)',
                        display: 'inline-block',
                      }}>
                        Implementation Steps
                      </h3>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                        gap: '1.25rem',
                      }}>
                        {safeResultMoves.map((move, idx) => (
                          <div
                            key={idx}
                            style={{
                              padding: '1.5rem',
                              borderRadius: '12px',
                              backgroundColor: 'white',
                              border: '1px solid rgba(0, 0, 0, 0.08)',
                              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                              position: 'relative',
                              transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                            }}
                          >
                            <div style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '1rem',
                            }}>
                              <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                backgroundColor: 'var(--color-primary)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '700',
                                fontSize: '0.875rem',
                                flexShrink: 0,
                              }}>
                                {idx + 1}
                              </div>
                              <p style={{
                                fontSize: '1rem',
                                color: 'var(--text-on-light)',
                                lineHeight: 1.6,
                                margin: 0,
                                flex: 1,
                                fontWeight: '500',
                              }}>
                                {move}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        paddingTop: '2rem',
                        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                      }}
                    >
                      <motion.button
                        whileHover={{ opacity: 0.8 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={resetAnalyzer}
                        style={{
                          padding: '0.875rem 1.5rem',
                          background: 'transparent',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          borderRadius: '8px',
                          color: 'var(--text-on-light)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontWeight: '500',
                          fontSize: '0.9375rem',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 2v6h6"></path>
                          <path d="M3 13a9 9 0 1 0 3-7.7L3 8"></path>
                        </svg>
                        Try Again
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(30, 64, 175, 0.25)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          padding: '0.875rem 1.75rem',
                          background: 'var(--color-primary)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontWeight: '600',
                          fontSize: '0.9375rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          boxShadow: '0 2px 8px rgba(30, 64, 175, 0.2)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        Schedule Consultation
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
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