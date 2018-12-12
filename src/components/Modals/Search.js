import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import posed from 'react-pose';
import { PlayCircle } from 'styled-icons/feather/PlayCircle';
import VirtualKey from '../VirtualKey';
import Modal from '../ui/Modal';
import OptionVideo from './OptionVideo';
import Preview from '../Preview';
import { NavigatorConsumer } from '../../context/NavigatorContext';

const SEARCH_MUTATION = gql`
  mutation changedSearch($text: String!) {
    changeSearch(text: $text) @client
  }
`;

const minVideos = 4;

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

const ResultSearch = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  margin: auto;

  .grid {
    display: grid;
    grid-column-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 20px;
  }

  img {
    max-width: 100%;
  }

  .video {
    color: #fff;
    font-size: 16px;
    margin-bottom: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .video-name {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.015em;
    color: #fff;
  }

  .video-author {
    color: #fff;
    opacity: 0.6;
    transition: opacity 0.2s linear;
  }

  h2 {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.005em;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    margin: 15px 0;
  }

  .singer h3 {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.015em;
    color: #fff;
  }
`;

class SearchModal extends Component {
  state = {
    visible: false,
    music: null
  };

  close = () => {
    const { preview, close } = this.props;
    preview(null);
    close();
  };

  showModal = music => {
    const { add, state } = this.props;
    if (state.videos.length >= minVideos) {
      this.setState({ music, visible: true });
    } else {
      add({ ...music, option: 'normal' });
    }
  };

  render() {
    const { visible, music } = this.state;
    const {
      show,
      add,
      state,
      preview,
      onSearch,
      singers,
      videoclips
    } = this.props;
    return (
      <Modal show={show} handleClose={this.close}>
        <div>
          <ResultSearch>
            <div>
              <h2>Artistas</h2>
              <div className="grid">
                {singers.map(singer => (
                  <div className="singer">
                    <img src={singer.image} alt={singer.name} />
                    <h3>{singer.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2>Cancciones</h2>
              {videoclips.map(videoclip => (
                <div className="video" key={videoclip.id}>
                  <div className="pointer" onClick={() => preview(videoclip)}>
                    <div className="video-name">{videoclip.name}</div>
                    <div className="video-author">{videoclip.author}</div>
                  </div>
                  <WrapIcon>
                    <PlayCircle
                      style={{ minWidth: '22px', color: 'inherit' }}
                      onClick={() => this.showModal(videoclip)}
                    />
                  </WrapIcon>
                </div>
              ))}
            </div>
          </ResultSearch>
          <VirtualKey onSearch={onSearch} />
          <OptionVideo
            visible={visible}
            music={music}
            add={add}
            handleClose={() => this.setState({ visible: false })}
          />
          <div className="Preview">
            <Preview url={state.previewVideo ? state.previewVideo.url : null} />
          </div>
        </div>
      </Modal>
    );
  }
}

const filterSearch = (videoclips, singers, search) => ({
  videoclips: videoclips
    .filter(videoclip => videoclip.name.toLowerCase().indexOf(search) > -1)
    .slice(0, 6),
  singers: singers
    .filter(singer => singer.name.toLowerCase().indexOf(search) > -1)
    .slice(0, 6)
});

const SEARCH_QUERY = gql`
  {
    videoclips @client {
      id
      name
      url
      author
    }
    singers @client {
      id
      name
      image
    }
    search @client
  }
`;

// inject props and data form graphql
const WrapperContext = props => (
  <NavigatorConsumer>
    {context => <SearchModal {...context} {...props} />}
  </NavigatorConsumer>
);

const withSearch = graphql(SEARCH_QUERY, {
  props: ({ data }) => {
    if (data.loading || data.error || data.search.toLowerCase() === '')
      return { videoclips: [], singers: [] };
    return filterSearch(
      data.videoclips,
      data.singers,
      data.search.toLowerCase()
    );
  }
});

export default graphql(SEARCH_MUTATION, {
  props: ({ mutate }) => ({
    onSearch: text => mutate({ variables: { text } })
  })
})(withSearch(WrapperContext));
