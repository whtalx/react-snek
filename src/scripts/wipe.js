export default function wipe() {
  let obstacle = this.state.obstacle;
  let snake = this.state.snake;
  let food = this.state.food;
  let line = [];

  for (let i = 0; i < 20; i++) {
    line[i] = {x: 0, y: i, status: 'on'}
  }

  /* fill screen with switched on pixels */
  let fill = () => {
    this.switchPixels(line);
    if (line[0].x < 9) {
      line.forEach(item => {
        item.x++;
      });
      requestAnimationFrame(fill);
    } else {
      requestAnimationFrame(empty);
    }
  }

  /* fill screen with pixels switched according to snake, food and obstacle pixels */
  let empty = () => {
    line.forEach(lineItem => {
      lineItem.status = undefined;

      obstacle.forEach(obstacleItem => {
        if (obstacleItem.x === lineItem.x && obstacleItem.y === lineItem.y) {
          lineItem.status = obstacleItem.status;
        }
      });

      snake.forEach(snakeItem => {
        if (snakeItem.x === lineItem.x && snakeItem.y === lineItem.y) {
          lineItem.status = snakeItem.status;
        }
      });

      if (food[0].x === lineItem.x && food[0].y === lineItem.y) {
        lineItem.status = food[0].status;
      }

      if (lineItem.status === undefined) lineItem.status = 'off';
    });

    this.switchPixels(line);

    if (line[0].x > 0) {
      line.forEach(item => {
        item.x--;
      });
      requestAnimationFrame(empty);
    } else {
      /* waiting for handleMouseDown function move() after 100ms */
      setTimeout(() => {
        this.setState({
          isAlive: true,
          isWaiting: true
        });
      }, 100);
    }
  }

  fill();
}