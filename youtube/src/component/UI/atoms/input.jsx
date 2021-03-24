import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      ref={ref}
    />
  );
});
export default Input;
