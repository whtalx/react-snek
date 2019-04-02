import obstacles from '../data/obstacles'

export default function start(keepStats = false) {
  clearTimeout(this.gameTimeout);
  clearTimeout(this.turboTimeout);

  /* reset game status if started not by level up */
  if (!keepStats) {
    this.setState({
      score: 0,
      level: 0,
      speed: 0
    });
  }
  
  /* reset game status to level start */
  this.setState({
    direction: 'right',
    subtrahend: this.state.speedCoefficient,
    isAlive: true,
    snake: [{x: 1, y: 5, status : 'on'}, {x: 2, y: 5, status: 'on'}, {x: 3, y: 5, status: 'blink'}]
  });

  /* get obstacles for current level */
  let obstacle = obstacles[this.state.level];
  obstacle.forEach(item => {
    item.status = 'on';
  });
  this.setState({obstacle: obstacle});

  /* make new food and start level change animation */
  this.newFood();
  this.wipe();
}