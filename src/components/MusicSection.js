import React, { Component } from 'react';
import { Tab, MusicContainer, Letters } from './styles/MusicSection';
/* eslint-disable */

const musics = [
  {
    name: 'In the end',
    author: 'Linkin Park',
    url: 'https://www.youtube.com/watch?v=eVTXPUF4Oz4'
  },
  { name: 'Numb', author: 'Linkin Park', url: 'https://youtu.be/kXYiU_JCYtU' },
  {
    name: 'Leave out all the rest',
    author: 'Linkin Park',
    url: 'https://www.youtube.com/watch?v=yZIummTz9mM'
  },
  {
    name: 'Shadow in the dark',
    author: 'Linkin Park',
    url: 'https://youtu.be/i8q8fFs3kTM'
  },
  {
    name: 'New divide',
    author: 'Linkin Park',
    url: 'https://www.youtube.com/watch?v=ysSxxIqKNN0'
  },
  {
    name: "What I've Done ",
    author: 'Linkin Park',
    url: 'https://www.youtube.com/watch?v=8sgycukafqQ'
  },
  {
    name: 'Breaking The Habit',
    author: 'Linkin Park',
    url: 'https://youtu.be/v2H4l9RpkwM'
  },
  {
    name: 'Papercut',
    author: 'Linkid park',
    url: 'https://youtu.be/vjVkXlxsO8Q'
  },
  {
    name: 'Burn It Down',
    author: 'Linkid park',
    url: 'https://youtu.be/dxytyRy-O1k'
  },
  {
    name: 'Somewhere I Belong',
    author: 'Linkid park',
    url: 'https://youtu.be/4h3F6pb0CNc'
  }
];

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

class MusicSection extends Component {
  constructor() {
    super();
    this.presentationConnection = null;
    this.state = {
      presenting: false
    };
  }

  openMusic = url => {
    const { presenting } = this.state;
    const suffix = presenting ? '' : '?reproductor';
    const originalLocation = 'http://localhost:3000';
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
            {musics.map(music => (
              <div className="musica" onClick={() => this.openMusic(music.url)}>
                <div>{music.author}</div>
                <div>{music.name}</div>
              </div>
            ))}
          </div>
          <Letters>
            {letters.map(item => (
              <div>{item}</div>
            ))}
          </Letters>
        </MusicContainer>
      </div>
    );
  }
}

export default MusicSection;
