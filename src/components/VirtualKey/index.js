import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Keyboard from 'react-simple-keyboard';
import { TimesCircle } from 'styled-icons/fa-solid/TimesCircle';
import 'simple-keyboard/build/css/index.css';
import './style.css';

const SEARCH_MUTATION = gql`
  mutation changedSearch($text: String!) {
    changeSearch(text: $text) @client
  }
`;

class VirtualKey extends Component {
  state = {
    layoutName: 'default',
    input: ''
  };

  onChange = input => {
    this.props.onSearch(input);
    this.setState({
      input
    });
  };

  onKeyPress = button => {
    const { input } = this.state;
    if (button === '{enter}') {
      this.props.onSearch(input);
    }
    if (button === '{shift}' || button === '{lock}') this.handleShift();
  };

  handleShift = () => {
    const { layoutName } = this.state;

    this.setState({
      layoutName: layoutName === 'default' ? 'shift' : 'default'
    });
  };

  inputStyle = {
    width: '100%',
    height: '60px',
    padding: '5px',
    fontSize: 18,
    borderRadius: '5px',
    border: 0
  };

  onClose = () => {
    this.props.onSearch('');
    this.props.toogle();
  };

  render() {
    const { input, layoutName } = this.state;
    const { toogle } = this.props;
    return (
      <div className="wrapTeclado">
        <div className="teclado">
          <div
            onClick={this.onClose}
            role="presentation"
            className="closeKeyboard"
          >
            <TimesCircle />
          </div>
          <div className="wrapInput">
            <input
              value={input}
              style={this.inputStyle}
              placeholder="Que estás buscando..."
              readOnly
            />
          </div>
          <Keyboard
            ref={r => {
              this.keyboard = r;
            }}
            layoutName={layoutName}
            theme="hg-theme-default myTheme1"
            onChange={text => this.onChange(text)}
            onKeyPress={button => this.onKeyPress(button)}
            display={{
              '{enter}': 'buscar',
              '{bksp}': 'borrar',
              '{lock}': 'lock',
              '{shift}': 'shift',
              '{tab}': 'tab',
              '{space}': ' '
            }}
            debug
          />
        </div>
      </div>
    );
  }
}

export default graphql(SEARCH_MUTATION, {
  props: ({ mutate }) => ({
    onSearch: text => mutate({ variables: { text } })
  })
})(VirtualKey);
