import React from 'react';
import StyleGenre from './styles/Genre';

const ListGenre = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <StyleGenre>Rock</StyleGenre>
    <StyleGenre>Salsa</StyleGenre>
    <StyleGenre active>Rock</StyleGenre>
    <StyleGenre>Pop</StyleGenre>
    <StyleGenre>Cumbia</StyleGenre>
  </div>
);

export default ListGenre;
