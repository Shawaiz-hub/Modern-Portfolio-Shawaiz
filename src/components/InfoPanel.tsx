
import React from 'react';

interface InfoPanelProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ title, description, children }) => {
  return (
    <div className="cyber-panel p-4 h-full flex flex-col">
      <h3 className="cyber-text text-lg font-display mb-2">{title}</h3>
      {description && <p className="text-white/70 text-sm mb-4">{description}</p>}
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default InfoPanel;
