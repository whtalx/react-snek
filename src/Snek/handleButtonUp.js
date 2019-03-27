function handleButtonUp() {
  if (this.state.button !== null) {
    this.setState({button: null})
  }
}

export default handleButtonUp