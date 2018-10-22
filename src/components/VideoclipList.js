import React from 'react';
import { Tab, MusicContainer, Letters } from './styles/MusicSection';

/* eslint-disable */
const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const VideoclipList = ({ videoclips, onAddVideo }) => (
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
          <div className="musica" key={music.id} onClick={() => onAddVideo(music.id)}>
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

export default VideoclipList;
