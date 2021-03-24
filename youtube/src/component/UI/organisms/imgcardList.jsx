import React, { useState } from 'react';
import RowImacard from '../molecules/rowImacard';
import styles from './../../../styles/organisms/imgcardList.module.css';

const ImgcardList = () => {
  const [items, setItems] = useState([
    { image: '/', title: 'asd', description: 'asd' },
    { image: '/', title: 'asd', description: 'asd' },
    { image: '/', title: 'asd', description: 'asd' },
    { image: '/', title: 'asd', description: 'asd' },
    { image: '/', title: 'asd', description: 'asd' },
    { image: '/', title: 'asd', description: 'asd' },
    { image: '/', title: 'asd', description: 'asd' },
    { image: '/', title: 'asd', description: 'asd' },
    { image: '/', title: 'asd', description: 'asd' },
    { image: '/', title: 'asd', description: 'asd' },
    { image: '/', title: 'asd', description: 'asd' },
    { image: '/', title: 'asd', description: 'asd' },
  ]);
  return (
    <div className={styles.wrap}>
      {items.map((e) => {
        return <RowImacard image={e.image} title={e.title} description={e.description} />;
      })}
    </div>
  );
};

export default ImgcardList;
