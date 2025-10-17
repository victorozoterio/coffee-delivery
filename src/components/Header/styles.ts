import styled from "styled-components";
import { typography } from "../../styles/typography";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 7rem;

  img {
    width: 3rem;
    height: 3rem;
  }

  .icons {
    display: flex;
    gap: 0.75rem;
    height: 2.375rem;
  }

  #location {
    display: flex;
    height: 100%;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    align-items: center;
    background-color: ${(props) => props.theme["purple-200"]};

    p {
      font: ${typography.textS};
      color: ${(props) => props.theme["purple-800"]};
    }
  }

  #shopping-cart {
    background-color: ${(props) => props.theme["yellow-200"]};
    border-color: transparent;
    border-radius: 6px;
    padding: 0.5rem;
    height: 100%;
  }
`;
