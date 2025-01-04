export default function PopUpWindow(props: any) {
  return (
    <div class="draggable-window" id="myWindow">
      <div class="window-header" id="myWindowHeader">
        <p>Drag Me!</p>
      </div>
      <div class="window-content">
        <p>This is a draggable window!</p>
      </div>
    </div>
  );
}
