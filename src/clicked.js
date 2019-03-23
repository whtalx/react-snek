import clrScr from './clrScr'

const clicked = (event) => {
  const target = event.target
  if (!target.classList.contains('button')) { return }

  if (target.classList.contains('controls__pause-button')) {
    document.getElementsByClassName('display__pause')[0].classList.toggle('display__pause_on')
  } else if (target.classList.contains('controls__start-button')) {
    clrScr()
  }

  //target.classList.add('button_pressed')
  //document.addEventListener('mouseup', () => {target.classList.remove('button_pressed')})
}
export default clicked