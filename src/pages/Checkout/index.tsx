import { CheckoutContainer } from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { moneyMaskWithoutCurrency } from "../../utils/masks";

export function Checkout() {
  const theme = useTheme();
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const { items, removeItem, updateQuantity, getTotalPrice } =
    useContext(CartContext);

  const DELIVERY_FEE = 3.5;
  const totalItemsPrice = getTotalPrice();
  const totalPrice = totalItemsPrice + DELIVERY_FEE;

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
              <input id="cep" type="text" placeholder="CEP" />
              <input id="street" type="text" placeholder="Rua" />
              <input id="number" type="text" placeholder="Número" />
              <input id="complement" type="text" placeholder="Complemento" />
              <input id="neighborhood" type="text" placeholder="Bairro" />
              <input id="city" type="text" placeholder="Cidade" />
              <input id="uf" type="text" placeholder="UF" />
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
                  value="credit-card"
                  checked={paymentMethod === "credit-card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <CreditCard size={16} color={theme["purple-600"]} />
                <p>Cartão de Crédito</p>
              </label>

              <label htmlFor="debit-card">
                <input
                  type="radio"
                  id="debit-card"
                  value="debit-card"
                  checked={paymentMethod === "debit-card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Bank size={16} color={theme["purple-600"]} />
                <p>Cartão de Débito</p>
              </label>

              <label htmlFor="cash">
                <input
                  type="radio"
                  id="cash"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
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
                      <div className="amount">
                        <button
                          className="add-remove-coffee"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus size={14} weight="bold" />
                        </button>

                        <p>{item.quantity}</p>

                        <button
                          className="add-remove-coffee"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus size={14} weight="bold" />
                        </button>
                      </div>

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
            <button id="confirm-order">Confirmar Pedido</button>
          )}
        </div>
      </section>
    </CheckoutContainer>
  );
}
