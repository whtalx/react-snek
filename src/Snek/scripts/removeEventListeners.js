export default function removeEventListeners() {
  document.removeEventListener('keydown', this.handleKeyDown);
  document.removeEventListener('keyup', this.handleKeyUp);
  document.removeEventListener('mousedown', this.handleMouseDown);
  document.removeEventListener('mouseup', this.handleMouseUp);
  document.removeEventListener('touchstart', this.handleMouseDown);
  document.removeEventListener('touchend', this.handleMouseUp);
}
