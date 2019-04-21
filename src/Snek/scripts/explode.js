export default function explode(pixel, gameRestart = true) {
  let medium = [];
  let large = [];
  let counter = 0;

  const makeMedium = (status) => {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x !== 0 || y !== 0 ) {
          medium = medium.concat([{ 'x': (x + pixel[0].x), 'y': (y + pixel[0].y), 'status': status }])
        }
      }
    }
  }

  const makeLarge = (status) => {
    for (let x = -2; x <= 2; x++) {
      if (Math.abs(x % 2) === 0) {
        for (let y = -2; y <= 2; y++) {
          if (Math.abs(y % 2) === 0) {
            large = large.concat([{ 'x': (x + pixel[0].x), 'y': (y + pixel[0].y), 'status': status }]);
          }
        }
      }
    }
  }

  const badaboom = () => {
    counter++;
    const mediumBoom = () => {
      makeMedium('blink');
      this.switchPixels(medium);
      this.animationTimeout = setTimeout(largeBoom, 60);
    }

    const largeBoom = () => {
      makeLarge('blink');
      this.switchPixels(large);
      this.animationTimeout = setTimeout(smallBoom, 60);
    }

    const smallBoom = () => {
      makeMedium('off');
      makeLarge('off');
      this.switchPixels(large.concat(medium));
      this.switchPixels(this.state.area.obstacle);
      this.switchPixels(this.state.area.snake);
      if (counter < 3 ) {
        this.animationTimeout = setTimeout(badaboom, 80);
      } else {
        if (gameRestart) {
          this.setState((state) => {
            state.condition.isPlayiyg = false;
            return state;
          });
          this.spiral();
          this.playSound('gameOver');
        } else {
          this.setState((state) => {
            state.data.speed = 0;
            state.data.score = state.data.lastScore;
            return state;
          });
          this.playSound('levelRestart');
          this.start(true);
        }
      }
    }

    mediumBoom();
  }

  this.playSound('explosion');
  this.switchPixels(pixel);
  badaboom();
}
