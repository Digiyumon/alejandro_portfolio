import { h } from "preact";
import { useEffect } from "preact/hooks";

//Todo: focus on actually making the window instead of the draggable feature
//Todo: make the window draggable with the mouse
//Todo: change the sound that exiting the window makes

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
  let newX: number = 0;
  let newY: number = 0;
  let startX: number = 0;
  let startY: number = 0;
  let currentElement: HTMLElement | null = null;

  const onMouseDown = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    // Only start dragging if the clicked element has the class "draggable-window"
    if (!target.classList.contains("draggable-window")) return;

    currentElement = target;
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!currentElement) return;

    console.log("test");

    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    currentElement.style.top = `${currentElement.offsetTop - newY}px`;
    currentElement.style.left = `${currentElement.offsetLeft - newX}px`;
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    currentElement = null;
  };

  //the not-opened class is so that we avoid the hidden animation playing when the window is first opened
  return (
    <div id="about-window" class="hidden not-opened ff7">
      <div class="window-header draggable-window" onMousedown={onMouseDown}>
        <p class="window-title">about</p>
        <button
          class="close-button"
          onClick={() => {
            playSound();
            set_hidden();
          }}
        >
          |x|
        </button>
      </div>
      <div className="window-content">
        <div>
          <figure>
            <img src="/images/me 2.jpg" alt="about" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default PopUpWindow;
