export default function levelUp() {
  let level = this.state.level;
  let speed = this.state.speed;
  let score = this.state.score;
  let hiScore = this.state.hiScore;
  let scoreCoefficient = this.state.scoreCoefficient;

  if (this.state.snake.length % 3 === 0) {
    this.setState(state => {
      state.speed++;
      state.subtrahend = (state.speed + 1) * state.speedCoefficient;
      return state;
    });
  }

  score += scoreCoefficient * (level + 1) * (speed + 1);
  this.setState({score: score});

  if (score > hiScore) {
    this.setState({hiScore: score});
    localStorage.setItem("hiscore", hiScore);
  }
  
  if (this.state.speed > 6) {
    this.setState(state => {
      state.level++;
      state.speed = 0;
      return state;
    });
    this.start(true);
  } else {
  /* repeat until death */
  if (this.state.isAlive) this.resume();
  }
}