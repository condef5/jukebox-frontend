import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Preview extends Component {
  state = {
    muted: true,
    playing: true,
    maxTime: 20
  };

  onProgress = state => {
    const { maxTime } = this.state;
    if (state.playedSeconds > maxTime) {
      this.player.seekTo(parseFloat(0));
    }
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const { playing, muted } = this.state;
    const { url } = this.props;
    return (
      <ReactPlayer
        className="react-player-preview"
        ref={this.ref}
        url={url}
        playing={playing}
        muted={muted}
        onProgress={this.onProgress}
        width="100%"
        height="100%"
      />
    );
  }
}

export default Preview;
