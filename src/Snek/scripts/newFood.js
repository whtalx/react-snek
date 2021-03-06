export default function newFood(draw = true) {
  let foodX = 0;
  let foodY = 0;

  const random = () => {
    foodX = Math.floor(Math.random() * 10);
    foodY = Math.floor(Math.random() * 20);
    
    /* if food appeared iside snake or inside obstacle -- make new food */
    this.state.display.snake.forEach((item) => {
      if (item.x === foodX && item.y === foodY) { random(); }
    });
    this.state.display.obstacle.forEach((item) => {
      if (item.x === foodX && item.y === foodY) { random(); }
    });
  }

  random();
  this.setState((state) => {
    state.display.food = [{ x: foodX, y: foodY, status : 'blink' }];
    return state;
  });
  if (draw) { this.switchPixels(this.state.display.food); }
}
