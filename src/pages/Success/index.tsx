import { useTheme } from "styled-components";
import { useLocation, Navigate } from "react-router-dom";
import { SuccessContainer } from "./styles";
import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";
import { PaymentMethod, type AddressData } from "../Checkout/types";

interface OrderData {
  address: AddressData;
  paymentMethod: PaymentMethod;
  totalItemsPrice: number;
  deliveryFee: number;
  totalPrice: number;
}

const getPaymentMethod = (method: PaymentMethod) => {
  if (method === PaymentMethod.CREDIT_CARD) return "Cartão de Crédito";
  if (method === PaymentMethod.DEBIT_CARD) return "Cartão de Débito";
  return "Dinheiro";
};

export function Success() {
  const theme = useTheme();
  const { state } = useLocation() as { state: OrderData };

  // Se não houver dados do pedido, redireciona para a home
  if (!state) {
    return <Navigate to="/" replace />;
  }

  const { address, paymentMethod } = state;
  const fullAddress = `${address.street}, ${address.number}`;
  const cityAndUF = `${address.neighborhood} - ${address.city}, ${address.uf}`;

  return (
    <SuccessContainer>
      <div id="order-confirmation">
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <div id="order-info-container">
        <div id="order-info">
          <span>
            <div className="purple">
              <MapPin size={16} weight="fill" color={theme["gray-100"]} />
            </div>

            <div>
              <p>
                Entrega em <strong>{fullAddress}</strong>
              </p>
              <p>{cityAndUF}</p>
            </div>
          </span>

          <span>
            <div className="yellow">
              <Timer size={16} weight="fill" color={theme["gray-100"]} />
            </div>

            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </span>

          <span>
            <div className="orange">
              <CurrencyDollarSimple
                size={16}
                weight="fill"
                color={theme["gray-100"]}
              />
            </div>

            <div>
              <p>Pagamento na entrega</p>
              <strong>{getPaymentMethod(paymentMethod)}</strong>
            </div>
          </span>
        </div>

        <img src="src/assets/delivery-man.png" alt="Entregador" />
      </div>
    </SuccessContainer>
  );
}
