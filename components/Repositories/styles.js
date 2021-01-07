import styled from 'styled-components';

export const Container = styled.section`
  padding: 10px;
  border-radius: 10px;
  background-color: #555;
  margin-bottom: 15px;
  color: #eee;
  box-shadow: 1px 1px 3px #777;
  width: 100%;

  h5 {
    color: #AAAAAA;
  }

  @media(min-width: 469px) {
    padding: 20px;
    max-width: 500px;
  }
`;
