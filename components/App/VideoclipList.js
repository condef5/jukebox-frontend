import React, { Component } from 'react';
import { PlayCircle } from 'styled-icons/feather/PlayCircle.cjs';
import posed, { PoseGroup } from 'react-pose';
import { Tab, MusicContainer, Letters } from './styles/VideoclipList';
import { NavigatorConsumer } from '../context/NavigatorContext';
import OptionVideo from './Modals/OptionVideo';

/* eslint-disable */
const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const minVideos = 4;

const Item = posed.div({
  enter: { y: 0, opacity: 1, transition: { duration: 500 } },
  exit: { y: 20, opacity: 0.01, transition: { duration: 450 } }
});

const WrapIcon = posed.div({
  hoverable: true,
  init: {
    color: '#fff',
    outlineWidth: '0px',
    outlineOffset: '0px',
    scale: 1
  },
  hover: {
    color: '#ef1a1c',
    outlineWidth: '12px',
    outlineOffset: '5px',
    outlineColor: '#AB36FF',
    scale: 1.2
  }
});

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
    if (this.props.state.videos.length >= minVideos) this.setState({ music, modal: true });
    else {
      this.props.add({ ...music, option: 'normal' });
    }
  };

  render() {
    const { videoclips, state, preview, add } = this.props;
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
            <PoseGroup>
              {videoclips.map(music => (
                <Item className="musica" key={music.id}>
                  <div onClick={() => preview(music)}>
                    <div>{music.author}</div>
                    <div>{music.name}</div>
                  </div>
                  <WrapIcon>
                    <PlayCircle
                      style={{ minWidth: '22px', color: 'inherit' }}
                      onClick={() => this.showModal(music, state.videos.length)}
                    />
                  </WrapIcon>
                </Item>
              ))}
            </PoseGroup>
          </div>
          <Letters>
            {letters.map(item => (
              <div key={item}>{item}</div>
            ))}
          </Letters>
        </MusicContainer>
        <OptionVideo
          visible={this.state.modal}
          music={this.state.music}
          add={add}
          handleClose={() => this.setState({ modal: false })}
        />
      </div>
    );
  }
}

// inject props and data form graphql
const WrapperContext = props => (
  <NavigatorConsumer>{context => <VideoclipList {...context} {...props} />}</NavigatorConsumer>
);

export default WrapperContext;
