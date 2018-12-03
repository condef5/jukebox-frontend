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
          <Badge count={context.state.videos.length} />
        </header>
        <div className="list">
          {context.state.videos.map((video, index) => (
            <div className="row" key={video.time}>
              <div className="info">
                <span>{`${index + 1}.`}</span>
                <p className="song ellipsis-one-line">{video.name}</p>
                <span className={`option ${video.option}`}>
                  {`(${video.option})`}
                </span>
              </div>
              <h4 className="author">{video.author}</h4>
            </div>
          ))}
        </div>
      </StyleContain>
    )}
  </NavigatorConsumer>
);

export default WaitingList;
