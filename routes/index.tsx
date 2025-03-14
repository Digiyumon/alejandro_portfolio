import ContactWindow from "../islands/ContactWindow.tsx";
import IconButton from "../islands/IconButton.tsx";
import PopUpWindow from "../islands/PopUpWindow.tsx";
import WorkWindow from "../islands/workWindow.tsx";

export default function Home() {
  return (
    <body>
      <div id="app">
        <div id="star-container">
          <div id="star-pattern"></div>
          <div id="star-gradient-overlay"></div>
        </div>
        <div id="stripe-container">
          <div id="stripe-pattern"></div>
        </div>
        <div id="card-container">
          <div class={"card"}>
            <div class={"black-nav-bar"}></div>
            <div className={"container"}>
              <div id={"center-text"}>
                <h1>
                  hi! i'm <span>Alejandro</span>
                </h1>
                <p>developer, programmer and gamer</p>
              </div>
              <div class={"buttons-container"}>
                <IconButton
                  image={"./images/about_me.png"}
                  text={"about"}
                  alt={"about"}
                  target_window="about-window"
                  sound={"./audio/kh about.mp3"}
                  isContactWindow={false}
                />
                <IconButton
                  image={"./images/work.png"}
                  text={"work"}
                  alt={"work"}
                  target_window="work-window"
                  sound={"./audio/new-click.mp3"}
                  isContactWindow={false}
                />
                <IconButton
                  image={"./images/contact.png"}
                  text={"contact"}
                  alt={"contact"}
                  target_window="contact-window"
                  sound={"./audio/new-click.mp3"}
                  isContactWindow={true}
                />
              </div>
            </div>
          </div>
        </div>
        <PopUpWindow />
        <WorkWindow />
        <ContactWindow />
      </div>
    </body>
  );
}
