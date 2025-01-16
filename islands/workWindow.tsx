// okay so i think it'd be cool to do something similar to sharyaps work window where whenever you hover over the thing it makes a sound
/* but instead of it being some random note, i want it to be the main melody of dearly beloved, so after every hover it will play the next note in the
main melody, I HAVE NO IDEA HOW TO MAKE IT WORK but we will figure it out. */

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
const WorkWindow = () => {
  return (
    <div id="work-window" class="not-hidden">
      <div class="window-header">
        <h2>Work</h2>
        <button onClick={set_hidden}>X</button>
      </div>
      <div class="window-content">
        <p>Work</p>
      </div>
    </div>
  );
};

export default WorkWindow;
