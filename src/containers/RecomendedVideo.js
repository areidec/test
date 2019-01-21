import React, { Component } from 'react';
import VideoTile from './../components/VideoTile';
class RecomendedVideo extends Component {
  render() {
    console.log('PROPS:',this.props.apiRecomended)

    return (
      <div className="recomended">
        {
          this.props.apiRecomended.map((video)=>{
            return (
              <VideoTile
                key={video.id}
                video={video}
              />
            )
          })
        }
      </div>
    )
  }
}

export default RecomendedVideo;
