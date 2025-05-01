import React, { useMemo } from 'react';

const Fireflies: React.FC = () => {
  const fireflies = useMemo(() => {
    const quantity = 15;
    const fireflies = [];

    for (let i = 1; i <= quantity; i++) {
      const steps = Math.floor(Math.random() * 12) + 16;
      const rotationSpeed = Math.floor(Math.random() * 10) + 8;
      const flashDuration = Math.floor(Math.random() * 6000) + 5000;
      const flashDelay = Math.floor(Math.random() * 8000) + 500;

      const keyframes = Array.from({ length: steps + 1 }, (_, step) => {
        const percentage = (step * 100) / steps;
        const x = Math.random() * 100 - 50;
        const y = Math.random() * 100 - 50;
        const scale = Math.random() * 0.75 + 0.25;
        return `${percentage}% { transform: translateX(${x}vw) translateY(${y}vh) scale(${scale}); }`;
      }).join('\n');

      fireflies.push({
        id: i,
        rotationSpeed,
        flashDuration,
        flashDelay,
        keyframes,
      });
    }

    return fireflies;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="firefly"
          style={{
            position: 'fixed',
            left: '50%',
            top: '50%',
            width: '0.4vw',
            height: '0.4vw',
            margin: '-0.2vw 0 0 9.8vw',
            animation: `move${firefly.id} 200s ease alternate infinite`,
          }}
        />
      ))}
      <style>
        {`
          .firefly {
            position: fixed;
            left: 50%;
            top: 50%;
            width: 0.4vw;
            height: 0.4vw;
            margin: -0.2vw 0 0 9.8vw;
            pointer-events: none;
          }

          .firefly::before,
          .firefly::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            transform-origin: -10vw;
          }

          .firefly::before {
            background: #ffeb3b;
            opacity: 0.4;
          }

          .firefly::after {
            background: #ffeb3b;
            opacity: 0;
            box-shadow: 0 0 0vw 0vw #ffeb3b;
          }

          @keyframes drift {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes flash {
            0%, 30%, 100% {
              opacity: 0;
              box-shadow: 0 0 0vw 0vw #ffeb3b;
            }
            5% {
              opacity: 1;
              box-shadow: 0 0 2vw 0.4vw #ffeb3b;
            }
          }

          ${fireflies.map(
            (firefly) => `
            .firefly:nth-child(${firefly.id})::before {
              animation: drift ${firefly.rotationSpeed}s ease alternate infinite;
            }

            .firefly:nth-child(${firefly.id})::after {
              animation: drift ${firefly.rotationSpeed}s ease alternate infinite, flash ${firefly.flashDuration}ms ease infinite;
              animation-delay: 0ms, ${firefly.flashDelay}ms;
            }

            @keyframes move${firefly.id} {
              ${firefly.keyframes}
            }
          `
          )}
        `}
      </style>
    </div>
  );
};

export default Fireflies; 