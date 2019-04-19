export default function wipe() {
  let food = this.state.area.food[0];
  let line = [];
  for (let i = 0; i < 20; i++) {
    line[i] = { x: 0, y: i, status: 'on' }
  }

  /* fill screen with switched on pixels */
  let fill = () => {
    this.switchPixels(line);    
    if (line[0].x < 9) {
      line.forEach(item => item.x += 1);
      requestAnimationFrame(fill);
    } else {
      requestAnimationFrame(empty);
    }
  }

  /* fill screen with pixels switched according to snake, food and obstacle pixels */
  let empty = () => {
    line.forEach((lineItem) => {
      lineItem.status = undefined;

      this.state.area.obstacle.forEach((obstacleItem) => {
        if (obstacleItem.x === lineItem.x && obstacleItem.y === lineItem.y) {
          lineItem.status = obstacleItem.status;
        }
      });

      this.state.area.snake.forEach((snakeItem) => {
        if (snakeItem.x === lineItem.x && snakeItem.y === lineItem.y) {
          lineItem.status = snakeItem.status;
        }
      });

      if (food.x === lineItem.x && food.y === lineItem.y) {
        lineItem.status = food.status;
      }

      if (lineItem.status === undefined) { lineItem.status = 'off'; }
    });

    this.switchPixels(line);

    if (line[0].x > 0) {
      line.forEach(item => item.x -= 1);
      requestAnimationFrame(empty);
    } else {
      this.setState((state) => {
        state.condition.isAlive = true;
        state.condition.isWaiting = true;
      });
    }
  }

  fill();
}
