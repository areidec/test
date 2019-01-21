import React, { Component } from 'react';

class VideoTile extends Component {
  render() {

    let {video, age} = this.props;
    console.log('video', this.props)


    return (
      <div className='video-tile'>
        <div className='video-tile__preview'>
          <img src={video.videoUrl}/>
        </div>
        <div className='video-tile__title'>
          {video.videoTitle} {age}
        </div>
        <div className='video-tile__chanel'>
          {video.videoChanel}
        </div>
        <div className='video-tile__watch'>
          {video.videoWatch}
        </div>
        <div className='video-tile__time'>
          {video.videoDownloadTime}
        </div>
      </div>
    )
  }
}

export default VideoTile;
