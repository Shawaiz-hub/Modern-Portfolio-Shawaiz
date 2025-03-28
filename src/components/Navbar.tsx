
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="w-full py-4 px-6 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          
          <Link to="/" className="cyber-text text-xl tracking-widest">Shawaiz</Link>
          
          <div className="hidden md:flex items-center space-x-20 ">
            <Link to="/" className="cyber-text text-sm border-b-2 border-cyber-blue pb-1 transition-all hover:border-opacity-100">Home</Link>
            <Link to="/history" className="cyber-text text-sm border-b-2 border-cyber-blue pb-1 transition-all hover:border-opacity-100">History</Link>
            <Link to="/portfolio" className="cyber-text text-sm border-b-2 border-cyber-blue pb-1 transition-all hover:border-opacity-100 ">Portfolio</Link>
            <Link to="/about" className="cyber-text text-sm border-b-2 border-cyber-blue pb-1 transition-all hover:border-opacity-100">About</Link>
            <Link to="/contact" className="cyber-text text-sm border-b-2 border-cyber-blue pb-1 transition-all hover:border-opacity-100 ">Contact</Link>
            <Link to="/admin" className="cyber-text text-sm border-b-2 border-cyber-blue pb-1 transition-all hover:border-opacity-100">Admin</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="cyber-text text-xs tracking-wider">2025 • 03</div>
          <div className="cyber-circle w-8 h-8 bg-cyber-blue/10">
            <div className="cyber-circle w-6 h-6 bg-cyber-blue/20"></div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-cyber-blue" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyber-dark/90 backdrop-blur-md z-50 mt-2 cyber-panel animate-fade-in">
          <div className="flex flex-col p-4 space-y-3">
            <Link to="/" className="cyber-text text-sm py-2 border-b border-cyber-blue/20" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/history" className="text-white/70 hover:text-cyber-blue text-sm py-2 border-b border-cyber-blue/20" onClick={() => setIsMenuOpen(false)}>HISTORY</Link>
            <Link to="/portfolio" className="text-white/70 hover:text-cyber-blue text-sm py-2 border-b border-cyber-blue/20" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</Link>
            <Link to="/about" className="text-white/70 hover:text-cyber-blue text-sm py-2 border-b border-cyber-blue/20" onClick={() => setIsMenuOpen(false)}>ABOUT ME</Link>
            <Link to="/contact" className="text-white/70 hover:text-cyber-blue text-sm py-2 border-b border-cyber-blue/20" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
            <Link to="/admin" className="text-white/70 hover:text-cyber-blue text-sm py-2" onClick={() => setIsMenuOpen(false)}>ADMIN</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
