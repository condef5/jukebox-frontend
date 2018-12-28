import React, { Component } from 'react';
import { Home } from 'styled-icons/fa-solid/Home.cjs';
import { QuestionCircle as Question } from 'styled-icons/fa-regular/QuestionCircle.cjs';
import { Search } from 'styled-icons/material/Search.cjs';
import { Keyboard } from 'styled-icons/material/Keyboard.cjs';
import ButtonListStyled from './styles/ButtonList';
// import SearchModal from './Modals/Search';
import HomeModal from './Modals/Home';
import QuestionsModal from './Modals/Questions';

class ButtonList extends Component {
  state = {
    modalSearch: false,
    modalHome: false,
    modalQuestions: false
  };

  showModal = name => {
    this.setState({ [name]: true });
  };

  hideModal = name => {
    this.setState({ [name]: false });
  };

  render() {
    const { modalSearch, modalHome, modalQuestions } = this.state;
    return (
      <div>
        <ButtonListStyled className="list-button">
          <button
            type="button"
            style={{ width: '100%' }}
            onClick={() => this.showModal('modalSearch')}
          >
            <Search />
            <span>Buscar directo</span>
          </button>
          <button type="button" onClick={() => this.showModal('modalHome')}>
            <Home />
          </button>
          <button type="button" onClick={() => this.showModal('modalSearch')}>
            <Keyboard />
          </button>
          <button
            type="button"
            onClick={() => this.showModal('modalQuestions')}
          >
            <Question />
          </button>
        </ButtonListStyled>
        {/* <SearchModal
          show={modalSearch}
          close={() => this.hideModal('modalSearch')}
        /> */}
        <HomeModal show={modalHome} close={() => this.hideModal('modalHome')} />
        <QuestionsModal
          show={modalQuestions}
          close={() => this.hideModal('modalQuestions')}
        />
      </div>
    );
  }
}

export default ButtonList;
