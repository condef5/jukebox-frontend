import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import { NavigatorProvider } from '../context/NavigatorContext';

export class Manager extends Component {
  constructor(props) {
    super(props);
    this.presentationConnection = null;
    this.state = {
      currentVideo: null,
      duration: 0,
      videos: [],
      playing: true,
      presenting: false,
      previewVideo: null,
      volume: 0.8,
      muted: true
    };
  }

  componentDidMount() {
    // eslint-disable-next-line
    const { duration, previewVideo } = this.state;
    localStorage.clear();
    this.attachEvents();
  }

  componentWillUnmount() {
    this.presentationConnection = null;
    this.detachEvents();
  }

  initPresenterMode = () => {
    // eslint-disable-next-line
    const originalLocation = location.href;
    const { presenting } = this.state;
    if (presenting === false && window.PresentationRequest) {
      const presentationRequest = new PresentationRequest([
        `${originalLocation}?reproductor`
      ]);
      navigator.presentation.defaultRequest = presentationRequest;
      presentationRequest.start().then(connection => {
        this.presentationConnection = connection;
        this.setState({ presenting: true });
        this.presentationConnection.addEventListener('message', data => {
          this.receiveData({ key: 'jukebox_video', newValue: data.data });
        });
      });
    } else if (this.presentationConnection) {
      this.presentationConnection.terminate();
      this.setState({ presenting: false });
    }
  };

  attachEvents = () => {
    window.addEventListener('keydown', this.handleKeyPress);
    window.addEventListener('storage', this.receiveData);
  };

  detachEvents = () => {
    window.removeEventListener('keydown', this.handleKeyPress);
    window.removeEventListener('storage', this.receiveData);
  };

  handleEvent = e => {
    const event = window.event ? window.event : e;
    if (
      event.altKey &&
      event.keyCode === 80 &&
      !event.ctrlKey &&
      !event.metaKey
    ) {
      this.initPresenterMode();
    }
  };

  handleKeyPress = e => {
    const event = window.event ? window.event : e;
    if (
      event.target instanceof HTMLInputElement ||
      event.target.type === 'textarea' ||
      event.target.contentEditable === 'true'
    ) {
      return;
    }
    this.handleEvent(e);
  };

  addVideo = video => {
    const { videos, currentVideo } = this.state;
    const time = new Date().getTime();
    if (!currentVideo) {
      this.setState(
        {
          currentVideo: { time, ...video }
        },
        () => this.sendData()
      );
    } else {
      this.setState({ videos: [...videos, { time, ...video }] });
    }
    this.setState({ previewVideo: null });
  };

  nextVideo = () => {
    const { videos } = this.state;
    if (videos.length > 0) {
      const currentVideo = videos[0];
      this.setState({ currentVideo }, () => setTimeout(this.sendData(), 500));
      this.setState({ videos: videos.slice(1) });
    } else {
      this.setState({ currentVideo: null }, () => this.sendData());
    }
  };

  tooglePlay = () => {
    const { playing } = this.state;
    this.setState({ playing: !playing }, () => this.sendData('play'));
  };

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) }, () =>
      this.sendData('volume')
    );
  };

  preview = video => {
    this.setState({ previewVideo: video });
  };

  sendData = (action = 'nothing') => {
    const { presenting, currentVideo, playing, volume } = this.state;
    let msgData;
    if (currentVideo) {
      msgData = JSON.stringify({
        url: currentVideo.url,
        time: currentVideo.time,
        finished: false,
        playing,
        volume,
        action
      });
    } else {
      msgData = JSON.stringify({
        finished: true
      });
    }
    localStorage.setItem('jukebox_video', msgData);
    if (presenting && this.presentationConnection) {
      this.presentationConnection.send(msgData);
    }
  };

  receiveData = e => {
    const data = JSON.parse(e.newValue);
    switch (data.action) {
      case 'duration':
        this.setState({ duration: data.duration });
        break;
      case 'finished':
        this.nextVideo();
        break;
      case 'next':
        this.nextVideo();
        break;
      case 'play':
        this.setState({ playing: data.playing });
        break;
      case 'load':
        this.player.seekTo(parseFloat(0));
        this.setState({ muted: false });
        break;
      default:
        break;
    }
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const { children } = this.props;
    const {
      currentVideo,
      duration,
      videos,
      playing,
      presenting,
      previewVideo,
      volume,
      muted
    } = this.state;
    const data = {
      state: {
        currentVideo,
        duration,
        videos,
        playing,
        presenting,
        previewVideo,
        volume
      },
      add: this.addVideo,
      init: this.initPresenterMode,
      sendData: this.sendData,
      nextVideo: this.nextVideo,
      tooglePlay: this.tooglePlay,
      setVolume: this.setVolume,
      preview: this.preview
    };
    return (
      <NavigatorProvider value={data}>
        {currentVideo && (
          <ReactPlayer
            className="react-player"
            style={{ display: 'none' }}
            url={currentVideo.url}
            ref={this.ref}
            playing={playing}
            volume={volume}
            muted={muted}
            onReady={() => this.setState({ muted: true })}
          />
        )}
        {children}
      </NavigatorProvider>
    );
  }
}

export default Manager;
