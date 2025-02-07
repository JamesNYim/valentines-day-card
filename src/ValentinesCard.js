import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./ValentinesCard.css"; // Import the styles

function ValentinesCard() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("code") ? atob(searchParams.get("code")) : "Someone";
  const [noCount, setNoCount] = useState(0);
  const navigate = useNavigate(); // For page navigation

  const handleNoClick = () => {
    if (noCount < 8) {
      setNoCount(noCount + 1);
    }
  };

  const handleYesClick = () => {
    navigate("/flowers"); // Redirect to flowers page
  };

  return (
    <div className="valentine-container">
      <h1>Will you be {name}'s Valentine? 💖</h1>
      <div className="button-container">
        <button
          className="yes-button"
          style={{
            fontSize: `${16 + noCount * 5}px`, // Increase size
            padding: `${10 + noCount * 2}px ${20 + noCount * 4}px`,
            width: noCount >= 8 ? "100%" : "auto", // Full screen after 8 presses
            height: noCount >= 8 ? "100vh" : "auto",
          }}
          onClick={handleYesClick}
        >
          YES 💕
        </button>
        {noCount < 8 && (
          <button className="no-button" onClick={handleNoClick}>
            No 😢
          </button>
        )}
      </div>
    </div>
  );
}

export default ValentinesCard;

