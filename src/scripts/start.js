export default function start() {
  this.setState({
    isAlive: true,
    snake: [{x: 1, y: 9, status : 'on'}, {x: 2, y: 9, status: 'on'}, {x: 3, y: 9, status: 'blink'}]})
  this.clrScr();
  this.switchPixels(this.state.snake);
}