export default function levelUp() {
  let level = this.state.level;
  let speed = this.state.speed;
  let score = this.state.score;
  let hiScore = this.state.hiScore;
  let scoreCoefficient = this.state.scoreCoefficient;

  /* increase speed every third food eaten */
  if (this.state.snake.length % 3 === 0) {
    this.setState(state => {
      state.speed++;
      state.subtrahend = (state.speed + 1) * state.speedCoefficient;
      return state;
    });
  }

  /* calculate new scores */
  score += scoreCoefficient * (level + 1) * (speed + 1);
  this.setState({score: score});

  if (score > hiScore) {
    this.setState({hiScore: score});
    localStorage.setItem('hiscore', hiScore);
  }

  /* increase level after sixth speed */
  if (this.state.speed > 6) {
    if (this.state.level < 6) {
      this.setState(state => {
        state.level++;
        state.speed = 0;
        state.isAlive = false;
        return state;
      });

      /* start new level with scores saving */
      this.start(true);
    } else {
      
      /* 'win the game' game over */
      this.setState({
        speed: 6,
        isAlive: false,
        isCelebrating: true
      });
      this.clrScr();
      this.victory();
    }
  } else {
  /* repeat until death */
  if (this.state.isAlive) this.resume();
  }
}