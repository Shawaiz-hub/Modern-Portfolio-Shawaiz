
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const History = () => {
  const timelineItems = [
    {
      year: "2068",
      description: "Pioneered the development of advanced neural interface systems, revolutionizing human-computer interaction and digital experience design."
    },
    {
      year: "2069",
      description: "Launched the first fully immersive virtual environment platform with adaptive learning capabilities, gaining recognition in the cybernetic community."
    },
    {
      year: "2070",
      description: "Current: Developing next-generation holographic projection systems and working on integration with quantum computing networks."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen px-4 py-2">
      <Navbar />
      
      <motion.div 
        className="flex flex-col items-center justify-center flex-grow py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="cyber-panel p-6 max-w-3xl w-full"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="cyber-text text-4xl font-display mb-4">HISTORY</h1>
          <p className="text-white/70 mb-6">
            Timeline of significant achievements and milestones in technological advancement.
          </p>
          
          <div className="space-y-6 relative">
            <div className="absolute left-8 top-2 bottom-0 w-px bg-cyber-blue/30"></div>
            
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                className="cyber-panel p-4 pl-12 relative"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
                  <div className="cyber-circle w-8 h-8 bg-cyber-blue/10">
                    <div className="cyber-circle w-4 h-4 bg-cyber-blue/30"></div>
                  </div>
                </div>
                <h2 className="cyber-text text-xl mb-2">{item.year}</h2>
                <p className="text-white/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default History;
