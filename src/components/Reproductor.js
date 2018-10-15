import React, { Component } from 'react';
import ReactPlayer from 'react-player';

/* eslint-disable*/
class Reproductor extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://127.0.0.1:8080/1.desencanto.mp4'
    };

    this._attachEvents = this._attachEvents.bind(this);
    this._goToSlide = this._goToSlide.bind(this);
  }

  componentWillMount() {
    this._attachEvents();
  }

  _attachEvents() {
    window.addEventListener('storage', this._goToSlide);
  }

  _goToSlide(e) {
    console.log(e);
    this.setState({ url: e.newValue });
  }

  render() {
    const { url } = this.state;
    return (
      <div className="player-wrapper">
        <ReactPlayer className="react-player" playing={true} url={url} height="100%" width="100%" />
      </div>
    );
  }
}

export default Reproductor;
