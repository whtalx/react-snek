export default function pause() {
  this.setState({isPaused: true});
  console.log('paused');
}