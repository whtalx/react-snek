import slitherJSON from '../data/slither'
export default function slither() {
  if (this.state.isAlive) return
  let frame1 = slitherJSON["1"]
  let frame2 = slitherJSON["2"]
  this.setState({pixels : frame1})
  setTimeout(() => {
    this.setState({pixels : frame2})
  }, 500)
  setTimeout(this.slither,1000)
}