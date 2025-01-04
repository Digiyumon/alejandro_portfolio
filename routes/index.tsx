import IconButton from "../islands/IconButton.tsx";
import PopUpWindow from "../islands/PopUpWindow.tsx";

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
                />
                <IconButton
                  image={"./images/work.png"}
                  text={"work"}
                  alt={"work"}
                />
                <IconButton
                  image={"./images/contact.png"}
                  text={"contact"}
                  alt={"contact"}
                />
              </div>
            </div>
          </div>
        </div>
        <PopUpWindow>
          <p>this is a test</p>
        </PopUpWindow>
      </div>
    </body>
  );
}
