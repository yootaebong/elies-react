import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailTemplate from '../templates/detailTemplate';
import history from '../../assets/history';

const Detail = (props) => {
  let { id } = useParams();
  const [video, setVideo] = useState({
    id: id,
    title: null,
    description: null,
  });

  const videoItem = props.items && props.items.items.filter((e) => e.id == id);
  try {
    const title = videoItem[0].snippet.title;
    const description = videoItem[0].snippet.description;

    setVideo({
      id: id,
      title: title,
      description: description,
    });
  } catch (e) {}

  useEffect(() => {
    history.push(video.id);
  }, [video]);

  return (
    <>
      <DetailTemplate {...props} video={video} setVideo={setVideo} />
    </>
  );
};

export default Detail;
