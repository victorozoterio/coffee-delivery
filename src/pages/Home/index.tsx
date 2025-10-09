import { HomeContainer } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

export function Home() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <img
        id="background"
        src="src/assets/banner-background.png"
        alt="Fundo do banner"
      />

      <div className="hero">
        <div>
          <div className="content">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h4>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h4>
          </div>

          <div className="benefits">
            <span>
              <div className="orange-circle">
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={theme["gray-100"]}
                />
              </div>
              <p>Compra simples e segura</p>
            </span>

            <span>
              <div className="black-circle">
                <Package size={16} weight="fill" color={theme["gray-100"]} />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </span>

            <span>
              <div className="yellow-circle">
                <Timer size={16} weight="fill" color={theme["gray-100"]} />
              </div>
              <p>Entrega rápida e rastreada</p>
            </span>

            <span>
              <div className="purple-circle">
                <Coffee size={16} weight="fill" color={theme["gray-100"]} />
              </div>
              <p>O café chega fresquinho até você</p>
            </span>
          </div>
        </div>

        <div className="banner">
          <img src="src/assets/banner-coffee.png" alt="Banner de café" />
        </div>
      </div>
    </HomeContainer>
  );
}
