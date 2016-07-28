import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 0
      }

      this.setNewNumber = this.setNewNumber.bind(this)
   };

   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }

   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}

class Content extends React.Component {

   componentWillMount() {
      console.log(".........................Component WILL MOUNT!......................................");
      console.log('This will invoke before we see the component in screen')
   }

   componentDidMount() {
      console.log(".........................Component DID MOUNT!......................................");
      console.log('This will be seeing it after rendering the component')
      
   }

   componentWillReceiveProps(nextProps) {  
      console.log("........................Component WILL RECIEVE PROPS.......................................");
      console.log("The current prop is :"+this.props.myNumber);
      console.log('The new prop value will be : ' + nextProps.myNumber)
      
   }

   shouldComponentUpdate(nextProps) {
      console.log("........................Component SHOULD UPDATE.......................................");
      console.log("The current prop is :"+this.props.myNumber);
      console.log(" The next prop value will be : " + nextProps.myNumber )
      return true;
   }

   componentWillUpdate(nextProps) {
     console.log("........................Component Will UPDATE.......................................");
    console.log("The current prop is :"+this.props.myNumber);
    console.log("The Component WILL UPDATE! invoked!. The new prop value will be : " + nextProps.myNumber )
   }

   componentDidUpdate(prevProps) {
    console.log("........................Component DID UPDATE.......................................");
    console.log("The current prop is :"+this.props.myNumber);
    console.log("The Component DID UPDATE! invoked!. The previous prop value is : " + prevProps.myNumber )
    }

   componentWillUnmount() {
      console.log("........................Component WILL UNMOUNT.......................................");
      console.log('I am going ... ')
   }
   
	
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default App;