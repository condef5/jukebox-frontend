import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import WaitingListContainer from '../containers/WaitingListContainer';
import { NavigatorConsumer } from '../context/NavigatorContext';

const PreviewWrapper = styled.div`
  transform-style: preserve-3d;
  transform: perspective(900px);
  /* width: 95%; */
  margin: 10px 10px 10px 0px;
  & > div {
    transform: rotateX(-7deg) rotateY(-25deg) translateZ(15px);
  }
  .player-wrapper {
    position: relative;
    padding-top: 56.25%;
    border: 3px solid #291844;
    border-radius: 4px;
    margin-bottom: 1.5em;
    box-shadow: 4px 0px 8px rgba(0, 0, 0, 0.3);
  }
  .react-player-preview {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  .meta-video {
    height: 20px;
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
                  config={{
                    youtube: {
                      playerVars: { showinfo: 0, controls: 0, title: 0 }
                    }
                  }}
                />
                <StylePreview>Video Previo</StylePreview>
              </div>
            </div>
            <div className="meta-video">
              {previewVideo && previewVideo.author + ' - ' + previewVideo.name}
            </div>
            <WaitingListContainer />
          </PreviewWrapper>
        )}
      </NavigatorConsumer>
    );
  }
}

export default VideoPreview;
