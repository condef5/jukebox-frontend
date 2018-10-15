import styled from 'styled-components';

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  & > div {
    box-sizing: border-box;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Column = styled.div`
  width: ${props => props.span}%;
  background: ${props => props.bg};
  padding: 0.5em;
`;
