import React from 'react';
import styled from 'styled-components';

const StylePreview = styled.div`
  border-radius: 5px;
  background: red;
  padding: 0.5em 1em;
  margin: 1em;
  text-align: center;
  box-shadow: 1px 1px 40px rgba(255, 0, 0, 0.61),
    -1px -1px 40px rgba(255, 0, 0, 0.61);
`;

const StyleVideo = styled.div`
  height: 180px;
  background: #fff;
`;

const VideoPreview = () => (
  <div>
    <StylePreview>Video Previo</StylePreview>
    <StyleVideo />
  </div>
);

export default VideoPreview;
