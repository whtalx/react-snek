export default function levelUp() {
  let score = this.state.data.score;

  /* increase speed every third food eaten */
  if (this.state.area.snake.length % 3 === 0) {
    this.setState((state) => {
      state.data.speed += 1;
      state.data.subtrahend = (state.data.speed + 1) * state.data.speedCoefficient;
      return state;
    });
  }

  /* calculate new scores */
  score += this.state.data.scoreCoefficient * (this.state.data.level + 1) * (this.state.data.speed + 1);

  this.setState((state) => {
    state.data.score = score;
    return state;
  });

  if (score > this.state.data.hiScore) {
    this.setState((state) => {
      state.data.hiScore = score;
      return state;
    });
    localStorage.setItem('hiscore', score);
  }

  /* increase level after sixth speed */
  if (this.state.data.speed > 6) {
    if (this.state.data.level < 6) {
      this.setState((state) => {
        state.data.level += 1;
        state.data.lives += 1;
        state.data.speed = 0;
        state.data.lastScore = state.data.score;
        state.condition.isAlive = false;
        return state;
      });

      /* start new level with scores saving */
      this.playSound('levelUp');
      this.start(true);
    } else {
      /* 'win the game' animation */
      this.setState((state) => {
        state.data.speed = 6;
        state.condition.isAlive = false;
        state.condition.isCelebrating = true;
        return state;
      });
      this.clrScr();
      this.victory();
    }
  } else {
    this.playSound('eat');
    this.newFood();

  /* repeat until death */
  if (this.state.condition.isAlive) { this.resume(); }
  }
}