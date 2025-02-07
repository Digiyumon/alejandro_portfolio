import { h } from "preact";
import DraggableCard from "../islands/DraggableBar.tsx";

const playSound = () => {
  const audio = new Audio("/audio/new-click.mp3");
  audio.loop = false;
  audio.play();
};

const set_hidden = () => {
  const target = document.getElementById("about-window");
  if (target?.classList.contains("not-hidden")) {
    target.classList.remove("not-hidden");
    setTimeout(() => {
      target.classList.add("hidden");
    }, 5);
  }
};

const App = () => {
  return (
    <DraggableCard>
      <div id="work-window" class="not-hidden">
        <div class="window-header">
          <p class="window-title">about</p>
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
      </div>
    </DraggableCard>
  );
};

export default App;
