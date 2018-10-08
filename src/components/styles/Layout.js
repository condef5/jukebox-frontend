import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    box-sizing: border-box;
    flex: 0 0 auto;
  }
`;

export const Column = styled.div`
  width: ${props => props.span}%;
  background: ${props => props.bg};
  padding: 0.5em;
`;
