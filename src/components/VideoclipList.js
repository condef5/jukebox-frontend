import React, { Component } from 'react';
import { Modal, Radio } from 'antd';
import { PlayCircle } from 'styled-icons/feather/PlayCircle';
import { Tab, MusicContainer, Letters } from './styles/MusicSection';
import { NavigatorConsumer } from '../context/NavigatorContext';

/* eslint-disable */
const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const RadioGroup = Radio.Group;

class VideoclipList extends Component {
  state = {
    modal: false,
    option: 'normal',
    music: null
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      option: e.target.value
    });
  };

  showModal = music => {
    if (this.props.state.videos.length >= 4) this.setState({ music, modal: true });
    else {
      this.props.add({ ...music, option: 'normal' });
    }
  };

  addVideo = () => {
    this.props.add({ ...this.state.music, option: this.state.option });
    this.setState({ modal: false, option: 'normal' });
  };

  render() {
    const { videoclips, state, preview } = this.props;
    return (
      <div style={{ marginBottom: '1em', padding: '0 1em' }}>
        <Tab>
          <div>Canciones</div>
          <div>Nuevos</div>
          <div>
            <span role="img" aria-label="fire">
              🔥
            </span>
          </div>
        </Tab>
        <MusicContainer>
          <div style={{ flex: '1', paddingRight: '1em' }}>
            {videoclips.map(music => (
              <div className="musica" key={music.id}>
                <div onClick={() => preview(music)}>
                  <div>{music.author}</div>
                  <div>{music.name}</div>
                </div>
                <PlayCircle
                  style={{ minWidth: '22px', color: '#fff' }}
                  onClick={() => this.showModal(music, state.videos.length)}
                />
              </div>
            ))}
          </div>
          <Letters>
            {letters.map(item => (
              <div key={item}>{item}</div>
            ))}
          </Letters>
        </MusicContainer>
        <Modal
          title="Elija su opcion de video"
          centered
          visible={this.state.modal}
          onOk={() => this.addVideo()}
          onCancel={() => this.setState({ modal: false })}
        >
          <RadioGroup onChange={this.onChange} value={this.state.option} buttonStyle="solid">
            <Radio value={'normal'}>Normal</Radio>
            <Radio value={'vip'}>Vip</Radio>
            <Radio value={'supervip'}>Super vip</Radio>
          </RadioGroup>
        </Modal>
      </div>
    );
  }
}

// inject props and data form graphql
const WrapperContext = props => (
  <NavigatorConsumer>{context => <VideoclipList {...context} {...props} />}</NavigatorConsumer>
);

export default WrapperContext;
