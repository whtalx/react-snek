import slitherJSON from '../data/slither'

export default function slither() {
  if (this.state.isAlive) return;

  this.setState({speed: 1});

  let frame1 = slitherJSON["1"]
  let frame2 = slitherJSON["2"]

  this.switchPixels(frame1);

  setTimeout(() => {
    if (this.state.isAlive) return;
    this.switchPixels(frame2);
  }, 400);

  setTimeout(this.slither, 800);
}