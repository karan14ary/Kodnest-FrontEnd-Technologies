import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    console.log("render()")
    return (
        <div>
        
        <h1>Counter :{this.state.count}</h1>
        <button onClick={()=>this.increases()}>Increase</button>
        <button onClick={()=>this.decreases()}>Decrease</button>
       

        </div>
    )
  }
 
  constructor(){
    super();
    this.state={
        count : 0
    }
    console.log("constructor()");
  }
  componentDidMount(){
    console.log("mounting component");
  }
  componentDidUpdate(){
    console.log("component updating")
  }
  componentWillUnmount(){
    console.log("un-mounting component");
  }
  increases() {
    this.setState({count: this.state.count+1});
   }
   decreases(){
    this.setState({count: this.state.count-1});
   }
  }

