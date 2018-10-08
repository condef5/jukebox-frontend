import React, { Component } from 'react';
/* eslint-disable */
const url = 'https://tympanus.net/Development/StackEffects/';

class Carrousel extends Component {
  render() {
    return (
      <div>
        <figure className="stack stack-coverflow active">
          <img src={`${url}img/3.png`} alt="img03" />
          <img src={`${url}img/1.png`} alt="img01" />
          <img src={`${url}img/2.png`} alt="img02" />
        </figure>
      </div>
    );
  }
}

export default Carrousel;
