import React from 'react';
import styled from 'styled-components';
import { OndemandVideo } from 'styled-icons/material/OndemandVideo.cjs';
import { Microphone } from 'styled-icons/fa-solid/Microphone.cjs';
import { Music } from 'styled-icons/fa-solid/Music.cjs';

const WrapIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  svg {
    width: 30px;
    margin: 1em 1.5em;
  }
`;

const Options = () => (
  <WrapIcons>
    <OndemandVideo style={{ width: '45px' }} />
    <Microphone />
    <Music style={{ width: '40px' }} />
  </WrapIcons>
);

export default Options;
