import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }
  componentDidMount() {
    // create the interval once component is mounted
    this.setDate = setInterval(() => {
      this.setState({ time: new Date() });
    },1000); // every 1 seconds
  }
  componentWillUnmount() {
    // delete the interval just before component is removed
    clearInterval(this.setDate);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default App;
