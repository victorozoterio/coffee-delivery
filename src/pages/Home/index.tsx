import { HomeContainer } from "./styles";
import {
  Coffee as CoffeeIcon,
  Package,
  ShoppingCart,
  Timer,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { Coffee } from "./components/Coffee";
import bannerBackground from "../../assets/banner-background.png";
import bannerCoffee from "../../assets/banner-coffee.png";
import espressoCoffee from "../../assets/espresso-coffee.png";
import americanCoffee from "../../assets/american-coffee.png";
import creamyEspressoCoffee from "../../assets/creamy-espresso-coffee.png";
import icedCoffee from "../../assets/iced-coffee.png";
import coffeeWithMilk from "../../assets/coffee-with-milk.png";
import latteCoffee from "../../assets/latte-coffee.png";
import cappuccinoCoffee from "../../assets/cappuccino-coffee.png";
import macchiatoCoffee from "../../assets/macchiato-coffee.png";
import mocaccinoCoffee from "../../assets/mocaccino-coffee.png";
import hotChocolateCoffee from "../../assets/hot-chocolate-coffee.png";
import cubanCoffee from "../../assets/cuban-coffee.png";
import hawaiianCoffee from "../../assets/hawaiian-coffee.png";
import arabicCoffee from "../../assets/arabic-coffee.png";
import irishCoffee from "../../assets/irish-coffee.png";

export function Home() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <img id="background" src={bannerBackground} alt="Fundo do banner" />

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
              <div className="orange">
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={theme["gray-100"]}
                />
              </div>
              <p>Compra simples e segura</p>
            </span>

            <span>
              <div className="black">
                <Package size={16} weight="fill" color={theme["gray-100"]} />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </span>

            <span>
              <div className="yellow">
                <Timer size={16} weight="fill" color={theme["gray-100"]} />
              </div>
              <p>Entrega rápida e rastreada</p>
            </span>

            <span>
              <div className="purple">
                <CoffeeIcon size={16} weight="fill" color={theme["gray-100"]} />
              </div>
              <p>O café chega fresquinho até você</p>
            </span>
          </div>
        </div>

        <div className="banner">
          <img src={bannerCoffee} alt="Banner de café" />
        </div>
      </div>

      <div className="catalog">
        <h2>Nossos cafés</h2>

        <div className="catalog-options">
          <Coffee
            id={1}
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            tags={["Tradicional"]}
            price={9.9}
            image={espressoCoffee}
            imageDescription="Café expresso"
          />

          <Coffee
            id={2}
            name="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            tags={["Tradicional"]}
            price={9.9}
            image={americanCoffee}
            imageDescription="Café americano"
          />

          <Coffee
            id={3}
            name="Expresso Cremoso"
            description="Café expresso tradicional com espuma cremosa"
            tags={["Tradicional"]}
            price={9.9}
            image={creamyEspressoCoffee}
            imageDescription="Café cremoso"
          />

          <Coffee
            id={4}
            name="Expresso Gelado"
            description="Bebida preparada com cafeteria expresso e cubos de gelo"
            tags={["Tradicional", "Gelado"]}
            price={9.9}
            image={icedCoffee}
            imageDescription="Café gelado"
          />

          <Coffee
            id={5}
            name="Café com Leite"
            description="Meio a meio de expresso tradicional com leite vaporizado"
            tags={["Tradicional", "Com leite"]}
            price={9.9}
            image={coffeeWithMilk}
            imageDescription="Café com leite"
          />

          <Coffee
            id={6}
            name="Latte"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            tags={["Tradicional", "Com leite"]}
            price={9.9}
            image={latteCoffee}
            imageDescription="Café latte"
          />

          <Coffee
            id={7}
            name="Capuccino"
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
            tags={["Tradicional", "Com leite"]}
            price={9.9}
            image={cappuccinoCoffee}
            imageDescription="Café capuccino"
          />

          <Coffee
            id={8}
            name="Macchiato"
            description="Café expresso misturado com um pouco de leite quente e espuma"
            tags={["Tradicional", "Com leite"]}
            price={9.9}
            image={macchiatoCoffee}
            imageDescription="Café macchiato"
          />

          <Coffee
            id={9}
            name="Mocaccino"
            description="Café expresso com calda de chocolate, pouco leite e espuma"
            tags={["Tradicional", "Com leite"]}
            price={9.9}
            image={mocaccinoCoffee}
            imageDescription="Café mocaccino"
          />

          <Coffee
            id={10}
            name="Chocolate Quente"
            description="Bebida feita com chocolate dissolvido no leite quente e café"
            tags={["Especial", "Com leite"]}
            price={9.9}
            image={hotChocolateCoffee}
            imageDescription="Café chocolate quente"
          />

          <Coffee
            id={11}
            name="Cubano"
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
            tags={["Especial", "Alcoólico", "Gelado"]}
            price={9.9}
            image={cubanCoffee}
            imageDescription="Café cubano"
          />

          <Coffee
            id={12}
            name="Havaiano"
            description="Drink feito com café e leite de coco"
            tags={["Especial"]}
            price={9.9}
            image={hawaiianCoffee}
            imageDescription="Café havaiano"
          />

          <Coffee
            id={13}
            name="Árabe"
            description="Bebida preparada com grãos de café árabe e especiarias"
            tags={["Especial"]}
            price={9.9}
            image={arabicCoffee}
            imageDescription="Café árabe"
          />

          <Coffee
            id={14}
            name="Irlandês"
            description="Bebida com cortesia de café, uísque irlandês e chantilly"
            tags={["Especial", "Alcoólico"]}
            price={9.9}
            image={irishCoffee}
            imageDescription="Café irlandês"
          />
        </div>
      </div>
    </HomeContainer>
  );
}
