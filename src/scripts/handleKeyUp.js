export default function handleKeyUp(event) {
  this.setState({button: null});
  let mouseUp = new Event('mouseup');

  switch (event.which) {
    case 39:// right
    case 68:// d
      document.querySelector('#right').dispatchEvent(mouseUp);
      break;
    case 37:// left
    case 65:// a
      document.querySelector('#left').dispatchEvent(mouseUp);
      break;
    case 38:// up
    case 87:// w
      document.querySelector('#up').dispatchEvent(mouseUp);
      break;
    case 40:// down
    case 83:// s
      document.querySelector('#down').dispatchEvent(mouseUp);
      break;
    case 13://enter
      document.querySelector('#start').dispatchEvent(mouseUp);
      break;
    case 32://spacebar
      document.querySelector('#pause').dispatchEvent(mouseUp);
      break;
    default:
      return null;
  }
}