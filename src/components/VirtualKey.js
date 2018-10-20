import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'simple-keyboard/build/css/index.css';

class VirtualKey extends Component {
  state = {
    layoutName: 'default',
    input: ''
  };

  onChange = input => {
    this.setState({
      input
    });
  };

  onKeyPress = button => {
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

  render() {
    const { input, layoutName } = this.state;
    return (
      <div className="wrapTeclado">
        <div className="teclado">
          <input
            value={input}
            style={this.inputStyle}
            placeholder="Que estás buscando"
            readOnly
          />
          <Keyboard
            ref={r => {
              this.keyboard = r;
            }}
            layoutName={layoutName}
            onChange={text => this.onChange(text)}
            onKeyPress={button => this.onKeyPress(button)}
            debug
          />
        </div>
      </div>
    );
  }
}

export default VirtualKey;
