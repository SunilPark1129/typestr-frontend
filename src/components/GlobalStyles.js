import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
        width: .5rem;
      }
       
      &::-webkit-scrollbar-track {
          background-color:${({ theme }) => theme.colors.light};
      }
      
      &::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.colors.main};
      }
}
body {
    min-width: ${({ theme }) => theme.minWidth};
    background-color: ${({ theme }) => theme.colors.bg};
    transition: .3s background-color ease-in-out;
    font-family: 'Roboto', sans-serif;
}
`;