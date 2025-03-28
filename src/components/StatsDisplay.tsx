
import React from 'react';

interface StatItemProps {
  value: string | number;
  label: string;
  sublabel?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, sublabel }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="cyber-text text-2xl font-display">{value}</span>
      <span className="text-white/70 text-xs uppercase mt-1">{label}</span>
      {sublabel && <span className="text-white/50 text-[10px] mt-0.5">{sublabel}</span>}
    </div>
  );
};

const StatsDisplay: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-4 mt-8">
      <StatItem value="22" label="YEARS" sublabel="EXPERIENCE" />
      <StatItem value="8" label="AWARDS" sublabel="WON" />
      <StatItem value="22" label="CLIENTS" sublabel="WORLDWIDE" />
    </div>
  );
};

export default StatsDisplay;
