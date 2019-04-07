export default function play() {
  let food = this.state.food;
  let snake = this.state.snake;
  let obstacle = this.state.obstacle;
  let nextDirection = this.state.nextDirection;

  let gameOver = pixel => {
    this.setState({isAlive: false});
    clearTimeout(this.gameTimeout);

    this.setState(state => {
      state.lives--
    });

    if (this.state.lives > 0) {

      /* level restart */
      this.explode(pixel, false);
     } else {

      /* game restart */
       this.explode(pixel);
     }
  }

  /* declaring snake parts */
  let tail = snake[0];
  let head = snake[snake.length - 1];
  let nextCoord = {x: head.x, y: head.y, status: head.status};

  /* get moving direction and let it possible to set new direction */
  if (nextDirection !== null) {
    this.setState({
      direction: nextDirection,
      nextDirection: null
    })
  }

  let direction = this.state.direction;

  if (direction === 'right') {
    nextCoord.x++
  } else if (direction === 'left') {
    nextCoord.x--
  } else if (direction === 'up') {
    nextCoord.y--
  }else if (direction === 'down') {
    nextCoord.y++
  }

  /* remove tail */
  snake.shift();
  tail.status = 'off';
  this.switchPixels([tail]);

  /* bite itself game over */
  snake.forEach(item => {
    if ( item.x === nextCoord.x && item.y === nextCoord.y) {
      gameOver([item]);
      }
  });

  /* bump an obstacle game over */
  obstacle.forEach(item => {
    if ( item.x === nextCoord.x && item.y === nextCoord.y) {
      gameOver([item]);
      }
  });

  /* get off screen game over */
  if (nextCoord.x > 9 ||
      nextCoord.x < 0 ||
      nextCoord.y > 19 ||
      nextCoord.y < 0) {
    gameOver([head]);
  }

  /* make new head */
  head.status = 'on';
  nextCoord.status = 'blink';
  snake.push(nextCoord);

  /* draw snake with new coordinates */
  this.setState({snake: snake});
  this.switchPixels(snake);

  /* play turbo sound if in turbo mode */
  if (this.state.subtrahend === 325) this.playSound('turbo');

  /*grow if eating food, make new food */
  if (nextCoord.x === food[0].x && nextCoord.y === food[0].y) {
    snake.unshift(tail);
    this.levelUp();
  } else {
    
  /* repeat until death */
  if (this.state.isAlive) this.resume();
  }
}