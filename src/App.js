import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoItems: [
        { title: 'Go to market', isComplete: true },
        { title: 'Play Football', isComplete: true },
        { title: 'Go out', isComplete: false },
      ],
      newItem: ''
    }
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1),
        ]
      })
    }
  }

  onKeyUp = (event) => {
    let text = event.target.value;
    if(event.keyCode === 13) {  //press enter 
      if(!text ) {
        return;
      }
      text = text.trim();
      if(!text) { return }

      this.setState({
        todoItems: [
          { title: text, isComplete: true },
          ...this.state.todoItems,
        ],
        newItem: ''
      })
    } else {
      this.setState({
        newItem: text
      })
    }
  }

  onChange = (event) => {
    let text = event.target.value;
    this.setState({
      newItem: text
    })
  }

  render() {
    const { todoItems, newItem } = this.state;

    if(todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} width={32} height={32} />
            <input 
              type="text"
              placeholder="Add a new item" 
              onKeyUp={ this.onKeyUp } 
              value={ newItem }
              onChange={ this.onChange }
            />
          </div>
          {
            todoItems.length && todoItems.map((item, index) => 
              <TodoItem
                key={ index }
                item={ item } 
                onClick={ this.onItemClicked(item) }
              />
           )
          }
        </div>
      );
    }
  }
 
}

export default App;
