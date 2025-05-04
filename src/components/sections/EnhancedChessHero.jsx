'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedChessHero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const chessboardRef = useRef(null);
  const chessPiecesRef = useRef([]);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const [activeStrategyIndex, setActiveStrategyIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameRef = useRef(null);

  // Strategic concepts
  const strategicConcepts = [
    {
      title: "Strategic Vision",
      description: "Develop a comprehensive view of your business landscape to anticipate market shifts and position your company for success.",
      icon: "♚", // King
      color: "#E5A244",
      piece: "king",
    },
    {
      title: "Operational Power",
      description: "Deploy versatile resources and capabilities to address challenges with unmatched flexibility and efficiency.",
      icon: "♛", // Queen
      color: "#4D8DDA",
      piece: "queen",
    },
    {
      title: "Structural Stability",
      description: "Build a rock-solid organizational foundation that provides reliability and consistency in execution.",
      icon: "♜", // Rook
      color: "#D95D67",
      piece: "rook",
    },
    {
      title: "Innovative Perspective",
      description: "View challenges from unique angles to identify opportunities others miss and create breakthrough solutions.",
      icon: "♝", // Bishop
      color: "#50AC8E",
      piece: "bishop",
    },
    {
      title: "Agile Adaptation",
      description: "Navigate complex business obstacles with creative, non-linear approaches that outmaneuver competitors.",
      icon: "♞", // Knight
      color: "#8B64C0",
      piece: "knight",
    },
  ];

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

  // Initialize THREE.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 12);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Setup lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Create chessboard
    createChessboard();

    // Create chess pieces
    createChessPieces();

    // Add fog to the scene
    scene.fog = new THREE.FogExp2(0x151515, 0.035);

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Setup mouse move event for interactive pieces
    const handleMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

      // Rotate chessboard slightly
      if (chessboardRef.current) {
        chessboardRef.current.rotation.y += 0.001;
      }

      // Make chess pieces hover slightly
      chessPiecesRef.current.forEach((piece, index) => {
        if (piece) {
          piece.position.y = 1 + Math.sin(Date.now() * 0.001 + index) * 0.1;

          // Make the active piece rotate slowly
          if (index === activeStrategyIndex) {
            piece.rotation.y += 0.01;
          }
        }
      });

      // Raycaster for hovering effect
      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      const intersects = raycasterRef.current.intersectObjects(chessPiecesRef.current);

      if (intersects.length > 0) {
        const hoveredPiece = intersects[0].object;
        const index = chessPiecesRef.current.findIndex(piece => piece === hoveredPiece);

        if (index !== -1 && !isHovering) {
          setIsHovering(true);
          setActiveStrategyIndex(index);

          gsap.to(hoveredPiece.position, {
            y: 2,
            duration: 0.3,
            ease: 'power2.out'
          });

          gsap.to(hoveredPiece.scale, {
            x: 1.2,
            y: 1.2,
            z: 1.2,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      } else if (isHovering) {
        setIsHovering(false);

        chessPiecesRef.current.forEach((piece, index) => {
          if (index === activeStrategyIndex) {
            gsap.to(piece.scale, {
              x: 1,
              y: 1,
              z: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });
      }

      // Render scene
      rendererRef.current.render(sceneRef.current, cameraRef.current);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Initial animations
    animateScene();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
      }

      // Dispose geometries and materials
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();

            if (object.material.isMaterial) {
              cleanMaterial(object.material);
            } else {
              // array of materials
              for (const material of object.material) cleanMaterial(material);
            }
          }
        });
      }
    };
  }, [activeStrategyIndex, isHovering]);

  // Helper to clean materials
  const cleanMaterial = (material) => {
    material.dispose();

    // dispose textures
    for (const key of Object.keys(material)) {
      const value = material[key];
      if (value && typeof value === 'object' && 'minFilter' in value) {
        value.dispose();
      }
    }
  };

  // Create chessboard
  const createChessboard = () => {
    if (!sceneRef.current) return;

    const boardSize = 8;
    const squareSize = 1;
    const boardGeometry = new THREE.BoxGeometry(
      boardSize * squareSize,
      0.2,
      boardSize * squareSize
    );

    // Create board material with checkered pattern
    const boardTexture = new THREE.CanvasTexture(createCheckeredTexture());
    const boardMaterial = new THREE.MeshStandardMaterial({
      map: boardTexture,
      roughness: 0.8,
      metalness: 0.2,
    });

    const chessboard = new THREE.Mesh(boardGeometry, boardMaterial);
    chessboard.position.set(0, 0, 0);
    chessboard.receiveShadow = true;

    sceneRef.current.add(chessboard);
    chessboardRef.current = chessboard;
  };

  // Create checkered texture for the chessboard
  const createCheckeredTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext('2d');

    const squareSize = 64;

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const isWhite = (x + y) % 2 === 0;
        context.fillStyle = isWhite ? '#f0d9b5' : '#b58863';
        context.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
      }
    }

    // Add a subtle grain texture
    context.globalCompositeOperation = 'multiply';
    context.fillStyle = 'rgba(0, 0, 0, 0.03)';

    for (let i = 0; i < 5000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      context.fillRect(x, y, 1, 1);
    }

    return canvas;
  };

  // Create chess pieces
  const createChessPieces = () => {
    if (!sceneRef.current) return;

    // Clear previous pieces
    chessPiecesRef.current.forEach(piece => {
      if (sceneRef.current && piece) {
        sceneRef.current.remove(piece);
      }
    });

    chessPiecesRef.current = [];

    // Material options
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xE5A244,
      metalness: 0.8,
      roughness: 0.2,
    });

    const silverMaterial = new THREE.MeshStandardMaterial({
      color: 0xCCCCCC,
      metalness: 0.8,
      roughness: 0.2,
    });

    // Create stylized pieces
    strategicConcepts.forEach((concept, index) => {
      let geometry;

      // Create geometries for different pieces
      switch (concept.piece) {
        case 'king':
          geometry = createKingGeometry();
          break;
        case 'queen':
          geometry = createQueenGeometry();
          break;
        case 'rook':
          geometry = createRookGeometry();
          break;
        case 'bishop':
          geometry = createBishopGeometry();
          break;
        case 'knight':
          geometry = createKnightGeometry();
          break;
        default:
          geometry = new THREE.CylinderGeometry(0.3, 0.3, 1, 32);
      }

      // Convert color hex string to color object
      const color = new THREE.Color(concept.color);

      const material = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.7,
        roughness: 0.3,
      });

      const piece = new THREE.Mesh(geometry, material);

      // Position pieces in a semi-circle
      const angle = (index - (strategicConcepts.length - 1) / 2) * 0.4;
      const radius = 5;
      piece.position.set(
        Math.sin(angle) * radius,
        1, // Slightly above the board
        Math.cos(angle) * radius - 1 // Offset forward
      );

      piece.castShadow = true;
      piece.receiveShadow = true;

      // Add glow effect
      addGlowEffect(piece, color);

      sceneRef.current.add(piece);
      chessPiecesRef.current.push(piece);
    });
  };

  // Add glow effect to a piece
  const addGlowEffect = (piece, color) => {
    if (!sceneRef.current) return;

    // Create a sphere slightly larger than the piece
    const glowGeometry = new THREE.SphereGeometry(0.7, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.1,
    });

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    piece.add(glow);

    // Animate the glow
    gsap.to(glow.scale, {
      x: 1.2,
      y: 1.2,
      z: 1.2,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  };

  // Geometries for chess pieces
  const createKingGeometry = () => {
    const geometry = new THREE.ConeGeometry();

    // Base
    const baseGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    const baseMesh = new THREE.Mesh(baseGeometry);
    baseMesh.position.y = 0.1;

    // Body
    const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.4, 0.8, 32);
    const bodyMesh = new THREE.Mesh(bodyGeometry);
    bodyMesh.position.y = 0.6;

    // Top
    const topGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const topMesh = new THREE.Mesh(topGeometry);
    topMesh.position.y = 1.1;

    // Cross
    const crossHGeometry = new THREE.BoxGeometry(0.5, 0.1, 0.1);
    const crossHMesh = new THREE.Mesh(crossHGeometry);
    crossHMesh.position.y = 1.5;

    const crossVGeometry = new THREE.BoxGeometry(0.1, 0.5, 0.1);
    const crossVMesh = new THREE.Mesh(crossVGeometry);
    crossVMesh.position.y = 1.5;

    // Combine all parts
    const kingGeometry = mergeGeometries([
      baseGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.1, 0)),
      bodyGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.6, 0)),
      topGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 1.1, 0)),
      crossHGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 1.5, 0)),
      crossVGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 1.5, 0))
    ]);

    return kingGeometry;
  };

  const createQueenGeometry = () => {
    const geometry = new THREE.ConeGeometry();

    // Base
    const baseGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    const baseMesh = new THREE.Mesh(baseGeometry);
    baseMesh.position.y = 0.1;

    // Body
    const bodyGeometry = new THREE.CylinderGeometry(0.25, 0.4, 0.8, 32);
    const bodyMesh = new THREE.Mesh(bodyGeometry);
    bodyMesh.position.y = 0.6;

    // Crown base
    const crownBaseGeometry = new THREE.CylinderGeometry(0.3, 0.25, 0.15, 32);
    const crownBaseMesh = new THREE.Mesh(crownBaseGeometry);
    crownBaseMesh.position.y = 1.075;

    // Crown spikes
    const spikes = [];
    const spikeCount = 8;

    for (let i = 0; i < spikeCount; i++) {
      const angle = (i / spikeCount) * Math.PI * 2;
      const radius = 0.25;

      const spikeGeometry = new THREE.ConeGeometry(0.07, 0.25, 16);
      const spikeMesh = new THREE.Mesh(spikeGeometry);

      spikeMesh.position.x = Math.cos(angle) * radius;
      spikeMesh.position.z = Math.sin(angle) * radius;
      spikeMesh.position.y = 1.25;

      spikes.push(spikeGeometry.clone().applyMatrix4(
        new THREE.Matrix4().makeTranslation(
          Math.cos(angle) * radius,
          1.25,
          Math.sin(angle) * radius
        )
      ));
    }

    // Top sphere
    const topGeometry = new THREE.SphereGeometry(0.12, 32, 32);
    const topMesh = new THREE.Mesh(topGeometry);
    topMesh.position.y = 1.45;

    // Combine all parts
    const geometries = [
      baseGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.1, 0)),
      bodyGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.6, 0)),
      crownBaseGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 1.075, 0)),
      topGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 1.45, 0)),
      ...spikes
    ];

    const queenGeometry = mergeGeometries(geometries);

    return queenGeometry;
  };

  const createRookGeometry = () => {
    const geometry = new THREE.ConeGeometry();

    // Base
    const baseGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    const baseMesh = new THREE.Mesh(baseGeometry);
    baseMesh.position.y = 0.1;

    // Body
    const bodyGeometry = new THREE.CylinderGeometry(0.35, 0.4, 0.6, 32);
    const bodyMesh = new THREE.Mesh(bodyGeometry);
    bodyMesh.position.y = 0.5;

    // Top
    const topGeometry = new THREE.CylinderGeometry(0.45, 0.35, 0.2, 32);
    const topMesh = new THREE.Mesh(topGeometry);
    topMesh.position.y = 0.9;

    // Battlements
    const battlements = [];
    const battlementCount = 4;

    for (let i = 0; i < battlementCount; i++) {
      const angle = (i / battlementCount) * Math.PI * 2;
      const radius = 0.3;

      const battlementGeometry = new THREE.BoxGeometry(0.15, 0.25, 0.15);
      const battlementMesh = new THREE.Mesh(battlementGeometry);

      battlementMesh.position.x = Math.cos(angle) * radius;
      battlementMesh.position.z = Math.sin(angle) * radius;
      battlementMesh.position.y = 1.1;

      battlements.push(battlementGeometry.clone().applyMatrix4(
        new THREE.Matrix4().makeTranslation(
          Math.cos(angle) * radius,
          1.1,
          Math.sin(angle) * radius
        )
      ));
    }

    // Combine all parts
    const geometries = [
      baseGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.1, 0)),
      bodyGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.5, 0)),
      topGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.9, 0)),
      ...battlements
    ];

    const rookGeometry = mergeGeometries(geometries);

    return rookGeometry;
  };

  const createBishopGeometry = () => {
    const geometry = new THREE.ConeGeometry();

    // Base
    const baseGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    const baseMesh = new THREE.Mesh(baseGeometry);
    baseMesh.position.y = 0.1;

    // Body
    const bodyGeometry = new THREE.CylinderGeometry(0.2, 0.4, 0.8, 32);
    const bodyMesh = new THREE.Mesh(bodyGeometry);
    bodyMesh.position.y = 0.6;

    // Head
    const headGeometry = new THREE.SphereGeometry(0.25, 32, 32);
    const headMesh = new THREE.Mesh(headGeometry);
    headMesh.position.y = 1.1;

    // Cut on top
    const cutGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.2, 32);
    const cutMesh = new THREE.Mesh(cutGeometry);
    cutMesh.position.y = 1.4;
    cutMesh.rotation.x = Math.PI / 2;

    // Combine all parts
    const geometries = [
      baseGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.1, 0)),
      bodyGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.6, 0)),
      headGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 1.1, 0)),
      cutGeometry.clone().applyMatrix4(
        new THREE.Matrix4().makeTranslation(0, 1.4, 0)
          .multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2))
      )
    ];

    const bishopGeometry = mergeGeometries(geometries);

    return bishopGeometry;
  };

  const createKnightGeometry = () => {
    const geometry = new THREE.ConeGeometry();

    // Base
    const baseGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    const baseMesh = new THREE.Mesh(baseGeometry);
    baseMesh.position.y = 0.1;

    // Body
    const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.4, 0.4, 32);
    const bodyMesh = new THREE.Mesh(bodyGeometry);
    bodyMesh.position.y = 0.4;

    // Neck
    const neckGeometry = new THREE.CylinderGeometry(0.2, 0.3, 0.3, 32);
    const neckMesh = new THREE.Mesh(neckGeometry);
    neckMesh.position.y = 0.75;
    neckMesh.rotation.x = Math.PI / 8;

    // Head
    const headGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.25);
    const headMesh = new THREE.Mesh(headGeometry);
    headMesh.position.y = 1.05;
    headMesh.position.x = 0.1;
    headMesh.rotation.x = Math.PI / 6;

    // Ears
    const earGeometry = new THREE.ConeGeometry(0.1, 0.3, 16);
    const earMesh = new THREE.Mesh(earGeometry);
    earMesh.position.y = 1.3;
    earMesh.position.x = 0.15;

    // Combine all parts
    const geometries = [
      baseGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.1, 0)),
      bodyGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.4, 0)),
      neckGeometry.clone().applyMatrix4(
        new THREE.Matrix4().makeTranslation(0, 0.75, 0)
          .multiply(new THREE.Matrix4().makeRotationX(Math.PI / 8))
      ),
      headGeometry.clone().applyMatrix4(
        new THREE.Matrix4().makeTranslation(0.1, 1.05, 0)
          .multiply(new THREE.Matrix4().makeRotationX(Math.PI / 6))
      ),
      earGeometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0.15, 1.3, 0))
    ];

    const knightGeometry = mergeGeometries(geometries);

    return knightGeometry;
  };

  // Function to merge geometries
  const mergeGeometries = (geometries) => {
    const mergedGeometry = new THREE.BufferGeometry();

    let vertexCount = 0;
    let indexCount = 0;

    // Count the total number of vertices and indices
    for (const geometry of geometries) {
      vertexCount += geometry.attributes.position.count;
      if (geometry.index) {
        indexCount += geometry.index.count;
      } else {
        indexCount += geometry.attributes.position.count;
      }
    }

    // Create merged buffer attributes
    const positionArray = new Float32Array(vertexCount * 3);
    const normalArray = new Float32Array(vertexCount * 3);
    const uvArray = new Float32Array(vertexCount * 2);
    const indexArray = new Uint32Array(indexCount);

    let positionOffset = 0;
    let normalOffset = 0;
    let uvOffset = 0;
    let indexOffset = 0;
    let currentVertexOffset = 0;

    // Merge the attributes and indices
    for (const geometry of geometries) {
      const positionAttribute = geometry.attributes.position;
      const normalAttribute = geometry.attributes.normal;
      const uvAttribute = geometry.attributes.uv;
      const indexAttribute = geometry.index;

      // Copy positions
      for (let i = 0; i < positionAttribute.count; i++) {
        positionArray[positionOffset++] = positionAttribute.getX(i);
        positionArray[positionOffset++] = positionAttribute.getY(i);
        positionArray[positionOffset++] = positionAttribute.getZ(i);
      }

      // Copy normals
      if (normalAttribute) {
        for (let i = 0; i < normalAttribute.count; i++) {
          normalArray[normalOffset++] = normalAttribute.getX(i);
          normalArray[normalOffset++] = normalAttribute.getY(i);
          normalArray[normalOffset++] = normalAttribute.getZ(i);
        }
      }

      // Copy UVs
      if (uvAttribute) {
        for (let i = 0; i < uvAttribute.count; i++) {
          uvArray[uvOffset++] = uvAttribute.getX(i);
          uvArray[uvOffset++] = uvAttribute.getY(i);
        }
      }

      // Copy indices
      if (indexAttribute) {
        for (let i = 0; i < indexAttribute.count; i++) {
          indexArray[indexOffset++] = indexAttribute.getX(i) + currentVertexOffset;
        }
      } else {
        // If geometry doesn't have indices, create them
        for (let i = 0; i < positionAttribute.count; i++) {
          indexArray[indexOffset++] = i + currentVertexOffset;
        }
      }

      // Update vertex offset for next geometry
      currentVertexOffset += positionAttribute.count;
    }

    // Set merged attributes
    mergedGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    mergedGeometry.setAttribute('normal', new THREE.BufferAttribute(normalArray, 3));
    mergedGeometry.setAttribute('uv', new THREE.BufferAttribute(uvArray, 2));
    mergedGeometry.setIndex(new THREE.BufferAttribute(indexArray, 1));

    return mergedGeometry;
  };

  // Initial animations for the scene
  const animateScene = () => {
    if (!cameraRef.current || chessPiecesRef.current.length === 0 || !chessboardRef.current) return;

    // Animate camera
    gsap.from(cameraRef.current.position, {
      y: 20,
      z: 20,
      duration: 2,
      ease: 'power2.out'
    });

    // Animate chessboard
    gsap.from(chessboardRef.current.position, {
      y: -5,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)'
    });

    // Animate pieces
    chessPiecesRef.current.forEach((piece, index) => {
      gsap.from(piece.position, {
        y: -2,
        duration: 1.5,
        delay: 0.1 * index,
        ease: 'elastic.out(1, 0.5)'
      });

      gsap.from(piece.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1.5,
        delay: 0.1 * index,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  };

  // Handle piece click
  const handlePieceClick = (index) => {
    setActiveStrategyIndex(index);

    // Animate the clicked piece
    if (chessPiecesRef.current[index]) {
      gsap.to(chessPiecesRef.current[index].position, {
        y: 2,
        duration: 0.5,
        ease: 'back.out(1.7)',
        yoyo: true,
        repeat: 1
      });

      gsap.to(chessPiecesRef.current[index].rotation, {
        y: chessPiecesRef.current[index].rotation.y + Math.PI * 2,
        duration: 1,
        ease: 'power2.inOut'
      });
    }
  };

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  const lightBeamVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="enhanced-chess-hero"
      style={{
        position: 'relative',
        minHeight: '90vh',
        width: '100%',
        backgroundColor: '#151515',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      {/* 3D Chess Scene */}
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

      {/* Light beams in background */}
      <motion.div
        variants={lightBeamVariants}
        initial="initial"
        animate="animate"
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '50%',
          height: '140%',
          background: 'radial-gradient(ellipse at center, rgba(229, 162, 68, 0.1) 0%, rgba(229, 162, 68, 0) 70%)',
          transform: 'rotate(-45deg)',
          zIndex: 0,
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        variants={lightBeamVariants}
        initial="initial"
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '50%',
          height: '140%',
          background: 'radial-gradient(ellipse at center, rgba(77, 141, 218, 0.1) 0%, rgba(77, 141, 218, 0) 70%)',
          transform: 'rotate(45deg)',
          zIndex: 0,
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <div
        className="content-container"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          zIndex: 1,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-text"
          style={{
            flex: '1 1 600px',
            maxWidth: isMobile ? '100%' : '600px',
            marginBottom: isMobile ? '2rem' : 0,
          }}
        >
          <motion.div
            variants={itemVariants}
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              marginBottom: '1.5rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <span style={{
              background: 'linear-gradient(90deg, #E5A244, #4D8DDA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}>
              Strategic Business Solutions
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: isMobile ? '2.5rem' : '3.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
            }}
          >
            <span style={{ display: 'block' }}>Master Your</span>
            <span style={{
              background: 'linear-gradient(90deg, #FFFFFF, #CCCCCC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: isMobile ? '3rem' : '4.5rem',
            }}>
              Business Strategy
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: '#e0e0e0',
              marginBottom: '2rem',
              maxWidth: '500px',
            }}
          >
            At Checkmate, we approach business challenges like a chess grandmaster—with foresight,
            precision, and a winning strategy. Our expertise helps you anticipate market shifts,
            outmaneuver competitors, and position your company for long-term success.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#E5A244' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#d69635',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              Explore Services
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Our Approach
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Interactive element */}
        <div
          className="interactive-elements"
          style={{
            flex: '1 1 600px',
            position: 'relative',
            height: isMobile ? '400px' : '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Only show the strategic concept info overlay on mobile */}
          {isMobile && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStrategyIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '0',
                  right: '0',
                  padding: '1.5rem',
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  zIndex: 10,
                  borderLeft: `4px solid ${strategicConcepts[activeStrategyIndex].color}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{
                    fontSize: '2rem',
                    marginRight: '1rem',
                    color: strategicConcepts[activeStrategyIndex].color,
                  }}>
                    {strategicConcepts[activeStrategyIndex].icon}
                  </span>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    color: strategicConcepts[activeStrategyIndex].color,
                  }}>
                    {strategicConcepts[activeStrategyIndex].title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#e0e0e0', lineHeight: 1.6 }}>
                  {strategicConcepts[activeStrategyIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Strategic concept selector - visible only on mobile */}
          {isMobile && (
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem 0',
                zIndex: 10,
              }}
            >
              {strategicConcepts.map((concept, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePieceClick(index)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: index === activeStrategyIndex
                      ? concept.color
                      : 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    margin: '0 0.3rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {concept.icon}
                </motion.button>
              ))}
            </div>
          )}
        </div>

        {/* Strategic pieces info - visible only on desktop */}
        {!isMobile && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStrategyIndex}
              className="strategic-concept-info"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                top: '50%',
                right: '2rem',
                transform: 'translateY(-50%)',
                width: '300px',
                padding: '2rem',
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 0 4px ${strategicConcepts[activeStrategyIndex].color}20`,
                zIndex: 10,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: strategicConcepts[activeStrategyIndex].color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.3), 0 0 0 4px #151515`,
                }}
              >
                {strategicConcepts[activeStrategyIndex].icon}
              </div>

              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  marginTop: '1rem',
                  color: strategicConcepts[activeStrategyIndex].color,
                  textAlign: 'center',
                }}
              >
                {strategicConcepts[activeStrategyIndex].title}
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: '#e0e0e0',
                }}
              >
                {strategicConcepts[activeStrategyIndex].description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1.5rem',
                  width: '100%',
                  padding: '0.8rem',
                  background: 'transparent',
                  border: `1px solid ${strategicConcepts[activeStrategyIndex].color}`,
                  borderRadius: '4px',
                  color: strategicConcepts[activeStrategyIndex].color,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Learn More
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
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <motion.p
          style={{
            fontSize: '0.9rem',
            marginBottom: '0.5rem',
            opacity: 0.7,
          }}
        >
          Scroll to explore
        </motion.p>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnhancedChessHero;