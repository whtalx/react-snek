export default function initLocalStorage() {
  if (!localStorage.getItem('hiscore')) {
    localStorage.setItem('hiscore', this.state.hiScore);
  } else if (parseInt(localStorage.getItem('hiscore')) > this.state.hiScore) {
      this.setState({
        hiScore: parseInt(localStorage.getItem('hiscore'))
      });
  }
}
