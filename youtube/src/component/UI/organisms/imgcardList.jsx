import React, { memo, useCallback, useEffect, useState } from 'react';
import RowImacard from '../molecules/rowImacard';
import styles from './../../../styles/organisms/imgcardList.module.css';

const ImgcardList = memo((props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (props.items && props.items.items) {
      const temps = [...items, ...props.items.items];
      setItems(temps);
    }
  }, [props.items]);

  return (
    <>
      {items.map((e) => {
        return <RowImacard item={e} key={e.id} {...props} />;
      })}
    </>
  );
});

export default ImgcardList;
