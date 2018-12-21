import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0;
  color: #eb1aef;
  line-height: 1.4;
  padding: 10px 0;
  text-align: center;
  text-shadow: 1px 1px 15px rgba(255, 0, 0, 0),
    -1px -1px 15px rgba(255, 0, 0, 0.61), 1px 1px 15px rgba(255, 0, 0, 0.61),
    -1px -1px 15px rgba(255, 0, 0, 0.3);
  background-image: -webkit-gradient(
    linear,
    0% 0%,
    35% 100%,
    from(#d417d8),
    to(#f12e2e)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const WrapLogo = styled.div`
  img {
    width: 100%;
  }
`;

export const TextShadow = styled.div`
  color: #f12e2e;
  margin: 0;
  line-height: 1.4;
  font-size: ${props => props.fontSize || '16px'};
  font-weight: ${props => props.fontWeight || '700'};
  margin: 0;
  text-transform: uppercase;
  text-align: ${props => props.textAlign || 'normal'};
  text-shadow: 1px 1px 15px rgba(255, 0, 0, 0),
    -1px -1px 15px rgba(255, 0, 0, 0.61), 1px 1px 15px rgba(255, 0, 0, 0.61);
`;

export default {};
