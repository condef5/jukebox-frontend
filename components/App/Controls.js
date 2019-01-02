import React, { Component } from 'react';
import { VolumeUp } from 'styled-icons/fa-solid/VolumeUp.cjs';
import { Modal, Slider, Button } from 'antd';
import ControlStyle from './styles/Controls';
import { NavigatorConsumer } from '../context/NavigatorContext';

class Controls extends Component {
  state = {
    visible: false
  };

  render() {
    const { visible } = this.state;
    return (
      <NavigatorConsumer>
        {context => (
          <>
            <ControlStyle>
              <div className="credits">
                <div>Créditos</div>
                <div>{context.state.credits}</div>
              </div>
              <VolumeUp
                style={{ width: '40px' }}
                onClick={() => this.setState({ visible: true })}
              />
            </ControlStyle>
            <Modal
              title="Control de volumen"
              visible={visible}
              centered
              onCancel={() => this.setState({ visible: false })}
              footer={[
                <Button
                  type="primary"
                  key="controls"
                  ghost
                  onClick={() => this.setState({ visible: false })}
                >
                  Aceptar
                </Button>
              ]}
            >
              <Slider
                min={0}
                max={1}
                step={0.01}
                value={context.state.volume}
                onChange={context.setVolume}
              />
            </Modal>
          </>
        )}
      </NavigatorConsumer>
    );
  }
}

export default Controls;
