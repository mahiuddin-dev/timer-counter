import React from "react";
import "./App.css";
import Button from "./button";

class Timer extends React.Component {
  state = {
    seconds: 0,
    minutes: 0,
  };
  increment = () => {
    this.setState({ minutes: this.state.minutes + 1 });
  };
  decrement = () => {
    if (this.state.minutes > 0) {
      this.setState({ minutes: this.state.minutes - 1 });
    }
  };

  intervalsec = null;

  start = () => {
    if (this.state.minutes > 0 || this.state.seconds > 0) {
      this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
      this.intervalsec = setInterval(() => {
        this.setState({ seconds: this.state.seconds - 1 }, () => {
          if (this.state.seconds === 0 && this.state.minutes === 0) {
            clearInterval(this.intervalsec);
          } else if (this.state.seconds === 0 && this.state.minutes > 0) {
            this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
          }
        });
      }, 1000);
    }
  };
  Reset = () => {
    if (this.intervalsec) {
      this.setState({ minutes: 0, seconds:0 });
      clearInterval(this.intervalsec);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Simple Minute Time Counter</h1>
        <Button func={this.decrement} name="-" />
        <span className="text"> {this.state.minutes} Mins</span>
        <span className="text"> {this.state.seconds} Secs</span>
        <Button func={this.increment} name="+" />
        <br />
        <br />
        <Button func={this.start} name="Start" />
        <Button func={this.Reset} name="Reset" />
      </div>
    );
  }
}

export default Timer;
