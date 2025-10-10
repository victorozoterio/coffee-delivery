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
    padding-inline: 9rem;
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
    white-space: nowrap;
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

  .catalog {
    margin-block: 2rem 3.375rem;
    padding-inline: 9rem;

    > h2 {
      font: ${typography.titleL};
      color: ${(props) => props.theme["black-400"]};
      margin-bottom: 1.5rem;
    }
  }

  .catalog-options {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .coffee {
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
        margin-right: 1.5rem;

        > strong {
          font: ${typography.titleM};
        }
      }

      > div {
        display: flex;

        .amount {
          display: flex;
          justify-content: center;
          background-color: ${(props) => props.theme["gray-400"]};
          border-radius: 0.5rem;
          height: 2.375rem;

          > button {
            background-color: transparent;
            border: transparent;
            align-self: center;
          }

          .remove-coffee {
            padding: 0.75rem 0.5rem 0.5rem 0.5rem;
          }

          .add-coffee {
            padding: 0.75rem 0.5rem 0.5rem 0.5rem;
          }

          > p {
            font: ${typography.textM};
            color: ${(props) => props.theme["black-600"]};
            align-self: center;
          }
        }

        .shopping-cart {
          margin-left: 1rem;
          background-color: ${(props) => props.theme["purple-800"]};
          padding-inline: 0.5rem;
          border-radius: 0.5rem;
          border: transparent;
        }
      }
    }
  }
`;
