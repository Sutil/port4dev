import styled from 'styled-components';
import { backgroundCard } from '../../colors';
import { borderRadius } from '../../style-variables';

export const Container = styled.header`
  padding: 10px;
  background-color: ${backgroundCard};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
  border-radius: ${borderRadius}px;
  width: 100%;
  box-shadow: 4px 4px 30px rgba(0,0,0,.5);

  p {
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 20%;
  border-radius: 50%;
`;

export const Name = styled.h1`
  font-size: 30px;
  color: #DDD;
`;
