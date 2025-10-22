import styled from "styled-components";
import { typography } from "../../styles/typography";

export const CheckoutContainer = styled.header`
  display: grid;
  margin-top: 2.5rem;
  padding-inline: 7rem;

  h3 {
    font: ${typography.titleXS};
    color: ${(props) => props.theme["black-400"]};
    margin-bottom: 1rem;
  }

  #complete-order-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

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
        display: none;
      }

      #payment-methods label:hover {
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
`;
