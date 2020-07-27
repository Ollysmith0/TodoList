import React, { Component } from 'react'
import "./App.css";
import TodoItem from './component/TodoItem';
import tick from './images/tick.svg';

class App extends Component{
  constructor(){
    super();
    this.state = {
      newItem: '',
      currentFilter: ['ALL', 'ACTIVE', 'COMPLETE'],
      items: [
        {title: 'Chops Chops', isComplete: false},
        {title: 'Tick Tick', isComplete: true},
        {title: 'Pop Pop', isComplete: true},
        {title: 'Say Heyooo', isComplete: false}
      ]
    }
  }

  handleEvent = (item) => {
    return (event) => {
      const { items } = this.state;
      const index = items.indexOf(item);
      const isComplete = item.isComplete;
      this.setState({ 
        items: [
          ...items.slice(0, index),
          {
            ...item, isComplete: !isComplete
          },
          ...items.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp = (e) => {
    const { items } = this.state;
    const text = e.target.value;
    if(!text){return;}
    if(e.keyCode === 13){
      this.setState({ items: [
        ...items,
        {
          title: text, isComplete: false
        }
      ]})
    }
  }

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  handleNav = (item) => {
    return (e) => {
      const items = [
        {title: 'Chops Chops', isComplete: false},
        {title: 'Tick Tick', isComplete: true},
        {title: 'Pop Pop', isComplete: true},
        {title: 'Say Heyooo', isComplete: false}
      ]
      switch(item){
        case 'COMPLETE':
          this.setState({ items: [...items].filter(item => item.isComplete === true)});
          break;
        case 'ACTIVE':
          this.setState({ items: [...items].filter(item => item.isComplete === false)});
          break;
        default:
          this.setState({ items: [...items]})
      }
    }
  }
  render(){
    const { items, newItem, currentFilter } = this.state;
    return( 
      <div className="App">
        <h1>TodoList</h1>
        <div className="header">
          <img src={tick} alt="header" width={32}></img>
          <input type="text" 
                 placeholder="Add a new item" 
                 onKeyUp={this.onKeyUp}
                 value={newItem}
                 onChange={this.handleChange}>
          </input>
        </div>
        {
          items && items.map((item, index) => <TodoItem key={index} item={item} onClick={this.handleEvent(item)} />)
        }
        {
          !items && 'nothing here'
        }
      <div className="footer">
        {
          currentFilter && currentFilter.map((item, index) => <a className="nav" onClick={this.handleNav(item)} key={index}>{item}</a>)
        }
        {
          !currentFilter && 'Nothing here'
        }
      </div>
      </div>
    )
  }
}

export default App;
