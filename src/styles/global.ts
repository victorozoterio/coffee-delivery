import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["gray-100"]};
    color: ${(props) => props.theme["black-400"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }
`;
