export default function handleMouseDown(event) {
  /* prevent mousedown event if touchstart */
  if (event.type === 'touchstart') { event.preventDefault(); }

  const isAlive = this.state.isAlive;
  const isPaused = this.state.isPaused;
  const isCelebrating = this.state.isCelebrating;
  const direction = this.state.direction;
  const nextDirection = this.state.nextDirection;
  const snakeHead = this.state.snake[this.state.snake.length - 1];
  const isWaiting = this.state.isWaiting;
  const isMuted = this.state.isMuted;

  const move = () => {
    /* make snake move to new direction instantly
     * upd: better don't use on reverse
     */
    clearTimeout(this.gameTimeout);
    if (isWaiting) this.setState({ isWaiting: false });
    this.play();
  }

  switch (event.target.id) {
    case 'start':
      if (!isAlive && !isCelebrating) {
        this.start();
      } else if (isCelebrating) {
        /* stop 'win the game' animation */
        this.setState({
          isPlayiyg: false,
          isCelebrating: false,
        });
        this.spiral();
      }
      break;

    case 'pause':
      if (isAlive) {
        isPaused? this.resume() : this.pause();
      }
      break;

    case 'sound':
      if (!isMuted) {
        this.setState({ isMuted: true });
        this.playSound();
      } else if (isMuted) {
        this.setState({ isMuted: false });
        this.playSound('resume');
      }
      break;

    case 'left':
      if (isAlive && !isPaused && nextDirection === null) {
        if (direction !== 'right' && snakeHead.x !== 0) {
          this.setState({ nextDirection: 'left' });
          this.turboSpeed();
          move();
        } else if (!isWaiting && direction === 'right') {
          this.reverse();
        }

        this.playSound('move');
      }
      break;

    case 'right':
      if (isAlive && !isPaused && nextDirection === null) {
        if (direction !== 'left' && snakeHead.x !== 9) {
          this.setState({ nextDirection: 'right' });
          this.turboSpeed();
          move();
        } else if (!isWaiting && direction === 'left') {
          this.reverse();
        }

        this.playSound('move');
      }
      break;

    case 'up':
      if (isAlive && !isPaused && nextDirection === null) {
        if (direction !== 'down' && snakeHead.y !== 0) {
          this.setState({ nextDirection: 'up' });
          this.turboSpeed();
          move();
        } else if (!isWaiting && direction === 'down') {
          this.reverse();
        }

        this.playSound('move');
      }
      break;

    case 'down':
    if (isAlive && !isPaused && nextDirection === null) {
      if (direction !== 'up' && snakeHead.y !== 19) {
        this.setState({ nextDirection: 'down' });
        this.turboSpeed();
        move();
      } else if (!isWaiting && direction === 'up') {
        this.reverse();
      }

      this.playSound('move');
    }
    break;

    default:
      return;
  }
}
