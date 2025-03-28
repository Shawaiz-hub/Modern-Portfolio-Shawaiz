
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSphere from '@/components/HeroSphere';
import InfoPanel from '@/components/InfoPanel';
import StatsDisplay from '@/components/StatsDisplay';
import SkillBar from '@/components/SkillBar';
import CircleButton from '@/components/CircleButton';
import PortfolioGrid from '@/components/PortfolioGrid';
import VisualizationPanel from '@/components/VisualizationPanel';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Trigger animation on page load
    const animateOnLoad = () => {
      document.body.classList.add('page-loaded');
    };
    
    animateOnLoad();
    return () => document.body.classList.remove('page-loaded');
  }, []);

  return (
    <div className="flex flex-col min-h-screen px-4 py-2">
      <Navbar />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Column */}
        <motion.div 
          className="flex flex-col space-y-4"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <InfoPanel title="CAPABILITIES">
            <div className="mt-2">
              <SkillBar name="DEVELOPMENT" percentage={85} />
              <SkillBar name="INTERFACE DESIGN" percentage={92} />
              <SkillBar name="NETWORKING" percentage={78} />
            </div>
          </InfoPanel>
          
          <div className="cyber-panel p-4">
            <div className="flex space-x-2 mb-4">
              <CircleButton value="01" size="sm" active />
              <CircleButton value="02" size="sm" />
              <CircleButton value="03" size="sm" />
              <CircleButton value="04" size="sm" />
            </div>
            
            <button className="cyber-button w-full">ACTIVATE</button>
          </div>
        </motion.div>
        
        {/* Middle Column - Main Hero */}
        <motion.div 
          className="flex flex-col space-y-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroSphere />
          
          <div className="cyber-panel p-6">
            <h1 className="cyber-text text-4xl font-display mb-2">DOBEROE DOBILE</h1>
            <p className="text-white/70 text-sm mb-6">
              PROFESSIONALLY CRAFTED INTERFACES TO DELIVER EXCEPTIONAL DIGITAL EXPERIENCES. REVOLUTIONIZING INTERACTION.
            </p>
            
            <StatsDisplay />
          </div>
        </motion.div>
        
        {/* Right Column */}
        <motion.div 
          className="flex flex-col space-y-4"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="cyber-panel p-4 flex flex-col items-center justify-center">
            <div className="cyber-circle w-24 h-24 mb-4 flex items-center justify-center animate-pulse-glow">
              <span className="cyber-text text-3xl">SH</span>
            </div>
            <h3 className="cyber-text uppercase mb-1">PORTAL C</h3>
            <p className="text-white/70 text-xs uppercase mb-3">ARCHITECT.AIML</p>
            <div className="w-full bg-cyber-dark/50 h-px mb-3"></div>
            <p className="text-white/60 text-[10px] text-center">INNOVATOR RANK 1.8</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="cyber-panel p-2 flex flex-col items-center justify-center">
              <CircleButton value="19" />
            </div>
            <div className="cyber-panel p-2 flex flex-col items-center justify-center">
              <CircleButton value="0" />
            </div>
          </div>
          
          <div className="cyber-panel p-2 flex flex-col items-center justify-center">
            <CircleButton value="22" size="lg" />
          </div>
          
          <div className="cyber-panel p-2 flex flex-col items-center justify-center">
            <div className="w-full text-center">
              <span className="cyber-text text-sm">IV</span>
              <p className="text-white/70 text-[10px] uppercase mt-1">CONNECTIONS</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Visualization Panels Row */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <VisualizationPanel type="wave" />
        <VisualizationPanel type="grid" />
        <VisualizationPanel type="graph" />
      </motion.div>
      
      {/* Portfolio Grid */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="cyber-text text-2xl font-display mb-4">LATEST PROJECTS</h2>
        <PortfolioGrid />
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Index;
