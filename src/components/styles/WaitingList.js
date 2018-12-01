import styled from 'styled-components';

const StyleContain = styled.div`
  background-image: linear-gradient(#17274e, #370e3e 85%);
  border-radius: 5px;
  box-shadow: 1px 1px 20px rgba(206, 7, 7, 0.63), -1px -1px 20px rgb(72, 18, 83);
  max-height: 300px;
  min-height: 250px;
  margin: 1em 0;
  text-align: center;
  padding: 10px;
  overflow: auto;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin-top: 1em;
    padding-bottom: 2px;
    border-bottom: 1px solid #fff;
  }

  .author {
    margin: 0;
    color: #fff;
    opacity: 0.6;
  }

  .song {
    color: #fff;
    margin: 0;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.015em;
  }
`;

export default StyleContain;
