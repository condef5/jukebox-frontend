import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../ui/Modal';

const HomeWrap = styled.div`
  max-width: 1200px;
  margin-top: 2em;
  h2 {
    text-align: center;
    color: #fff;
    font-size: 24px;
  }
`;

class Home extends Component {
  render() {
    const { show, close } = this.props;
    return (
      <Modal show={show} handleClose={close}>
        <HomeWrap>
          <h2>Seccion principal</h2>
        </HomeWrap>
      </Modal>
    );
  }
}

export default Home;
