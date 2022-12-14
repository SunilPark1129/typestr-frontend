import styled from "styled-components";

export const StyledModal = styled.section `
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 90%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 5px 10px -5px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.mild};
  backdrop-filter: blur(10px);
  max-height: 480px;
  max-width: ${({ theme }) => theme.maxWidth};
  z-index: 999;
`;

export const StyledModalContent = styled.main `
  overflow-y: auto;
  display: flex;
  gap: 0.5rem;
  padding: 2rem;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 2rem 1rem;
  }
`;