import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import WaitingListContainer from '../containers/WaitingListContainer';
import { NavigatorConsumer } from '../context/NavigatorContext';

const PreviewWrapper = styled.div`
  /* transform-style: preserve-3d; */
  /* transform: perspective(700px); */
  width: 95%;
  & > div {
    /* transform: rotateX(0deg) rotateY(-25deg) translateZ(50px); */
  }
  .player-wrapper {
    position: relative;
    padding-top: 56.25%;
    border: 3px solid #291844;
    border-radius: 4px;
    margin-bottom: 1.5em;
  }
`;

const StylePreview = styled.div`
  background: linear-gradient(#17274e, #370e3e 85%);
  bottom: 0;
  color: white;
  font-weight: 600;
  padding: 0.5em 1em;
  position: absolute;
  opacity: 0.6;
  text-align: center;
  width: 100%;
`;

/* eslint-disable */
class VideoPreview extends Component {
  constructor() {
    super();
    this.state = {
      muted: true,
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
                <StylePreview>Video Previo</StylePreview>
              </div>
            </div>
            <div>{previewVideo && previewVideo.author + ' - ' + previewVideo.name}</div>
            <WaitingListContainer />
          </PreviewWrapper>
        )}
      </NavigatorConsumer>
    );
  }
}

export default VideoPreview;
