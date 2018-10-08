import React from 'react';
import { VolumeUp } from 'styled-icons/fa-solid/VolumeUp';
import ControlStyle from './styles/Controls';

const Controls = () => (
  <ControlStyle>
    <div className="credits">
      <div>Créditos</div>
      <div>20</div>
    </div>
    <div className="volumen">
      <VolumeUp style={{ width: '40px' }} />
    </div>
  </ControlStyle>
);

export default Controls;
