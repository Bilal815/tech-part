import styled from 'styled-components';

export const Button = styled.button`
  background-color: #017aff;
  padding: 18px 30px;
  text-align: center;
  color: white;
  border-radius: 3px;
  transition: all 0.4s;
  &:hover {
    background-color: #017ae1;
  }
`;

export const OutlineButton = styled.button`
  border: 1px solid #017ae1;
  background-color: transparent;
  padding: 20px 30px;
  text-align: center;
  color: #017ae1;
`;
