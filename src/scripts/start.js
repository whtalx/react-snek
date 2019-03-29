export default function start() {
  this.state.isAlive = true;
  this.clrScr();
  this.switchPixels(this.snake);
}