import React from 'react';

const StarryNight: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" 
      style={{ 
        background: 'linear-gradient(to bottom, #0a2434 0%, #1c4c3c 100%)'
      }}
    >
      <div className="stars absolute inset-0" style={{ background: 'transparent' }}>
        {[...Array(200)].map((_, i) => {
          const size = Math.random() * 2;
          const animationDuration = 1 + Math.random() * 3;
          const top = `${Math.random() * 100}%`;
          const left = `${Math.random() * 100}%`;
          
          return (
            <div
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                top,
                left,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                animation: `twinkle ${animationDuration}s infinite ease-in-out`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarryNight; 