function handleKeyDown(event) {
  switch (event.which) {
    case 39:// right
    case 68:// d
      if (this.state.button !== 'right') this.setState({button: 'right'})
      break
    case 37:// left
    case 65:// a
      if (this.state.button !== 'left') this.setState({button: 'left'})
      break
    case 38:// up
    case 87:// w
      if (this.state.button !== 'up') this.setState({button: 'up'})
      break
    case 40:// down
    case 83:// s
      if (this.state.button !== 'down') this.setState({button: 'down'})
      break
    case 13://enter
      if (this.state.button !== 'start') this.setState({button: 'start'})
      break
    case 32://spacebar
      if (this.state.button !== 'pause') this.setState({button: 'pause'})
      break
    default:
      return null
  }
}

export default handleKeyDown