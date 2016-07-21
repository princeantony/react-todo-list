import React, { Component } from 'react'
import TextInput from './TextInput'
import ColorDiv from './ColorDiv'

class App extends Component {

  render() {
    return (
      <div>
        <h1>This is the App Component</h1>
        <TextInput/><br/>
        <ColorDiv/>
      </div>
    )
  }

}

export default App
