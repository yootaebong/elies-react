import React, { memo } from 'react';
import Iframe from '../atoms/ifram';
import H1 from '../atoms/h1';
import P from '../atoms/p';
import classNames from 'classnames';
import styles from '../../../styles/organisms/videoPlayAndDes.module.css';

const VideoPlayAndDes = memo((props) => {
  return (
    <div className={classNames(styles.wrap, props.className)}>
      <Iframe
        className={styles.ifram}
        src={`http://www.youtube.com/embed/${props.video.id}`}
        type="text/html"
      />
      <H1 text={props.video.title} />
      <P text={props.video.description} />
    </div>
  );
});

export default VideoPlayAndDes;
