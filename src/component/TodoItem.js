import React, { Component } from 'react';
import checkImg from '../images/correct.svg';
import checkCompleteImg from '../images/foursquare-check-in.svg';

class TodoItem extends Component{
  render(){
    let url = checkImg;
    const { item } = this.props;
    let className = 'TodoItem';
    if(item.isComplete){
      className += ' TodoItem-complete';
      url = checkCompleteImg;
    }
    return(
      <div className={className} onClick={this.props.onClick}>
        <img src={url} alt={item.title} width={32}></img>
        { item.title }
      </div>
    )
  }
}

export default TodoItem;