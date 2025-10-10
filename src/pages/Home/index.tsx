import { HomeContainer } from "./styles";
import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from "phosphor-react";
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

      <div className="catalog">
        <h2>Nossos cafés</h2>

        <div className="catalog-options">
          <div className="coffee">
            <div className="coffee-image">
              <img src="src/assets/espresso-coffee.png" alt="Café expresso" />
            </div>

            <div className="tags">
              <span>Tradicional</span>
            </div>

            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <div className="buy-coffee">
              <span className="price">
                R$
                <strong> 9,90</strong>
              </span>

              <div>
                <div className="amount">
                  <button className="remove-coffee">
                    <Minus
                      size={14}
                      weight="bold"
                      color={theme["purple-600"]}
                    />
                  </button>
                  <p className="amount-coffee">1</p>
                  <button className="add-coffee">
                    <Plus size={14} weight="bold" color={theme["purple-600"]} />
                  </button>
                </div>

                <button className="shopping-cart">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    color={theme["gray-200"]}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="coffee">
            <div className="coffee-image">
              <img src="src/assets/american-coffee.png" alt="Café expresso" />
            </div>

            <div className="tags">
              <span>Tradicional</span>
            </div>

            <h3>Expresso Americano</h3>
            <p>Expresso diluído, menos intenso que o tradicional</p>

            <div className="buy-coffee">
              <span className="price">
                R$
                <strong> 9,90</strong>
              </span>

              <div>
                <div className="amount">
                  <button className="remove-coffee">
                    <Minus
                      size={14}
                      weight="bold"
                      color={theme["purple-600"]}
                    />
                  </button>
                  <p className="amount-coffee">1</p>
                  <button className="add-coffee">
                    <Plus size={14} weight="bold" color={theme["purple-600"]} />
                  </button>
                </div>

                <button className="shopping-cart">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    color={theme["gray-200"]}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="coffee">
            <div className="coffee-image">
              <img
                src="src/assets/creamy-espresso-coffee.png"
                alt="Café expresso"
              />
            </div>

            <div className="tags">
              <span>Tradicional</span>
            </div>

            <h3>Expresso Cremoso</h3>
            <p>Café expresso tradicional com espuma cremosa</p>

            <div className="buy-coffee">
              <span className="price">
                R$
                <strong> 9,90</strong>
              </span>

              <div>
                <div className="amount">
                  <button className="remove-coffee">
                    <Minus
                      size={14}
                      weight="bold"
                      color={theme["purple-600"]}
                    />
                  </button>
                  <p className="amount-coffee">1</p>
                  <button className="add-coffee">
                    <Plus size={14} weight="bold" color={theme["purple-600"]} />
                  </button>
                </div>

                <button className="shopping-cart">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    color={theme["gray-200"]}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="coffee">
            <div className="coffee-image">
              <img src="src/assets/iced-coffee.png" alt="Café expresso" />
            </div>

            <div className="tags">
              <span>Tradicional</span>
              <span>Gelado</span>
            </div>

            <h3>Expresso Gelado</h3>
            <p>Bebida preparada com café expresso e cubos de gelo</p>

            <div className="buy-coffee">
              <span className="price">
                R$
                <strong> 9,90</strong>
              </span>

              <div>
                <div className="amount">
                  <button className="remove-coffee">
                    <Minus
                      size={14}
                      weight="bold"
                      color={theme["purple-600"]}
                    />
                  </button>
                  <p className="amount-coffee">1</p>
                  <button className="add-coffee">
                    <Plus size={14} weight="bold" color={theme["purple-600"]} />
                  </button>
                </div>

                <button className="shopping-cart">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    color={theme["gray-200"]}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}
