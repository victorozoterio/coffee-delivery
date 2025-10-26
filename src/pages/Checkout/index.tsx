import { CheckoutContainer } from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { moneyMaskWithoutCurrency } from "../../utils/masks";
import { CoffeeAmountButton } from "../../components/CoffeeAmountButton";

export interface AddressData {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  uf: string;
}

export enum PaymentMethod {
  CREDIT_CARD = "credit-card",
  DEBIT_CARD = "debit-card",
  CASH = "cash",
}

export function Checkout() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>();
  const [address, setAddress] = useState<AddressData>({
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    uf: "",
  });

  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } =
    useContext(CartContext);

  const DELIVERY_FEE = 3.5;
  const totalItemsPrice = getTotalPrice();
  const totalPrice = totalItemsPrice + DELIVERY_FEE;

  const handleConfirmOrder = () => {
    if (!paymentMethod) {
      alert("Por favor, selecione um método de pagamento");
      return;
    }

    if (
      !address.street ||
      !address.number ||
      !address.neighborhood ||
      !address.city ||
      !address.uf
    ) {
      alert("Por favor, preencha todos os campos obrigatórios do endereço");
      return;
    }

    const orderData = {
      address,
      paymentMethod,
      totalItemsPrice,
      deliveryFee: DELIVERY_FEE,
      totalPrice,
    };

    clearCart();
    navigate("/success", { state: orderData });
  };

  return (
    <CheckoutContainer>
      <section id="complete-order">
        <h3>Complete seu pedido</h3>

        <div id="complete-order-container">
          <div id="address-container">
            <div>
              <div id="address-icon">
                <MapPinLine size={22} color={theme["yellow-800"]} />
              </div>

              <div id="address-title">
                <h4>Endereço de entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div id="address-info">
              <input
                id="cep"
                type="text"
                placeholder="CEP"
                value={address.cep}
                onChange={(e) =>
                  setAddress({ ...address, cep: e.target.value })
                }
              />
              <input
                id="street"
                type="text"
                placeholder="Rua"
                value={address.street}
                onChange={(e) =>
                  setAddress({ ...address, street: e.target.value })
                }
              />
              <input
                id="number"
                type="text"
                placeholder="Número"
                value={address.number}
                onChange={(e) =>
                  setAddress({ ...address, number: e.target.value })
                }
              />
              <input
                id="complement"
                type="text"
                placeholder="Complemento"
                value={address.complement}
                onChange={(e) =>
                  setAddress({ ...address, complement: e.target.value })
                }
              />
              <input
                id="neighborhood"
                type="text"
                placeholder="Bairro"
                value={address.neighborhood}
                onChange={(e) =>
                  setAddress({ ...address, neighborhood: e.target.value })
                }
              />
              <input
                id="city"
                type="text"
                placeholder="Cidade"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
              <input
                id="uf"
                type="text"
                placeholder="UF"
                value={address.uf}
                onChange={(e) => setAddress({ ...address, uf: e.target.value })}
              />
            </div>
          </div>

          <div id="payment-container">
            <div>
              <div id="payment-icon">
                <CurrencyDollarSimple size={22} color={theme["purple-600"]} />
              </div>

              <div id="payment-title">
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div id="payment-methods">
              <label htmlFor="credit-card">
                <input
                  type="radio"
                  id="credit-card"
                  value={PaymentMethod.CREDIT_CARD}
                  checked={paymentMethod === PaymentMethod.CREDIT_CARD}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value as PaymentMethod)
                  }
                />
                <CreditCard size={16} color={theme["purple-600"]} />
                <p>Cartão de Crédito</p>
              </label>

              <label htmlFor="debit-card">
                <input
                  type="radio"
                  id="debit-card"
                  value={PaymentMethod.DEBIT_CARD}
                  checked={paymentMethod === PaymentMethod.DEBIT_CARD}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value as PaymentMethod)
                  }
                />
                <Bank size={16} color={theme["purple-600"]} />
                <p>Cartão de Débito</p>
              </label>

              <label htmlFor="cash">
                <input
                  type="radio"
                  id="cash"
                  value={PaymentMethod.CASH}
                  checked={paymentMethod === PaymentMethod.CASH}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value as PaymentMethod)
                  }
                />
                <Money size={16} color={theme["purple-600"]} />
                <p>Dinheiro</p>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section id="selected-coffees">
        <h3>Cafés selecionados</h3>

        <div id="selected-coffees-container">
          {items.length === 0 ? (
            <div id="empty-cart">
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} id="coffee">
                <div id="coffee-info">
                  <img src={item.image} alt={item.imageDescription} />
                  <div id="coffee-name-and-actions">
                    <h4>{item.name}</h4>

                    <div id="action-buttons">
                      <CoffeeAmountButton
                        quantity={item.quantity}
                        onIncrease={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        onDecrease={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      />

                      <button id="trash" onClick={() => removeItem(item.id)}>
                        <Trash size={16} color={theme["purple-600"]} />
                        <p>Remover</p>
                      </button>
                    </div>
                  </div>
                  <p>
                    R$ {moneyMaskWithoutCurrency(item.price * item.quantity)}
                  </p>
                </div>

                <div id="divider"></div>
              </div>
            ))
          )}

          {items.length > 0 && (
            <div id="order-info">
              <div id="total-items">
                <p>Total de itens</p>
                <p>R$ {moneyMaskWithoutCurrency(totalItemsPrice)}</p>
              </div>

              <div id="delivery-fee">
                <p>Entrega</p>
                <p>R$ {moneyMaskWithoutCurrency(DELIVERY_FEE)}</p>
              </div>

              <div id="final-price">
                <p>Total</p>
                <p>R$ {moneyMaskWithoutCurrency(totalPrice)}</p>
              </div>
            </div>
          )}

          {items.length > 0 && (
            <button id="confirm-order" onClick={handleConfirmOrder}>
              Confirmar Pedido
            </button>
          )}
        </div>
      </section>
    </CheckoutContainer>
  );
}
