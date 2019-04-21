export default function initLocalStorage() {
  if (!localStorage.getItem('hiscore')) {
    localStorage.setItem('hiscore', this.state.data.hiScore);
  } else if (parseInt(localStorage.getItem('hiscore')) > this.state.data.hiScore) {
      this.setState((state) => {
        state.data.hiScore = parseInt(localStorage.getItem('hiscore'));
        return state;
      });
  }
}
