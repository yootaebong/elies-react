import React, { PureComponent } from 'react';

// 클래스는 대문자로 시작하는 습관
// 렌더 처리를 해주지 않으면 해당 부분이 항상 호출이 되기 때문에
// 불필요한 일이 수행될 수 있다
// 이런것을 방지할수 있는게 PureComponent && Memo
class Habit extends PureComponent {
  componentDidMount() {
    console.log('didMount');
  }
  componentWillUnmount() {
    console.log('willUnmount');
  }
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
