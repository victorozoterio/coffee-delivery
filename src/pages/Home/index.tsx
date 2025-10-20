import { HomeContainer } from "./styles";
import {
  Coffee as CoffeeIcon,
  Package,
  ShoppingCart,
  Timer,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { Coffee } from "./components/Coffee";

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
                <CoffeeIcon size={16} weight="fill" color={theme["gray-100"]} />
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
          <Coffee
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            tags={["Tradicional"]}
            price={9.9}
            image="src/assets/espresso-coffee.png"
            imageDescription="Café expresso"
          />

          <Coffee
            name="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            tags={["Tradicional"]}
            price={9.9}
            image="src/assets/american-coffee.png"
            imageDescription="Café americano"
          />

          <Coffee
            name="Expresso Cremoso"
            description="Café expresso tradicional com espuma cremosa"
            tags={["Tradicional"]}
            price={9.9}
            image="src/assets/creamy-espresso-coffee.png"
            imageDescription="Café cremoso"
          />

          <Coffee
            name="Expresso Gelado"
            description="Bebida preparada com cafeteria expresso e cubos de gelo"
            tags={["Tradicional", "Gelado"]}
            price={9.9}
            image="src/assets/iced-coffee.png"
            imageDescription="Café gelado"
          />

          <Coffee
            name="Café com Leite"
            description="Meio a meio de expresso tradicional com leite vaporizado"
            tags={["Tradicional", "Com leite"]}
            price={9.9}
            image="src/assets/coffee-with-milk.png"
            imageDescription="Café com leite"
          />

          <Coffee
            name="Latte"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            tags={["Tradicional", "Com leite"]}
            price={9.9}
            image="src/assets/latte-coffee.png"
            imageDescription="Café latte"
          />

          <Coffee
            name="Capuccino"
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
            tags={["Tradicional", "Com leite"]}
            price={9.9}
            image="src/assets/cappuccino-coffee.png"
            imageDescription="Café capuccino"
          />

          <Coffee
            name="Macchiato"
            description="Café expresso misturado com um pouco de leite quente e espuma"
            tags={["Tradicional", "Com leite"]}
            price={9.9}
            image="src/assets/macchiato-coffee.png"
            imageDescription="Café macchiato"
          />

          <Coffee
            name="Mocaccino"
            description="Café expresso com calda de chocolate, pouco leite e espuma"
            tags={["Tradicional", "Com leite"]}
            price={9.9}
            image="src/assets/mocaccino-coffee.png"
            imageDescription="Café mocaccino"
          />

          <Coffee
            name="Chocolate Quente"
            description="Bebida feita com chocolate dissolvido no leite quente e café"
            tags={["Especial", "Com leite"]}
            price={9.9}
            image="src/assets/hot-chocolate-coffee.png"
            imageDescription="Café chocolate quente"
          />

          <Coffee
            name="Cubano"
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
            tags={["Especial", "Alcoólico", "Gelado"]}
            price={9.9}
            image="src/assets/cuban-coffee.png"
            imageDescription="Café cubano"
          />

          <Coffee
            name="Havaiano"
            description="Drink feito com café e leite de coco"
            tags={["Especial"]}
            price={9.9}
            image="src/assets/hawaiian-coffee.png"
            imageDescription="Café havaiano"
          />

          <Coffee
            name="Árabe"
            description="Bebida preparada com grãos de café árabe e especiarias"
            tags={["Especial"]}
            price={9.9}
            image="src/assets/arabic-coffee.png"
            imageDescription="Café árabe"
          />

          <Coffee
            name="Irlandês"
            description="Bebida com cortesia de café, uísque irlandês e chantilly"
            tags={["Especial", "Alcoólico"]}
            price={9.9}
            image="src/assets/irish-coffee.png"
            imageDescription="Café irlandês"
          />
        </div>
      </div>
    </HomeContainer>
  );
}
