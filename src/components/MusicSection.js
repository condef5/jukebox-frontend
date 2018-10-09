import React from 'react';
import { Tab, MusicContainer, Letters } from './styles/MusicSection';

const musics = [
  { name: 'In the end', author: 'Linkid park' },
  { name: 'Meteora', author: 'Linkid park' },
  { name: 'Lop in the nice', author: 'Daft punk' },
  { name: 'Shadow in the dark', author: 'Linkid park' },
  { name: 'In the end', author: 'Linkid park' },
  { name: 'Meteora', author: 'Linkid park' },
  { name: 'Lop in the nice', author: 'Daft punk' },
  { name: 'Shadow in the dark', author: 'Linkid park' },
  { name: 'In the end', author: 'Linkid park' },
  { name: 'Meteora', author: 'Linkid park' }
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

const MusicSection = () => (
  <div style={{ marginBottom: '1em', padding: '0 1em' }}>
    <Tab>
      <div>Artistas</div>
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
          <div className="musica">
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

export default MusicSection;
