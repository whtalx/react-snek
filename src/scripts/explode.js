export default function explode(pixel, gameRestart = true) {
  let small = pixel;
  let medium = [];
  let large = [];
  let counter = 0;

  let makeMedium = s => {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x !== 0 || y !== 0 ) {
          medium = medium.concat([{'x': (x + pixel[0].x), 'y': (y + pixel[0].y), 'status': s}])
        }
      }
    }
  }

  let makeLarge = s => {
    for (let x = -2; x < 3; x++) {
      if (Math.abs(x % 2) === 0) {
        for (let y = -2; y < 3; y++) {
          if (Math.abs(y % 2) === 0) {
            large = large.concat([{'x': (x + pixel[0].x), 'y': (y + pixel[0].y), 'status': s}]);
          }
        }
      }
    }
  }

  let badaboom = () => {
    counter++;

    let mediumBoom = () => {
      makeMedium('blink');
      this.switchPixels(medium);

      this.animationTimeout = setTimeout(largeBoom, 60);
    }

    let largeBoom = () => {
      makeLarge('blink');
      this.switchPixels(large);

      this.animationTimeout = setTimeout(smallBoom, 60);
    }

    let smallBoom = () => {
      makeMedium('off');
      makeLarge('off');
      this.switchPixels(large.concat(medium));
      this.switchPixels(this.state.obstacle);
      this.switchPixels(this.state.snake);
      if (counter < 3 ) {
        this.animationTimeout = setTimeout(badaboom, 80);
      } else {
        if (gameRestart) {
          this.setState({isPlayiyg: false});
          this.spiral();
          this.playSound('gameOver');
        } else {
          this.setState(state => {
            state.speed = 0;
            state.score = state.lastScore;
          });
          this.playSound('levelRestart');
          this.start(true);
        }
      }
    }

    mediumBoom();
  }
  this.playSound('explosion');
  this.switchPixels(small);
  badaboom();
}