import { useState } from "react";
import "./CardCreation.css"; 

function CardCreation() {
  const [name, setName] = useState("");
  const [generatedLink, setGeneratedLink] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (name.trim()) {
      const url = `${window.location.origin}/valentines-day-card/#/card?code=${btoa(name)}`;
      setGeneratedLink(url);

      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="creation-container">
      <h1>Create Your Valentine's Card 💌</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
        className="input"
      />
      <button className="button" onClick={handleGenerate}>
        Generate & Copy Link
      </button>
      {generatedLink && (
        <p className="link-container">
          Share this link: <a href={generatedLink} className="link">{generatedLink}</a>
          <br />
          {copied && <span className="copied-text"> Copied!</span>}
        </p>
      )}
    </div>
  );
}

export default CardCreation;

