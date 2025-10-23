import { Minus, Plus } from "phosphor-react";
import { CoffeeAmountButtonContainer } from "./styles";
import { useState } from "react";

export function CoffeeAmountButton() {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((prevValue) => prevValue + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity((prevValue) => prevValue - 1);
  };

  return (
    <CoffeeAmountButtonContainer>
      <button
        className="add-remove-coffee"
        onClick={handleDecreaseQuantity}
        disabled={quantity <= 1}
      >
        <Minus size={14} weight="bold" />
      </button>
      <p>{quantity}</p>
      <button
        className="add-remove-coffee"
        onClick={handleIncreaseQuantity}
        disabled={quantity >= 99}
      >
        <Plus size={14} weight="bold" />
      </button>
    </CoffeeAmountButtonContainer>
  );
}
