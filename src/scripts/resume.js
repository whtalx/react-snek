export default function resume() {
  this.setState({isPaused: false});
  this.gameTimeout = setTimeout(this.play, 600 - this.state.subtrahend);
}