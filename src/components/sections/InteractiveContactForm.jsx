'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const InteractiveContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: 5000,
  });
  
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formSteps = ['Your Details', 'Project Info', 'Message'];
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const cursorRef = useRef(null);
  const headerRef = useRef(null);
  
  // For liquid effect on budget slider
  const budgetProgress = useMotionValue(0);
  const budgetProgressSpring = useTransform(budgetProgress, [0, 100], [0, 100]);
  const sliderColor = useTransform(
    budgetProgress,
    [0, 40, 70, 100],
    ['#4D8DDA', '#50AC8E', '#E5A244', '#D95D67']
  );
  
  // For 3D card effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Service options
  const serviceOptions = [
    { value: 'web_development', label: 'Web Development', icon: '🖥️', color: '#4D8DDA' },
    { value: 'ai_integration', label: 'AI Integration', icon: '🤖', color: '#D95D67' },
    { value: 'software_optimization', label: 'Software Optimization', icon: '📈', color: '#50AC8E' },
    { value: 'mobile_app', label: 'Mobile App Development', icon: '📱', color: '#E5A244' },
    { value: 'bug_fixes', label: 'Bug Fixes & Maintenance', icon: '🐞', color: '#8B64C0' }
  ];
  
  // Budget ranges
  const budgetRanges = [
    { min: 1000, max: 3000, label: 'Small Project' },
    { min: 3001, max: 7000, label: 'Medium Project' },
    { min: 7001, max: 15000, label: 'Large Project' },
    { min: 15001, max: 25000, label: 'Enterprise Project' }
  ];
  
  // Calculate the budget label based on current value
  const getCurrentBudgetLabel = () => {
    const range = budgetRanges.find(
      range => formData.budget >= range.min && formData.budget <= range.max
    );
    return range ? range.label : 'Custom Project';
  };
  
  // Calculate percentage for budget slider
  const calculateBudgetPercentage = (value) => {
    const min = budgetRanges[0].min;
    const max = budgetRanges[budgetRanges.length - 1].max;
    return Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  };
  
  // Update budget slider position when formData.budget changes
  useEffect(() => {
    budgetProgress.set(calculateBudgetPercentage(formData.budget));
  }, [formData.budget]);
  
  // Initialize GSAP animations
  useEffect(() => {
    // Background animations
    const particles = document.querySelectorAll('.particle');
    
    gsap.to(particles, {
      y: 'random(-100, 100)',
      x: 'random(-100, 100)',
      rotation: 'random(-180, 180)',
      duration: 'random(10, 30)',
      repeat: -1,
      repeatRefresh: true,
      ease: 'sine.inOut',
      stagger: 0.1
    });
    
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.7)' }
    );
    
    // Custom cursor following effect
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        // Delay for smooth following effect
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // 3D card effect handlers
  const handleMouseMove3D = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setMousePosition({ x, y });
  };
  
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          budget: 5000,
        });
        setFormStep(0);
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };
  
  // Form input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Budget slider change handler
  const handleBudgetChange = (e) => {
    const value = parseInt(e.target.value);
    setFormData({
      ...formData,
      budget: value
    });
    budgetProgress.set(calculateBudgetPercentage(value));
  };
  
  // Service selection handler
  const handleServiceSelect = (service) => {
    setFormData({
      ...formData,
      service: service.value
    });
  };
  
  // Validation check to enable/disable next button
  const canProceed = () => {
    if (formStep === 0) {
      return formData.name && formData.email;
    }
    if (formStep === 1) {
      return formData.service && formData.budget;
    }
    return formData.message;
  };
  
  // Form navigation handlers
  const goToNextStep = () => {
    if (formStep < formSteps.length - 1) {
      setFormStep(current => current + 1);
    }
  };
  
  const goToPrevStep = () => {
    if (formStep > 0) {
      setFormStep(current => current - 1);
    }
  };
  
  // Create floating particles
  const renderParticles = () => {
    const particles = [];
    const shapes = ['♙', '♘', '♗', '♖', '♕', '♔'];
    const colors = ['#4D8DDA', '#D95D67', '#50AC8E', '#E5A244', '#8B64C0'];
    
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 30 + 10;
      particles.push(
        <div 
          key={`particle-${i}`}
          className="particle"
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${size}px`,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: 0.1,
            zIndex: 0,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          {shapes[Math.floor(Math.random() * shapes.length)]}
        </div>
      );
    }
    
    return particles;
  };
  
  // Create glow effect that follows cursor
  const renderGlowEffect = () => {
    return (
      <div 
        ref={cursorRef}
        className="glow-effect"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(77, 141, 218, 0.15) 0%, rgba(80, 172, 142, 0.05) 50%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          transition: 'width 0.3s, height 0.3s',
        }}
      />
    );
  };
  
  return (
    <section
      className="interactive-contact-section"
      ref={containerRef}
      onMouseMove={handleMouseMove3D} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        padding: '120px 0',
        backgroundColor: '#111',
        color: '#fff',
        overflow: 'hidden',
        perspective: '1000px',
      }}
    >
      {/* Animated particles */}
      {renderParticles()}
      
      {/* Cursor glow effect */}
      {renderGlowEffect()}
      
      {/* Fluid wave background */}
      <div 
        className="fluid-wave"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(180deg, transparent, rgba(77, 141, 218, 0.03))',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <motion.path
            initial={{ d: "M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,224C840,245,960,235,1080,208C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" }}
            animate={{ 
              d: [
                "M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,224C840,245,960,235,1080,208C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
                "M0,128L60,154.7C120,181,240,235,360,240C480,245,600,203,720,197.3C840,192,960,224,1080,218.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
                "M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,224C840,245,960,235,1080,208C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut",
            }}
            fill="rgba(77, 141, 218, 0.05)"
          />
          <motion.path
            initial={{ d: "M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,218.7C672,203,768,149,864,160C960,171,1056,245,1152,245.3C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
            animate={{ 
              d: [
                "M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,218.7C672,203,768,149,864,160C960,171,1056,245,1152,245.3C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z", 
                "M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,218.7C672,203,768,149,864,160C960,171,1056,245,1152,245.3C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ] 
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut",
              delay: 1,
            }}
            fill="rgba(80, 172, 142, 0.05)"
          />
        </svg>
      </div>
      
      <div 
        className="container" 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          ref={headerRef}
          className="section-header"
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <motion.h6
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#50AC8E',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '1rem',
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(80, 172, 142, 0.1)',
              borderRadius: '50px',
            }}
          >
            Make Your Move
          </motion.h6>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #50AC8E 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Strategic Collaboration
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto',
              color: '#aaa',
              lineHeight: 1.6,
            }}
          >
            Ready to transform your digital vision into reality? Fill out the form below 
            and our team will analyze your requirements to deliver the perfect solution.
          </motion.p>
        </motion.div>
        
        {/* Main content area */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            perspective: '1000px',
          }}
        >
          {/* 3D Form Card with hover effect */}
          <motion.div
            ref={formRef}
            style={{
              width: '100%',
              maxWidth: '800px',
              backgroundColor: 'rgba(25, 25, 25, 0.9)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: isHovered 
                ? '0 25px 50px -12px rgba(80, 172, 142, 0.25), 0 0 30px rgba(77, 141, 218, 0.2)' 
                : '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transform: isHovered 
                ? `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)` 
                : 'perspective(1000px) rotateY(0) rotateX(0)',
              transition: 'box-shadow 0.3s ease, transform 0.1s ease',
            }}
          >
            {/* Form content */}
            <AnimatePresence mode="wait">
              {/* Success message */}
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{
                    padding: '5rem 3rem',
                    textAlign: 'center',
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(80, 172, 142, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem',
                      margin: '0 auto 2rem',
                      color: '#50AC8E',
                    }}
                  >
                    ✓
                  </motion.div>
                  
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>
                    Message Received!
                  </h3>
                  
                  <p style={{ color: '#aaa', marginBottom: '2rem' }}>
                    Thanks for reaching out. Our team will analyze your requirements 
                    and get back to you within 24 hours.
                  </p>
                  
                  <motion.div 
                    style={{ fontSize: '2.5rem', marginBottom: '2rem' }}
                    animate={{ 
                      rotate: [0, 20, 0, -20, 0],
                      scale: [1, 1.2, 1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    ♔
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  {/* Form header with progress */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '1.5rem 2rem',
                  }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                        {formSteps[formStep]}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: '#aaa' }}>
                        Step {formStep + 1} of {formSteps.length}
                      </p>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {formSteps.map((_, index) => (
                        <motion.div
                          key={`step-${index}`}
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: index === formStep ? '#50AC8E' : 'rgba(255, 255, 255, 0.2)',
                            cursor: index < formStep ? 'pointer' : 'default',
                          }}
                          animate={{
                            scale: index === formStep ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: index === formStep ? Infinity : 0,
                            repeatDelay: 1,
                          }}
                          onClick={() => {
                            if (index < formStep) {
                              setFormStep(index);
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Form body */}
                  <form onSubmit={handleSubmit}>
                    <div style={{ padding: '2rem' }}>
                      {/* Step 1: Contact Details */}
                      {formStep === 0 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div style={{ marginBottom: '1.5rem' }}>
                            <label 
                              htmlFor="name"
                              style={{ 
                                display: 'block', 
                                marginBottom: '0.5rem', 
                                color: '#ddd',
                                fontSize: '0.9rem'
                              }}
                            >
                              Full Name *
                            </label>
                            <motion.input
                              whileFocus={{ boxShadow: '0 0 0 2px rgba(80, 172, 142, 0.5)' }}
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="Enter your full name"
                              style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '10px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#fff',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease',
                              }}
                            />
                          </div>
                          
                          <div style={{ marginBottom: '1.5rem' }}>
                            <label 
                              htmlFor="email"
                              style={{ 
                                display: 'block', 
                                marginBottom: '0.5rem', 
                                color: '#ddd',
                                fontSize: '0.9rem'
                              }}
                            >
                              Email Address *
                            </label>
                            <motion.input
                              whileFocus={{ boxShadow: '0 0 0 2px rgba(80, 172, 142, 0.5)' }}
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="Enter your email address"
                              style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '10px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#fff',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease',
                              }}
                            />
                          </div>
                          
                          <div style={{ marginBottom: '1.5rem' }}>
                            <label 
                              htmlFor="phone"
                              style={{ 
                                display: 'block', 
                                marginBottom: '0.5rem', 
                                color: '#ddd',
                                fontSize: '0.9rem'
                              }}
                            >
                              Phone Number (Optional)
                            </label>
                            <motion.input
                              whileFocus={{ boxShadow: '0 0 0 2px rgba(80, 172, 142, 0.5)' }}
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Enter your phone number"
                              style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '10px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#fff',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease',
                              }}
                            />
                          </div>
                          
                          <div style={{ marginBottom: '1.5rem' }}>
                            <label 
                              htmlFor="company"
                              style={{ 
                                display: 'block', 
                                marginBottom: '0.5rem', 
                                color: '#ddd',
                                fontSize: '0.9rem'
                              }}
                            >
                              Company (Optional)
                            </label>
                            <motion.input
                              whileFocus={{ boxShadow: '0 0 0 2px rgba(80, 172, 142, 0.5)' }}
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Enter your company name"
                              style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '10px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#fff',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease',
                              }}
                            />
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Step 2: Project Info */}
                      {formStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div style={{ marginBottom: '2rem' }}>
                            <label 
                              style={{ 
                                display: 'block', 
                                marginBottom: '1rem', 
                                color: '#ddd',
                                fontSize: '0.9rem'
                              }}
                            >
                              Select Service *
                            </label>
                            
                            <div style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                              gap: '1rem',
                              marginBottom: '2rem'
                            }}>
                              {serviceOptions.map((service) => (
                                <motion.div
                                  key={service.value}
                                  whileHover={{ 
                                    scale: 1.05, 
                                    backgroundColor: `${service.color}20` 
                                  }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleServiceSelect(service)}
                                  style={{
                                    padding: '1.5rem 1rem',
                                    borderRadius: '12px',
                                    backgroundColor: formData.service === service.value 
                                      ? `${service.color}20` 
                                      : 'rgba(255, 255, 255, 0.05)',
                                    border: formData.service === service.value 
                                      ? `1px solid ${service.color}` 
                                      : '1px solid rgba(255, 255, 255, 0.1)',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                  }}
                                >
                                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                                    {service.icon}
                                  </div>
                                  <div style={{ 
                                    color: formData.service === service.value ? service.color : '#ddd',
                                    fontWeight: formData.service === service.value ? 'bold' : 'normal',
                                  }}>
                                    {service.label}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              marginBottom: '1rem'
                            }}>
                              <label 
                                htmlFor="budget"
                                style={{ 
                                  color: '#ddd',
                                  fontSize: '0.9rem'
                                }}
                              >
                                Project Budget *
                              </label>
                              
                              <div style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '50px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                color: '#fff',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                              }}>
                                <motion.span
                                  key={formData.budget}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                >
                                  ${formData.budget.toLocaleString()} - {getCurrentBudgetLabel()}
                                </motion.span>
                              </div>
                            </div>
                            
                            {/* Custom liquid slider */}
                            <div style={{
                              position: 'relative',
                              height: '8px',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: '4px',
                              marginBottom: '2rem',
                              cursor: 'pointer',
                            }}>
                              {/* Progress track */}
                              <motion.div
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  height: '100%',
                                  width: `${budgetProgressSpring.get()}%`,
                                  borderRadius: '4px',
                                  background: sliderColor,
                                }}
                              />
                              
                              {/* Liquid blob effect */}
                              <svg 
                                style={{ 
                                  position: 'absolute', 
                                  top: '-20px',
                                  left: `calc(${budgetProgressSpring.get()}% - 20px)`,
                                  width: '40px',
                                  height: '40px',
                                  filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.2))',
                                  pointerEvents: 'none',
                                }}
                                viewBox="0 0 40 40"
                              >
                                <motion.circle 
                                  cx="20" 
                                  cy="20" 
                                  r="8"
                                  fill={sliderColor}
                                  style={{
                                    filter: 'url(#goo)'
                                  }}
                                  animate={{
                                    r: [8, 9, 8],
                                    scale: [1, 1.05, 1]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                  }}
                                />
                                <filter id="goo">
                                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                                  <feColorMatrix 
                                    in="blur" 
                                    mode="matrix" 
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" 
                                    result="goo" 
                                  />
                                  <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                                </filter>
                              </svg>
                              
                              {/* Actual range input (hidden but functional) */}
                              <input
                                type="range"
                                id="budget"
                                name="budget"
                                min={1000}
                                max={25000}
                                step={500}
                                value={formData.budget}
                                onChange={handleBudgetChange}
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  opacity: 0,
                                  cursor: 'pointer',
                                }}
                              />
                              
                              {/* Budget markers */}
                              {budgetRanges.map((range, index) => (
                                <div
                                  key={`range-${index}`}
                                  style={{
                                    position: 'absolute',
                                    bottom: '-25px',
                                    left: `${calculateBudgetPercentage(range.min)}%`,
                                    transform: 'translateX(-50%)',
                                    color: formData.budget >= range.min && formData.budget <= range.max 
                                      ? '#fff' 
                                      : '#666',
                                    fontSize: '0.8rem',
                                    transition: 'color 0.3s ease',
                                  }}
                                >
                                  ${range.min.toLocaleString()}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Step 3: Message */}
                      {formStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div style={{ marginBottom: '1.5rem' }}>
                            <label 
                              htmlFor="message"
                              style={{ 
                                display: 'block', 
                                marginBottom: '0.5rem', 
                                color: '#ddd',
                                fontSize: '0.9rem'
                              }}
                            >
                              Project Details *
                            </label>
                            <motion.textarea
                              whileFocus={{ boxShadow: '0 0 0 2px rgba(80, 172, 142, 0.5)' }}
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              placeholder="Tell us about your project, requirements, and timeline"
                              rows={6}
                              style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '10px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#fff',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease',
                                resize: 'vertical',
                              }}
                            />
                          </div>
                          
                          <div style={{
                            padding: '1rem',
                            borderRadius: '10px',
                            backgroundColor: 'rgba(77, 141, 218, 0.1)',
                            marginBottom: '1.5rem',
                          }}>
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1rem',
                            }}>
                              <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(77, 141, 218, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.2rem',
                                color: '#4D8DDA',
                              }}>
                                <span>ℹ️</span>
                              </div>
                              
                              <div>
                                <h4 style={{
                                  fontSize: '1rem',
                                  fontWeight: 'bold',
                                  marginBottom: '0.25rem',
                                  color: '#fff',
                                }}>
                                  Next Steps
                                </h4>
                                <p style={{
                                  fontSize: '0.9rem',
                                  color: '#aaa',
                                }}>
                                  After submitting, our team will analyze your requirements and respond within 24 hours with a tailored proposal.
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Form navigation */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '1.5rem 2rem',
                    }}>
                      {formStep > 0 ? (
                        <motion.button
                          type="button"
                          onClick={goToPrevStep}
                          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '10px',
                            backgroundColor: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#ddd',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
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
                          >
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                          </svg>
                          Back
                        </motion.button>
                      ) : (
                        <div /> // Empty div to maintain spacing
                      )}
                      
                      {formStep < formSteps.length - 1 ? (
                        <motion.button
                          type="button"
                          onClick={goToNextStep}
                          disabled={!canProceed()}
                          whileHover={canProceed() ? { scale: 1.05 } : {}}
                          whileTap={canProceed() ? { scale: 0.95 } : {}}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '10px',
                            backgroundColor: canProceed() ? '#50AC8E' : 'rgba(80, 172, 142, 0.2)',
                            border: 'none',
                            color: canProceed() ? '#fff' : '#aaa',
                            cursor: canProceed() ? 'pointer' : 'not-allowed',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                          }}
                        >
                          Next
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
                        </motion.button>
                      ) : (
                        <motion.button
                          type="submit"
                          disabled={!canProceed() || isSubmitting}
                          whileHover={canProceed() && !isSubmitting ? { scale: 1.05 } : {}}
                          whileTap={canProceed() && !isSubmitting ? { scale: 0.95 } : {}}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '10px',
                            backgroundColor: canProceed() && !isSubmitting ? '#50AC8E' : 'rgba(80, 172, 142, 0.2)',
                            border: 'none',
                            color: canProceed() && !isSubmitting ? '#fff' : '#aaa',
                            cursor: canProceed() && !isSubmitting ? 'pointer' : 'not-allowed',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          {isSubmitting ? (
                            <>
                              <svg 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                style={{
                                  animation: 'spin 1s linear infinite',
                                }}
                              >
                                <line x1="12" y1="2" x2="12" y2="6"></line>
                                <line x1="12" y1="18" x2="12" y2="22"></line>
                                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                <line x1="2" y1="12" x2="6" y2="12"></line>
                                <line x1="18" y1="12" x2="22" y2="12"></line>
                                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                              </svg>
                              Processing
                            </>
                          ) : (
                            <>
                              Submit Request
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
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                              </svg>
                            </>
                          )}
                          
                          {/* Button shine effect */}
                          {canProceed() && !isSubmitting && (
                            <motion.span 
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '30px',
                                height: '100%',
                                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)',
                                transform: 'skewX(-20deg)',
                              }}
                              animate={{ 
                                x: ['0%', '400%'], 
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 3,
                              }}
                            />
                          )}
                        </motion.button>
                      )}
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      
      {/* Floating chess piece */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '50px',
          right: '10%',
          fontSize: '5rem',
          color: '#50AC8E',
          opacity: 0.2,
          zIndex: 0,
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ♘
      </motion.div>
      
      <motion.div
        style={{
          position: 'absolute',
          top: '100px',
          left: '10%',
          fontSize: '4rem',
          color: '#4D8DDA',
          opacity: 0.2,
          zIndex: 0,
        }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        ♗
      </motion.div>
      
      {/* Add animation for spinner in CSS */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default InteractiveContactForm;