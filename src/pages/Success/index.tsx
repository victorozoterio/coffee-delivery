import { useTheme } from "styled-components";
import { SuccessContainer } from "./styles";
import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";

export function Success() {
  const theme = useTheme();

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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </div>
          </span>
        </div>

        <img src="src/assets/delivery-man.png" alt="Entregador" />
      </div>
    </SuccessContainer>
  );
}
