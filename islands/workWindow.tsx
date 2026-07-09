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
              style="font-size: 2em; font-weight: bold; margin: 0.67em 0; display: block;"
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
          <hr
            style={"border: none; height: 1px; background-color: #ccc; opcacity: 0.5;"}
          >
          </hr>
          <div>
            <a
              href={"https://github.com/Digiyumon/FightingGameReactionWebsite"}
              style="font-size: 2em; font-weight: bold; margin: 0.67em 0; display: block;"
              target={"_blank"}
            >
              Street Fighter Reaction Test Website
            </a>
            <p>
              I originally made this due to a Maximillian Dood video that was
              posted on YouTube In it there was discussion about reaction times
              for Brian's snake edge in tekken. People were flocking to the
              human benchmark reaction test website to see if they had the
              reaction time for it.
              <br />
              However, as Max pointed out in the video, a binary reaction time
              test is not really how fighting games are. There are literally
              tens of hundreds of different scenarios, each with their own
              "correct" option. Because of this, I decided to try and make this
              website to be a more accurate representation of a reaction time
              test for fighting game players. As of right now, the only game is
              street fighter 6, but after I get this up and running, if people
              really want me to, I can add Tekken or whatever else to the
              website!
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
