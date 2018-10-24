import React, { Component } from 'react';

import { NavigatorProvider } from '../context/NavigatorContext';

export class Manager extends Component {
  constructor(props) {
    super(props);
    this.presentationConnection = null;
    this.state = {
      presenting: false,
      videos: []
    };
  }

  componentDidMount() {
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
        `${originalLocation}'?reproductor'`
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
    const { videos } = this.state;
    const time = new Date().getTime();
    this.setState({ videos: [...videos, { ...video, time }] });
  };

  sendData = data => {
    const { presenting } = this.state;
    const msgData = JSON.stringify({
      url: data.url,
      time: data.time
    });
    localStorage.setItem('jukebox_video', msgData);
    if (presenting && this.presentationConnection) {
      this.presentationConnection.send(msgData);
    }
  };

  getVideos = () => {
    const { videos } = this.state;
    return videos;
  };

  receiveData = e => {
    // eslint-disable-next-line
    const data = JSON.parse(e.newValue);
    if (e.key === 'jukebox_video' && data.action === 'end') {
      // eslint-disable-next-line
      if (this.getVideos().length > 1) {
        const newVideos = this.getVideos().filter(
          item => item.time !== data.time
        );
        this.setState({ videos: newVideos });
        this.sendData({
          url: this.getVideos()[0].url,
          time: this.getVideos()[0].time
        });
      } else {
        const newVideos = this.getVideos().filter(
          item => item.time !== data.time
        );
        this.setState({ videos: newVideos });
        this.sendData({
          url: null,
          time: null
        });
      }
    }
    // manage volumen / play / end
  };

  render() {
    const { children } = this.props;
    const data = {
      state: this.state,
      add: this.addVideo,
      init: this.initPresenterMode,
      sendData: this.sendData
    };
    return <NavigatorProvider value={data}>{children}</NavigatorProvider>;
  }
}

export default Manager;
