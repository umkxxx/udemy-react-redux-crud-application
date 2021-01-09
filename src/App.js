import React, { Component } from 'react'

const App = () => {
  return (
    <React.Fragment>
      <Counter />
    </React.Fragment>
  );
}
class Counter extends Component {
  constructor(props){
    super(props)
    console.log(this.state)
    this.state = {count:0}
  }
  handlePlusButton = () => {
    // this.state = {count:this.state.count+1}   //renderが走らない
    this.setState({count:this.state.count+1})
  }
  handleMinusButton = () => {
    this.setState({count:this.state.count-1})
  }

  render(){
    console.log("render")
    return (
      <React.Fragment>
        <div>counter:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
