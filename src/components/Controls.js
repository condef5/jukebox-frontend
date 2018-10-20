import React from 'react';
import { VolumeUp } from 'styled-icons/fa-solid/VolumeUp';
import { PlayCircle } from 'styled-icons/fa-solid/PlayCircle';
import ControlStyle from './styles/Controls';

const onShowPlayer = () => {
  const event = new KeyboardEvent('keydown', {
    keyCode: 80,
    altKey: true,
    ctrlKey: false,
    metaKey: false
  });
  window.dispatchEvent(event);
};

const Controls = () => (
  <ControlStyle>
    <div className="credits">
      <div>Créditos</div>
      <div>20</div>
    </div>
    <div>
      <PlayCircle style={{ width: '40px' }} onClick={onShowPlayer} />
    </div>
    <div className="volumen">
      <VolumeUp style={{ width: '40px' }} />
    </div>
  </ControlStyle>
);

export default Controls;
