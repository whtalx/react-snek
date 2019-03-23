const switchPixel = (x, y, s) => {
  if (x < 0 || x > 9 || y < 0 || y > 19) return;
  let pixel = document.querySelector('.display__pixel[x="' + x + '"][y="' + y + '"]')
  pixel.className = 'display__pixel display__pixel_' + s
}
export default switchPixel