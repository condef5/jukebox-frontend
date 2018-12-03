import React from 'react';
import { hot } from 'react-hot-loader';
import GenderListContainer from '../containers/GenderListContainer';
import SingerListContainer from '../containers/SingerListContainer';
import VideoclipListContainer from '../containers/VideoclipListContainer';
import { Row, Column } from './styles/Layout';
import { WrapLogo } from './styles/Common';
import Controls from './Controls';
import Banner from './Banner';
import ButtonList from './ButtonList';
import VideoPreview from './VideoPreview';
import Options from './Options';
import CurrentVideo from './CurrentVideo';
import Manager from './Manager';
import logo from '../assets/logo.gif';

import '../App.css';

const App = () => (
  <Manager>
    <Row>
      <Column span="25">
        <WrapLogo>
          <img src={logo} alt="perumatic-logo" />
        </WrapLogo>
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
        <CurrentVideo />
      </Column>
    </Row>
  </Manager>
);

export default hot(module)(App);
