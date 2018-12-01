import React from 'react';
import { Badge } from 'antd';
import StyleContain from './styles/WaitingList';
import { NavigatorConsumer } from '../context/NavigatorContext';

const WaitingList = () => (
  <NavigatorConsumer>
    {context => (
      <StyleContain>
        <header>
          <strong>Lista de espera</strong>
          <Badge count={4} />
        </header>
        <div className="list">
          {context.state.videos.map(video => (
            <div className="row" key={video.time}>
              <p className="song ellipsis-one-line">{video.name}</p>
              <h4 className="author ">{video.author}</h4>
            </div>
          ))}
        </div>
      </StyleContain>
    )}
  </NavigatorConsumer>
);

export default WaitingList;
