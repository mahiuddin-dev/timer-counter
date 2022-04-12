import React from 'react'
import './App.css';
import Button from './button';
// import Profile from './profile';

class App extends React.Component {

  state = {
    count: 0,
    seconds: 0,
    minites: 0
  }
  interval = null 

  
  increment = () =>{
    this.setState({count: this.state.count + 1})
  }

  decrement = () =>{
    if(this.state.count > 0){
      this.setState({count: this.state.count - 1})
    }
  }

  handleStart = ()=>{
    if(this.state.count > 0){
      this.interval = setInterval(()=>{
      this.setState({count: this.state.count - 1}, ()=>{
        if(this.state.count === 0){
          clearInterval(this.interval)
        }
      })
    }, 1000)
    }
  }

  handleStop = () =>{
    if(this.interval){
      clearInterval(this.interval)
    }
  }
  handleReset = () =>{
    this.setState({count: 0})
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Counter</h1>
        <Button func={this.decrement} name="-"/>
        <span className='text' > {this.state.count} </span>
        <Button func={this.increment} name="+"/>
        <br />
        <br />
        <Button func={this.handleStart} name="Start"/>
        <Button func={this.handleStop} name="Stop"/>
        <Button func={this.handleReset} name="Reset"/>
        <br />
        <br />
        {/* <Profile/> */}
      </div>
    );
  }
}

export default App;
