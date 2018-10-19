import React, { Component } from 'react';
import { Tab, MusicContainer, Letters } from './styles/MusicSection';

/* eslint-disable */
const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

class VideoclipList extends Component {
  constructor(props) {
    super(props);
    this.presentationConnection = null;
    this.state = {
      presenting: false
    };
  }

  openMusic = url => {
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
      this._goToSlide(url);
    }
  };

  _goToSlide = url => {
    const msgData = JSON.stringify({
      url
    });
    localStorage.setItem('video', msgData);
    this.presentationConnection.send(msgData);
  };

  render() {
    const { videoclips } = this.props;
    return (
      <div style={{ marginBottom: '1em', padding: '0 1em' }}>
        <Tab>
          <div>Canciones</div>
          <div>Nuevos</div>
          <div>
            <span role="img" aria-label="fire">
              🔥
            </span>
          </div>
        </Tab>
        <MusicContainer>
          <div style={{ flex: '1', paddingRight: '1em' }}>
            {videoclips.map(music => (
              <div className="musica" key={music.id} onClick={() => this.openMusic(music.url)}>
                <div>{music.author}</div>
                <div>{music.name}</div>
              </div>
            ))}
          </div>
          <Letters>
            {letters.map(item => (
              <div key={item}>{item}</div>
            ))}
          </Letters>
        </MusicContainer>
      </div>
    );
  }
}

export default VideoclipList;