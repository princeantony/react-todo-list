import React, { Component } from 'react'
import TextDisplay from './TextDisplay'
class ColorDiv extends Component { 
 
   constructor() {
    super()
    this.state = {
      color: 'green'
    }
  }
  render()
  { 
  	return  <TextDisplay color={this.state.color}/>
   
  }

}

export default ColorDiv
