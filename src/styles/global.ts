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

  .orange {
    background-color: ${(props) => props.theme["yellow-800"]};
  }

  .yellow {
    background-color: ${(props) => props.theme["yellow-600"]};
  }

  .black {
    background-color: ${(props) => props.theme["black-200"]};
  }

  .purple {
    background-color: ${(props) => props.theme["purple-600"]};
  }
`;
