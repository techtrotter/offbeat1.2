
import React from 'react';
import { Plane } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true }) => {
  // Size mapping
  const sizeMap = {
    sm: { icon: 16, text: 'text-lg' },
    md: { icon: 24, text: 'text-xl' },
    lg: { icon: 32, text: 'text-2xl' },
  };
  
  const selectedSize = sizeMap[size];

  return (
    <div className="flex items-center">
      <div className={`p-2 bg-offbeat-lime rounded-full mr-${withText ? '2' : '0'}`}>
        <Plane 
          size={selectedSize.icon} 
          className="text-offbeat-charcoal transform -rotate-45" 
        />
      </div>
      
      {withText && (
        <span className={`font-bold ${selectedSize.text} text-offbeat-charcoal`}>
          Offbeat
        </span>
      )}
    </div>
  );
};

export default Logo;
