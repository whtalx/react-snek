export default function clrScr() {
  this.setState(state => {
    state.pixels.forEach(item => {item.status = 'off'})
    return state
  })
  console.log('clrscr')
}