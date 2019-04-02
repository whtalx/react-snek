export default function resume() {
  if (this.state.isPaused) {
    this.setState({isPaused: false});
  }
  if (!this.state.isWaiting) {
    this.gameTimeout = setTimeout(this.play, 400 - this.state.subtrahend);
  }
}