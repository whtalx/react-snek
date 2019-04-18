export default function levelUp() {
  let score = this.state.score;

  /* increase speed every third food eaten */
  if (this.state.snake.length % 3 === 0) {
    this.setState((state) => {
      state.speed += 1;
      state.subtrahend = (state.speed + 1) * state.speedCoefficient;
      return state;
    });
  }

  /* calculate new scores */
  score += this.state.scoreCoefficient * (this.state.level + 1) * (this.state.speed + 1);
  this.setState({ score: score });

  if (score > this.state.hiScore) {
    this.setState({ hiScore: score });
    localStorage.setItem('hiscore', score);
  }

  /* increase level after sixth speed */
  if (this.state.speed > 6) {
    if (this.state.level < 6) {
      this.setState((state) => {
        state.level += 1;
        state.lives += 1;
        state.speed = 0;
        state.lastScore = state.score;
        state.isAlive = false;
        return state;
      });

      /* start new level with scores saving */
      this.playSound('levelUp');
      this.start(true);
    } else {
      /* 'win the game' animation */
      this.setState({
        speed: 6,
        isAlive: false,
        isCelebrating: true
      });
      this.clrScr();
      this.victory();
    }
  } else {
    this.playSound('eat');
    this.newFood();

  /* repeat until death */
  if (this.state.isAlive) { this.resume(); }
  }
}