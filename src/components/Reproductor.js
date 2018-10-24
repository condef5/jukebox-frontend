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
      playing: true,
      volume: 0.8
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
    console.log('onPlay');
    this.setState({ playing: true });
  };

  onPause = () => {
    console.log('onPause');
    this.setState({ playing: false });
  };

  onDuration = duration => {
    console.log('onDuration', duration);
    this.setState({ duration });
  };

  onEnded = () => {
    console.log('onEnded');
    const { time } = this.state;
    this.sendData({
      action: 'end',
      time
    });
  };

  // events to first screen
  receiveData = e => {
    const data = JSON.parse(e.newValue);
    console.log(data);
    // if (data.key == 'change') {
    this.setState({ url: data.url, time: data.time });
    // }s
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
    const { url, playing, volume } = this.state;
    if (!url) {
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
