const playSound = (sound: string) => {
  //debugger;
  const audio = new Audio(sound);
  audio.loop = false;
  audio.play();
};

const openWindow = (target_window: string) => {
  const target = document.getElementById(target_window);
  if (target) {
    target.classList.remove("hidden");
    target.classList.add("not-hidden");
  }
  if (target?.classList.contains("not-opened")) {
    target.classList.remove("not-opened");
  }
};

interface IconButtonProps {
  image: string;
  text: string;
  alt: string;
  target_window: string;
  sound: string;
}

export default function IconButton(
  props: IconButtonProps,
) {
  return (
    <button
      className="iconbutton"
      onClick={() => {
        playSound(props.sound);
        openWindow(props.target_window);
      }}
    >
      <img src={props.image} alt={props.alt} />
      {props.text}
    </button>
  );
}
