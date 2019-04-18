export default function play() {
  let food = this.state.food[0];
  let snake = this.state.snake;
  let obstacle = this.state.obstacle;
  let nextDirection = this.state.nextDirection;

  let gameOver = (pixel) => {
    clearTimeout(this.gameTimeout);
    this.setState({ isAlive: false });
    this.setState((state) => {
      state.lives -= 1;
      return state;
    });
    this.state.lives > 0? this.explode(pixel, false) : this.explode(pixel);
  }

  /* declaring snake parts */
  let tail = snake[0];
  let head = snake[snake.length - 1];
  let nextCoord = { x: head.x, y: head.y, status: head.status };

  /* get moving direction and let it possible to set new direction */
  if (nextDirection !== null) {
    this.setState({
      direction: nextDirection,
      nextDirection: null,
    });
  }

  let direction = this.state.direction;

  switch (direction) {
    case 'right':
      nextCoord.x += 1;
      break;

    case 'left':
      nextCoord.x -= 1;
      break;

    case 'down':
      nextCoord.y += 1;
      break;

    case 'up':
      nextCoord.y -= 1;
      break;

    default:
      break;
  }

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

  /* draw snake with new coordinates */
  this.setState({ snake: snake });
  this.switchPixels(snake);

  /* play turbo sound if in turbo mode */
  if (this.state.subtrahend === 325) { this.playSound('turbo'); }

  /*grow if eating food */
  if (nextCoord.x === food.x && nextCoord.y === food.y) {
    snake.unshift(tail);
    this.levelUp();
  } else {
  /* repeat until death */
  if (this.state.isAlive) { this.resume(); }
  }
}
