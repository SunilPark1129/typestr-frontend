import styled from "styled-components";

export const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 0.2rem;
  justify-content: center;
  cursor: pointer;
  width: 4rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.main};
  border: 1px solid #dcdfe3;
  transition: 0.3s background-color ease-in-out;

  &:hover {
    background-color: #eeaeae;
  }

  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.main};
  }
`;
