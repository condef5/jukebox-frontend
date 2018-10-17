import React, { Component } from 'react';
import { Container, Row, Column } from './styles/Layout';
import { Title } from './styles/Common';
import Controls from './Controls';
import ListGenders from './ListGenders';
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
          <Column span="50">
            <Banner />
            <Carrousel />
            <ListGenders />
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
