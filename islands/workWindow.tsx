import DraggableCard from "../islands/DraggableBar.tsx";
import MusicalTag from "./MusicalTag.tsx";

const playSound = () => {
  const audio = new Audio("/audio/close_window.mp3");
  audio.loop = false;
  audio.volume = 0.2;
  audio.play();
};

const set_hidden = () => {
  const target = document.getElementById("work-window");
  if (target?.classList.contains("not-hidden")) {
    target.classList.remove("not-hidden");
    target.classList.add("hidden");
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
        <div id="work-window-tools">
          <h2>tools</h2>
          <MusicalTag />
        </div>
        <hr />
        <div id="work-window-projects">
          <h2>projects</h2>
          <p>THIS WEBSITE!</p>
          <hr
            style={"border: none; height: 1px; background-color: #ccc; opcacity: 0.5;"}
          >
          </hr>
          <div>
            <a
              href={"https://github.com/Digiyumon/Speedrun.com_api_python_cli"}
              style="font-size: 2em; font-weight: bold; margin: 0.67em 0; display: block; color: inherit;"
              target={"_blank"}
            >
              Speedrun.com Data Export Tool
            </a>
            <p>
              A Python command-line application that lets you search for any
              game on Speedrun.com, view its categories, and export full
              leaderboard data to CSV or JSON — all without manually touching
              the API. You can export key information such as player names,
              dates, times, and platform. If provided with a key.json file, the
              app can also upload the exported data directly to a Google Cloud
              Storage bucket.
              <br></br>
              I created this because working with the API manually is an
              incredible hassle and I couldn't find anything that already
              accomplished what this program sets out to do. Instead of needing
              to locate game IDs, categories, and variable parameters for a URL,
              you can use this tool to handle everything for you automatically.
            </p>
          </div>
          <p>
            As well as anything else on my{" "}
            <a href={"https://github.com/Digiyumon"} target={"_blank"}>
              github
            </a>, with more coming soon!
          </p>
        </div>
      </div>
    </DraggableCard>
  );
};

export default App;
