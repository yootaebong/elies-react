import React from 'react';
import classNames from 'classnames';
import H1 from '../atoms/h1';
import Image from '../atoms/image';
import styles from './../../../styles/molecules/logo.module.css';

const Logo = (props) => {
  return (
    <figure className={classNames(styles.figure, props.className)}>
      <Image src="/youtube.png" alt="유투브 로고 이미지" />
      <H1 text="YOUTUBE" />
    </figure>
  );
};

export default Logo;
