import React from 'react';
import styled from 'styled-components';
import WaitingListContainer from '../containers/WaitingListContainer';

const PreviewWrapper = styled.div`
  transform-style: preserve-3d;
  transform: perspective(700px);
  width: 95%;
  margin: auto;
  & > div {
    transform: rotateX(0deg) rotateY(-25deg) translateZ(50px);
  }
`;

const StylePreview = styled.div`
  border-radius: 5px;
  background: red;
  padding: 0.5em 1em;
  margin: 1em;
  text-align: center;
  box-shadow: 1px 1px 40px rgba(255, 0, 0, 0.61),
    -1px -1px 40px rgba(255, 0, 0, 0.61);
`;

const VideoPreview = () => (
  <PreviewWrapper>
    <StylePreview>Video Previo</StylePreview>
    <div>
      <div className="videoWrapper">
        <iframe
          title="asdasd"
          width="400"
          height="315"
          src="https://www.youtube.com/embed/B0cVKmkYamU"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div>Linkin park - In the end</div>
    </div>
    <WaitingListContainer />
  </PreviewWrapper>
);

export default VideoPreview;
