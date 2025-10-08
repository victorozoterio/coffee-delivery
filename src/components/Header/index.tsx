import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";

export function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />

      <div className="icons">
        <div id="location">
          <MapPin size={22} weight="fill" color={theme["purple-600"]} />
          <p>Indaiatuba, SP</p>
        </div>

        <button id="shopping-cart">
          <ShoppingCart size={22} weight="fill" color={theme["yellow-800"]} />
        </button>
      </div>
    </HeaderContainer>
  );
}
