import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FlowersPage.css";

const emojis = ["🌸", "💐", "🌷", "🌹", "💖", "💘", "💝", "💞", "🩷", "♥️"];

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Gradually add flowers for continuous flow
    const interval = setInterval(() => {
      setFlowers((prevFlowers) => [
        ...prevFlowers,
        {
          id: prevFlowers.length,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          left: Math.random() * 100, // Random horizontal positioning
          delay: Math.random() * 5, // Different animation start times
          zIndex: Math.random() > 0.5 ? 1 : -1, // Randomly place in front or behind
        },
      ]);
    }, 300); // Add a new flower every 300ms

    // Show the heart button after 5 seconds
    const buttonTimeout = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(buttonTimeout);
    };
  }, []);

  return (
    <div className="flowers-container">
      <h1 className="greeting">Happy Valentine's Day! </h1>
      {flowers.map((flower) => (
        <span
          key={flower.id}
          className="floating-emoji"
          style={{
            left: `${flower.left}%`,
            animationDelay: `${flower.delay}s`,
            zIndex: flower.zIndex, // Randomly set z-index
          }}
        >
          {flower.emoji}
        </span>
      ))}

      {/* Heart button to go back to the main page */}
      {showButton && (
        <button className="heart-button" onClick={() => navigate("/")}>
          &lt;3
        </button>
      )}
    </div>
  );
};

export default Flowers;

