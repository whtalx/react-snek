export default function handleButtonUp() {
  if (this.state.button !== null) {
    this.setState({button: null})
  }
}