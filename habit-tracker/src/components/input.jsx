import React, { PureComponent } from 'react';

class Input extends PureComponent {
  // PureComponent는 최상위에 있는 데이터 즉 prop 와 state가 변경되지 않으면
  // render 함수가 호출되지 않는다.
  // shoouldComponentUpdate() 를 구현해 놓은 클래스
  // 비교 방식은 shallow 방식
  //    동일한 오브젝트라면 변경되지 않음
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
