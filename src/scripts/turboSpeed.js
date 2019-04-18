export default function turboSpeed() {
  /* make snake move faster on button hold */
  if (this.turboTimeout === null) {
    this.turboTimeout = setTimeout(() => {
      this.setState({ subtrahend: 325 });
    }, 400);
  }
}
