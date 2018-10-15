import React, { Component } from 'react';
import { Container, Row, Column } from './styles/Layout';
import { Title } from './styles/Common';
import Controls from './Controls';
import ListGenre from './ListGenre';
import Banner from './Banner';
import MusicSection from './MusicSection';
import Buttons from './Buttons';
import VideoPreview from './VideoPreview';
import Carrousel from './Carrousel';
import Options from './Options';
import Beat from './Beat';
import Reproductor from './Reproductor';

import '../App.css';

/* eslint-disable */
class App extends Component {
  state = {
    isReproductor: false
  };
  componentDidMount() {
    const isReproductor = location.href.indexOf('?reproductor') !== -1;
    this.setState({ isReproductor });
  }

  render() {
    const { isReproductor } = this.state;
    if (isReproductor) {
      return <Reproductor />;
    }
    return (
      <Container>
        <Row>
          <Column span="25">
            {/* Logo */}
            <Title>Perumatic</Title>
            <MusicSection />
            <Buttons />
          </Column>
          <Column
            span="50"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Banner />
            <Carrousel />
            <ListGenre style={{ overflow: 'hidden', width: '100%' }} />
            <Options />
          </Column>
          <Column span="25">
            <Controls />
            <VideoPreview />
            <Beat />
          </Column>
        </Row>
      </Container>
    );
  }
}

export default App;
