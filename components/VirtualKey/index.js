import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import './style.css';

const layout = {
  default: [
    'q w e r t y u i o p {bksp}',
    'a s d f g h j k l {shift}',
    'z x c v b n m {space}'
  ],
  shift: [
    'Q W E R T Y U I O P {bksp}',
    'A S D F G H J K L {shift}',
    'Z X C V B N M {space}'
  ]
};

class VirtualKey extends Component {
  state = {
    layoutName: 'default',
    input: ''
  };

  onChange = input => {
    const { onSearch } = this.props;
    onSearch(input);
    this.setState({ input });
  };

  onKeyPress = button => {
    const { input } = this.state;
    const { onSearch } = this.props;
    if (button === '{enter}') {
      onSearch(input);
    }
    if (button === '{shift}' || button === '{lock}') this.handleShift();
  };

  handleShift = () => {
    const { layoutName } = this.state;

    this.setState({
      layoutName: layoutName === 'default' ? 'shift' : 'default'
    });
  };

  onClose = () => {
    const { onSearch, toogle } = this.props;
    onSearch('');
    toogle();
  };

  render() {
    const { input, layoutName } = this.state;
    return (
      <div className="wrapTeclado">
        <div className="wrapInput">
          <input value={input} placeholder="Que estás buscando ..." readOnly />
        </div>
        <div className="teclado">
          <Keyboard
            ref={r => {
              this.keyboard = r;
            }}
            layout={layout}
            layoutName={layoutName}
            theme="hg-theme-default myTheme1"
            onChange={text => this.onChange(text)}
            onKeyPress={button => this.onKeyPress(button)}
            display={{
              '{bksp}': '⌫',
              '{shift}': 'shift',
              '{space}': ' '
            }}
            debug
          />
        </div>
      </div>
    );
  }
}

export default VirtualKey;
