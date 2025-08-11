import React from "react";

// Animated, layered background with soft radial gradients and film-grain noise
export const MotionBackground: React.FC = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 motion-bg" />
  );
};

export default MotionBackground;
