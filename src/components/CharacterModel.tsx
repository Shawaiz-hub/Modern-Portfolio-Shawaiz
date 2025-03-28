
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface CharacterModelProps {
  imageUrl: string;
}

const CharacterModel: React.FC<CharacterModelProps> = ({ imageUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    
    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    camera.position.z = 3;
    
    // Create plane for the character image
    const loader = new THREE.TextureLoader();
    loader.load(imageUrl, (texture) => {
      const aspectRatio = texture.image.width / texture.image.height;
      const imageHeight = 3;
      const imageWidth = imageHeight * aspectRatio;
      
      const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      
      const imagePlane = new THREE.Mesh(geometry, material);
      scene.add(imagePlane);
      
      // Create particles around the character
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 200;
      const posArray = new Float32Array(particlesCount * 3);
      
      for (let i = 0; i < particlesCount * 3; i++) {
        // Position particles in a box shape around the character
        posArray[i] = (Math.random() - 0.5) * 5;
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.01,
        color: 0x00BFFF,
        transparent: true,
        opacity: 0.8,
      });
      
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      
      setLoaded(true);
      
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        
        // Rotate particles
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;
        
        // Slight movement of the character
        imagePlane.position.y = Math.sin(Date.now() * 0.001) * 0.1;
        
        renderer.render(scene, camera);
      };
      
      animate();
    });
    
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
    
    // Clean up
    return () => {
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [imageUrl]);
  
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div ref={containerRef} className="absolute inset-0"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 w-full h-px bg-cyber-blue/20"></div>
        <div className="absolute left-1/2 h-full w-px bg-cyber-blue/20"></div>
      </div>
      
      {!loaded && (
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-cyber-dark/50"
        >
          <div className="cyber-circle w-12 h-12 animate-pulse-glow">
            <div className="cyber-circle w-8 h-8 animate-pulse"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CharacterModel;
