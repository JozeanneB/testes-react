/**
 * Created by jozeanne on 20/02/17.
 */
import React, { Component } from 'react';
import AppleZero from './containers/AppleZero'
import AppleState from './containers/AppleState'
import { connect } from 'react-redux';


class HelloWorld extends Component {
  constructor() {
    super();
    this.state = { date: new Date()};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
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

  tick() {
    this.setState({
      date: new Date(),
    });
    this.props.dispatch({ type: 'ADD_APPLE' });
  }


  handleClick() {
    this.setState({
      number: 0
    });
  }

  render() {
    return (
        <div>
          <h1>HelloWorld</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <AppleState/>
          <AppleZero/>
        </div>

    );
  }
}

HelloWorld = connect()(HelloWorld);


export default HelloWorld;