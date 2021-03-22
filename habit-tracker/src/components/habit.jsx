import React, { Component } from 'react';

// 클래스는 대문자로 시작하는 습관
class Habit extends Component {
  handleIncrement = () => {
    this.props.onIncreament(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { habit } = this.props;
    const { name, count } = habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          Plus
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          Minus
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          Delete
        </button>
      </li>
    );
  }
}

export default Habit;
