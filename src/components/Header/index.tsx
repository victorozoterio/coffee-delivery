import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const theme = useTheme();
  const { getTotalItems } = useContext(CartContext);

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />

      <div className="icons">
        <div id="location">
          <MapPin size={22} weight="fill" color={theme["purple-600"]} />
          <p>Indaiatuba, SP</p>
        </div>

        <button id="shopping-cart">
          {getTotalItems() > 0 && <span>{getTotalItems()}</span>}
          <ShoppingCart size={22} weight="fill" color={theme["yellow-800"]} />
        </button>
      </div>
    </HeaderContainer>
  );
}
