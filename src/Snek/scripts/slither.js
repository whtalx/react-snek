import slitherJSON from '../../data/slither';

export default function slither() {
  if (this.state.condition.isPlayiyg) { return; }

  const frame1 = slitherJSON["1"];
  const frame2 = slitherJSON["2"];

  this.switchPixels(frame1);

  this.animationTimeout = setTimeout(() => {
    if (this.state.condition.isPlayiyg) { return; }
    this.switchPixels(frame2);
  }, 400);

  this.animationTimeout = setTimeout(this.slither, 800);
}
