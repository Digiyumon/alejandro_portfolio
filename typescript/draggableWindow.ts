// Select all elements with the "draggable-window" class
const draggableElements = document.querySelectorAll<HTMLElement>(
  ".draggable-window",
);

draggableElements.forEach((element) => {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  // Mouse down event to start dragging
  element.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;
    element.style.position = "absolute";
  });

  // Mouse move event to handle dragging
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      element.style.left = `${e.clientX - offsetX}px`;
      element.style.top = `${e.clientY - offsetY}px`;
    }
  });

  // Mouse up event to stop dragging
  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});
