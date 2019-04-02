export default function reverse() {
  let snake = this.state.snake;

  let reverse = () => {
    this.setState(state => {
      state.snake.reverse();
      return state;
    });
  }

  let turbo = () => {
    if (this.turboTimeout === null) {
      this.turboTimeout = setTimeout(this.turboSpeed, 400);
    }
  }

  /* new direction is direction which snake's tail point to
   * calculated by coordinates of last and penultimate item
   */
  if (snake[0].x !== snake[1].x) {
    if (snake[0].x < snake[1].x && snake[0].x !== 0) {
      this.setState({nextDirection: 'left'});
      reverse();
      turbo();
    } else if (snake[0].x > snake[1].x && snake[0].x !== 9) {
      this.setState({nextDirection: 'right'});
      reverse();
      turbo();
    }
  } else if (snake[0].y !== snake[1].y && snake[0].y !== 0) {
    if (snake[0].y < snake[1].y) {
      this.setState({nextDirection: 'up'});
      reverse();
      turbo();
    } else if (snake[0].y > snake[1].y && snake[0].y !== 19) {
      this.setState({nextDirection: 'down'});
      reverse();
      turbo();
    }
  }
}