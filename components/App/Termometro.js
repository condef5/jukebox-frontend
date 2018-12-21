import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  background: transparent;
  box-shadow: 4px 0px 0px #fff inset, -4px 0px 0px #fff inset,
    0px 4px 0px #fff inset;
  display: flex;
  border-radius: 22px;
  height: 93vh;
  position: absolute;
  right: 10px;
  top: 1vh;
  width: 90px;
  justify-content: flex-end;
  flex-direction: column;

  .cerveza {
    border-radius: 0px 0px 20px 20px;
  }

  .spuma,
  .cerveza {
    background: linear-gradient(to top, #fec20e, #fbff00, #f76b07);
    height: ${props => props.load || '40%'};
    width: 100%;
    bottom: 0;
    transition: all 0.3s ease-in-out;
  }

  .spuma {
    background: linear-gradient(to top, #fff, #fff);
    height: ${props => props.load || '30%'};
    width: 100%;
    /* border-radius: 20px 20px 0px 0px; */
  }

  .ray {
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  .ray > div {
    border-radius: 2px;
    padding: 2px 0;
    margin: 8.5vh 1px;
    box-shadow: rgb(255, 0, 0) 1px 2px 1px 0px, rgb(255, 0, 0) -1px -1px 2px 0px,
      rgb(255, 0, 0) -1px 1px 2px 0px, rgb(255, 0, 0) 1px -2px 2px 0px;
  }
`;

const Termometro = ({ load }) => (
  <Wrap load={load}>
    <div className="spuma" />
    <div className="cerveza" />
    <div className="ray">
      {Array.from({ length: 9 }).map(i => (
        <div />
      ))}
    </div>
  </Wrap>
);

export default Termometro;
