export default function pause() {
  clearTimeout(this.gameTimeout);
  this.playSound('pause');
  this.setState((state) => {
    state.condition.isPaused = true;
    return state;
  });
}
