import React, { useState, useEffect } from "react";

export default function Cursor() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.pageX);
      setMouseY(e.pageY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    background: `radial-gradient(400px at ${mouseX}px ${mouseY}px, rgba(216, 29, 175, 0.10), transparent 80%)`
  };

  return (
    <div className="cursor pointer-events-none absolute inset-0 z-0 transition duration-300 h-[4468px]" style={style}>
    </div>
  );
}
