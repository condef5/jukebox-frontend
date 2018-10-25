import React from 'react';
import { VolumeUp } from 'styled-icons/fa-solid/VolumeUp';
import { PlayCircle } from 'styled-icons/fa-solid/PlayCircle';
import ControlStyle from './styles/Controls';
import { NavigatorConsumer } from '../context/NavigatorContext';

const Controls = () => (
  <NavigatorConsumer>
    {context => (
      <ControlStyle>
        <div className="credits">
          <div>Créditos</div>
          <div>20</div>
        </div>
        <div>
          <PlayCircle style={{ width: '40px' }} onClick={context.init} />
        </div>
        <div className="volumen">
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={context.state.volume}
            onChange={context.setVolume}
          />
          <VolumeUp style={{ width: '40px' }} />
        </div>
      </ControlStyle>
    )}
  </NavigatorConsumer>
);

export default Controls;
