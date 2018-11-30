import React, { Component } from 'react';
import { VolumeUp } from 'styled-icons/fa-solid/VolumeUp';
import { PlayCircle } from 'styled-icons/fa-solid/PlayCircle';
import { Modal, Slider } from 'antd';
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
                <div>20</div>
              </div>
              <div className="volumen">
                <VolumeUp
                  style={{ width: '40px' }}
                  onClick={() => this.setState({ visible: true })}
                />
              </div>
            </ControlStyle>
            <Modal
              title="Control de volumen"
              visible={visible}
              centered
              onOk={() => this.setState({ visible: false })}
              onCancel={() => this.setState({ visible: false })}
              okText="OK"
              cancelText="Cancelar"
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
