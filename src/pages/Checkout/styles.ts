import styled from "styled-components";
import { typography } from "../../styles/typography";

export const CheckoutContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  margin-top: 2.5rem;
  padding-inline: 7rem;
  gap: 2rem;

  h3 {
    font: ${typography.titleXS};
    color: ${(props) => props.theme["black-400"]};
    margin-bottom: 1rem;
  }

  #complete-order {
    grid-column: span 6;

    #complete-order-container {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    #address-container {
      padding: 2.5rem;
      background-color: ${(props) => props.theme["gray-200"]};
      border-radius: 0.375rem;

      > div {
        display: flex;
        gap: 0.5rem;
      }

      #address-title {
        margin-bottom: 2rem;
      }

      #address-title > h4 {
        font: ${typography.textM};
        color: ${(props) => props.theme["black-400"]};
      }

      #address-title > p {
        font: ${typography.textS};
        color: ${(props) => props.theme["black-200"]};
      }

      #address-info {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        gap: 1rem;
      }

      #address-info > input {
        background-color: ${(props) => props.theme["gray-300"]};
      }

      #address-info > input:hover,
      #address-info > input:focus {
        outline: 1px solid ${(props) => props.theme["yellow-800"]};
      }

      #cep {
        grid-column: span 4;
      }

      #street {
        grid-column: span 6;
      }

      #number {
        grid-column: span 4;
      }

      #complement {
        grid-column: span 6;
      }

      #neighborhood {
        grid-column: span 4;
      }

      #city {
        grid-column: span 5;
      }

      #uf {
        grid-column: span 1;
      }

      #address-info > input {
        width: 100%;
        padding: 0.75rem;
        font: ${typography.textS};
        border: 1px solid ${(props) => props.theme["gray-400"]};
        border-radius: 0.25rem;
      }
    }

    #payment-container {
      padding: 2.5rem;
      background-color: ${(props) => props.theme["gray-200"]};
      border-radius: 0.375rem;

      > div {
        display: flex;
        gap: 0.5rem;
      }

      #payment-title {
        margin-bottom: 2rem;

        h4 {
          font: ${typography.textM};
          color: ${(props) => props.theme["black-400"]};
        }

        p {
          font: ${typography.textS};
          color: ${(props) => props.theme["black-200"]};
        }
      }

      #payment-methods {
        display: flex;
        gap: 0.75rem;
      }

      #payment-methods label {
        display: flex;
        gap: 0.75rem;
        padding: 1rem 1.25rem;
        background-color: ${(props) => props.theme["gray-400"]};
        border-radius: 0.375rem;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      #payment-methods input[type="radio"] {
        position: absolute;
        opacity: 0;
        pointer-events: none;
        width: 0;
        height: 0;
      }

      #payment-methods label:hover,
      #payment-methods label:has(input:focus) {
        background-color: ${(props) => props.theme["gray-500"]};
      }

      #payment-methods label:has(input[type="radio"]:checked) {
        background-color: ${(props) => props.theme["purple-200"]};
        outline: 1px solid ${(props) => props.theme["purple-600"]};
      }

      #payment-methods p {
        font: ${typography.buttonM};
        color: ${(props) => props.theme["black-400"]};
      }
    }
  }

  #selected-coffees {
    grid-column: span 4;

    #selected-coffees-container {
      display: flex;
      flex-direction: column;
      background-color: ${(props) => props.theme["gray-200"]};
      border-radius: 0.5rem 2rem 0.5rem 2rem;
      padding: 2.5rem;
    }

    #empty-cart {
      display: flex;
      justify-content: center;
      padding: 2rem;
      font: ${typography.textM};
      color: ${(props) => props.theme["gray-900"]};
    }

    #coffee-info {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      padding: 0.5rem 0.25rem;

      img {
        width: 4rem;
        height: 4rem;
      }
    }

    #coffee-info > p {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      font: ${typography.boldTextM};
      color: ${(props) => props.theme["black-400"]};
    }

    #coffee-name-and-actions {
      display: flex;
      flex-direction: column;
      margin-left: 1.25rem;
      gap: 0.5rem;
    }

    #coffee-name-and-actions h4 {
      font: ${typography.textM};
      color: ${(props) => props.theme["black-400"]};
    }

    #action-buttons {
      display: flex;
      gap: 0.5rem;
    }

    #trash {
      height: 100%;
      display: flex;
      padding: 0.5rem;
      color: ${(props) => props.theme["black-200"]};
      background-color: ${(props) => props.theme["gray-400"]};
      border-radius: 0.5rem;
      align-items: center;
      gap: 0.25rem;
      font: ${typography.buttonM};
      text-transform: uppercase;
      cursor: pointer;

      &:hover,
      &:focus {
        background-color: ${(props) => props.theme["gray-500"]};
      }
    }

    #divider {
      width: 100%;
      height: 1px;
      background-color: ${(props) => props.theme["gray-400"]};
      margin-block: 1.5rem;
    }

    #order-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    #order-info > div {
      display: flex;
      justify-content: space-between;
    }

    #order-info > div:not(#final-price) {
      font: ${typography.textM};
      color: ${(props) => props.theme["black-200"]};
    }

    #final-price {
      font: ${typography.boldTextL};
      color: ${(props) => props.theme["black-400"]};
    }

    #confirm-order {
      width: 100%;
      background-color: ${(props) => props.theme["yellow-600"]};
      color: ${(props) => props.theme["white"]};
      font: ${typography.buttonG};
      text-transform: uppercase;
      padding: 1rem;
      margin-top: 1.5rem;
      border-radius: 0.375rem;

      &:hover,
      &:focus {
        background-color: ${(props) => props.theme["yellow-800"]};
      }
    }
  }
`;
