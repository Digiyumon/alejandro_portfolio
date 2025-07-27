import DraggableCard from "./DraggableBar.tsx";
import ProgressBar from "./ProgressBar.tsx";

//TODO: make it to where the age automatically updates whenever the birthday is reached
//TODO: add a list of your hobbies and what you like to do (similar to what kevin said to do for your resume)(mention pixel art and how the pixel art on the page was made by you)
//TODO: if another window is being dragged, it should be on top of the other windows
//TODO: make sure the form sends for hte contact window

const playSound = () => {
  const audio = new Audio("/audio/FFCloseMenu.mp3");
  audio.loop = false;
  audio.play();
};

const set_hidden = () => {
  const target = document.getElementById("about-window");
  if (target?.classList.contains("not-hidden")) {
    target.classList.remove("not-hidden");
    target.classList.add("hidden");
  }
};

const PopUpWindow = () => {
  //the not-opened class is so that we avoid the hidden animation playing when the window is first opened
  return (
    <DraggableCard
      id={"about-window"}
      className="draggable-bar hidden not-opened ff7"
    >
      <div class="ff7-window-header">
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
      <div className="window-content">
        <div class="row">
          <figure>
            <img src="/images/me 2.jpg" alt="about" class="about-image" />
          </figure>
          <div class="stat-text">
            <p>Alejandro Ojeda-Celis</p>
            <p>
              <span class="stat-label">LV</span> 23
            </p>
            <p>
              <span class="stat-label">HP</span> 13/13
            </p>
            <p>
              <span class="stat-label">MP</span> 10/10
            </p>
          </div>
          <div class="stat-bars">
            <div class="next-level">
              <p>
                next level
              </p>
              <ProgressBar />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <p>
            hey there, I'm Alejandro, a recent college graduate and aspiring
            Game Developer / Data Scientist
          </p>
          <a
            href="./resume/Alejandro Ojeda-Celis Data resume.pdf"
            target="_blank"
          >
            my resume
          </a>
          <br />
          <div>
            <h1 class="about-page-headers" id="education">
              Education:
              <h3 id="school">
                University of Texas at Arlington
              </h3>
              <p id="degree">
                - Bachelors of Computer Science
                <p id="graduation-date">August 2024</p>
              </p>
            </h1>
          </div>
          <hr />
          <div>
            <h1 class="about-page-headers">
              Interests:
            </h1>
            <ul id="interests">
              <li>Rock-Climbing</li>
              <li>Film Photography</li>
              <li>3D Modeling</li>
              <li>Game-Development</li>
              <li>Playing the Piano/Cello</li>
              <li>Fighting Games</li>
              <li>Magic The Gathering</li>
            </ul>
          </div>
        </div>
      </div>
    </DraggableCard>
  );
};

export default PopUpWindow;
