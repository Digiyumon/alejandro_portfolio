import { h } from "preact";
import DraggableCard from "../islands/DraggableBar.tsx";

const playSound = () => {
  const audio = new Audio("/audio/new-click.mp3");
  audio.loop = false;
  audio.play();
};

const set_hidden = () => {
  const target = document.getElementById("work-window");
  if (target?.classList.contains("not-hidden")) {
    target.classList.remove("not-hidden");
    setTimeout(() => {
      target.classList.add("hidden");
    }, 5);
  }
};

const App = () => {
  return (
    <DraggableCard
      id={"work-window"}
      className="draggable-bar hidden not-opened"
    >
      <div class="window-header">
        <p class="window-title">work</p>
        <button
          class="close-button"
          onClick={() => {
            playSound();
            set_hidden();
          }}
        >
          <span>|x|</span>
        </button>
      </div>
      <div class="window-content">
        <h1>work</h1>
      </div>
    </DraggableCard>
  );
};

export default App;
