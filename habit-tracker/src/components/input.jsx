import React, { Component } from 'react';

class Input extends Component {
  inputRef = React.createRef();

  addDataClick = (event) => {
    event.preventDefault();
    const habitName = this.inputRef.current.value;
    habitName && this.props.addData(habitName);
    this.inputRef.current.value = '';
  };
  render() {
    return (
      <span>
        <input className="add-input" placeholder="Habit" ref={this.inputRef}></input>
        <button className="add-button" onClick={this.addDataClick}>
          Add
        </button>
      </span>
    );
  }
}

export default Input;
