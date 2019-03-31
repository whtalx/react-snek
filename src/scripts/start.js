export default function start() {
  clearTimeout(this.gameTimeout);
  clearTimeout(this.turboTimeout);
  this.clrScr();
  let sp = this.state.speed * this.state.speedCoefficient;
  this.setState({
    score: 0,
    direction: 'right',
    subtrahend: sp,
    isAlive: true,
    snake: [{x: 1, y: 9, status : 'on'}, {x: 2, y: 9, status: 'on'}, {x: 3, y: 9, status: 'blink'}]
  });
  this.switchPixels(this.state.snake);
  this.newFood();
  this.resume();
}