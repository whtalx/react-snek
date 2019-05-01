import keysMap from '../../data/keysMap';

export default function handleKeyDown(event) {
  if (
    keysMap.has(event.which)
    && keysMap.get(event.which) !== this.state.condition.button
  ) {
    const button = keysMap.get(event.which);
    const mouseDown = new window.Event('mousedown', { bubbles: true });
    document.getElementById(button).dispatchEvent(mouseDown);
    this.setState((state) => {
      state.condition.button = button;
      return state;
    });
  }
}
