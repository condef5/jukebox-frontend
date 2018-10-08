import React from 'react';
import ButtonStyles from './styles/Button';

const Button = ({ children }) => (
  <ButtonStyles>
    <b>{children}</b>
  </ButtonStyles>
);

export default Button;
