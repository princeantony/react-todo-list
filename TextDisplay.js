import React, { Component } from 'react'

class TextDisplay extends Component {

  render() {
    return <div className= {this.props.color}>I'm displaying text from my parent: {this.props.text}</div>
  }

}

export default TextDisplay
