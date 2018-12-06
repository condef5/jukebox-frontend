import React from 'react';
import styled from 'styled-components';
import { SkipNext } from 'styled-icons/material/SkipNext';
import Duration from './Duration';
import { NavigatorConsumer } from '../context/NavigatorContext';
import { TextShadow } from './styles/Common';
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
          <TextShadow>{playing ? 'Reproducciendo...' : 'Pausa'}</TextShadow>
          <SkipNext onClick={nextVideo} />
        </div>
        <div className="content">
          <div className="sound">
            <img src={buffer} alt="perumatic buffer" />
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
