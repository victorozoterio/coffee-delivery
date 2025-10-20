import { CoffeeContainer } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { moneyMaskWithoutCurrency } from "../../../../utils/masks";

export interface CoffeeProps {
  name: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  imageDescription: string;
}

export function Coffee({
  name,
  description,
  tags,
  price,
  image,
  imageDescription,
}: CoffeeProps) {
  const theme = useTheme();

  return (
    <CoffeeContainer>
      <div className="coffee-image">
        <img src={image} alt={imageDescription} />
      </div>

      <div className="tags">
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>

      <h3>{name}</h3>
      <p>{description}</p>

      <div className="buy-coffee">
        <span className="price">
          R$
          <strong> {moneyMaskWithoutCurrency(price)}</strong>
        </span>

        <div>
          <div className="amount">
            <button className="add-remove-coffee">
              <Minus size={14} weight="bold" />
            </button>
            <p className="amount-coffee">1</p>
            <button className="add-remove-coffee">
              <Plus size={14} weight="bold" />
            </button>
          </div>

          <button className="shopping-cart">
            <ShoppingCart size={22} weight="fill" color={theme["gray-200"]} />
          </button>
        </div>
      </div>
    </CoffeeContainer>
  );
}
