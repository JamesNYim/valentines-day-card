import React, { useState, useEffect } from "react";
import "./FlowersPage.css";

const emojis = ["🌸", "💐", "🌷", "🌹", "💖", "💘", "💝", "💞", "🩷", "♥️"];

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowers((prevFlowers) => [
        ...prevFlowers,
        {
          id: prevFlowers.length,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          left: Math.random() * 100, // Random horizontal positioning
          delay: Math.random() * 5, // Different animation start times
        },
      ]);
    }, 300); // Add a new flower every 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flowers-container">
      <h1 className="greeting">Happy Valentine's Day! &lt;3</h1>
      {flowers.map((flower) => (
        <span
          key={flower.id}
          className="floating-emoji"
          style={{
            left: `${flower.left}%`,
            animationDelay: `${flower.delay}s`,
          }}
        >
          {flower.emoji}
        </span>
      ))}
    </div>
  );
};

export default Flowers;

