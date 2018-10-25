import React from 'react';
import styled from 'styled-components';
import { SkipNext } from 'styled-icons/material/SkipNext';
import { PlayArrow } from 'styled-icons/material/PlayArrow';
import { Pause } from 'styled-icons/material/Pause';
import { NavigatorConsumer } from '../context/NavigatorContext';

const StyleBeat = styled.div`
  padding: 1em 0;
  text-transform: uppercase;
  svg {
    width: 30px;
    color: #fff;
    cursor: pointer;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: red;
  }
  h4 {
    -webkit-text-stroke: 1px white;
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
    text-shadow: 3px 3px 0 #f00, -1px -1px 0 #f00, 1px -1px 0 #f00,
      -1px 1px 0 #f00, 1px 1px 0 #f00;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CurrentVideo = () => (
  <NavigatorConsumer>
    {({ state: { currentVideo, playing }, nextVideo, tooglePlay }) => (
      <StyleBeat>
        <div className="head">
          <h4>{playing ? 'Reproducciendo...' : 'Pausa'}</h4>
          <div onClick={tooglePlay} role="presentation">
            {playing ? <Pause /> : <PlayArrow />}
          </div>
          <SkipNext onClick={nextVideo} />
        </div>
        <div className="content">
          <div className="sound">-----</div>
          <div className="music">
            <div className="duration">{currentVideo ? '3:12' : '0:00'}</div>
            <div>
              <div className="author">
                {currentVideo ? currentVideo.author : '0:00'}
              </div>
              <div className="song">
                {currentVideo ? currentVideo.name : ''}
              </div>
            </div>
          </div>
        </div>
      </StyleBeat>
    )}
  </NavigatorConsumer>
);

export default CurrentVideo;
