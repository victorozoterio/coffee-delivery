import { CoffeeContainer } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { moneyMaskWithoutCurrency } from "../../../../utils/masks";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { CoffeeAmountButton } from "../../../../components/CoffeeAmountButton";

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
    addItem({
      id,
      name,
      description,
      tags,
      price,
      image,
      imageDescription,
      quantity,
    });
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
          <CoffeeAmountButton
            quantity={quantity}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />

          <button className="shopping-cart" onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" color={theme["gray-200"]} />
          </button>
        </div>
      </div>
    </CoffeeContainer>
  );
}
