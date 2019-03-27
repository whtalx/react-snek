function handleMouseDown(event) {
  if (event.target.id) {
    this.setState({button: event.target.id})
  }
}

export default handleMouseDown