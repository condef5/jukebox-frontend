import React from 'react';
import styled from 'styled-components';
import { Home } from 'styled-icons/fa-solid/Home';
import { Keyboard } from 'styled-icons/material/Keyboard';
import { QuestionCircle as Question } from 'styled-icons/fa-regular/QuestionCircle';
import { Search } from 'styled-icons/material/Search';

const ListButton = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 50px;
  padding: 0 1em;
  button {
    border: none;
    outline: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.25px;
    font-size: 12px;
    padding: 0.35em 0.75em;
    line-height: 20px;
    margin-bottom: 8px;
    border-radius: 4px;
    background-color: rgb(107, 107, 107);
    cursor: pointer;
    text-transform: uppercase;
    user-select: none;
    font-weight: 100;
  }
  span {
    padding-left: 3px;
  }
  svg {
    width: 20px;
  }
`;

const Manage = () => (
  <ListButton className="list-button">
    <button type="button" style={{ width: '100%' }}>
      <Search />
      <span>Buscar directo</span>
    </button>
    <button type="button">
      <Home />
    </button>
    <button type="button">
      <Keyboard />
    </button>
    <button type="button">
      <Question />
    </button>
  </ListButton>
);

export default Manage;
