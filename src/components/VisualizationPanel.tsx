
import React from 'react';

interface VisualizationPanelProps {
  type: 'wave' | 'grid' | 'graph';
}

const VisualizationPanel: React.FC<VisualizationPanelProps> = ({ type }) => {
  return (
    <div className="cyber-panel h-40 relative overflow-hidden">
      {type === 'wave' && (
        <div className="absolute inset-0 flex items-end justify-center pb-8">
          <div className="w-full h-20 relative">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i}
                className="absolute bottom-0 bg-cyber-blue"
                style={{
                  width: '2px',
                  height: `${Math.sin(i / 2) * 20 + 30}%`,
                  left: `${(i / 30) * 100}%`,
                  opacity: 0.3 + Math.sin(i / 5) * 0.7,
                  filter: 'blur(1px)'
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
      
      {type === 'grid' && (
        <div className="absolute inset-0">
          <div className="w-full h-full grid grid-cols-6 grid-rows-6">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="relative">
                <div className="absolute inset-0 border-t border-l border-cyber-blue/10"></div>
                {Math.random() > 0.85 && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyber-blue cyber-glow"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {type === 'graph' && (
        <div className="absolute inset-0">
          <div className="w-full h-full grid grid-cols-6 grid-rows-6">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="relative">
                <div className="absolute inset-0 border-t border-l border-cyber-blue/10"></div>
                {Math.random() > 0.85 && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyber-blue cyber-glow"></div>
                )}
              </div>
            ))}
            
            {/* Graph lines */}
            <div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-cyber-blue cyber-glow"></div>
            <div className="absolute top-[40%] left-[50%] w-1.5 h-1.5 rounded-full bg-cyber-blue cyber-glow"></div>
            <div className="absolute top-[60%] left-[20%] w-1.5 h-1.5 rounded-full bg-cyber-blue cyber-glow"></div>
            <div className="absolute top-[80%] left-[70%] w-1.5 h-1.5 rounded-full bg-cyber-blue cyber-glow"></div>
            
            <div className="absolute top-[20%] left-[30%] w-[40%] h-[20%] border-b border-r border-cyber-blue/30"></div>
            <div className="absolute top-[40%] left-[50%] w-[30%] h-[20%] border-b border-r border-cyber-blue/30"></div>
            <div className="absolute top-[60%] left-[20%] w-[50%] h-[20%] border-b border-r border-cyber-blue/30"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualizationPanel;
