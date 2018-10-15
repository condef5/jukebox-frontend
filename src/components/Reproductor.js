import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';

/* eslint-disable*/
class Reproductor extends Component {
  constructor() {
    super();
    this.state = {
      url: 'https://youtu.be/DLfulb7yvR4'
    };

    this._attachEvents = this._attachEvents.bind(this);
    this._goToVideo = this._goToVideo.bind(this);
  }

  componentWillMount() {
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

  ref = player => {
    this.player = player;
  };

  render() {
    const { url } = this.state;
    return (
      <div className="player-wrapper" style={{ background: 'skyblue' }}>
        <ReactPlayer
          ref={this.ref}
          className="react-player"
          playing={true}
          url={url}
          height="100%"
          width="100%"
        />
      </div>
    );
  }
}

export default Reproductor;
