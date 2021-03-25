import React, { memo, useCallback, useEffect, useState } from 'react';
import RowImacard from '../molecules/rowImacard';
import styles from './../../../styles/organisms/imgcardList.module.css';

const ImgcardList = memo((props) => {
  return (
    <>
      {props.items &&
        props.items.items.map((e) => {
          let key = typeof e.id == 'string' ? e.id : e.id.videoId;
          return <RowImacard item={e} key={key} {...props} />;
        })}
    </>
  );
});

export default ImgcardList;
