import { useState } from "preact/hooks";

interface ButtonProps {
  text: string;
  onHover: () => void;
}

const generateSoundsArray = (numOfFiles: number) => {
  const sounds: string[] = [];
  for (let i = 1; i <= numOfFiles; i++) {
    sounds.push(`./audio/MusicalTagSounds/${i}Note.mp3`);
  }
  return sounds;
};

const sounds = generateSoundsArray(16); // Generate once and use globally

const HoverButton = ({ text, onHover }: ButtonProps) => {
  return (
    <button
      onMouseEnter={onHover}
      style={{
        padding: "10px 20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontSize: "16px",
        background: "white",
        cursor: "pointer",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.1s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(3px)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {text}
    </button>
  );
};

const App = () => {
  const [hoverCount, setHoverCount] = useState(0);

  const handleHover = () => {
    const soundIndex = hoverCount % sounds.length; // Global counter
    const audio = new Audio(sounds[soundIndex]);
    audio.play();
    setHoverCount(hoverCount + 1);
  };

  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      <HoverButton text="HTML/CSS" onHover={handleHover} />
      <HoverButton text="JavaScript" onHover={handleHover} />
      <HoverButton text="React/Preact" onHover={handleHover} />
      <HoverButton text="Java" onHover={handleHover} />
      <HoverButton text="Python" onHover={handleHover} />
      <HoverButton text="C#" onHover={handleHover} />
    </div>
  );
};

export default App;
