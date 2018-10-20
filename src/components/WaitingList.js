import React from 'react';
import StyleContain from './styles/WaitingList';

const WaitingList = ({ videos }) => (
  <StyleContain>
    <header>Lista de espera</header>
    <div className="list">
      {videos.map(video => (
        <div className="row" key={video.video_id}>
          <h4>{video.author}</h4>
          <p>{video.name}</p>
        </div>
      ))}
    </div>
  </StyleContain>
);

export default WaitingList;
