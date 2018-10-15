import React from 'react';
import styled from 'styled-components';

const StyleContain = styled.div`
  background: red;
  padding: 1em;
  text-align: center;
  max-height: 150px;
  overflow: auto;
  margin-top: 1em;
  border-radius: 5px;
  box-shadow: 1px 1px 40px rgba(255, 0, 0, 0.61),
    -1px -1px 40px rgba(255, 0, 0, 0.61);
  header {
    border-bottom: 1px solid #fff;
    padding: 2px 20px;
    text-align: center;
    display: inline-block;
  }

  .list {
    text-align: left;
  }
  .row {
    margin-top: 1em;
    padding-bottom: 2px;
    border-bottom: 1px solid #fff;
  }
  h4 {
    margin: 0;
    letter-spacing: 1px;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;

const WaitingVideo = () => (
  <StyleContain>
    <header>Lista de espera</header>
    <div className="list">
      <div className="row">
        <h4>Linkin park</h4>
        <p>New divide</p>
      </div>
      <div className="row">
        <h4>Linkin park</h4>
        <p>New divide</p>
      </div>
      <div className="row">
        <h4>Linkin park</h4>
        <p>New divide</p>
      </div>
    </div>
  </StyleContain>
);

export default WaitingVideo;
