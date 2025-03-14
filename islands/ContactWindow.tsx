import DraggableCard from "./DraggableBar.tsx";

const playSound = () => {
  const audio = new Audio("/audio/close_window.mp3");
  audio.loop = false;
  audio.volume = 0.2;
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
        <a href="mailto:alejandroojedacelis@gmail.com" class="work-email">
          alejandroojedacelis@gmail.com
        </a>
        <hr />
        <h2 id="contact-window-text">contact me</h2>
        <div>
          <form
            action={"https://api.web3forms.com/submit"}
            name="submit-to-email"
            class="contact-window-form"
            method="POST"
          >
            <input
              type="hidden"
              name={"access_key"}
              value={"21c2fa0e-3ce9-41a9-bfb4-db0e06ad5e66"}
            />
            <div class="contact-window-inputs">
              <input
                type={"text"}
                name="Name"
                placeholder={"Your name"}
                class={"window-input"}
                required
              />
              <input
                type="text"
                name="Email"
                placeholder={"Your email"}
                class={"window-input"}
                required
              />
              <input
                type="text"
                name="Subject"
                placeholder={"Subject"}
                class={"window-input"}
                required
              />
            </div>
            <div class="message-and-button">
              <textarea
                class="contact-window-message"
                name="Message"
                placeholder={"Message"}
                required
              />
              <input
                type="checkbox"
                name="botcheck"
                class="hidden"
                style="display: none;"
              >
              </input>
              <button
                type="submit"
                class="contact-window-button"
              >
                <p id="message">submit</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </DraggableCard>
  );
};

export default ContactWindow;
