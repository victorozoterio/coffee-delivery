import styled from "styled-components";
import { typography } from "../../../../styles/typography";

export const CoffeeContainer = styled.header`
  display: grid;
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 0.5rem 2rem 0.5rem 2rem;
  padding: 0 1.5rem 1.25rem 1.5rem;

  .coffee-image {
    position: relative;
    top: -1rem;
    justify-self: center;
  }

  .tags {
    display: flex;
    gap: 0.25rem;
    justify-content: center;

    > span {
      font: ${typography.tag};
      text-transform: uppercase;
      background-color: ${(props) => props.theme["yellow-200"]};
      color: ${(props) => props.theme["yellow-800"]};
      padding: 0.25rem 0.5rem;
      border-radius: 2rem;
    }
  }

  > h3 {
    font: ${typography.titleS};
    color: ${(props) => props.theme["black-400"]};
    justify-self: center;
    margin-block: 1.25rem 0.5rem;
  }

  > p {
    font: ${typography.textS};
    color: ${(props) => props.theme["gray-900"]};
    justify-self: center;
    text-align: center;
    margin-bottom: 2rem;
  }

  .buy-coffee {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .price {
      font: ${typography.textS};
      color: ${(props) => props.theme["black-200"]};
      margin-right: 1.375rem;

      > strong {
        font: ${typography.titleM};
      }
    }

    > div {
      display: flex;

      .shopping-cart {
        margin-left: 1rem;
        background-color: ${(props) => props.theme["purple-800"]};
        padding: 0.25rem 0.5rem;
        border-radius: 0.5rem;
        border: transparent;
      }
    }
  }
`;
