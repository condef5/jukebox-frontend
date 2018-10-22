import React, { Component } from 'react';

/* eslint-disable */
export class Manager extends Component {
  constructor(props) {
    super(props);
    this.presentationConnection = null;
    this.state = {
      presenting: false
    };
  }

  _togglePresenterMode = url => {
    const { presenting } = this.state;
    const suffix = presenting ? '' : '?reproductor';
    const originalLocation = location.href;
    if (presenting === false && window.PresentationRequest) {
      const presentationRequest = new PresentationRequest([`${originalLocation}${suffix}`]);
      navigator.presentation.defaultRequest = presentationRequest;
      presentationRequest.start().then(connection => {
        console.log('ready');
        this.presentationConnection = connection;
        this.setState({ presenting: true });
        this.presentationConnection.addEventListener('message', data => {
          this._goToSlide(url);
        });
      });
    } else {
      console.log('change video...');
      this._goToSlide('https://youtu.be/CfbCLwNlGwU');
    }
  };

  _atachEvents = () => {
    window.addEventListener('keydown', this._handleKeyPress);
  };

  _detachEvents = () => {
    window.removeEventListener('keydown', this._handleKeyPress);
  };

  _handleEvent = e => {
    const event = window.event ? window.event : e;
    if (event.altKey && event.keyCode === 80 && !event.ctrlKey && !event.metaKey) {
      this._togglePresenterMode('https://youtu.be/B0cVKmkYamU');
    }
  };

  _handleKeyPress = e => {
    const event = window.event ? window.event : e;
    if (
      event.target instanceof HTMLInputElement ||
      event.target.type === 'textarea' ||
      event.target.contentEditable === 'true'
    ) {
      return;
    }
    this._handleEvent(e);
  };

  _goToSlide = url => {
    const msgData = JSON.stringify({
      url
    });
    localStorage.setItem('video', msgData);
    this.presentationConnection.send(msgData);
  };

  componentDidMount() {
    this._atachEvents();
  }

  componentWillUnmount() {
    this._detachEvents();
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Manager;
