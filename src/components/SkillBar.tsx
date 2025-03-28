
import React from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-white/80">{name}</span>
        <span className="text-xs text-cyber-blue">{percentage}%</span>
      </div>
      <div className="cyber-progress">
        <div 
          className="cyber-progress-bar animate-pulse-glow" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
