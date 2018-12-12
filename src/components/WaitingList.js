import React, { Component } from 'react';
import { Badge } from 'antd';
import posed, { PoseGroup } from 'react-pose';
import StyleContain from './styles/WaitingList';
import { NavigatorConsumer } from '../context/NavigatorContext';

const timeScroll = 30;
const minScrollHeight = 260;

const Item = posed.div({
  enter: { y: 0, opacity: 1, transition: { duration: 500 } },
  exit: { y: 20, opacity: 0.01, transition: { duration: 450 } }
});

class WaitingList extends Component {
  state = {
    scroll: true
  };

  componentDidMount() {
    this.observerScroll();
  }

  observerScroll = () => {
    setInterval(() => {
      if (!this.list) return;
      const { scroll } = this.state;
      if (this.list.scrollHeight > minScrollHeight && scroll) {
        this.setState({ scroll: false });
        this.move(this.list);
      }
    }, 1000);
  };

  move = elem => {
    let height = 0;
    let id = null;
    const frame = () => {
      height += 1;
      elem.scrollTo(0, height);
      if (elem.scrollHeight - elem.scrollTop === elem.clientHeight) {
        clearInterval(id);
        this.backMove(elem);
      }
    };
    id = setInterval(frame, timeScroll);
  };

  backMove = elem => {
    let height = elem.scrollTop;
    let id = null;
    if (height === 0) {
      this.setState({ scroll: true });
      clearInterval(id);
      return;
    }
    const frame = () => {
      height -= 1;
      elem.scrollTo(0, height);
      if (height === 1) {
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
                <PoseGroup>
                  {context.state.videos.map((video, index) => (
                    <Item className="row" key={video.time}>
                      <div className="info">
                        <span>{`${index + 1}.`}</span>
                        <p className="song ellipsis-one-line">{video.name}</p>
                        <span className={`option ${video.option}`}>
                          {video.option !== 'normal' && video.option}
                        </span>
                      </div>
                      <h4 className="author">{video.author}</h4>
                    </Item>
                  ))}
                </PoseGroup>
              </div>
            </div>
          </StyleContain>
        )}
      </NavigatorConsumer>
    );
  }
}

export default WaitingList;
