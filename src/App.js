import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecomendedVideo from './containers/RecomendedVideo';
import VideoTile from './components/VideoTile';
var Vlasd = {age:'123', sur:123}
const apiRecomended = [
  {
    id: 1,
    videoUrl: logo,
    videoTitle: 'title 1',
    videoChanel: 'chanel 1',
    videoWatch: 250,
    videoDownloadTime: Date.now()
  },
  {
    id: 2,
    videoUrl: logo,
    videoTitle: 'title 2',
    videoChanel: 'chanel 2',
    videoWatch: 150,
    videoDownloadTime: Date.now()
  },
  {
    id: 3,
    videoUrl: logo,
    videoTitle: 'title 3',
    videoChanel: 'chanel 3',
    videoWatch: 200,
    videoDownloadTime: Date.now()
  },
  {
    id: 4,
    videoUrl: logo,
    videoTitle: 'title 4',
    videoChanel: 'chanel 4',
    videoWatch: 10,
    videoDownloadTime: Date.now()
  }
];


class App extends Component {
  render() {
    return (
      <div className="App">
          <RecomendedVideo
            apiRecomended={apiRecomended}
            dima={'dima'}
            vlad={'vlad'}
          />

      </div>
    );
  }
}

export default App;
