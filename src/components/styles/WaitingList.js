import styled from 'styled-components';

const StyleContain = styled.div`
  background-image: linear-gradient(#17274e, #370e3e4a 85%);
  border-radius: 3px;
  box-shadow: 1px 1px 10px rgba(206, 7, 7, 0.63), -1px -1px 10px rgb(72, 18, 83);
  max-height: 300px;
  min-height: 250px;
  position: relative;
  margin: 1em 0;
  text-align: center;
  padding: 0 10px 10px;
  overflow: auto;
  header {
    background: #16264c;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    padding: 7px 0px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  header strong {
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;
    display: inline-block;
    margin-right: 10px;
  }

  .list {
    text-align: left;
  }

  .row {
    margin-top: 0.5em;
    font-weight: bold;
    /* display: flex; */
    padding-bottom: 2px;
    border-bottom: 1px solid #fff;
  }

  .info {
    display: flex;
    align-items: flex-end;
  }

  .author {
    margin: 0;
    color: inherit;
    opacity: 0.6;
  }

  .song {
    color: inherit;
    margin: 0;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.015em;
    padding: 0 5px;
  }

  .option {
    color: #e5d072;
    &.vip {
      color: #6868f5;
    }
    &.supervip {
      color: #23ff8a;
    }
  }
`;

export default StyleContain;
