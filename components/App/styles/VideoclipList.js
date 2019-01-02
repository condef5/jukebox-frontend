import styled from 'styled-components';

export const Tab = styled.div`
  background-color: #ef1a1c;
  border-radius: 4px;
  box-shadow: 1px 1px 15px rgba(255, 0, 0, 0.61),
    -1px -1px 15px rgba(255, 0, 0, 0.61), 1px 1px 15px rgba(255, 0, 0, 0.61),
    -1px -1px 15px rgba(255, 0, 0, 0.61);
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
  height: 30px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  & > div {
    padding-left: 8px;
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    &:last-child {
      border: none;
    }
  }
`;

export const MusicContainer = styled.div`
  display: block;
  padding-left: 7px;
  display: flex;
  justify-content: space-between;

  & > div {
    color: #ef1a1c;
    @media (max-width: 1000px) {
      overflow: auto;
      max-height: 500px;
      padding-right: 5px;
    }
  }

  .musica {
    padding: 0.1em 0;
    margin-bottom: 0.25em;
    text-transform: uppercase;
    border-bottom: 1px solid;
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .musica div div:first-child {
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .musica div div:last-child {
    letter-spacing: 2px;
    font-size: 12px;
    margin: 2.5px 0;
  }
`;

export const Letters = styled.div`
  padding: 0 1em;
  font-size: 13px;
  text-align: center;
  div {
    padding: 0.1px 0;
    cursor: pointer;
  }
`;
