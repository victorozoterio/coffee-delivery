import { CoffeeContainer } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { moneyMaskWithoutCurrency } from "../../../../utils/masks";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";

export interface CoffeeProps {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  imageDescription: string;
}

export function Coffee({
  id,
  name,
  description,
  tags,
  price,
  image,
  imageDescription,
}: CoffeeProps) {
  const theme = useTheme();
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id,
        name,
        description,
        tags,
        price,
        image,
        imageDescription,
      });
    }
    setQuantity(1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevValue) => prevValue + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity((prevValue) => prevValue - 1);
  };

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
            <button
              className="add-remove-coffee"
              onClick={handleDecreaseQuantity}
              disabled={quantity <= 1}
            >
              <Minus size={14} weight="bold" />
            </button>
            <p className="amount-coffee">{quantity}</p>
            <button
              className="add-remove-coffee"
              onClick={handleIncreaseQuantity}
              disabled={quantity >= 99}
            >
              <Plus size={14} weight="bold" />
            </button>
          </div>

          <button className="shopping-cart" onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" color={theme["gray-200"]} />
          </button>
        </div>
      </div>
    </CoffeeContainer>
  );
}
