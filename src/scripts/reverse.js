export default function reverse() {
  let snake = this.state.snake;
  let reverse = () => {
    this.setState(state => {
      state.snake.reverse();
      return state;
    });
  }

  if (snake[0].x !== snake[1].x) {
    if (snake[0].x < snake[1].x) {
      this.setState({nextDirection: 'left'});
      reverse();
    } else if (snake[0].x > snake[1].x) {
      this.setState({nextDirection: 'right'});
      reverse();
    }
  } else if (snake[0].y !== snake[1].y) {
    if (snake[0].y < snake[1].y) {
      this.setState({nextDirection: 'up'});
      reverse();
    } else if (snake[0].y > snake[1].y) {
      this.setState({nextDirection: 'down'});
      reverse();
    }
  }
}