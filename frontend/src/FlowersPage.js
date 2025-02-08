import { useEffect, useState } from "react";
import "./FlowersPage.css";

function FlowersPage() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowers((prev) => {
        const newFlowers = [
          ...prev,
          { id: prev.length, left: Math.random() * 100 + "vw" },
        ];
        console.log("Updated Flowers:", newFlowers); // Debugging log
        return newFlowers;
      });
    }, 500); // Add a new flower every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flowers-container">
      <h1>🌸 Yay! You said Yes! 🌷💖</h1>
      {flowers.length > 0 ? (
        flowers.map((flower) => (
          <div key={flower.id} className="flower" style={{ left: flower.left }}>
            🌸
          </div>
        ))
      ) : (
        <p>No flowers yet... 🌸</p>
      )}
    </div>
  );
}

export default FlowersPage;

