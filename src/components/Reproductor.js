import React from 'react';
import styled from 'styled-components';
import { SkipNext } from 'styled-icons/material/SkipNext';
import Duration from './Duration';
import { NavigatorConsumer } from '../context/NavigatorContext';
import buffer from '../assets/ecualizador.gif';

const StyleBeat = styled.div`
  padding: 1em;
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

  .music {
    flex: 1;
    margin-left: 5px;
    flex: 1;
    padding-left: 10px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
    color: #eb1aef;
    line-height: 1.4;
    text-shadow: 1px 1px 15px rgba(255, 0, 0, 0),
      -1px -1px 15px rgba(255, 0, 0, 0.61), 1px 1px 15px rgba(255, 0, 0, 0.61),
      -1px -1px 15px rgba(255, 0, 0, 0.3);
    background-image: -webkit-gradient(
      linear,
      0% 0%,
      35% 100%,
      from(#d417d8),
      to(#f12e2e)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sound {
    width: 60%;
    img {
      width: 100%;
    }
  }
`;

const Reproductor = () => (
  <NavigatorConsumer>
    {({ state: { currentVideo, playing, duration }, nextVideo }) => (
      <StyleBeat>
        <div className="head">
          <h4>{playing ? 'Reproducciendo...' : 'Pausa'}</h4>
          <SkipNext onClick={nextVideo} />
        </div>
        <div className="content">
          <div className="sound">
            <img src={buffer} alt="perumatic buffer" />
          </div>
          <div className="music">
            <Duration seconds={duration} />
            <div>
              <div className="author">
                {currentVideo ? currentVideo.author : 'Artista Desconocido'}
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

export default Reproductor;
