import styled from 'styled-components';
import {primary, secondary} from '../../colors';

export const Section = styled.section`
  
  margin: 20px;

  .border-frame {
    padding: 7px;
    position: relative;
    background: linear-gradient(to right, ${primary}, ${secondary});
    border-radius: 50%;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #555;
      width: 100px;
      height: 100px;
      font-weight: 500;
      border-radius: 50px;
      
      .value {
        font-size: 35px;
      }

      .description {
        font-size: 12px;
      }
    }
  }
`;
