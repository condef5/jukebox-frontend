import React, { Component } from 'react';

const pad = string => `0${string}`.slice(-2);

export const format = seconds => {
  if (seconds === 0 || !seconds) return '0:00';
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
};

class Timer extends Component {
  constructor(props) {
    super(props);
    const { seconds } = this.props;
    this.state = {
      seconds
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setTimer(), 1000);
  }

  componentWillReceiveProps(nextProps) {
    const { seconds } = this.props;
    if (seconds !== nextProps.seconds) {
      clearInterval(this.timerID);
      this.setState({
        seconds: nextProps.seconds
      });
      this.timerID = setInterval(() => this.setTimer(), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  setTimer() {
    const { seconds } = this.state;
    if (seconds === 0) {
      clearInterval(this.timerID);
    } else {
      this.setState({ seconds: seconds - 1 });
    }
  }

  render() {
    const { seconds } = this.state;
    return <>{format(seconds)}</>;
  }
}

export default Timer;
