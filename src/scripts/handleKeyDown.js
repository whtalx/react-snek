export default function handleKeyDown(event) {
  let mouseDown = new Event('mousedown');
  
  switch (event.which) {
    case 39:// right
    case 68:// d
      if (this.state.button !== 'right') {
        this.setState({button: 'right'});
        document.querySelector('#right').dispatchEvent(mouseDown);
      }
      break;
    case 37:// left
    case 65:// a
      if (this.state.button !== 'left') {
        this.setState({button: 'left'});
        document.querySelector('#left').dispatchEvent(mouseDown);
      }
      break;
    case 38:// up
    case 87:// w
      if (this.state.button !== 'up') {
        this.setState({button: 'up'});
        document.querySelector('#up').dispatchEvent(mouseDown);
      }
      break;
    case 40:// down
    case 83:// s
      if (this.state.button !== 'down') {
        this.setState({button: 'down'});
        document.querySelector('#down').dispatchEvent(mouseDown);
      }
      break;
    case 13://enter
      if (this.state.button !== 'start') {
        this.setState({button: 'start'});
        document.querySelector('#start').dispatchEvent(mouseDown);
      }
      break;
    case 32://spacebar
      if (this.state.button !== 'pause') {
        this.setState({button: 'pause'});
        document.querySelector('#pause').dispatchEvent(mouseDown);
      }
      break;
    default:
      return null;
  }
}