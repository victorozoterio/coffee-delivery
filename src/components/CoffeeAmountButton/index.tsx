import { Minus, Plus } from "phosphor-react";
import { CoffeeAmountButtonContainer } from "./styles";

export interface CoffeeAmountButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  minQuantity?: number;
  maxQuantity?: number;
}

export function CoffeeAmountButton({
  quantity,
  onIncrease,
  onDecrease,
  minQuantity = 1,
  maxQuantity = 99,
}: CoffeeAmountButtonProps) {
  const isDecreaseDisabled = quantity <= minQuantity;
  const isIncreaseDisabled = quantity >= maxQuantity;

  return (
    <CoffeeAmountButtonContainer>
      <button
        className="add-remove-coffee"
        onClick={onDecrease}
        disabled={isDecreaseDisabled}
      >
        <Minus size={14} weight="bold" />
      </button>

      <p>{quantity}</p>

      <button
        className="add-remove-coffee"
        onClick={onIncrease}
        disabled={isIncreaseDisabled}
      >
        <Plus size={14} weight="bold" />
      </button>
    </CoffeeAmountButtonContainer>
  );
}
