import { useEffect, useState } from 'react';
import './app.css';
import Video_list from './components/video_list/video_list';

function App() {
  // * 비디오 리스트
  const [videos, setVideo] = useState([]);
  // * 마운트 또는 업데이트가 되었을떄
  useEffect(
    () => {
      let url = `https://www.googleapis.com/youtube/v3/videos`;
      url += `?regionCode=kr`;
      url += `&type=video`;
      url += `&chart=mostPopular`;
      url += `&maxResults=10`;
      url += `&key=AIzaSyAU1gA9Ah2QPVdDF0nBvui36H3xWGWsiuo`;
      url += `&part=snippet`;
      fetch(url, {
        method: 'GET',
        redirect: 'follow',
      })
        .then((response) => response.json())
        .then((result) => setVideo(result.items));
    },
    // * 마운트가 되었을 때에만 호출
    [],
  );

  return <Video_list videos={videos} />;
}

export default App;
