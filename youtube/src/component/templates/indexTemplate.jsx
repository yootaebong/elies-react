import React from 'react';
import classNames from 'classnames';
import ImgcardList from '../UI/organisms/imgcardList';
import styles from './../../styles/template/index.module.css';

const IndexTemplate = (props) => {
  return (
    <main className={classNames(styles.main, props.className)}>
      <ImgcardList className={styles.content} items={props.items} />
    </main>
  );
};

export default IndexTemplate;
