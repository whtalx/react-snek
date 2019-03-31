export default function gameOver(pixel) {
  this.setState({isAlive: false});
  clearTimeout(this.gameTimeout);
  this.explode(pixel);
}