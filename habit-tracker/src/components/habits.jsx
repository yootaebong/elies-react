import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    // 리엑트 스테이트는 직접 수정하면 좋지 않다.
    // 참조값을 가지고 있는 habit이라서 굳이 인덱스를 찾지 않아도 된다.
    // const index = this.findIndex(habit);
    // habit.count++;
    // this.setState((this.state.habits[index] = habit));

    const habits = [...this.state.habits];
    const index = this.findIndex(habits, habit);
    habits[index].count++;
    // 키와 벨류가 같은 값 일경우 한번만 써도 된다.
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = this.findIndex(habits, habit);
    habits[index].count = habits[index].count - 1 < 0 ? 0 : habits[index].count - 1;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // indexof 사용법
    // const tempHabit = [...this.state.habits];
    // const index = this.findIndex(tempHabit, habit);
    // if (index == -1) throw '존재하지 않는 오브젝트';
    // tempHabit.pop(index);
    // 필터 사용법
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  findIndex = (arr, obj) => {
    return arr.indexOf(obj);
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncreament={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
