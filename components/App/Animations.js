import posed from 'react-pose';
import styled from 'styled-components';
import { tween } from 'popmotion';

export const Screen = styled(
  posed.div({
    fullscreen: {
      width: '100%',
      height: '100vh',
      left: 0,
      transition: tween,
      flip: true
    },
    thumbnail: {
      width: 150,
      height: 150,
      left: 'calc(50% - 75px)',
      transition: tween,
      flip: true
    }
  })
)`
  position: fixed;
  bottom: 0px;
  z-index: 100;
  display: flex;
  align-items: flex-end;
`;
