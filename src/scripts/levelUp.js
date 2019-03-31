export default function levelUp() {
  let level = this.state.level;
  let speed = this.state.speed;
  let score = this.state.score;
  let hiScore = this.state.hiScore;
  let scoreCoefficient = this.state.scoreCoefficient;

  if (this.state.snake.length % 3 === 0) {
    this.setState(state => {
      state.speed++;
      return state;
    })
  }

  score += scoreCoefficient * level + scoreCoefficient * (speed - 1);
  this.setState({score: score});

  if (score > hiScore) {
    this.setState({hiScore: score});
    localStorage.setItem("hiscore", hiScore);
  }
}