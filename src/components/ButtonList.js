import React, { Component } from 'react';
import { Home } from 'styled-icons/fa-solid/Home';
import { QuestionCircle as Question } from 'styled-icons/fa-regular/QuestionCircle';
import { Search } from 'styled-icons/material/Search';
import { Keyboard } from 'styled-icons/material/Keyboard';
import ButtonListStyled from './styles/ButtonList';
import VirtualKey from './VirtualKey';

class ButtonList extends Component {
  state = {
    actived: false
  };

  toogle = () => {
    const { actived } = this.state;
    this.setState({ actived: !actived });
  };

  render() {
    const { actived } = this.state;
    return (
      <div>
        <ButtonListStyled className="list-button">
          <button type="button" style={{ width: '100%' }} onClick={this.toogle}>
            <Search />
            <span>Buscar directo</span>
          </button>
          <button type="button">
            <Home />
          </button>
          <button type="button" onClick={this.toogle}>
            <Keyboard />
          </button>
          <button type="button">
            <Question />
          </button>
        </ButtonListStyled>
        {actived && <VirtualKey toogle={this.toogle} />}
      </div>
    );
  }
}

export default ButtonList;
