import slitherJSON from '../data/slither'

export default function slither() {
  if (this.state.isPlayiyg) return;

  let frame1 = slitherJSON["1"];
  let frame2 = slitherJSON["2"];

  this.switchPixels(frame1);

  this.animationTimeout = setTimeout(() => {
    if (this.state.isPlayiyg) return;
    this.switchPixels(frame2);
  }, 400);

  this.animationTimeout = setTimeout(this.slither, 800);
}