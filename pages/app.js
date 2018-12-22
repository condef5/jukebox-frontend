import React from 'react';
import App from '../components/App';
import SecondScreen from '../components/App/SecondScreen';
import withAuth from '../lib/withAuth';

const AppWrap = ({ query }) => {
  if (query.reproductor) return <SecondScreen />;
  return <App />;
};

export default withAuth(AppWrap, { loginRequired: true });
