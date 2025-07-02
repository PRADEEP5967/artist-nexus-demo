
import React from 'react';

interface PSLogoProps {
  size?: number;
  className?: string;
}

const PSLogo: React.FC<PSLogoProps> = ({ size = 32, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="psGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      
      {/* Background Circle */}
      <circle cx="32" cy="32" r="30" fill="url(#psGradient)" />
      
      {/* P Letter */}
      <path 
        d="M18 16 L18 48 L22 48 L22 34 L30 34 C36 34 40 30 40 24 C40 18 36 16 30 16 L18 16 Z M22 20 L29 20 C33 20 36 21 36 24 C36 27 33 30 29 30 L22 30 L22 20 Z" 
        fill="white"
      />
      
      {/* S Letter */}
      <path 
        d="M42 20 C42 18 44 16 48 16 C50 16 52 17 52 18 L54 16 C53 15 50 14 48 14 C43 14 40 16 40 20 C40 24 43 25 46 26 C48 27 50 27 50 29 C50 31 48 32 46 32 C44 32 42 31 42 29 L40 31 C41 33 44 34 46 34 C51 34 54 32 54 28 C54 24 51 23 48 22 C46 21 44 21 44 19 C44 18 45 17 46 17 C47 17 48 18 48 19 L50 17 C49 16 47 15 46 15 C43 15 42 17 42 20 Z" 
        fill="white"
      />
    </svg>
  );
};

export default PSLogo;
