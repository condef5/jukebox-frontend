import React from 'react';
import { hot } from 'react-hot-loader';
import Link from 'next/link';
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
import Reproductor from './Reproductor';
import Manager from './Manager';

import './App.css';

const App = () => (
  <Manager>
    <Row>
      <Column span="25">
        <WrapLogo>
          <Link href="/demo">
            <img src="/static/assets/logo.gif" alt="perumatic-logo" />
          </Link>
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
        <Reproductor />
      </Column>
    </Row>
  </Manager>
);

export default hot(module)(App);
