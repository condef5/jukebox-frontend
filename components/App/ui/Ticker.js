import React from 'react';
import styled, { keyframes } from 'styled-components';

const duration = '30s';

const ticker = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

const Styles = styled.div`
  position: absolute;
  overflow: hidden;
  width: 99.5%;
  height: 2rem;
  border-radius: 0px 0px 5px 5px;
  bottom: -10px;
  z-index: 10;
  left: 0;
  padding: 4px;
  .ticker-wrap {
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    height: 2rem;
    padding-left: 100%;
    box-sizing: content-box;

    .ticker {
      display: inline-block;
      height: 2rem;
      line-height: 2rem;
      white-space: nowrap;
      padding-right: 100%;
      box-sizing: content-box;

      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-name: ${ticker};
      animation-duration: ${duration};

      &__item {
        display: inline-block;
        padding: 0 1rem;
        font-size: 16px;
        color: white;
        font-weight: 600;
        letter-spacing: 1px;
      }
    }
  }
`;

export default () => (
  <Styles>
    <div className="ticker-wrap">
      <div className="ticker">
        <div className="ticker__item">Publicidad No 1.</div>
        <div className="ticker__item">
          Cerveza super fria como el corazon de tu ex.
        </div>
        <div className="ticker__item">Publicidad No 2.</div>
        <div className="ticker__item">
          Gluten-free mumblecore chambray mixtape food truck.
        </div>
      </div>
    </div>
  </Styles>
);
