export default function spiral(x1 = 0, y1 = 0, x2 = 9, y2 = 19) {
  if (this.state.isAlive) return
  let x = x1
  let y = y1
  let toRight = () => {
    if (this.state.isAlive) return
    this.setState(state => {
        state.pixels[y * 10 + x].status = 'on'
        return state
    })
    x++
    if (x < x2) {
      requestAnimationFrame(toRight)
    } else requestAnimationFrame(toBottom)
  }
  let toBottom = () => {
    if (this.state.isAlive) return
    this.setState(state => {
        state.pixels[y * 10 + x].status = 'on'
        return state
    })
    y++
    if (y < y2) {
      requestAnimationFrame(toBottom)
    } else requestAnimationFrame(toLeft)
  }
  let toLeft = () => {
    if (this.state.isAlive) return
    this.setState(state => {
        state.pixels[y * 10 + x].status = 'on'
        return state
    })
    x--
    if (x > x1) {
      requestAnimationFrame(toLeft)
    } else requestAnimationFrame(toTop)
  }
  let toTop = () => {
    if (this.state.isAlive) return
    this.setState(state =>{
        state.pixels[y * 10 + x].status = 'on'
        return state
    })
    y--
    if (y > y1) {
      requestAnimationFrame(toTop)
    } else if (x1 < 4) {
      x1++
      y1++
      x2--
      y2--
      this.spiral(x1, y1, x2, y2)
    } else {
      this.slither()
    }
  }
  requestAnimationFrame(toRight)
}