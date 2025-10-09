import styled from "styled-components";
import { typography } from "../../styles/typography";

export const HomeContainer = styled.header`
  #background {
    position: absolute;
    width: 100%;
    height: 34rem;
  }

  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: self-end;
    padding-inline: 10rem;
  }

  .content {
    margin-bottom: 4.125rem;

    h1 {
      font: ${typography.titleXL};
      color: ${(props) => props.theme["black-600"]};
      margin-top: 5.875rem;
    }

    h4 {
      font: ${typography.textL};
    }
  }

  .benefits {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;

    span {
      display: flex;
      height: 2rem;
      gap: 0.75rem;
      align-items: center;
    }

    span > div {
      display: flex;
      padding: 0.5rem;
      border-radius: 50%;
      justify-content: center;
    }

    p {
      font: ${typography.textM};
      color: ${(props) => props.theme["black-200"]};
    }
  }

  .orange-circle {
    background-color: ${(props) => props.theme["yellow-800"]};
  }

  .yellow-circle {
    background-color: ${(props) => props.theme["yellow-600"]};
  }

  .black-circle {
    background-color: ${(props) => props.theme["black-200"]};
  }

  .purple-circle {
    background-color: ${(props) => props.theme["purple-600"]};
  }

  .banner img {
    width: 29.75rem;
    height: 22.5rem;
    margin-top: 7.875rem;
    animation: slideIn 1s ease-out forwards, swing 5s linear infinite 1s;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
