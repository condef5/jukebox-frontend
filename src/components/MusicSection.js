import React from 'react';
import { Tab, MusicContainer } from './styles/MusicSection';

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

const MusicSection = () => (
  <div style={{ marginBottom: '1em' }}>
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
      {musics.map(music => (
        <div className="musica">
          <div>{music.author}</div>
          <div>{music.name}</div>
        </div>
      ))}
    </MusicContainer>
  </div>
);

export default MusicSection;
