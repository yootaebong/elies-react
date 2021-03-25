import React, { useRef } from 'react';
import classNames from 'classnames';
import Image from '../atoms/image';
import Input from '../atoms/input';
import styles from './../../../styles/molecules/searchbar.module.css';

const Seachbar = (props) => {
  const inputRef = useRef(null);
  const searchClick = () => {
    props.search(inputRef);
  };
  return (
    <span className={classNames(styles.span, props.className)}>
      <Input ref={inputRef} className={styles.input} placeholder="search.." />
      <Image className={styles.image} src="/search.png" onClick={searchClick} />
    </span>
  );
};

export default Seachbar;
