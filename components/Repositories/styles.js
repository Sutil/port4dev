import styled from 'styled-components';
import { backgroundCard, primary, secondary } from '../../colors';
import { borderRadius } from '../../style-variables';

export const Container = styled.section`
  padding: 10px;
  border-radius: ${borderRadius}px;
  background-color: ${backgroundCard};
  margin-bottom: 15px;
  color: #eee;
  box-shadow: 1px 1px 2px #777;
  width: 100%;
  &:hover {
    box-shadow: 1px 1px 5px rgba(200,200,200, .50);
  }

  h5 {
    color: #AAAAAA;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    border: 1px solid ${primary};
    padding: 5px 25px;
    border-radius: ${borderRadius}px;
    color: ${primary};
    float: right;
    text-transform: uppercase;
    &:hover {
      box-shadow: 0px 0px 10px ${secondary};
    }
  }

  @media(min-width: 469px) {
    padding: 20px;
    max-width: 500px;
  }
`;
