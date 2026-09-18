import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 35,
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(0, 229, 255, 0.2)',
      border: '1px solid rgba(0, 229, 255, 0.5)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 35,
      }
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 1,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 0,
    }
  };

  // Do not render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-outline"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
      />
      <motion.div
        className="cursor-dot"
        variants={dotVariants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
    </>
  );
};

export default CustomCursor;

