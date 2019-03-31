export default function pause() {
  clearTimeout(this.gameTimeout);
  this.setState({isPaused: true});
}