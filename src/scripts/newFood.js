export default function newFood() {
  let foodX = Math.floor(Math.random() * 10);
  let foodY = Math.floor(Math.random() * 20);
  this.setState({
    food: [{x: foodX, y: foodY, status : 'blink'}]
  });
}