export default function handleMouseDown(event) {
  let isAlive = this.state.isAlive
  let isPaused = this.state.isPaused
  let direction = this.state.direction
  let snakeHead = this.state.snake[this.state.snake.length - 1]

  switch (event.target.id) {
    case 'start':
      if (!isAlive) {
        this.start();
      }
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
          snakeHead.x !== 0 ) {
        this.setState({direction: 'left'});
      }
      break;

    case 'right':
      if (isAlive &&
          !isPaused &&
          direction !== 'left' &&
          snakeHead.x !== 9 ) {
        this.setState({direction: 'right'});
      }
      break;

    case 'up':
      if (isAlive &&
          !isPaused &&
          direction !== 'down' &&
          snakeHead.y !== 0 ) {
        this.setState({direction: 'up'});
      }
      break;

    case 'down':
    if (isAlive &&
        !isPaused &&
        direction !== 'up' &&
        snakeHead.y !== 19 ) {
      this.setState({direction: 'down'});
    }
    break;

    default:
      return;
  }
}