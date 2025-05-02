import { useEffect, useRef, useState } from 'react';

const FireflyCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeout = useRef<number | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      setIsMoving(true);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = window.setTimeout(() => setIsMoving(false), 100);
    };

    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 16,
        height: 16,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        background: isMoving
          ? 'radial-gradient(circle, #ffeb3b 70%, #fffde4 100%)'
          : 'radial-gradient(circle, #ffeb3b 40%, #fffde4 100%)',
        boxShadow: isMoving
          ? '0 0 40px 20px #ffeb3b, 0 0 80px 40px #ffeb3b55'
          : '0 0 20px 10px #ffeb3b, 0 0 20px 10px #ffeb3b33',
        borderRadius: '50%',
        opacity: 0.8,
        transition: 'box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s cubic-bezier(0.4,0,0.2,1)',
        mixBlendMode: 'screen',
        filter: isMoving ? 'blur(0.5px)' : 'blur(0.8px)',
      }}
    />
  );
};

export default FireflyCursor; 