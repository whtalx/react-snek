export default function handleKeyDown(event) {
  const mouseDown = new Event('mousedown', { bubbles: true });
  const press = (button) => {
    if (this.state.condition.button !== button) {
      this.setState((state) => {
        state.condition.button = button;
        return state;
      });
      document.querySelector(`#${button}`).dispatchEvent(mouseDown);
    }
  }

  switch (event.which) {
    case 39:// right
      press('right');
      break;

    case 68:// d
      press('right');
      break;

    case 37:// left
      press('left');
      break;

    case 65:// a
      press('left');
      break;

    case 38:// up
      press('up');
      break;

    case 87:// w
      press('up');
      break;

    case 40:// down
      press('down');
      break;

    case 83:// s
      press('down');
      break;

    case 13://enter
      press('start');
      break;

    case 32://spacebar
      press('pause');
      break;

    case 77://m
      press('sound');
      break;

    default:
      return;
  }
}
