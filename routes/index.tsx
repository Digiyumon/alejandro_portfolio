import IconButton from "../islands/IconButton.tsx";
import PopUpWindow from "../islands/PopUpWindow.tsx";

//todo: whenever the user hovers over Alejandro, then it will fade in the text, "you can call me al :)"

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
          <div class={"ff7"}>
            <div className={"container"}>
              <div id={"center-text"}>
                <h3>
                  but you can call me <span>al</span> :)
                </h3>
                <h1>
                  hi! i'm <span>Alejandro</span>
                </h1>
                <p>modeler, developer and gamer</p>
              </div>
              <div class={"buttons-container"}>
                <IconButton
                  image={"./images/about_me.png"}
                  text={"about"}
                  alt={"about"}
                  target_window="about-window"
                />
                <IconButton
                  image={"./images/work.png"}
                  text={"work"}
                  alt={"work"}
                  target_window="work-window"
                />
                <IconButton
                  image={"./images/contact.png"}
                  text={"contact"}
                  alt={"contact"}
                  target_window="contact-window"
                />
              </div>
            </div>
          </div>
        </div>
        <PopUpWindow />
      </div>
    </body>
  );
}
