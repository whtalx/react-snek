export default function handleMouseDown(event) {
  event.preventDefault();
  let isAlive = this.state.isAlive;
  let isPaused = this.state.isPaused;
  let direction = this.state.direction;
  let nextDirection = this.state.nextDirection;
  let snakeHead = this.state.snake[this.state.snake.length - 1];
  let snakeTail = this.state.snake[0];
  let move = () => {
    clearTimeout(this.gameTimeout);
    this.play();
  }

  switch (event.target.id) {
    case 'start':
      this.start();
      break;

    case 'pause':
      if (!isAlive) return;
      if (!isPaused) {
        this.pause();
      } else if (isPaused) {
        this.resume();
      }
      break;

    case 'left':
      if (isAlive && !isPaused && nextDirection === null) {
        if (direction !== 'right' && snakeHead.x !== 0) {
          this.setState({nextDirection: 'left'});
          this.turboTimeout = setTimeout(this.turboSpeed, 400);
          move();
        } else if (direction === 'right' && snakeTail.x !== 0) {
          this.reverse();
          this.turboTimeout = setTimeout(this.turboSpeed, 400);
          move();
        }
      }
      break;

    case 'right':
      if (isAlive && !isPaused && nextDirection === null) {
        if (direction !== 'left' && snakeHead.x !== 9 ) {
          this.setState({nextDirection: 'right'});
          this.turboTimeout = setTimeout(this.turboSpeed, 400);
          move();
        } else if (direction === 'left' && snakeTail.x !== 9) {
          this.reverse();
          this.turboTimeout = setTimeout(this.turboSpeed, 400);
          move();
        }
      }
      break;

    case 'up':
      if (isAlive && !isPaused && nextDirection === null) {
        if (direction !== 'down' && snakeHead.y !== 0 ) {
          this.setState({nextDirection: 'up'});
          this.turboTimeout = setTimeout(this.turboSpeed, 400);
          move();
        } else if (direction === 'down' && snakeTail.y !== 0) {
          this.reverse();
          this.turboTimeout = setTimeout(this.turboSpeed, 400);
          move();
        }
      }
      break;

    case 'down':
    if (isAlive && !isPaused && nextDirection === null) {
      if (direction !== 'up' && snakeHead.y !== 19 ) {
        this.setState({nextDirection: 'down'});
        this.turboTimeout = setTimeout(this.turboSpeed, 400);
        move();
      } else if (direction === 'up' && snakeTail.y !== 19) {
        this.reverse();
        this.turboTimeout = setTimeout(this.turboSpeed, 400);
        move();
      }
    }
    break;

    default:
      return;
  }
}