export default function explode(pixel) {
  if (this.state.isAlive) return
  pixel.status = 'on'
  let small = [pixel]
  let medium = []
  let large = []
  let counter = 0

  let makeMedium = s => {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x !== 0 || y !== 0 ) {
          medium = medium.concat([{'x' : (x + pixel.x), 'y' : (y + pixel.y), 'status' : s}])
        }
      }
    }
  }
  let makeLarge = s => {
    for (let x = -2; x < 3; x++) {
      if (Math.abs(x % 2) === 0) {
        for (let y = -2; y < 3; y++) {
          if (Math.abs(y % 2) === 0 && !(x === 0 && y === 0)) {
            large = large.concat([{'x' : (x + pixel.x), 'y' : (y + pixel.y), 'status' : s}])
          }
        }
      }
    }
  }

  let badaboom = () => {
    if (this.state.isAlive) return
    counter++

    let mediumBoom = () => {
      if (this.state.isAlive) return
      makeMedium('on')
      this.switchPixels(medium)
      requestAnimationFrame(largeBoom)
    }

    let largeBoom = () => {
      if (this.state.isAlive) return
      makeLarge('on')
      this.switchPixels(large)
      requestAnimationFrame(smallBoom)
    }

    let smallBoom = () => {
      if (this.state.isAlive) return
      makeMedium('off')
      makeLarge('off')
      this.switchPixels(large.concat(medium))
      if (counter < 3 ) {
        requestAnimationFrame(badaboom)
      } else this.spiral()

    }

    mediumBoom()
  }

  this.switchPixels(small)
  badaboom()
}