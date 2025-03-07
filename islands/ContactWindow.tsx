import DraggableCard from "./DraggableBar.tsx";

const playSound = () => {
  const audio = new Audio("/audio/new-click.mp3");
  audio.loop = false;
  audio.play();
};

const set_hidden = () => {
  const target = document.getElementById("contact-window");
  if (target?.classList.contains("not-hidden")) {
    target.classList.remove("not-hidden");
    target.classList.add("hidden");
  }
};

const ContactWindow = () => {
  return (
    <DraggableCard
      id={"contact-window"}
      className="draggable-bar hidden not-opened"
    >
      <div class="window-header">
        <p class="window-title">contact</p>
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
        <h2 class="contact-window-text">work email</h2>
        <span class="work-email">alejandroojedacelis@gmail.com</span>
        <hr />
        <h2 id="contact-window-text">contact me</h2>
        <div>
          <form name="submit-to-google-sheet" class="contact-window-form">
            <div class="contact-window-inputs">
              <input
                type={"text"}
                name="Name"
                placeholder={"Your name"}
                required
              />
              <input
                type="text"
                name="Email"
                placeholder={"Your email"}
                required
              />
              <input
                type="text"
                name="Subject"
                placeholder={"Subject"}
                required
              />
            </div>
            <div>
              <textarea
                class="contact-window-message"
                name="Message"
                placeholder={"Message"}
                required
              />
              <button
                type="submit"
                class="contact-window-button"
                onClick={() => playSound()}
              />
            </div>

            Send
          </form>
        </div>
      </div>
    </DraggableCard>
  );
};

export default ContactWindow;
