import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';

/* eslint-disable*/
class Reproductor extends Component {
  constructor() {
    super();
    this.state = {
      url: 'https://youtu.be/WG2MvwLfhUQ',
      playing: true,
      volume: 0.8
    };

    this._attachEvents = this._attachEvents.bind(this);
    this._goToVideo = this._goToVideo.bind(this);
  }

  componentDidMount() {
    this._attachEvents();
    screenfull.request(findDOMNode(this.player));
  }

  _attachEvents() {
    window.addEventListener('storage', this._goToVideo);
    if ((((navigator || {}).presentation || {}).receiver || {}).connectionList) {
      navigator.presentation.receiver.connectionList.then(list => {
        list.connections.map(connection => {
          connection.addEventListener('message', event => {
            this._goToVideo({ key: 'spectacle-slide', newValue: event.data });
          });
        });
        list.addEventListener('connectionavailable', e => {
          e.connection.addEventListener('message', event => {
            this._goToVideo({ key: 'spectacle-slide', newValue: event.data });
          });
        });
      });
    }
  }

  _goToVideo(e) {
    const data = JSON.parse(e.newValue);
    console.log(data);
    this.setState({ url: data.url });
  }

  load = url => {
    this.setState({
      url
    });
  };

  playPause = () => {
    const { playing } = this.state;
    this.setState({ playing: !playing });
  };

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  onPlay = () => {
    console.log('onPlay');
    this.setState({ playing: true });
  };

  onPause = () => {
    console.log('onPause');
    this.setState({ playing: false });
  };

  onEnded = () => {
    console.log('onEnded');
  };

  onDuration = duration => {
    console.log('onDuration', duration);
    this.setState({ duration });
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const { url, playing, volume } = this.state;
    return (
      <ReactPlayer
        ref={this.ref}
        className="react-player"
        playing={true}
        url={url}
        playing={playing}
        volume={volume}
        onReady={() => console.log('onReady')}
        onStart={() => console.log('onStart')}
        onPlay={this.onPlay}
        onPause={this.onPause}
        onBuffer={() => console.log('onBuffer')}
        onSeek={e => console.log('onSeek', e)}
        onEnded={this.onEnded}
        onError={e => console.log('onError', e)}
        onDuration={this.onDuration}
      />
    );
  }
}

export default Reproductor;
