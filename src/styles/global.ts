import { createGlobalStyle } from "styled-components";
import { typography } from "./typography";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    user-select: none;
    pointer-events: none;
  }

  button {
    background-color: transparent;
    border: transparent;
    align-self: center;
  }
  
  body {
    background: ${(props) => props.theme["gray-100"]};
    color: ${(props) => props.theme["black-400"]};
    -webkit-font-smoothing: antialiased;
    font: ${typography.textL};
  }
`;
