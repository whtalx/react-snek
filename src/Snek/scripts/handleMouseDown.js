export default function handleMouseDown(event) {
  /* prevent mousedown event if touchstart */
  if (event.type === 'touchstart') { event.preventDefault(); }

  const isAlive = this.state.condition.isAlive;
  const isPaused = this.state.condition.isPaused;
  const isWaiting = this.state.condition.isWaiting;
  const nextDirection = this.state.condition.nextDirection;

  const move = () => {
    /**
     * make snake move to new direction instantly
     * upd: better don't use on reverse
     */
    clearTimeout(this.gameTimeout);
    if (isWaiting) {
      this.setState((state) => {
        state.condition.isWaiting = false;
        return state;
      });
    }
    this.play();
  }

  const turn = (whereTo) => {
    if (!isAlive || isPaused || nextDirection !== null) { return; }
    let opposite;
    let isAlongBorder;
    const direction = this.state.condition.direction;
    const snakeHead = this.state.display.snake[this.state.display.snake.length - 1];

    switch (whereTo) {
      case 'left':
        opposite = 'right';
        isAlongBorder = snakeHead.x === 0;
        break;
      case 'right':
        opposite = 'left';
        isAlongBorder = snakeHead.x === 9;
        break;
      case 'up':
        opposite = 'down';
        isAlongBorder = snakeHead.y === 0;
        break;
      case 'down':
        opposite = 'up';
        isAlongBorder = snakeHead.y === 19;
        break;
      default:
        return;
    }
    
    if (direction !== opposite && !isAlongBorder) {
      this.setState((state) => {
        state.condition.nextDirection = whereTo;
      });
    
      this.playSound('move');
      this.turboSpeed();
      move();
    } else if (!isWaiting && direction === opposite) {
      this.playSound('move');
      this.reverse();
    }
  }

  switch (event.target.id) {
    case 'left':
      turn('left');
      break;

    case 'right':
      turn('right');
      break;

    case 'up':
      turn('up');
      break;

    case 'down':
      turn('down');
      break;

    case 'start': {
      const isPlaying = this.state.condition.isPlaying;
      const isCelebrating = this.state.condition.isCelebrating;
      if (!isPlaying && !isCelebrating) { this.start(); }
      if (isCelebrating) {
        /* stop 'win the game' animation */
        this.setState((state) => {
          state.condition.isPlaying = false;
          state.condition.isCelebrating = false;
          return state;
        });
        this.spiral();
      }
      break;
    }

    case 'pause':
      if (isAlive) { isPaused? this.resume() : this.pause(); }
      break;

    case 'sound': {
      const isMuted = this.state.condition.isMuted;
      if (!isMuted) {
        this.setState((state) => {
          state.condition.isMuted = true;
          return state;
        });
        this.playSound();
      } else if (isMuted) {
        this.setState((state) => {
          state.condition.isMuted = false;
          return state;
        });
        this.playSound('resume');
      }
      break;
    }

    default:
      return;
  }
}
