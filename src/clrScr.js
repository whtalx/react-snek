const clrScr = () => {
  Array.from(document.querySelectorAll('.display__pixel'), i => {i.className = 'display__pixel display__pixel_off'; return (null)})
}

export default clrScr