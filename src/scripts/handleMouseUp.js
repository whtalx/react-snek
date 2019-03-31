export default function handleMouseUp(event) {
  event.preventDefault();
  clearTimeout(this.turboTimeout);
  let sp = this.state.speed * this.state.speedCoefficient;
  this.setState({subtrahend: sp});
  return;
}