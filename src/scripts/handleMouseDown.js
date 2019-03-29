export default function handleMouseDown(event) {
  console.log(event.target.id + ' down');
  if (event.target.id === 'start' && !this.state.isAlive) {
    this.start();
  }
}