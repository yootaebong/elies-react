import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    const { habit } = this.props;
    return (
      <ul>
        {habit.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncreament={this.props.onIncreament}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
