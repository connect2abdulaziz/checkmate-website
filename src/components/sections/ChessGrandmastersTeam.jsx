'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ChessGrandmastersTeam = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const boardRef = useRef(null);
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [hoveredPiece, setHoveredPiece] = useState(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Scrolling animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  // Chess pieces with team member data
  const teamMembers = [
    {
      id: 1,
      name: "Alex King",
      role: "CEO & Founder",
      piece: "♔", // King
      color: "#E5A244", // Gold
      description: "Alex leads our team with vision and strategy. With over 15 years of software development experience, he specializes in architecting scalable solutions and driving innovation. His passion for chess inspired our company's strategic approach to problem-solving.",
      expertise: ["System Architecture", "Strategic Planning", "Team Leadership"],
      image: "/images/team/alex-king.jpg",
      social: {
        linkedin: "https://linkedin.com/in/alexking",
        twitter: "https://twitter.com/alexking",
        github: "https://github.com/alexking"
      }
    },
    {
      id: 2,
      name: "Sarah Queen",
      role: "CTO",
      piece: "♕", // Queen
      color: "#D95D67", // Red
      description: "Sarah oversees all technical operations and product development. Her versatile skill set allows her to move across departments, solving complex challenges with elegance and efficiency. She's known for turning ambitious visions into technical realities.",
      expertise: ["Full-Stack Development", "AI Integration", "Technical Leadership"],
      image: "/images/team/sarah-queen.jpg",
      social: {
        linkedin: "https://linkedin.com/in/sarahqueen",
        twitter: "https://twitter.com/sarahqueen",
        github: "https://github.com/sarahqueen"
      }
    },
    {
      id: 3,
      name: "Michael Bishop",
      role: "Creative Director",
      piece: "♗", // Bishop
      color: "#4D8DDA", // Blue
      description: "Michael heads our design team, bringing diagonal thinking and creative vision to all our projects. His background in both traditional design and digital interfaces ensures our solutions are not only functional but beautiful.",
      expertise: ["UI/UX Design", "Brand Strategy", "Visual Communication"],
      image: "/images/team/michael-bishop.jpg",
      social: {
        linkedin: "https://linkedin.com/in/michaelbishop",
        twitter: "https://twitter.com/michaelbishop",
        github: "https://github.com/michaelbishop"
      }
    },
    {
      id: 4,
      name: "Nia Knight",
      role: "Project Manager",
      piece: "♘", // Knight
      color: "#50AC8E", // Green
      description: "Nia navigates complex project challenges with creative approaches, just like a knight on the chessboard. Her ability to coordinate cross-functional teams while maintaining agile processes ensures our projects are delivered on time and with exceptional quality.",
      expertise: ["Agile Methodologies", "Resource Allocation", "Client Communication"],
      image: "/images/team/nia-knight.jpg",
      social: {
        linkedin: "https://linkedin.com/in/niaknight",
        twitter: "https://twitter.com/niaknight",
        github: "https://github.com/niaknight"
      }
    },
    {
      id: 5,
      name: "Richard Rook",
      role: "Lead Developer",
      piece: "♖", // Rook
      color: "#8B64C0", // Purple
      description: "Richard brings structure and stability to our codebase. His straightforward approach to solving technical challenges forms the backbone of our development process. He specializes in building robust, scalable architecture.",
      expertise: ["Backend Systems", "Cloud Infrastructure", "Performance Optimization"],
      image: "/images/team/richard-rook.jpg",
      social: {
        linkedin: "https://linkedin.com/in/richardrook",
        twitter: "https://twitter.com/richardrook",
        github: "https://github.com/richardrook"
      }
    },
    {
      id: 6,
      name: "Patricia Pawn",
      role: "Frontend Developer",
      piece: "♙", // Pawn
      color: "#FFB347", // Orange
      description: "Patricia may be newer to the industry, but her potential is limitless. She tackles frontend challenges with determination and creativity, consistently advancing our user interfaces to new heights. Her attention to detail ensures perfect implementation of designs.",
      expertise: ["React/Next.js", "CSS Animation", "Responsive Design"],
      image: "/images/team/patricia-pawn.jpg",
      social: {
        linkedin: "https://linkedin.com/in/patriciapawn",
        twitter: "https://twitter.com/patriciapawn",
        github: "https://github.com/patriciapawn"
      }
    },
    {
      id: 7,
      name: "Omar OpenSource",
      role: "DevOps Engineer",
      piece: "♙", // Pawn
      color: "#5DADE2", // Light Blue
      description: "Omar ensures our deployment pipelines run smoothly and securely. His dedication to automation and continuous integration keeps our projects moving forward efficiently, eliminating barriers between development and deployment.",
      expertise: ["CI/CD Pipelines", "Container Orchestration", "Security Compliance"],
      image: "/images/team/omar-opensource.jpg",
      social: {
        linkedin: "https://linkedin.com/in/omaropensource",
        twitter: "https://twitter.com/omaropensource",
        github: "https://github.com/omaropensource"
      }
    },
    {
      id: 8,
      name: "Leila Logic",
      role: "Backend Developer",
      piece: "♙", // Pawn
      color: "#EC7063", // Light Red
      description: "Leila specializes in database optimization and API design. Her logical approach to problem-solving ensures our backend systems are efficient and scalable. She's constantly exploring new technologies to improve our stack.",
      expertise: ["Database Design", "API Architecture", "Server Optimization"],
      image: "/images/team/leila-logic.jpg",
      social: {
        linkedin: "https://linkedin.com/in/leilalogic",
        twitter: "https://twitter.com/leilalogic",
        github: "https://github.com/leilalogic"
      }
    }
  ];

  // GSAP animations
  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Header animations
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          }
        }
      );

      // Chessboard animation
      gsap.fromTo(
        boardRef.current,
        { opacity: 0, scale: 0.8, rotationX: 45 },
        {
          opacity: 1,
          scale: 1,
          rotationX: 15,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: boardRef.current,
            start: 'top 70%',
          }
        }
      );

      // Piece animations
      gsap.fromTo(
        '.chess-piece',
        {
          opacity: 0,
          y: 30,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: boardRef.current,
            start: 'top 60%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView]);

  // Create chessboard cells
  const renderChessboard = () => {
    const cells = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isBlack = (row + col) % 2 === 1;
        const cellIndex = row * 8 + col;

        // Place team members on specific cells
        const teamMemberIndex = teamMembers.findIndex(member => {
          // Custom placement logic based on chess piece roles
          if (member.piece === "♔" && row === 7 && col === 4) return true; // King at e1
          if (member.piece === "♕" && row === 7 && col === 3) return true; // Queen at d1
          if (member.piece === "♗" && row === 7 && (col === 2 || col === 5)) {
            return col === 2 ? member.id === 3 : false; // Bishop at c1
          }
          if (member.piece === "♘" && row === 7 && (col === 1 || col === 6)) {
            return col === 1 ? member.id === 4 : false; // Knight at b1
          }
          if (member.piece === "♖" && row === 7 && (col === 0 || col === 7)) {
            return col === 0 ? member.id === 5 : false; // Rook at a1
          }
          if (member.piece === "♙" && row === 6) {
            // Distribute pawns across the second row
            if (col === 0 && member.id === 6) return true;
            if (col === 1 && member.id === 7) return true;
            if (col === 2 && member.id === 8) return true;
            return false;
          }
          return false;
        });

        const hasPiece = teamMemberIndex !== -1;
        const teamMember = hasPiece ? teamMembers[teamMemberIndex] : null;

        cells.push(
          <div
            key={`cell-${row}-${col}`}
            className="chess-cell"
            style={{
              backgroundColor: isBlack ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative',
              transition: 'all 0.3s ease',
              transform: `translateZ(${isBlack ? 0 : 5}px)`,
              cursor: hasPiece ? 'pointer' : 'default',
            }}
            onClick={hasPiece ? () => setActiveTeamMember(teamMemberIndex) : undefined}
            onMouseEnter={hasPiece ? () => setHoveredPiece(teamMemberIndex) : undefined}
            onMouseLeave={hasPiece ? () => setHoveredPiece(null) : undefined}
          >
            {hasPiece && (
              <motion.div
                className="chess-piece"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: hoveredPiece === teamMemberIndex || activeTeamMember === teamMemberIndex ? 1.2 : 1,
                  y: hoveredPiece === teamMemberIndex || activeTeamMember === teamMemberIndex ? -10 : 0
                }}
                whileHover={{ scale: 1.2, y: -10 }}
                style={{
                  fontSize: '2rem',
                  color: teamMember.color,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  fontWeight: 'bold',
                  textShadow: `0 0 10px ${teamMember.color}80`,
                  zIndex: 2,
                  transition: 'all 0.3s ease',
                }}
              >
                {teamMember.piece}

                {/* Hover tooltip with name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredPiece === teamMemberIndex ? 1 : 0,
                    y: hoveredPiece === teamMemberIndex ? 0 : 10
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    zIndex: 10,
                  }}
                >
                  {teamMember.name} - {teamMember.role}
                </motion.div>
              </motion.div>
            )}

            {/* Cell coordinates (for debug) */}
            {/* <span style={{ position: 'absolute', bottom: '2px', right: '2px', fontSize: '8px', opacity: 0.3 }}>
              {String.fromCharCode(97 + col)}{8 - row}
            </span> */}
          </div>
        );
      }
    }
    return cells;
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  const profileImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.2
      }
    }
  };

  // Social media icons
  const SocialIcon = ({ platform, url }) => {
    let icon;

    switch (platform) {
      case 'linkedin':
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        );
        break;
      case 'twitter':
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        );
        break;
      case 'github':
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        );
        break;
      default:
        icon = null;
    }

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: '#fff',
          transition: 'all 0.3s ease',
        }}
        className="social-icon"
      >
        {icon}
      </a>
    );
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{
        opacity,
        position: 'relative',
        padding: '120px 0',
        backgroundColor: '#0F172A', // Dark blue background
        color: '#F8FAFC',
        overflow: 'hidden',
      }}
      className="chess-team-section"
    >
      {/* Strategic chess piece pattern background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.03,
        zIndex: 1,
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.05) 40px,
            rgba(255,255,255,0.05) 80px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.05) 40px,
            rgba(255,255,255,0.05) 80px
          )
        `,
      }} />

      {/* Gradient overlays for depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '20%',
        background: 'linear-gradient(to bottom, #0F172A 0%, rgba(15, 23, 42, 0) 100%)',
        zIndex: 2,
      }} />

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '20%',
        background: 'linear-gradient(to top, #0F172A 0%, rgba(15, 23, 42, 0) 100%)',
        zIndex: 2,
      }} />

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 3,
      }}>
        <motion.div
          ref={headerRef}
          className="section-header"
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#E5A244',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '1rem',
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(229, 162, 68, 0.1)',
              borderRadius: '50px',
            }}
          >
            Our Strategic Ensemble
          </motion.h6>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #B3BAC5 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 10px 20px rgba(0,0,0,0.1)',
            }}
          >
            Meet The Grandmasters
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto',
              color: '#94A3B8',
              lineHeight: 1.6,
            }}
          >
            Each member of our team brings unique skills to the board,
            working together with strategic precision to deliver exceptional solutions.
            Click on a chess piece to learn more about our talented team.
          </motion.p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Interactive Chessboard */}
          <motion.div
            ref={boardRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(8, 1fr)',
              gridTemplateRows: 'repeat(8, 1fr)',
              aspectRatio: '1/1',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              transform: 'perspective(1000px) rotateX(15deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {renderChessboard()}
          </motion.div>

          {/* Team Member Details */}
          <div style={{
            position: 'relative',
            minHeight: '500px',
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`team-member-${activeTeamMember}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  background: 'rgba(30, 41, 59, 0.5)',
                  backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '2.5rem',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Piece symbol in background */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  right: '5%',
                  fontSize: '12rem',
                  color: 'rgba(255, 255, 255, 0.03)',
                  lineHeight: 0,
                  zIndex: 0,
                }}>
                  {teamMembers[activeTeamMember].piece}
                </div>

                <div style={{
                  display: 'flex',
                  gap: '2rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {/* Profile Image */}
                  <motion.div
                    variants={profileImageVariants}
                    style={{
                      flexShrink: 0,
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: `3px solid ${teamMembers[activeTeamMember].color}`,
                      boxShadow: `0 10px 20px rgba(0, 0, 0, 0.2), 0 0 10px ${teamMembers[activeTeamMember].color}40`,
                    }}
                  >
                    {/* This would be a real image in production */}
                    <div style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: `${teamMembers[activeTeamMember].color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: teamMembers[activeTeamMember].color,
                      fontSize: '3rem',
                      fontWeight: 'bold',
                    }}>
                      {teamMembers[activeTeamMember].name.charAt(0)}
                    </div>
                  </motion.div>

                  {/* Name and Title */}
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        margin: 0,
                        color: '#F8FAFC',
                      }}
                    >
                      {teamMembers[activeTeamMember].name}
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginTop: '0.5rem',
                      }}
                    >
                      <span style={{
                        fontSize: '1.8rem',
                        color: teamMembers[activeTeamMember].color,
                        marginRight: '0.25rem',
                      }}>
                        {teamMembers[activeTeamMember].piece}
                      </span>
                      <span style={{
                        fontSize: '1.1rem',
                        color: teamMembers[activeTeamMember].color,
                        fontWeight: '500',
                      }}>
                        {teamMembers[activeTeamMember].role}
                      </span>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        marginTop: '1rem',
                      }}
                    >
                      {Object.entries(teamMembers[activeTeamMember].social).map(([platform, url]) => (
                        <SocialIcon key={platform} platform={platform} url={url} />
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: '#E2E8F0',
                    margin: '2rem 0',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {teamMembers[activeTeamMember].description}
                </motion.p>

                {/* Expertise Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginTop: '1.5rem',
                  }}
                >
                  {teamMembers[activeTeamMember].expertise.map((skill, index) => (
                    <span
                      key={`skill-${index}`}
                      style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        backgroundColor: `${teamMembers[activeTeamMember].color}15`,
                        border: `1px solid ${teamMembers[activeTeamMember].color}40`,
                        color: teamMembers[activeTeamMember].color,
                        fontSize: '0.9rem',
                        fontWeight: '500',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>

                {/* Navigation between team members */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '2rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '1.5rem',
                  }}
                >
                  <button
                    onClick={() => setActiveTeamMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'transparent',
                      border: 'none',
                      color: '#94A3B8',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      transition: 'all 0.3s ease',
                    }}
                    className="team-nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    Previous
                  </button>

                  <button
                    onClick={() => setActiveTeamMember((prev) => (prev + 1) % teamMembers.length)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'transparent',
                      border: 'none',
                      color: '#94A3B8',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      transition: 'all 0.3s ease',
                    }}
                    className="team-nav-button"
                  >
                    Next
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </motion.div>

                {/* Glowing accent border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  padding: '1px',
                  background: `linear-gradient(135deg, ${teamMembers[activeTeamMember].color}50 0%, transparent 50%, transparent 100%)`,
                  opacity: 0.5,
                  pointerEvents: 'none',
                  zIndex: 0,
                }} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile view team selection (toggles visibility on smaller screens) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            marginTop: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
          }}
          className="mobile-team-selection"
        >
          {teamMembers.map((member, index) => (
            <button
              key={`mobile-select-${index}`}
              onClick={() => setActiveTeamMember(index)}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: activeTeamMember === index ? '#fff' : member.color,
                backgroundColor: activeTeamMember === index ? member.color : 'rgba(255,255,255,0.05)',
                border: `1px solid ${member.color}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTeamMember === index ? `0 0 15px ${member.color}80` : 'none',
              }}
            >
              {member.piece}
            </button>
          ))}
        </motion.div>

        {/* Add animation keyframes for button shine effect */}
        <style jsx>{`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            60% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
          
          .team-nav-button:hover {
            color: #E5A244;
            background-color: rgba(255,255,255,0.05);
          }
          
          .chess-cell:hover {
            transform: translateZ(15px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          }
          
          @media (max-width: 1024px) {
            .mobile-team-selection {
              display: flex;
            }
          }
          
          @media (max-width: 768px) {
            .chess-team-section {
              padding: 80px 0;
            }
          }
        `}</style>
      </div>
    </motion.section>
  );
};

export default ChessGrandmastersTeam;