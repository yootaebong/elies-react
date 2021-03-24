import React from 'react';
import H2 from '../atoms/h2';
import H3 from '../atoms/h3';
import Image from '../atoms/image';
import styles from './../../../styles/molecules/rowImgcard.module.css';

const RowImacard = (props) => {
  return (
    <figure className={styles.figure}>
      <Image className={styles.image} src={props.image} alt={props.imageAlt} />
      <div className={styles.textWrap}>
        <H2 text={props.title} />
        <H3 text={props.description} />
      </div>
    </figure>
  );
};

export default RowImacard;
