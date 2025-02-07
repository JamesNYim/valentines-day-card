import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [generatedLink, setGeneratedLink] = useState(null);
  const [searchParams] = useSearchParams();
  const [showName, setShowName] = useState(false);

  const handleGenerate = () => {
    if (name.trim()) {
      const url = `${window.location.origin}?code=${btoa(name)}`; // Encode the name
      setGeneratedLink(url);
    }
  };

  const encodedName = searchParams.get("code");
  const displayedName = encodedName ? atob(encodedName) : null; // Decode the name

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      {displayedName ? (
        <div>
          <h1>💌 You got a special Valentine's message! 💖</h1>
          {!showName ? (
            <button onClick={() => setShowName(true)}>Click to Reveal</button>
          ) : (
            <h2>Happy Valentine's Day from {displayedName}! ❤️</h2>
          )}
        </div>
      ) : (
        <div>
          <h1>Enter Your Name</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <button onClick={handleGenerate}>Generate Link</button>
          {generatedLink && (
            <p>
              Share this link: <a href={generatedLink}>{generatedLink}</a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

