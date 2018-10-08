import React from 'react';
import styled from 'styled-components';
import { SkipNext } from 'styled-icons/material/SkipNext';

const StyleBeat = styled.div`
  padding: 1em 0;
  text-transform: uppercase;
  svg {
    width: 30px;
    color: #fff;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: red;
  }
  h4 {
    -webkit-text-stroke: 1px white;
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
    text-shadow: 3px 3px 0 #f00, -1px -1px 0 #f00, 1px -1px 0 #f00,
      -1px 1px 0 #f00, 1px 1px 0 #f00;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Beat = () => (
  <StyleBeat>
    <div className="head">
      <h4>Reproducciendo...</h4>
      <SkipNext />
    </div>
    <div className="content">
      <div className="sound">-----</div>
      <div className="music">
        <div className="duration">03:30</div>
        <div>
          <div className="author">Linkin Park</div>
          <div className="song">In the end</div>
        </div>
      </div>
    </div>
  </StyleBeat>
);

export default Beat;
