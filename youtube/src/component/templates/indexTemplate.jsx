import React from 'react';
import ImgcardList from '../UI/organisms/imgcardList';
import Navigationbar from '../UI/organisms/navigationbar';
import styles from './../../styles/template/index.module.css';

const IndexTemplate = () => {
  return (
    <div className={styles.main}>
      <Navigationbar className={styles.nav} />
      <main>
        <ImgcardList className={styles.content} />
      </main>
    </div>
  );
};

export default IndexTemplate;
