import styled from 'styled-components';

export const CustomInput = styled.div`
  & > label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border: 1px solid red;
  }
  input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid black;
  }
`;
