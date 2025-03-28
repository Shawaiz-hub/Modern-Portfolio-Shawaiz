
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto">
      <div className="cyber-panel p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="cyber-text text-xl mb-4">Shawaiz</h3>
            <p className="text-white/70 text-sm mb-4">
              Pioneering the future through innovative digital experiences 
              and cutting-edge technological solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="cyber-circle w-10 h-10 flex items-center justify-center hover:bg-cyber-blue/20 transition-colors">
                <Github size={18} className="text-cyber-blue" />
              </a>
              <a href="#" className="cyber-circle w-10 h-10 flex items-center justify-center hover:bg-cyber-blue/20 transition-colors">
                <Linkedin size={18} className="text-cyber-blue" />
              </a>
              <a href="#" className="cyber-circle w-10 h-10 flex items-center justify-center hover:bg-cyber-blue/20 transition-colors">
                <Twitter size={18} className="text-cyber-blue" />
              </a>
              <a href="#" className="cyber-circle w-10 h-10 flex items-center justify-center hover:bg-cyber-blue/20 transition-colors">
                <Mail size={18} className="text-cyber-blue" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="cyber-text text-lg mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-cyber-blue transition-colors">HOME</Link></li>
              <li><Link to="/history" className="text-white/70 hover:text-cyber-blue transition-colors">HISTORY</Link></li>
              <li><Link to="/portfolio" className="text-white/70 hover:text-cyber-blue transition-colors">PORTFOLIO</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-cyber-blue transition-colors">ABOUT ME</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-cyber-blue transition-colors">CONTACT</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="cyber-text text-lg mb-4">CONNECT</h3>
            <p className="text-white/70 text-sm mb-2">
              LOCATION: Gujranwala Nowshehra Road,Street 7
            </p>
            <p className="text-white/70 text-sm mb-2">
              EMAIL: 231980079@gift.edu.pk
            </p>
            <p className="text-white/70 text-sm">
              Phone-Number: +92 3266235229
            </p>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue/20 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-xs mb-4 md:mb-0">
            &copy; 2025 Shawaiz. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-4">
            <Link to="#" className="text-white/50 text-xs hover:text-cyber-blue transition-colors">PRIVACY</Link>
            <Link to="#" className="text-white/50 text-xs hover:text-cyber-blue transition-colors">TERMS</Link>
            <Link to="#" className="text-white/50 text-xs hover:text-cyber-blue transition-colors">COOKIES</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
