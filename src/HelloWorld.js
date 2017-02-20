/**
 * Created by jozeanne on 20/02/17.
 */
import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), number: 2 };
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  plusOne(num) {
    return num + 1;
  }

  tick() {
    this.setState({
      date: new Date(),
      number: this.plusOne(this.state.number)
    });
  }



  render() {
    return (
        <div>
          <h1>HelloWorld</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}. And I have {this.state.number} apples.</h2>
        </div>

    );
  }
}

export default HelloWorld;