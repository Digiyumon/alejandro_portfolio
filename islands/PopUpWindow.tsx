import { h } from "preact";
import { useEffect } from "preact/hooks";
import DraggableCard from "./DraggableBar.tsx";

//TODO: change the sound that exiting the window makes to ff7
//TODO: change the sound that opening the window makes to ff7
//FIXME: the dragging component isn't working for some reason

//i'm thinking maybe for the about me, we can format it like a ff7 screen
//where we have my photo and the stats and everything like that

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
