
import React from 'react';

interface CircleButtonProps {
  value: string | number;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
}

const CircleButton: React.FC<CircleButtonProps> = ({ 
  value, 
  onClick, 
  size = 'md',
  active = false
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-base',
    lg: 'w-20 h-20 text-xl'
  };
  
  return (
    <button 
      onClick={onClick}
      className={`cyber-circle ${sizeClasses[size]} ${active ? 'bg-cyber-blue/30' : 'bg-cyber-panel hover:bg-cyber-blue/20'} transition-all duration-300`}
    >
      <span className="cyber-text">{value}</span>
    </button>
  );
};

export default CircleButton;
