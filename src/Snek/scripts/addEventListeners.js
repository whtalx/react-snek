export default function addEventListeners() {
  document.addEventListener('keydown', this.handleKeyDown);
  document.addEventListener('keyup', this.handleKeyUp);
  document.addEventListener('mousedown', this.handleMouseDown);
  document.addEventListener('mouseup', this.handleMouseUp);
  document.addEventListener('touchstart', this.handleMouseDown);
  document.addEventListener('touchend', this.handleMouseUp);
}
