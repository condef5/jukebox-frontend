import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { hot } from 'react-hot-loader';
import Timer, { format } from './ui/Timer';
import Logo from '../assets/logo.gif';
import Termometro from './Termometro';

const prizes = [
  'Ganaste una cerveza',
  'Ganaste una canción más',
  'Ganaste un miniron',
  'Ganaste una entrada gratis'
];

/* eslint-disable*/
class SecondScreen extends Component {
  constructor() {
    super();
    this.presentationConnection = null;

    this.state = {
      countVideos: 0,
      numVideoWinner: 12,
      finished: true,
      progress: 0,
      playing: true,
      time: null,
      url: null,
      winner: false,
      volume: 0.8,
      name: '',
      author: '',
      gender: '',
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
  };

  onPause = () => {
    this.setState({ playing: false });
  };

  onDuration = duration => {
    this.setState({ duration });
  };

  onProgress = state => {
    this.setProgress(state.played);
  };

  onEnded = () => {
    this.sendData({
      action: 'finished'
    });
  };

  setProgress = (played = 0) => {
    const { countVideos, numVideoWinner } = this.state;
    const numDivide = 100 / numVideoWinner;
    const dur = ((countVideos - 1) % numVideoWinner) * numDivide + played * numDivide;
    this.setState({ progress: dur });
    console.log(numDivide);
  };

  receiveData = e => {
    const { countVideos, numVideoWinner, winner } = this.state;
    const data = JSON.parse(e.newValue) || {};

    if (
      countVideos % numVideoWinner === 0 &&
      countVideos !== 0 &&
      data.action !== 'SET_PLAY' &&
      !winner
    ) {
      this.sendData({ action: 'SET_WINNER' });
      this.setState({ winner: true });
    }

    switch (data.action) {
      case 'ADD_VIDEO':
        setTimeout(() => {
          this.setState(
            {
              finished: false,
              time: data.time,
              url: data.url,
              name: data.name,
              author: data.author,
              gender: data.gender,
              countVideos: countVideos + 1,
            },
            () => this.setProgress()
          );
        }, 2000);
        break;
      case 'SET_FINISHED':
        this.setState({ finished: true });
        break;
      case 'SET_PLAY':
        this.setState(prevState => ({
          playing: !prevState.playing
        }));
        break;
      default:
        break;
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

  setStop = () => {
    setTimeout(() => {
      this.setState({ winner: false });
      this.sendData({ action: 'CANCEL_WINNER' });
    }, 8000);
  };

  render() {
    const { url, playing, volume, finished, winner, duration, name, author, gender } = this.state;

    if (winner) {
      this.setStop();
      const prize = prizes[Math.floor(Math.random() * prizes.length)];
      return (
        <div className="fireworks">
          <h2>{prize}</h2>
          <audio autoPlay loop id="sound_winner">
            <source src="/sound_winner.mp3" />
          </audio>
        </div>
      );
    }

    if (finished) {
      return (
        <div className="centerMessage">
          <img src={Logo} alt="peru entertaiment"/>
        </div>
      );
    }

    return (
      <div className="WrapScreen">
        <ReactPlayer
          ref={this.ref}
          className="react-player"
          playing={true}
          url={url}
          playing={playing}
          muted={true}
          volume={volume}
          onReady={() => console.log('onReady')}
          onStart={() => {
            console.log('onStart');
            this.sendData({
              action: 'load'
            });
          }}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onBuffer={() => console.log('onBuffer')}
          onSeek={e => console.log('onSeek', e)}
          onEnded={this.onEnded}
          onError={e => console.log('onError', e)}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
        />
        <div className="MetaScreen">
          <div>Genero: <span>{gender}</span></div>
          <div>Artista: <span>{author}</span></div>
          <div>Cancion: <span>{name}</span></div>
          <div>Tiempo: <span><Timer seconds={duration} /> de {format(duration)}</span></div>
        </div>
        <Termometro /> 
      </div>
    );
  }
}

export default hot(module)(SecondScreen);
