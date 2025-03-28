
import React from 'react';
import Navbar from '@/components/Navbar';
import PortfolioGrid from '@/components/PortfolioGrid';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-screen px-4 py-2">
      <Navbar />
      
      <motion.div 
        className="flex flex-col items-center justify-center py-8 flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="cyber-text text-4xl font-display mb-4">PORTFOLIO</h1>
            <p className="text-white/70 mb-8">
              Showcase of notable projects and technological innovations across various domains.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PortfolioGrid />
          </motion.div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
