import React from 'react';
import classNames from 'classnames';

const Iframe = (props) => {
  return (
    <iframe
      className={classNames(props.className)}
      type={props.type}
      src={props.src}
      frameBorder="0"
    ></iframe>
  );
};

export default Iframe;
