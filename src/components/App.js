import React from 'react';
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
import WaitingVideo from './WaitingVideo';
import Beat from './Beat';
import '../App.css';

const App = () => (
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
        <ListGenre />
        <Options />
      </Column>
      <Column span="25">
        <Controls />
        <VideoPreview />
        <WaitingVideo />
        <Beat />
      </Column>
    </Row>
  </Container>
);

export default App;
