import keysMap from '../../data/keysMap';

export default function handleKeyUp(event) {
  if (keysMap.has(event.which)) {
    const mouseUp = new Event('mouseup', { bubbles: true });
    document.getElementById(keysMap.get(event.which)).dispatchEvent(mouseUp);
    this.setState((state) => {
      state.condition.button = null;
      return state;
    });
  }
}
