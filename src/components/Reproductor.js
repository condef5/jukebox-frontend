import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { Title } from './styles/Common';
import Termometro from './Termometro';

const premios = [
  'Ganaste una cerveza',
  'Ganaste una canción más',
  'Ganaste un miniron',
  'Ganaste una entrada gratis'
];

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
      finished: true,
      count: -1,
      winner: false,
      progress: 0
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
    this.sendData({ action: 'duration', duration });
  };

  onEnded = () => {
    console.log('onEnded');
    this.sendData({
      action: 'end'
    });
  };

  receiveData = e => {
    const { url, count } = this.state;
    const data = JSON.parse(e.newValue);
    console.log(data);
    if (data.action == 'play') {
      const { playing } = this.state;
      this.setState({ playing: !playing });
    } else {
      if (count % 5 == 0) {
        this.setState({ winner: true });
      }
      if (url != data.url) {
        this.setState({ count: count + 1 });
        console.log(this.state.count);
      }
      data.finished
        ? this.setState({ finished: true })
        : this.setState({ url: data.url, time: data.time, volume: data.volume, finished: false });
    }
  };

  sendData = data => {
    const msgData = JSON.stringify(data);
    localStorage.setItem('jukebox_video', msgData);
    if (this.presentationConnection) {
      this.presentationConnection.send(msgData);
    }
  };

  onProgress = state => {
    const { count } = this.state;
    console.log('onProgress', state.played);
    const dur = (count % 5) * 20 + state.played * 20;
    this.setState({ progress: dur });
  };

  ref = player => {
    this.player = player;
  };

  stop = () => {
    setTimeout(() => {
      this.setState({ winner: false });
    }, 8000);
  };

  render() {
    const { url, playing, volume, finished, winner, progress } = this.state;

    if (finished) {
      return (
        <div className="centerMessage">
          <Title>Perumatic</Title>
        </div>
      );
    }

    if (winner) {
      this.stop();
      const regalo = premios[Math.floor(Math.random() * premios.length)];
      return (
        <div className="fireworks">
          <h2>{regalo}</h2>
          <audio autoPlay loop>
            <source src="/sound_winner.mp3" />
          </audio>
        </div>
      );
    }

    return (
      <div>
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
          onProgress={this.onProgress}
          onDuration={this.onDuration}
        />
        <Termometro load={progress + '%'} />
      </div>
    );
  }
}

export default Reproductor;
