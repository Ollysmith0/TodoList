import React, { Component } from 'react';
var classNames = require('classnames');

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
  constructor(){
    super();
    this.state = {
      currentColor: RED
    };

    setInterval(() => {
      this.setState({currentColor: this.getNextColor(this.state.currentColor)})}
      , 1000)
  }

  getNextColor(color){
    switch(color){
      case RED:
        return YELLOW;
      case YELLOW:
        return GREEN;
      default:
        return RED;
    }
  }
  render(){
    let { currentColor } = this.state;
    return(
      <div className='traffic-light'>
        <div className={classNames('bulb', 'red', {
          active: currentColor === RED
        })}></div>
        <div className={classNames('bulb', 'yellow', {
          active: currentColor === YELLOW
        })}></div>
        <div className={classNames('bulb', 'green', {
          active: currentColor === GREEN
        })}></div>
      </div>
    )
  }
}

export default TrafficLight;