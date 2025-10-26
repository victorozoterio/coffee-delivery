import styled from "styled-components";
import { typography } from "../../styles/typography";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  padding-inline: 7rem;

  #order-confirmation > h2 {
    font: ${typography.titleL};
    color: ${(props) => props.theme["yellow-800"]};
  }

  #order-confirmation > p {
    font: ${typography.textL};
    color: ${(props) => props.theme["black-400"]};
  }

  #order-info-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2.5rem;
    gap: 6.375rem;
    align-items: center;
  }

  #order-info {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    gap: 2rem;

    position: relative;
    border-radius: 0.5rem 2rem 0.5rem 2rem;
    background: ${(props) => props.theme["gray-100"]};

    &::before {
      content: "";
      position: absolute;
      inset: -1px; /* faz o elemento ser 1px maior que o pai */
      z-index: -1;
      border-radius: 0.5rem 2rem 0.5rem 2rem;
      background: linear-gradient(
        270deg,
        ${(props) => props.theme["purple-600"]} 0%,
        ${(props) => props.theme["yellow-800"]} 100%
      );
    }
  }

  #order-info span {
    display: flex;
    gap: 0.75rem;

    > div:nth-child(1) {
      display: flex;
      padding: 0.625rem;
      margin-block: 0.5rem;
      border-radius: 50%;
      align-items: center;
    }

    > p {
      font: ${typography.textM};
      color: ${(props) => props.theme["black-200"]};
    }
  }
`;
