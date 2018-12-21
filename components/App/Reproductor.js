import React from 'react';
import styled from 'styled-components';
import { SkipNext } from 'styled-icons/material/SkipNext.cjs';
import Duration from './Duration';
import { NavigatorConsumer } from '../context/NavigatorContext';
import { TextShadow } from './styles/Common';

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

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .music {
    flex: 1;
    margin-left: 5px;
    flex: 1;
    padding-left: 10px;
  }

  .sound {
    width: 60%;
    img {
      width: 100%;
      vertical-align: bottom;
      margin-bottom: -1px;
    }
  }

  .buffer_stop {
    display: flex;
    justify-content: center;
    margin: 0 3px;
    & > div {
      background-color: #fff;
      flex: 1;
      height: 10px;
      border: 1px solid red;
      margin: 1px;
    }
  }
`;

const Reproductor = () => (
  <NavigatorConsumer>
    {({ state: { currentVideo, duration }, nextVideo }) => (
      <StyleBeat>
        <div className="head">
          <TextShadow>
            {currentVideo ? 'Reproducciendo...' : 'Pausa'}
          </TextShadow>
          <SkipNext onClick={nextVideo} />
        </div>
        <div className="content">
          <div className="sound">
            {currentVideo ? (
              <img
                src="/static/assets/ecualizador.gif"
                alt="perumatic buffer"
              />
            ) : (
              <div className="buffer_stop">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            )}
          </div>
          <TextShadow className="music">
            <Duration seconds={duration} />
            <div>
              <div className="author">
                {currentVideo ? currentVideo.author : 'Artista Desconocido'}
              </div>
              <div className="song">
                {currentVideo ? currentVideo.name : ''}
              </div>
            </div>
          </TextShadow>
        </div>
      </StyleBeat>
    )}
  </NavigatorConsumer>
);

export default Reproductor;
