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

const PreviewWrapper = styled.div`
  text-align: center;
  color: #fff;
  h3,
  p {
    letter-spacing: 2px;
    text-shadow: 1px 1px 15px rgba(255, 0, 0, 0.61),
      -1px -1px 15px rgba(255, 0, 0, 0.61), 1px 1px 15px rgba(255, 0, 0, 0.61);
    font-weight: 700;
    font-size: 16px;
  }

  h3 {
    text-transform: uppercase;
    font-size: 18px;
    color: #ffffff;
    word-spacing: 4px;
  }

  .previewPlayer {
    height: 320px;
    margin: 1em 0px;
    background: #080d1a;
    border-radius: 5px;
    box-shadow: 2px 2px 20px #ff000078, -2px -2px 20px #ff000078;
  }
`;

const ButtonTitle = styled.button`
  background: #f40407;
  box-shadow: 1px 1px 20px rgba(255, 0, 0, 0.61),
    -1px -1px 20px rgba(255, 0, 0, 0.61);
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 100;
  letter-spacing: 3px;
  margin: 1em 0;
  outline: none;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
`;

const ButtonGradient = styled(ButtonTitle)`
  background: linear-gradient(to right, #f3282b, #ec0509, #f3282b);
  width: ${props => props.size || '100%'};
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const ActionsSearch = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr 220px;
  grid-column-gap: 40px;
  align-items: center;
  min-height: 220px;
  padding: 0 1em;
`;

const ResultSearch = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  grid-column-gap: 70px;
  padding: 1em;
  overflow-y: auto;

  .grid {
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
    grid-row-gap: 7px;
  }

  img {
    max-width: 200px;
    width: 100%;
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
    font-size: 11px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.25em;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    overflow: hidden;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 1px;
    margin-right: -1px;
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
);

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
        <Data>
          <ResultSearch>
            <div>
              <ButtonTitle>Artistas - Album</ButtonTitle>
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
                    <div>
                      <img src={singer.image} alt={singer.name} />
                    </div>
                    <h3>{singer.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <PreviewWrapper>
              <h3>Daft Punk - Radmon all access</h3>
              <p>&quot;Give Life back to music&quot;</p>
              <div className="previewPlayer">
                <Preview
                  url={state.previewVideo ? state.previewVideo.url : null}
                />
              </div>
              <ButtonGradient size="initial">Video Previo</ButtonGradient>
            </PreviewWrapper>
            <div>
              <ButtonTitle>Canciones</ButtonTitle>
              <ListVideos
                videoclips={videoclips}
                preview={preview}
                showModal={this.showModal}
              />
            </div>
          </ResultSearch>
          <ActionsSearch>
            <div>
              <ButtonGradient>Karaoke</ButtonGradient>
              <ButtonGradient>Canciones - MP3</ButtonGradient>
            </div>
            <VirtualKey onSearch={onSearch} />
            <div>
              <ButtonGradient>Todo</ButtonGradient>
              <ButtonGradient>Artista</ButtonGradient>
              <ButtonGradient>Canciones</ButtonGradient>
            </div>
          </ActionsSearch>
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
              color="black"
            />
          </AntModal>
        </Data>
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
