import React from 'react';
import classNames from 'classnames';
const P = (props) => {
  return <p className={classNames(props.className)}>{props.text}</p>;
};

export default P;
