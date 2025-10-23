import styled from "styled-components";
import { typography } from "../../styles/typography";

export const CoffeeAmountButtonContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme["gray-400"]};
  border-radius: 0.5rem;
  height: 2.375rem;

  .add-remove-coffee {
    width: 2rem;
    padding: 0.75rem 0.5rem 0.5rem 0.5rem;
    color: ${(props) => props.theme["purple-600"]};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme["purple-800"]};
    }
  }

  > p {
    width: 1.25rem;
    font: ${typography.textM};
    color: ${(props) => props.theme["black-600"]};
    align-self: center;
    text-align: center;
  }
`;
