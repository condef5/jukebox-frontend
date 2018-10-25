import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { Title } from './styles/Common';

/* eslint-disable*/
class Reproductor extends Component {
  constructor() {
    super();
    this.presentationConnection = null;

    this.state = {
      url: null,
      time: null,
      playing: false,
      volume: 0.8,
      finished: true
    };

    this._attachEvents = this._attachEvents.bind(this);
  }

  componentDidMount() {
    this._attachEvents();
    screenfull.request(findDOMNode(this.player));
  }

  _attachEvents() {
    window.addEventListener('storage', this.receiveData);
    if ((((navigator || {}).presentation || {}).receiver || {}).connectionList) {
      navigator.presentation.receiver.connectionList.then(list => {
        list.connections.map(connection => {
          this.presentationConnection = connection;
          connection.addEventListener('message', event => {
            this.receiveData({ key: 'jukebox_video', newValue: event.data });
          });
        });
        list.addEventListener('connectionavailable', e => {
          this.presentationConnection = e.connection;
          e.connection.addEventListener('message', event => {
            this.receiveData({ key: 'jukebox_video', newValue: event.data });
          });
        });
      });
    }
  }

  load = (url, time) => {
    this.setState({
      url,
      time
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
    this.setState({ playing: true });
    console.log('onPlay', this.state.playing);
  };

  onPause = () => {
    this.setState({ playing: false });
    console.log('onPause', this.state.playing);
  };

  onDuration = duration => {
    console.log('onDuration', duration);
    this.setState({ duration });
  };

  onEnded = () => {
    console.log('onEnded');
    this.sendData({
      action: 'end'
    });
  };

  receiveData = e => {
    const data = JSON.parse(e.newValue);
    console.log(data);
    if (data.action == 'play') {
      const { playing } = this.state;
      this.setState({ playing: !playing });
    } else {
      data.finished
        ? this.setState({ finished: true })
        : this.setState({ url: data.url, time: data.time, finished: false });
    }
  };

  sendData = data => {
    const msgData = JSON.stringify(data);
    localStorage.setItem('jukebox_video', msgData);
    if (this.presentationConnection) {
      this.presentationConnection.send(msgData);
    }
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const { url, playing, volume, finished } = this.state;
    if (finished) {
      return (
        <div className="centerMessage">
          <Title>Perumatic</Title>
        </div>
      );
    }
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
