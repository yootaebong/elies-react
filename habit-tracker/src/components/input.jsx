import React, { Component } from 'react';

class Input extends Component {
  state = {
    text: '',
  };
  addDataClick = () => {
    this.props.addData(this.state.text);
    this.setState({ text: '' });
  };
  inputChangeHandler = (e) => {
    const text = e.target.value;

    this.setState({ text });
  };
  render() {
    return (
      <span>
        <input
          className="add-input"
          placeholder="Habit"
          onChange={this.inputChangeHandler}
          value={this.state.text}
        ></input>
        <button className="add-button" onClick={this.addDataClick}>
          Add
        </button>
      </span>
    );
  }
}

export default Input;
