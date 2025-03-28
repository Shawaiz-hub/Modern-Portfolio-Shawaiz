
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroSphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    
    camera.position.z = 2.5;
    
    // Create sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00BFFF,
      size: 0.02,
      transparent: true,
      opacity: 0.8,
    });
    
    // Create a point cloud (particles)
    const pointCloud = new THREE.Points(sphereGeometry, particleMaterial);
    scene.add(pointCloud);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x00BFFF, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate sphere
      pointCloud.rotation.y += 0.002;
      pointCloud.rotation.x += 0.001;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
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
  }, []);
  
  return (
    <div className="cyber-panel relative aspect-square w-full h-full flex items-center justify-center overflow-hidden">
      <div ref={containerRef} className="w-full h-full"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="cyber-circle w-2 h-2 bg-cyber-blue"></div>
        </div>
        <div className="absolute top-1/2 w-full h-px bg-cyber-blue/20"></div>
        <div className="absolute left-1/2 h-full w-px bg-cyber-blue/20"></div>
      </div>
    </div>
  );
};

export default HeroSphere;
