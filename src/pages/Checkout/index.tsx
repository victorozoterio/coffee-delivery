import { CheckoutContainer } from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { useState } from "react";

export function Checkout() {
  const theme = useTheme();
  const [paymentMethod, setPaymentMethod] = useState<string>("");

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
    </CheckoutContainer>
  );
}
