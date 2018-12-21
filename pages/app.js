import React from 'react';
import App from '../components/App';
import SecondScreen from '../components/App/SecondScreen';

export default ({ query }) => {
  if (query.reproductor) return <SecondScreen />;
  return <App />;
};
