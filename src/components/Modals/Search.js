import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import posed from 'react-pose';
import { PlayCircle } from 'styled-icons/feather/PlayCircle';
import { Modal as AntModal } from 'antd';
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

const PoseIcon = posed.div({
  hoverable: true,
  init: {
    outlineWidth: '0px',
    outlineOffset: '0px',
    scale: 1
  },
  hover: {
    outlineWidth: '12px',
    outlineOffset: '5px',
    outlineColor: '#AB36FF',
    scale: 1.2
  }
});

const WrapIcon = styled(PoseIcon)`
  color: ${props => props.color || '#fff'};
  &:hover {
    color: #ef1a1c;
  }
`;

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

const FullVideos = styled.div`
  color: ${props => props.color || '#fff'};
  .video {
    color: inherit;
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
    color: inherit;
  }

  .video-author {
    color: inherit;
    opacity: 0.6;
    transition: opacity 0.2s linear;
  }
`;

const ListVideos = ({ videoclips, preview, showModal, color }) => (
  <FullVideos color={color}>
    {videoclips.map(videoclip => (
      <div className="video" key={videoclip.id}>
        <div
          className="pointer"
          role="presentation"
          onClick={() => preview(videoclip)}
        >
          <div className="video-name">{videoclip.name}</div>
          <div className="video-author">{videoclip.author}</div>
        </div>
        <WrapIcon color={color}>
          <PlayCircle
            style={{ minWidth: '25px', color: 'inherit' }}
            onClick={() => showModal(videoclip)}
          />
        </WrapIcon>
      </div>
    ))}
  </FullVideos>
)

class SearchModal extends Component {
  state = {
    visible: false,
    modalVideos: false,
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
    const { visible, music, modalVideos } = this.state;
    const {
      show,
      add,
      state,
      preview,
      onSearch,
      singers,
      videoclips,
      onSingerClick,
      singerVideos
    } = this.props;

    return (
      <Modal show={show} handleClose={this.close}>
        <div>
          <ResultSearch>
            <div>
              <h2>Artistas</h2>
              <div className="grid">
                {singers.map(singer => (
                  <div
                    className="singer pointer"
                    onClick={() => {
                      onSingerClick(singer.id);
                      this.setState({ modalVideos: true });
                    }}
                    role="presentation"
                    key={singer.id}
                  >
                    <img src={singer.image} alt={singer.name} />
                    <h3>{singer.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2>Cancciones</h2>
              <ListVideos
                videoclips={videoclips}
                preview={preview}
                showModal={this.showModal}
              />
            </div>
          </ResultSearch>
          <VirtualKey onSearch={onSearch} />
          <OptionVideo
            visible={visible}
            music={music}
            add={add}
            handleClose={() => this.setState({ visible: false })}
          />
          <AntModal
            className="ligth"
            title="Lista de videos"
            visible={modalVideos}
            onOk={() => this.setState({ modalVideos: false })}
            onCancel={() => this.setState({ modalVideos: false })}
          >
            <ListVideos
              videoclips={singerVideos}
              preview={preview}
              showModal={this.showModal}
              color={'black'}
            />
          </AntModal>
          <div className="Preview">
            <Preview url={state.previewVideo ? state.previewVideo.url : null} />
          </div>
        </div>
      </Modal>
    );
  }
}

const filterSearch = (videoclips, singers, search, singerId) => ({
  videoclips: videoclips
    .filter(videoclip => videoclip.name.toLowerCase().indexOf(search) > -1)
    .slice(0, 6),
  singers: singers
    .filter(singer => singer.name.toLowerCase().indexOf(search) > -1)
    .slice(0, 6),
  singerVideos: videoclips.filter(videoclip => videoclip.singer_id === singerId)
});

const SEARCH_QUERY = gql`
  {
    videoclips @client {
      id
      name
      url
      author
      singer_id
    }
    singers @client {
      id
      name
      image
    }
    search @client
    selectedSingerSearch @client
  }
`;

const SELECTED_SINGER_MUTATION = gql`
  mutation SelectSinger($id: Int!) {
    selectedSingerSearch(id: $id) @client
  }
`;

const withSearch = graphql(SEARCH_QUERY, {
  props: ({ data }) => {
    if (data.loading || data.error || data.search.toLowerCase() === '')
      return { videoclips: [], singers: [] };
    return filterSearch(
      data.videoclips,
      data.singers,
      data.search.toLowerCase(),
      data.selectedSingerSearch
    );
  }
});

const withSelectedSinger = graphql(SELECTED_SINGER_MUTATION, {
  props: ({ mutate }) => ({
    onSingerClick: id => mutate({ variables: { id } })
  })
});

// inject props and data form graphql
const WrapperContext = props => (
  <NavigatorConsumer>
    {context => <SearchModal {...context} {...props} />}
  </NavigatorConsumer>
);

export default graphql(SEARCH_MUTATION, {
  props: ({ mutate }) => ({
    onSearch: text => mutate({ variables: { text } })
  })
})(withSearch(withSelectedSinger(WrapperContext)));
