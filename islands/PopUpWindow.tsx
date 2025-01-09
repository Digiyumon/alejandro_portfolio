import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

/*const PopUpWindow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const onMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDragging) return;
      debugger;
      setPosition({
        x: moveEvent.clientX - startX,
        y: moveEvent.clientY - startY,
      });
    };

    const onMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "100px",
        height: "100px",
        backgroundColor: "skyblue",
        cursor: "move",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
    </div>
  );
};

export default PopUpWindow;
*/

const PopUpWindow = () => {
  useEffect(() => {
    let newX = 0;
    let newY = 0;
    let startX = 0;
    let startY = 0;

    const aboutWindow = document.getElementById("about-window");
    if (!aboutWindow) return;

    const onMouseDown = (e: MouseEvent) => {
      startX = e.clientX;
      startY = e.clientY;
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      newX = startX - e.clientX;
      newY = startY - e.clientY;

      startX = e.clientX;
      startY = e.clientY;

      if (aboutWindow) {
        aboutWindow.style.top = `${aboutWindow.offsetTop - newY}px`;
        aboutWindow.style.left = `${aboutWindow.offsetLeft - newX}px`;
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    aboutWindow.addEventListener("mousedown", onMouseDown);

    // Cleanup event listeners on unmount
    return () => {
      aboutWindow.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <div
      id="about-window"
      style={{
        position: "absolute",
        left: "100px",
        top: "100px",
        width: "200px",
        height: "150px",
        backgroundColor: "skyblue",
        cursor: "grab",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        userSelect: "none",
      }}
    >
      <p>Drag Me!</p>
    </div>
  );
};

export default PopUpWindow;
