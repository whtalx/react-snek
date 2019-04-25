export default function handleKeyDown(event) {
  const pressed = this.state.condition.button;
  const press = (button) => {
    const mouseDown = new window.Event('mousedown', { bubbles: true });
    this.setState((state) => {
      state.condition.button = button;
      return state;
    });
    document.getElementById(button).dispatchEvent(mouseDown);
  }

  switch (event.which) {
    case 39:// right
      if (pressed !== 'right') {
        press('right');
      }
      break;

    case 68:// d
      if (pressed !== 'right') {
        press('right');
      }
      break;

    case 37:// left
      if (pressed !== 'left') {
        press('left');
      }
      break;

    case 65:// a
      if (pressed !== 'left') {
        press('left');
      }
      break;

    case 38:// up
      if (pressed !== 'up') {
        press('up');
      }
      break;

    case 87:// w
      if (pressed !== 'up') {
        press('up');
      }
      break;

    case 40:// down
      if (pressed !== 'down') {
        press('down');
      }
      break;

    case 83:// s
      if (pressed !== 'down') {
        press('down');
      }
      break;

    case 13://enter
      if (pressed !== 'start') {
        press('start');
      }
      break;

    case 32://spacebar
      if (pressed !== 'pause') {
        press('pause');
      }
      break;

    case 77://m
      if (pressed !== 'sound') {
        press('sound');
      }
      break;

    default:
      return;
  }
}
