import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { CartProvider } from "./contexts/CartContext";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <Router />
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  );
}
