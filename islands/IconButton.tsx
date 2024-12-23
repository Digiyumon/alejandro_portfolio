const playSound = () => {
  const audio = new Audio("/audio/new-click.mp3");
  audio.loop = false;
  audio.play();
};

interface IconButtonProps {
  image: string;
  text: string;
  alt: string;
}

export default function IconButton(
  props: IconButtonProps,
) {
  return (
    <button className="iconbutton" onClick={() => playSound()}>
      <img src={props.image} alt={props.alt} />
      {props.text}
    </button>
  );
}
