export default function removeEventListeners() {
  document.removeEventListener('keydown', this.handleKeyDown);
  document.removeEventListener('keyup', this.handleKeyUp);

  document.querySelector('#start').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#pause').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#sound').removeEventListener('mousedown', this.handleMouseDown);

  document.querySelector('#right').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#right').removeEventListener('mouseup', this.handleMouseUp);
  document.querySelector('#right').removeEventListener('touchstart', this.handleMouseDown);
  document.querySelector('#right').removeEventListener('touchend', this.handleMouseUp);

  document.querySelector('#left').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#left').removeEventListener('mouseup', this.handleMouseUp);
  document.querySelector('#left').removeEventListener('touchstart', this.handleMouseDown);
  document.querySelector('#left').removeEventListener('touchend', this.handleMouseUp);

  document.querySelector('#up').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#up').removeEventListener('touchend', this.handleMouseUp);
  document.querySelector('#up').removeEventListener('touchstart', this.handleMouseDown);
  document.querySelector('#up').removeEventListener('mouseup', this.handleMouseUp);

  document.querySelector('#down').removeEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#down').removeEventListener('mouseup', this.handleMouseUp);
  document.querySelector('#down').removeEventListener('touchstart', this.handleMouseDown);
  document.querySelector('#down').removeEventListener('touchend', this.handleMouseUp);
}
