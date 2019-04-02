export default function handleMouseDown(event) {
  event.preventDefault();

  let isAlive = this.state.isAlive;
  let isPaused = this.state.isPaused;
  let direction = this.state.direction;
  let nextDirection = this.state.nextDirection;
  let snakeHead = this.state.snake[this.state.snake.length - 1];
  let isWaiting = this.state.isWaiting;
  /* let level = this.state.level;
  let speed = this.state.speed; */

  let move = () => {
    clearTimeout(this.gameTimeout);
    if (isWaiting) this.setState({isWaiting: false});
    this.play();
  }

  let turbo = () => {
    if (this.turboTimeout === null) this.turboTimeout = setTimeout(this.turboSpeed, 400);
  }

  switch (event.target.id) {
    case 'start':
      if (!isAlive) this.start();
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
          turbo();
          move();
        } else if (!isWaiting && direction === 'right') {
          this.reverse();
          //move();
        }
      } /* else if (!isAlive && speed > 0) {
        this.setState(state => {
          state.speed--;
          return state;
        });
      } */
      break;

    case 'right':
      if (isAlive && !isPaused && nextDirection === null) {
        if (direction !== 'left' && snakeHead.x !== 9) {
          this.setState({nextDirection: 'right'});
          turbo();
          move();
        } else if (!isWaiting && direction === 'left') {
          this.reverse();
          //move();
        }
      } /* else if (!isAlive && speed < 6) {
        this.setState(state => {
          state.speed++;
          return state;
        });
      } */
      break;

    case 'up':
      if (isAlive && !isPaused && nextDirection === null) {
        if (direction !== 'down' && snakeHead.y !== 0) {
          this.setState({nextDirection: 'up'});
          turbo();
          move();
        } else if (!isWaiting && direction === 'down') {
          this.reverse();
          //move();
        }
      } /* else if (!isAlive && level < 6) {
        this.setState(state => {
          state.level++;
          return state;
        });
      } */
      break;

    case 'down':
    if (isAlive && !isPaused && nextDirection === null) {
      if (direction !== 'up' && snakeHead.y !== 19) {
        this.setState({nextDirection: 'down'});
        turbo();
        move();
      } else if (!isWaiting && direction === 'up') {
        this.reverse();
        //move();
      }
    } /* else if (!isAlive && level > 0) {
      this.setState(state => {
        state.level--;
        return state;
      });
    } */
    break;

    default:
      return;
  }
}