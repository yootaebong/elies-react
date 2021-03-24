// import React, { Component } from 'react';

import React, { useCallback, useEffect, useRef, useState } from 'react';

// 클래스의 멤버 변수는 생성 될 때 한번만 할당됨, render은 지속 할당
// 함수는 컴포넌트가 변경이 되면 전체가 반복되서 호출된다
//    지역 변수 같은것도 무한정 반복 생성됨
//    컴포넌트가 업데이트 될 떄마다 계속해서 만들어짐

const SimpleHabit = (props) => {
  // 계속 만들어지면 count 가 0으로 초기화 될 것 같지만, useState는 기존 값을 저장해둠
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });
  // [] 첫 호출
  // [variable] 해당 값이 바뀔때만 호출
  // 안씀 -> mount && update
  useEffect(() => {
    console.log('effect');
  }, []);
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        Plus
      </button>
    </li>
  );
};

export default SimpleHabit;

// 리엑트 훅 변경 전
// class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <li className="habit">
//         <span className="habit-name">Reading</span>
//         <span className="habit-count">{this.state.count}</span>
//         <button className="habit-button habit-increase" onClick={this.handleIncrement}>
//           Plus
//         </button>
//       </li>
//     );
//   }
// }

// export default SimpleHabit;
