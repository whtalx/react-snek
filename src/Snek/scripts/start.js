import obstacles from '../../data/obstacles';

export default function start(keepStats = false) {
  clearTimeout(this.gameTimeout);
  clearTimeout(this.turboTimeout);
  clearTimeout(this.animationTimeout);
  this.animationTimeout = this.turboTimeout = this.gameTimeout = null;

  /* reset game status if started not by level up */
  if (!keepStats) {
    this.setState((state) => {
      state.data.score = 0;
      state.data.level = 0;
      state.data.speed = 0;
      state.data.lives = 3;
      state.condition.isPlaying = true;
      return state;
    });
    this.playSound('start');
  }

  /* get obstacles for current level */
  const obstacle = obstacles[this.state.data.level];
  obstacle.forEach(item => item.status = 'on');
  
  /* reset game status to level start */
  this.setState((state) => {
    state.area.obstacle = obstacle;
    state.area.snake = [
      { x: 1, y: 5, status: 'on' },
      { x: 2, y: 5, status: 'on' },
      { x: 3, y: 5, status: 'blink' }
    ];
    state.condition.direction = 'right';
    state.data.subtrahend = state.data.speedCoefficient;
    return state;
  });

  /* make new food and start level change animation */
  this.newFood(false);
  this.wipe();
}
