import React, { memo } from 'react';
import VideoPlayAndDes from '../UI/organisms/videoPlayAndDes';
import ImgcardList from '../UI/organisms/imgcardList';
import classNames from 'classnames';
import style from '../../styles/template/detail.module.css';

const DetailTemplate = memo((props) => {
  return (
    <main className={classNames(style.main)}>
      <VideoPlayAndDes className={classNames(style.video)} {...props} />
      <article className={classNames(style.list)}>
        <ImgcardList items={props.items} setVideo={props.setVideo} />
      </article>
    </main>
  );
});

export default DetailTemplate;
