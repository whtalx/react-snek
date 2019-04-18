export default function handleKeyUp(event) {
  this.setState({ button: null });
  const mouseUp = new Event('mouseup');
  const release = (button) => {
    document.querySelector(`#${button}`).dispatchEvent(mouseUp);
  }

  switch (event.which) {
    case 39:// right
      release('right');
      break;

    case 68:// d
      release('right');
      break;

    case 37:// left
      release('left');
      break;

    case 65:// a
      release('left');
      break;

    case 38:// up
      release('up');
      break;

    case 87:// w
      release('up');
      break;

    case 40:// down
      release('down');
      break;

    case 83:// s
      release('down');
      break;

    case 13://enter
      release('start');
      break;

    case 32://spacebar
      release('pause');
      break;

    case 77://m
      release('sound');
      break;

    default:
      return null;
  }
}
