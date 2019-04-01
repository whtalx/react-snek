export default function handleMouseUp(event) {
  event.preventDefault();
  
  clearTimeout(this.turboTimeout);
  this.turboTimeout = null;

  this.setState(state => {
    state.subtrahend = (state.speed + 1) * state.speedCoefficient;
    return state;
  });
}