import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../ui/Modal';

const QuestionWrap = styled.div`
  max-width: 1200px;
  margin-top: 2em;
  h2 {
    text-align: center;
    color: #fff;
    font-size: 24px;
  }
`;

class Question extends Component {
  render() {
    const { show, close } = this.props;
    return (
      <Modal show={show} handleClose={close}>
        <QuestionWrap>
          <h2>Preguntas y respuestas</h2>
        </QuestionWrap>
      </Modal>
    );
  }
}

export default Question;
