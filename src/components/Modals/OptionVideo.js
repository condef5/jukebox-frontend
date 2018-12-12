import React, { Component } from 'react';
import { Modal, Radio } from 'antd';

const RadioGroup = Radio.Group;

class OptionVideo extends Component {
  state = {
    option: 'normal'
  };

  onChange = e => {
    this.setState({
      option: e.target.value
    });
  };

  addVideo = () => {
    const { option } = this.state;
    const { music, add, handleClose } = this.props;
    add({ ...music, option });
    this.setState({ option: 'normal' });
    handleClose();
  };

  render() {
    const { option } = this.state;
    const { handleClose, visible } = this.props;

    return (
      <Modal
        title="Elija su opcion de video"
        centered
        visible={visible}
        onOk={() => this.addVideo()}
        onCancel={handleClose}
      >
        <RadioGroup onChange={this.onChange} value={option} buttonStyle="solid">
          <Radio value="normal">Normal</Radio>
          <Radio value="vip">Vip</Radio>
          <Radio value="supervip">Super vip</Radio>
        </RadioGroup>
      </Modal>
    );
  }
}

export default OptionVideo;
