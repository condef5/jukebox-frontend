import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import WaitingList from './WaitingList';
import { NavigatorConsumer } from '../context/NavigatorContext';
import { TextShadow } from './styles/Common';
import Preview from './Preview';

const Item = posed.div({
  show: { x: 0, opacity: 1, transition: { duration: 400 } },
  hide: { x: '-50px', opacity: 0.01, transition: { duration: 250 } }
});

const PreviewWrapper = styled.div`
  transform-style: preserve-3d;
  transform: perspective(900px);
  /* width: 95%; */
  margin: 10px 10px 10px 0px;
  & > div {
    transform: rotateX(-7deg) rotateY(-25deg) translateZ(15px);
  }
  .player-wrapper {
    position: relative;
    padding-top: 56.25%;
    border: 3px solid #291844;
    border-radius: 4px;
    margin-bottom: 1.5em;
    box-shadow: 4px 0px 8px rgba(0, 0, 0, 0.3);
  }
  .react-player-preview {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  .meta-video {
    min-height: 20px;
  }
`;

const StylePreview = styled.div`
  background: linear-gradient(#17274e, #370e3e 85%);
  bottom: 0;
  color: white;
  font-weight: 600;
  padding: 0.5em 1em;
  position: absolute;
  opacity: 0.6;
  text-align: center;
  width: 100%;
`;

const VideoPreview = () => (
  <NavigatorConsumer>
    {({ state: { previewVideo } }) => (
      <PreviewWrapper>
        <div>
          <div className="player-wrapper">
            <Preview url={previewVideo ? previewVideo.url : null} />
            <StylePreview>Video Previo</StylePreview>
          </div>
        </div>
        <TextShadow
          className="meta-video"
          fontSize="14px"
          fontWeigth="normal"
          textAlign="center"
        >
          <Item pose={previewVideo ? 'show' : 'hide'}>
            {previewVideo && `${previewVideo.author} - ${previewVideo.name}`}
          </Item>
        </TextShadow>
        <WaitingList />
      </PreviewWrapper>
    )}
  </NavigatorConsumer>
);

export default VideoPreview;
