import { useEffect, useRef } from 'react';

const BubbleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceId = useRef(Math.random().toString(36).substring(2, 9)).current;

  // Reduce bubble count for better performance
  const bubbles = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    size: `${Math.random() * 30 + 10}px`,
    left: `${Math.random() * 95}%`,
    delay: `${Math.random() * 8}s`, // Positive delays only
    duration: `${Math.random() * 10 + 8}s`, // Slightly faster animations
  }));

  useEffect(() => {
    if (typeof document !== "undefined" && containerRef.current) {
      const oceanHeight = containerRef.current.offsetHeight;
      const style = document.createElement('style');
      document.head.appendChild(style);

      style.innerHTML = `
        .ocean[data-id="${instanceId}"] .bubble {
          animation-name: bubble-${instanceId};
        }

        @keyframes bubble-${instanceId} {
          0% {
            transform: translateY(0);
            opacity: 0;
            background-position: 0% 0;
          }
          10% {
            opacity: 0.7; /* Fade in */
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-${oceanHeight + 20}px);
            opacity: 0; /* Fade out at the top */
            background-position: 200% 0;
          }
        }
      `;
    }
  }, [instanceId]);

  return (
    <div 
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden h-full ocean" 
      data-id={instanceId}
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble bg-bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground; 