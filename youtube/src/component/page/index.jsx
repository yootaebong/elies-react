import React, { useCallback } from 'react';
import IndexTemplate from '../templates/indexTemplate';
import styles from './../../styles/page/index.module.css';

const Index = (props) => {
  return (
    <div className={styles.main}>
      <IndexTemplate items={props.items} />
    </div>
  );
};

export default Index;
