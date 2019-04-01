import obstacles from '../data/obstacles'

export default function start(keepStats = false) {
  clearTimeout(this.gameTimeout);
  clearTimeout(this.turboTimeout);
  this.clrScr();
  if (!keepStats) {
    this.setState({
      scores: 0,
      level: 0,
      speed: 0
    });
  }
  this.setState({
    direction: 'right',
    subtrahend: this.state.speedCoefficient,
    isAlive: true,
    snake: [{x: 1, y: 5, status : 'on'}, {x: 2, y: 5, status: 'on'}, {x: 3, y: 5, status: 'blink'}]
  });
  
  let obstacle = obstacles[this.state.level];
  obstacle.forEach(item => {
    item.status = 'on';
  });
  this.setState({obstacle: obstacle});

  this.switchPixels(this.state.obstacle);
  this.switchPixels(this.state.snake);
  this.newFood();
  this.resume();
}