const playSound = () => {
  const audio = new Audio("/audio/new-click.mp3");
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
}

export default function IconButton(
  props: IconButtonProps,
) {
  return (
    <button
      className="iconbutton"
      onClick={() => {
        playSound();
        openWindow(props.target_window);
      }}
    >
      <img src={props.image} alt={props.alt} />
      {props.text}
    </button>
  );
}
