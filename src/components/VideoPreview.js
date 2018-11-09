import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import WaitingListContainer from '../containers/WaitingListContainer';
import { NavigatorConsumer } from '../context/NavigatorContext';

const PreviewWrapper = styled.div`
  transform-style: preserve-3d;
  transform: perspective(700px);
  width: 95%;
  margin: auto;
  & > div {
    transform: rotateX(0deg) rotateY(-25deg) translateZ(50px);
  }
`;

const StylePreview = styled.div`
  border-radius: 5px;
  background: red;
  padding: 0.5em 1em;
  margin: 1em;
  text-align: center;
  box-shadow: 1px 1px 40px rgba(255, 0, 0, 0.61),
    -1px -1px 40px rgba(255, 0, 0, 0.61);
`;

/* eslint-disable */
class VideoPreview extends Component {
  constructor() {
    super();
    this.state = {
      muted: false,
      playing: true,
      maxTime: 10
    };
  }

  onProgress = state => {
    const { maxTime } = this.state;
    if (state.playedSeconds > maxTime) {
      this.player.seekTo(parseFloat(0));
    }
    console.log('onProgress', state);
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const { playing, muted } = this.state;

    return (
      <NavigatorConsumer>
        {({ state: { previewVideo } }) => (
          <PreviewWrapper>
            <StylePreview>Video Previo</StylePreview>
            <div>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player-preview"
                  ref={this.ref}
                  url={previewVideo ? previewVideo.url : null}
                  playing={playing}
                  muted={muted}
                  onProgress={this.onProgress}
                  width="100%"
                  height="100%"
                />
              </div>
              <div>{previewVideo && previewVideo.author + ' - ' + previewVideo.name}</div>
            </div>
            <WaitingListContainer />
          </PreviewWrapper>
        )}
      </NavigatorConsumer>
    );
  }
}

export default VideoPreview;
