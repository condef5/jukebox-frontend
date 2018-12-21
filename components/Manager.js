import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Modal, Radio, message, Button } from 'antd';
import { Screen } from './Animations';
import { NavigatorProvider } from '../context/NavigatorContext';

const RadioGroup = Radio.Group;
const timeShowScreen = 100000;

export class Manager extends Component {
  constructor(props) {
    super(props);
    this.presentationConnection = null;
    this.state = {
      activity: true,
      currentVideo: null,
      duration: 0,
      lastActivity: 0,
      muted: true,
      playing: true,
      presenting: false,
      previewVideo: null,
      screen: '1',
      volume: 0.8,
      videos: [],
      visible: true,
      winner: false
    };
  }

  componentDidMount() {
    // eslint-disable-next-line
    const { duration, previewVideo } = this.state;
    localStorage.clear();
    this.observerScreen();
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
        `${originalLocation}/app?reproductor=true`
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
    window.addEventListener('click', this.lastEvent);
  };

  detachEvents = () => {
    window.removeEventListener('keydown', this.handleKeyPress);
    window.removeEventListener('storage', this.receiveData);
    window.removeEventListener('click', this.lastEvent);
  };

  lastEvent = () => {
    const lastActivity = Date.now();
    this.setState({ lastActivity });
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
        () => this.sendData('ADD_VIDEO')
      );
    } else {
      if (this.checkLastVideo(video)) {
        message.error('Video repetido en cola');
        return;
      }
      this.setState({
        videos: this.orderPriority([...videos, { time, ...video }])
      });
    }
    this.setState({ previewVideo: null });
    message.success('Se agrego un video');
  };

  orderPriority = arr => [
    ...arr.filter(item => item.option === 'supervip'),
    ...arr.filter(item => item.option === 'vip'),
    ...arr.filter(item => item.option === 'normal')
  ];

  checkLastVideo = video => {
    const { videos, currentVideo } = this.state;
    if (currentVideo.url === video.url && videos.length === 0) return true;
    const data = videos.filter(item => item.option === video.option);
    if (data.length === 0) return false;
    return data[data.length - 1].url === video.url;
  };

  nextVideo = () => {
    const { videos } = this.state;
    if (videos.length === 0) {
      this.setState({ currentVideo: null, duration: 0 }, () =>
        this.sendData('SET_FINISHED')
      );
    } else {
      const currentVideo = videos[0];
      this.setState({ currentVideo }, () => this.sendData('ADD_VIDEO'));
      this.setState({ videos: videos.slice(1) });
    }
  };

  tooglePlay = () => {
    const { playing } = this.state;
    this.setState({ playing: !playing }, () => this.sendData('SET_PLAY'));
  };

  setVolume = volume => {
    this.setState({ volume });
  };

  preview = video => {
    this.setState({ previewVideo: video });
  };

  sendData = action => {
    const { currentVideo, presenting, playing } = this.state;
    let msgData;
    switch (action) {
      case 'ADD_VIDEO':
        msgData = {
          finished: false,
          url: currentVideo.url,
          time: currentVideo.time,
          name: currentVideo.name,
          author: currentVideo.author,
          gender: 'Rock'
        };
        break;
      case 'SET_FINISHED':
        msgData = { finished: true };
        break;
      case 'SET_PLAY':
        msgData = { playing };
        break;
      case 'SET_WINNER':
        msgData = {
          prize: 'ganaste algo'
        };
        break;
      default:
        break;
    }
    msgData.action = action;
    localStorage.setItem('jukebox_video', JSON.stringify(msgData));
    if (presenting && this.presentationConnection) {
      this.presentationConnection.send(JSON.stringify(msgData));
    }
  };

  receiveData = e => {
    const data = JSON.parse(e.newValue) || {};
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
      case 'SET_WINNER':
        this.setState({ winner: true });
        break;
      case 'CANCEL_WINNER':
        this.setState({ winner: false });
        break;
      default:
        break;
    }
  };

  ref = player => {
    this.player = player;
  };

  onChange = e => {
    this.setState({ screen: e.target.value });
  };

  handleOk = () => {
    const { screen } = this.state;
    this.setState({ visible: false });
    if (screen === '2') {
      this.initPresenterMode();
    } else {
      this.setState({ muted: false });
    }
    this.setState({ visible: false });
  };

  observerScreen = () => {
    setInterval(() => {
      const { lastActivity, currentVideo } = this.state;
      const diff = Date.now() - lastActivity;
      if (diff > 3000 && currentVideo) {
        window.scrollTo(0, 0);
        this.setScreen(false);
      } else {
        this.setScreen(true);
      }
    }, timeShowScreen);
  };

  setScreen = activity => {
    this.setState({ activity });
    document.querySelector('body').style.overflow = activity
      ? 'inherit'
      : 'hidden';
  };

  onEnded = () => {
    const { screen } = this.state;
    if (screen === '1') this.nextVideo();
  };

  render() {
    const { children } = this.props;
    const {
      activity,
      currentVideo,
      duration,
      videos,
      playing,
      presenting,
      previewVideo,
      screen,
      volume,
      muted,
      visible
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
        <Screen pose={activity ? 'thumbnail' : 'fullscreen'}>
          {currentVideo && (
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player-screen"
                url={currentVideo.url}
                ref={this.ref}
                playing={playing}
                volume={volume}
                muted={muted}
                onDuration={d => this.setState({ duration: d })}
                onReady={() => this.setState({ muted: screen === '2' })}
                onEnded={this.onEnded}
                width="100%"
                height="100%"
              />
            </div>
          )}
          <div
            className="overlay-reproductor"
            role="presentation"
            onClick={() => this.setScreen(true)}
          />
        </Screen>
        <Modal
          title="Configuracion Inicial"
          visible={visible}
          centered
          footer={[
            <Button key="accept" type="primary" onClick={this.handleOk}>
              Aceptar
            </Button>
          ]}
        >
          <RadioGroup
            onChange={this.onChange}
            defaultValue="1"
            size="large"
            buttonStyle="solid"
          >
            <Radio value="1">Una pantalla</Radio>
            <Radio value="2">Dos pantallas</Radio>
          </RadioGroup>
        </Modal>
        {children}
      </NavigatorProvider>
    );
  }
}

export default Manager;
