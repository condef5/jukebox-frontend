import App from '../components/App';
import SecondScreen from '../components/SecondScreen';

// eslint-disable-next-line
const isReproductor = false; // location.href.indexOf('?reproductor') !== -1;

export default () => {
  if (isReproductor) {
    return <SecondScreen />;
  }
  return <App />;
};
