import React, { memo, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import H2 from '../atoms/h2';
import H3 from '../atoms/h3';
import Image from '../atoms/image';
import styles from './../../../styles/molecules/rowImgcard.module.css';

const RowImacard = (props) => {
  const item = props.item;

  const goToDetails = () => {
    if (window.location.pathname.includes('details')) {
      props.setVideo({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
      });
    } else {
      let key = typeof item.id == 'string' ? item.id : item.id.videoId;
      window.location.href = `/details/${key}`;
    }
  };

  return (
    <div onClick={goToDetails} className={styles.figure}>
      <Image className={styles.image} src={item.snippet.thumbnails.high.url} alt={props.imageAlt} />
      <div className={styles.textWrap}>
        <H2 text={item.snippet.title} />
        <H3 text={item.snippet.channelTitle} />
      </div>
    </div>
  );
};

export default RowImacard;
