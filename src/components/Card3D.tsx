import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (e.g. 15)
  glareOpacity?: number;
  depth?: number; // translateZ depth in px
  onClick?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  maxTilt = 12,
  glareOpacity = 0.25,
  depth = 25,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates normalized from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tilt
  const springConfig = { damping: 20, stiffness: 260, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  // Glare position
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="inline-block w-full h-full"
      onClick={onClick}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative transition-shadow duration-300 ${
          isHovered
            ? 'shadow-[0_25px_50px_-12px_rgba(37,99,235,0.35),0_0_20px_rgba(56,189,248,0.2)]'
            : 'shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)]'
        } ${className}`}
      >
        {/* Children content rendered with 3D depth */}
        <div style={{ transform: `translateZ(${depth}px)`, transformStyle: 'preserve-3d' }}>
          {children}
        </div>

        {/* Dynamic 3D Specular Glare / Light Reflection Overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{
            opacity: isHovered ? glareOpacity : 0,
            background: `radial-gradient(circle 280px at ${glareX.get()} ${glareY.get()}, rgba(255, 255, 255, 0.45), transparent 70%)`,
          }}
        />

        {/* 3D Border Glow Light Line */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-[inherit] border transition-colors duration-300 ${
            isHovered ? 'border-sky-400/60' : 'border-blue-500/20'
          }`}
        />
      </motion.div>
    </div>
  );
};
