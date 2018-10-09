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
  }
`;

export const Letters = styled.div`
  padding: 0 1em;
  font-size: 14px;
  text-align: center;
  div {
    padding: 1px 0;
    cursor: pointer;
  }
`;
