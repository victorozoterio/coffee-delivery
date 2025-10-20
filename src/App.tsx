import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { CartProvider } from "./contexts/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <Header />
        <Home />
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  );
}
