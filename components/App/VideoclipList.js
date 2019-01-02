import React, { Component } from 'react';
import { PlayCircle } from 'styled-icons/feather/PlayCircle.cjs';
import posed, { PoseGroup } from 'react-pose';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Tab, MusicContainer, Letters } from './styles/VideoclipList';
import { NavigatorConsumer } from '../context/NavigatorContext';
import OptionVideo from './Modals/OptionVideo';

const VIDEOCLIPS_QUERY = gql`
  query videoclips($id: Int!) {
    singer(id: $id) {
      name
      videoclips {
        id
        name
        url
      }
    }
  }
`;

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

  showModal = (music, author) => {
    if (this.props.state.videos.length >= minVideos) this.setState({ music, modal: true });
    else {
      this.props.add({ ...music, option: 'normal', author });
    }
  };

  render() {
    const { selectedSinger, state, preview, add } = this.props;
    const id = 1;
    return (
      <div style={{ marginBottom: '1em', maxHeight: '545px' }}>
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
          <div style={{ flex: '1' }}>
            <Query query={VIDEOCLIPS_QUERY} variables={{ id: selectedSinger }}>
              {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;
                return (
                  <PoseGroup>
                    {data.singer.videoclips.map(music => (
                      <Item className="musica" key={music.id}>
                        <div onClick={() => preview(music)}>
                          <div>{data.singer.name}</div>
                          <div>{music.name}</div>
                        </div>
                        <WrapIcon>
                          <PlayCircle
                            style={{ width: '22px', color: 'inherit' }}
                            onClick={() =>
                              this.showModal(music, data.singer.name, state.videos.length)
                            }
                          />
                        </WrapIcon>
                      </Item>
                    ))}
                  </PoseGroup>
                );
              }}
            </Query>
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
