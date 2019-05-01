export default function wipe() {
  const line = [];

  for (let i = 0; i < 10; i++) {
    line.push({ x: i, y: 19, status: 'on' });
  }

  /**
   * change current line pixels status according to
   * food, snake and obtacles pixels
   */
  const getObjectsPixels = () => {
    line.forEach((lineItem) => {
      lineItem.status = 'off';

      this.state.display.obstacle.forEach((obstacleItem) => {
        if (
          obstacleItem.x === lineItem.x
          && obstacleItem.y === lineItem.y
        ) {
          lineItem.status = obstacleItem.status;
        }
      });

      this.state.display.snake.forEach((snakeItem) => {
        if (
          snakeItem.x === lineItem.x
          && snakeItem.y === lineItem.y
        ) {
          lineItem.status = snakeItem.status;
        }
      });

      if (
        this.state.display.food[0].x === lineItem.x
        && this.state.display.food[0].y === lineItem.y
      ) {
        lineItem.status = this.state.display.food[0].status;
      }
    });
  }

  /* wipe up with switched on pixels */
  const fill = () => {
    this.switchPixels(line);
    if (line[0].y > 0) {
      line.forEach(item => item.y -= 1);
      requestAnimationFrame(fill);
    } else {
      requestAnimationFrame(empty);
    }
  }

  /* wipe down with snake, food and obstacle pixels switched on */
  const empty = () => {
    getObjectsPixels();
    this.switchPixels(line);

    if (line[0].y < 19) {
      line.forEach(item => item.y += 1);
      requestAnimationFrame(empty);
    } else {
      this.setState((state) => {
        state.condition.isAlive = true;
        state.condition.isWaiting = true;
        return state;
      });
    }
  }

  fill();
}
