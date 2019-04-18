export default function reverse() {
  let snake = this.state.snake;
  const reverse = () => {
    this.setState((state) => {
      state.snake.reverse();
      return state;
    });
    this.turboSpeed();
  }

  /* new direction is direction which snake's tail point to
   * calculated by coordinates of last and penultimate item
   */
  if (snake[0].x !== snake[1].x) {
    if (snake[0].x < snake[1].x && snake[0].x !== 0) {
      this.setState({ nextDirection: 'left' });
      reverse();
    } else if (snake[0].x > snake[1].x && snake[0].x !== 9) {
      this.setState({ nextDirection: 'right' });
      reverse();
    }
  } else if (snake[0].y !== snake[1].y) {
    if (snake[0].y < snake[1].y && snake[0].y !== 0) {
      this.setState({ nextDirection: 'up' });
      reverse();
    } else if (snake[0].y > snake[1].y && snake[0].y !== 19) {
      this.setState({ nextDirection: 'down' });
      reverse();
    }
  }
}
