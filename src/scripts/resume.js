export default function resume() {
  if (this.state.condition.isPaused) {
    this.setState((state) => {
      state.condition.isPaused = false;
      return state;
    });
    this.playSound('resume');
  }
  if (!this.state.condition.isWaiting) {
    this.gameTimeout = setTimeout(this.play, 400 - this.state.data.subtrahend);
  }
}
