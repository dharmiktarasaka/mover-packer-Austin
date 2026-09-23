import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // primary (orange), charcoal, outline, ghost
  className = '',
  size = 'md',
  type = 'button'
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-display font-semibold tracking-tight transition-colors duration-200 select-none group";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3.5 text-sm uppercase tracking-wider",
    lg: "px-8 py-5 text-base uppercase tracking-wider",
  };

  const variantStyles = {
    primary: "bg-electric-orange text-white hover:bg-electric-orange-hover border-2 border-charcoal shadow-sharp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    charcoal: "bg-charcoal text-white hover:bg-black border-2 border-charcoal shadow-sharp-orange active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    outline: "bg-transparent text-charcoal hover:bg-charcoal hover:text-white border-2 border-charcoal shadow-sharp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    ghost: "bg-transparent text-charcoal hover:text-electric-orange underline-offset-4 hover:underline p-0",
    ivory: "bg-ivory text-charcoal hover:bg-white border-2 border-charcoal shadow-sharp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x: position.x, y: position.y },
    transition: { type: "spring", stiffness: 200, damping: 15, mass: 0.1 }
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={combinedStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      {...motionProps}
      className={combinedStyles}
    >
      {children}
    </motion.button>
  );
}
