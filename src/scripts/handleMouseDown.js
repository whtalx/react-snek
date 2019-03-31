export default function handleMouseDown(event) {
  event.preventDefault();
  let isAlive = this.state.isAlive;
  let isPaused = this.state.isPaused;
  let direction = this.state.direction;
  let nextDirection = this.state.nextDirection;
  let snakeHead = this.state.snake[this.state.snake.length - 1];

  switch (event.target.id) {
    case 'start':
      if (isAlive) {
        this.setState({
          level: 1,
          speed: 1
        });
      }
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
      if (isAlive &&
          !isPaused &&
          direction !== 'right' &&
          nextDirection === null &&
          snakeHead.x !== 0 ) {
        this.setState({nextDirection: 'left'});
        this.turboTimeout = setTimeout(this.turboSpeed, 400);
      }
      break;

    case 'right':
      if (isAlive &&
          !isPaused &&
          direction !== 'left' &&
          nextDirection === null &&
          snakeHead.x !== 9 ) {
        this.setState({nextDirection: 'right'});
        this.turboTimeout = setTimeout(this.turboSpeed, 400);
      }
      break;

    case 'up':
      if (isAlive &&
          !isPaused &&
          direction !== 'down' &&
          nextDirection === null &&
          snakeHead.y !== 0 ) {
        this.setState({nextDirection: 'up'});
        this.turboTimeout = setTimeout(this.turboSpeed, 400);
      }
      break;

    case 'down':
    if (isAlive &&
        !isPaused &&
        direction !== 'up' &&
        nextDirection === null &&
        snakeHead.y !== 19 ) {
      this.setState({nextDirection: 'down'});
      this.turboTimeout = setTimeout(this.turboSpeed, 400);
    }
    break;

    default:
      return;
  }
}