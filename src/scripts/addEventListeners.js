export default function addEventListeners() {
  document.addEventListener('keydown', this.handleKeyDown);
  document.addEventListener('keyup', this.handleKeyUp);

  document.querySelector('#start').addEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#pause').addEventListener('mousedown', this.handleMouseDown);

  document.querySelector('#right').addEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#right').addEventListener('mouseup', this.handleMouseUp);
  document.querySelector('#right').addEventListener('touchstart', this.handleMouseDown);
  document.querySelector('#right').addEventListener('touchend', this.handleMouseUp);

  document.querySelector('#left').addEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#left').addEventListener('mouseup', this.handleMouseUp);
  document.querySelector('#left').addEventListener('touchstart', this.handleMouseDown);
  document.querySelector('#left').addEventListener('touchend', this.handleMouseUp);

  document.querySelector('#up').addEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#up').addEventListener('touchend', this.handleMouseUp);
  document.querySelector('#up').addEventListener('touchstart', this.handleMouseDown);
  document.querySelector('#up').addEventListener('mouseup', this.handleMouseUp);

  document.querySelector('#down').addEventListener('mousedown', this.handleMouseDown);
  document.querySelector('#down').addEventListener('mouseup', this.handleMouseUp);
  document.querySelector('#down').addEventListener('touchstart', this.handleMouseDown);
  document.querySelector('#down').addEventListener('touchend', this.handleMouseUp);
}