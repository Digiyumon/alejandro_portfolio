import DraggableCard from "./DraggableBar.tsx";
import ProgressBar from "./ProgressBar.tsx";

//TODO: make it to where the age automatically updates whenever the birthday is reached
//TODO: add a list of your hobbies and what you like to do (similar to what kevin said to do for your resume)(mention pixel art and how the pixel art on the page was made by you)
//TODO: if another window is being dragged, it should be on top of the other windows

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
              <span class="stat-label">LV</span> 22
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
            hey there, I'm alejandro, a recent college graduate and aspiring
            game developer
          </p>
          <br />
          <div id="education">
            <h1>Education</h1>
            <h3>
              Bachelors of Computer Science
            </h3>
            <p>University of Texas at Arlington</p>
          </div>
          <div>
            Interests
            <ul>
              <li>Gaming</li>
              <li>Modeling</li>
              <li>Coding</li>
            </ul>
          </div>
        </div>
      </div>
    </DraggableCard>
  );
};

export default PopUpWindow;
