export default function turboSpeed() {
  /* make snake move faster on button hold */
  if (this.turboTimeout === null) {
    this.turboTimeout = setTimeout(() => {
      this.setState((state) =>{
        state.data.subtrahend = 325;
        return state;
      });
    }, 400);
  }
}
