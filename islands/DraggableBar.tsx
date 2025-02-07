import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";

const DraggableCard = (
  { children }: { children: preact.ComponentChildren },
) => {
  const cardRef = useRef<HTMLDivElement>(null);
  let newX = 0, newY = 0, startX = 0, startY = 0;

  useEffect(() => {
    if (cardRef.current) {
      console.log("Card found:", cardRef.current);
    } else {
      console.log("Card not found");
    }
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    if (!cardRef.current) return;

    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;

    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    cardRef.current.style.top = `${cardRef.current.offsetTop - newY}px`;
    cardRef.current.style.left = `${cardRef.current.offsetLeft - newX}px`;
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div class="draggable-bar" ref={cardRef} onMouseDown={handleMouseDown}>
      <div>{children}</div>
    </div>
  );
};

export default DraggableCard;
