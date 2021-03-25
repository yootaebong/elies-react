import React, { useEffect, useState } from 'react';
import Index from './component/page/index';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigationbar from './component/UI/organisms/navigationbar';
import Detail from './component/page/detail';
import history from './assets/history';

const App = (props) => {
  const [yotubeData] = useState({
    key: 'AIzaSyAU1gA9Ah2QPVdDF0nBvui36H3xWGWsiuo',
    popUrl: 'https://www.googleapis.com/youtube/v3/videos',
    searchUrl: 'https://www.googleapis.com/youtube/v3/search',
    regionCode: 'kr',
    type: 'video',
  });

  const [popData, setPopData] = useState(null);
  const [searchText, setSearchText] = useState(null);

  const getData = () => {
    let requrl;
    if (!searchText) {
      requrl = `${yotubeData.popUrl}?regionCode=${yotubeData.regionCode}&type=${yotubeData.type}&chart=mostPopular&maxResults=10&key=${yotubeData.key}&part=snippet`;
    } else {
      // 서치 작업
      requrl = yotubeData.searchUrl;
      requrl += `?part=snippet`;
      requrl += `&maxResults=10`;
      requrl += `&order=date`;
      requrl += `&key=${yotubeData.key}`;
      requrl += `&q=${searchText}`;
    }
    fetch(requrl)
      .then((res) => res.json())
      .then((data) => setPopData(data));
  };

  const startSearch = async (ref) => {
    const content = ref.current.value;
    if (!content) throw 'no text';
    setSearchText(content);
  };

  useEffect(() => {
    getData();
  }, [searchText]);
  return (
    <>
      <Navigationbar search={startSearch} />
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => <Index items={popData} />} />
          <Route path="/details/:id" render={() => <Detail items={popData} />} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
