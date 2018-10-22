import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import GenderListContainer from '../containers/GenderListContainer';
import SingerListContainer from '../containers/SingerListContainer';
import VideoclipListContainer from '../containers/VideoclipListContainer';
import { Container, Row, Column } from './styles/Layout';
import { Title } from './styles/Common';
import Controls from './Controls';
import Banner from './Banner';
import ButtonList from './ButtonList';
import VideoPreview from './VideoPreview';
import Options from './Options';
import Beat from './Beat';
import Reproductor from './Reproductor';
import Manager from './Manager';

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
      <Manager>
        <Container>
          <Row>
            <Column span="25">
              {/* Logo */}
              <Title>Perumatic</Title>
              <VideoclipListContainer />
              <ButtonList />
            </Column>
            <Column span="50">
              <Banner />
              <SingerListContainer />
              <GenderListContainer />
              <Options />
            </Column>
            <Column span="25">
              <Controls />
              <VideoPreview />
              <Beat />
            </Column>
          </Row>
        </Container>
      </Manager>
    );
  }
}

export default hot(module)(App);
