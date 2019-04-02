export default function handleMouseUp(event) {
  /* prevent mouseup event if caused by touchend */
  if (event.type === 'touchend') event.preventDefault();
  
  /* turn off turbo and reset playing speed */
  clearTimeout(this.turboTimeout);
  this.turboTimeout = null;

  this.setState(state => {
    state.subtrahend = (state.speed + 1) * state.speedCoefficient;
    return state;
  });
}