import React, { Component } from 'react';
import { Badge } from 'antd';
import StyleContain from './styles/WaitingList';
import { NavigatorConsumer } from '../context/NavigatorContext';

const timeScroll = 30;

class WaitingList extends Component {
  state = {
    scroll: true
  };

  componentDidMount() {
    this.observerScroll();
  }

  observerScroll = () => {
    setInterval(() => {
      const { scroll } = this.state;
      if (this.list.scrollHeight > 360 && scroll) {
        this.setState({ scroll: false });
        this.move(this.list);
      }
    }, 1000);
  };

  move = elem => {
    let heigth = 0;
    let id = null;
    const frame = () => {
      heigth += 1;
      elem.scrollTo(0, heigth);
      if (elem.scrollHeight - elem.scrollTop === elem.clientHeight) {
        clearInterval(id);
        this.backMove(elem);
      }
    };
    id = setInterval(frame, timeScroll);
  };

  backMove = elem => {
    let heigth = elem.scrollTop;
    let id = null;
    const frame = () => {
      heigth -= 1;
      elem.scrollTo(0, heigth);
      if (heigth === 1) {
        clearInterval(id);
        this.move(elem);
      }
    };
    id = setInterval(frame, timeScroll);
  };

  ref = list => {
    this.list = list;
  };

  render() {
    return (
      <NavigatorConsumer>
        {context => (
          <StyleContain>
            <div className="content" ref={this.ref}>
              <header>
                <strong>Lista de espera</strong>
                <Badge count={context.state.videos.length} />
              </header>
              <div className="list">
                {context.state.videos.map((video, index) => (
                  <div className="row" key={video.time}>
                    <div className="info">
                      <span>{`${index + 1}.`}</span>
                      <p className="song ellipsis-one-line">{video.name}</p>
                      <span className={`option ${video.option}`}>
                        {video.option}
                      </span>
                    </div>
                    <h4 className="author">{video.author}</h4>
                  </div>
                ))}
              </div>
            </div>
          </StyleContain>
        )}
      </NavigatorConsumer>
    );
  }
}

export default WaitingList;
