
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileDown, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import CharacterModel from '@/components/CharacterModel';

const AboutMe = () => {
  const skills = [
    { name: "FRONTEND DEVELOPMENT", level: 95 },
    { name: "UI/UX DESIGN", level: 90 },
    { name: "3D MODELING", level: 85 },
    { name: "AI INTEGRATION", level: 88 },
    { name: "QUANTUM COMPUTING", level: 78 },
    { name: "NEURAL INTERFACES", level: 92 }
  ];

  return (
    <div className="flex flex-col min-h-screen px-4 py-2">
      <Navbar />
      
      <motion.div 
        className="flex-grow py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - 3D model */}
            <motion.div 
              className="cyber-panel p-4 h-[500px] lg:col-span-1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CharacterModel imageUrl="/lovable-uploads/3b96da11-c8ac-4774-b04a-f3cc13ea367d.png"  />
            </motion.div>
            
            {/* Right column - About info */}
            <motion.div 
              className="cyber-panel p-6 lg:col-span-2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="cyber-text text-4xl font-display mb-4">Shawaiz Data Scientist</h1>
              <div className="flex space-x-4 mb-4">
                <span className="text-white/70 text-sm bg-cyber-blue/10 px-3 py-1 rounded-full border border-cyber-blue/20">INTERFACE ARCHITECT</span>
                <span className="text-white/70 text-sm bg-cyber-blue/10 px-3 py-1 rounded-full border border-cyber-blue/20">SYSTEM ENGINEER</span>
              </div>
              
              <p className="text-white/70 mb-6">
                Pioneer in neural interface systems and holographic environments with over 15 years 
                of experience pushing the boundaries of human-computer interaction. Specialized in 
                creating seamless experiences between digital and physical realms using cutting-edge 
                technology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="cyber-text text-sm mb-2">LOCATION</h3>
                  <p className="text-white/70 text-sm">Gujranwala || Pakistan</p>
                </div>
                <div>
                  <h3 className="cyber-text text-sm mb-2">DATE OF BIRTH</h3>
                  <p className="text-white/70 text-sm">2003.06.12</p>
                </div>
                <div>
                  <h3 className="cyber-text text-sm mb-2">EMAIL</h3>
                  <p className="text-white/70 text-sm">231980079@gift.edu.pk</p>
                </div>
                <div>
                  <h3 className="cyber-text text-sm mb-2">Phone Number</h3>
                  <p className="text-white/70 text-sm">03266235229</p>
                </div>
              </div>
              
              <div className="flex space-x-4 mb-8">
                <Button className="cyber-button">
                  <FileDown className="mr-2 h-4 w-4" />
                  DOWNLOAD CV
                </Button>
                <Button className="cyber-button" >
                  <Mail className="mr-2 h-4 w-4" />
                  CONTACT ME
                </Button>
              </div>
              
              <h2 className="cyber-text text-xl mb-4">TECHNICAL PROFICIENCY</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-2"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-white/80 text-sm">{skill.name}</span>
                      <span className="cyber-text text-sm">{skill.level}%</span>
                    </div>
                    <div className="cyber-progress">
                      <motion.div 
                        className="cyber-progress-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Timeline section */}
          <motion.div 
            className="cyber-panel p-6 mt-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="cyber-text text-2xl font-display mb-6">EXPERIENCE TIMELINE</h2>
            <div className="relative border-l-2 border-cyber-blue/30 pl-8 pb-4">
              {/* Timeline entries */}
              {[
                { 
                  year: "2019 - PRESENT",
                  title: "CHIEF INTERFACE ARCHITECT",
                  company: "NEXUS CORPORATION",
                  description: "Leading the development of next-generation neural interface systems integrating quantum processing with human cognition."
                },
                { 
                  year: "2017 - 2019",
                  title: "SENIOR SYSTEMS ENGINEER",
                  company: "OSAKA TECH DYNAMICS",
                  description: "Pioneered holographic environment systems with tactile feedback mechanisms, increasing immersion metrics by 78%."
                },
                { 
                  year: "2015 - 2017",
                  title: "INTERFACE DESIGNER",
                  company: "SYNTHETIC REALITIES INC",
                  description: "Designed immersive interfaces for corporate and entertainment sectors, specializing in multi-sensory feedback systems."
                }
              ].map((entry, index) => (
                <motion.div 
                  key={index} 
                  className="mb-8 relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                >
                  <div className="absolute -left-[41px] top-1">
                    <div className="cyber-circle w-5 h-5 bg-cyber-blue/30">
                      <div className="cyber-circle w-3 h-3 bg-cyber-blue/60"></div>
                    </div>
                  </div>
                  <h3 className="cyber-text text-lg mb-1">{entry.year}</h3>
                  <h4 className="text-white font-medium text-lg mb-1">{entry.title}</h4>
                  <h5 className="text-white/70 mb-2">{entry.company}</h5>
                  <p className="text-white/60 text-sm">{entry.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
