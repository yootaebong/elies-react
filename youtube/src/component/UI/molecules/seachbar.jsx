import React from 'react';
import classNames from 'classnames';
import Image from '../atoms/image';
import Input from '../atoms/input';
import styles from './../../../styles/molecules/searchbar.module.css';

const Seachbar = (props) => {
  return (
    <span className={classNames(styles.span, props.className)}>
      <Input className={styles.input} placeholder="search.." />
      <Image className={styles.image} src="/search.png" />
    </span>
  );
};

export default Seachbar;
