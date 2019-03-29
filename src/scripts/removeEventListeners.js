export default function removeEventListeners() {
  document.querySelector('#start').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#pause').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#right').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#left').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#up').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#down').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#start').removeEventListener('mouseup', this.handleMouseUp);
  document.querySelector('#pause').removeEventListener('mouseup', this.handleMouseUp);
  document.querySelector('#right').removeEventListener('mouseup', this.handleMouseUp);
  document.querySelector('#left').removeEventListener('mouseup', this.handleMouseUp);
  document.querySelector('#up').removeEventListener('mouseup', this.handleMouseUp);
  document.querySelector('#down').removeEventListener('mouseup', this.handleMouseUp);
  document.removeEventListener('keydown', this.handleKeyDown);
  document.removeEventListener('keyup', this.handleKeyUp);
}