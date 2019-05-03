export default function play() {
  const food = this.state.display.food[0];
  const snake = this.state.display.snake;
  const obstacle = this.state.display.obstacle;
  const gameOver = (pixel) => {
    clearTimeout(this.gameTimeout);
    this.setState((state) => {
      state.data.lives -= 1;
      state.condition.isAlive = false;
      return state;
    });

    this.state.data.lives > 0 ? this.explode(pixel, false) : this.explode(pixel);
  }

  /* get moving direction and let it possible to set new direction */
  if (this.state.condition.nextDirection !== null) {
    this.setState((state) => {
      state.condition.direction = state.condition.nextDirection;
      state.condition.nextDirection = null;
      return state;
    });
  }

  const direction = this.state.condition.direction;

  /* declaring snake parts */
  const tail = snake[0];
  const head = snake[snake.length - 1];
  const nextCoordMap = new Map([
    ['left', { x: head.x - 1, y: head.y, status: head.status }],
    ['right', { x: head.x + 1, y: head.y, status: head.status }],
    ['up', { x: head.x, y: head.y - 1, status: head.status }],
    ['down', { x: head.x, y: head.y + 1, status: head.status }],
  ]);
  const nextCoord = nextCoordMap.get(direction);

  /* remove tail */
  snake.shift();
  tail.status = 'off';
  this.switchPixels([tail]);

  /* bite itself game over */
  snake.forEach((item) => {
    if (item.x === nextCoord.x && item.y === nextCoord.y) {
      gameOver([item]);
    }
  });

  /* bump an obstacle game over */
  obstacle.forEach((item) => {
    if (item.x === nextCoord.x && item.y === nextCoord.y) {
      gameOver([item]);
    }
  });

  /* get off screen game over */
  if (
    nextCoord.x > 9
    || nextCoord.x < 0
    || nextCoord.y > 19
    || nextCoord.y < 0
  ) {
    gameOver([head]);
  }

  /* make new head */
  head.status = 'on';
  nextCoord.status = 'blink';
  snake.push(nextCoord);

  /* draw snake with new head */
  this.setState((state) => {
    state.display.snake = snake;
    return state;
  });

  this.switchPixels(this.state.display.snake);

  /* play turbo sound if in turbo mode */
  if (this.state.data.subtrahend === 325) { this.playSound('turbo'); }

  /*grow if eating food */
  if (nextCoord.x === food.x && nextCoord.y === food.y) {
    snake.unshift(tail);
    this.levelUp();
  } else {
  /* repeat until death */
  if (this.state.condition.isAlive) { this.resume(); }
  }
}
