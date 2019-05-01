export default function reverse() {
  const snake = this.state.display.snake;
  const reverse = (direction) => {
    this.setState((state) => {
      state.display.snake.reverse();
      state.condition.nextDirection = direction;
      return state;
    });
    this.turboSpeed();
  }

  /* new direction is direction which snake's tail point to
   * calculated by coordinates of last and penultimate item
   */
  if (snake[0].x !== snake[1].x) {
    if (snake[0].x < snake[1].x && snake[0].x !== 0) {
      reverse('left');
    } else if (snake[0].x > snake[1].x && snake[0].x !== 9) {
      reverse('right');
    }
  } else if (snake[0].y !== snake[1].y) {
    if (snake[0].y < snake[1].y && snake[0].y !== 0) {
      reverse('up');
    } else if (snake[0].y > snake[1].y && snake[0].y !== 19) {
      reverse('down');
    }
  }
}
