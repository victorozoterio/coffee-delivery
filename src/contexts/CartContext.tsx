import { createContext, type ReactNode, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cart";
import type { CartItem } from "../reducers/cart";

export type { CartItem };

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}

const CART_STORAGE_KEY = "@coffee-delivery:cart";

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(
    cartReducer,
    { items: [] },
    (initialState) => {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) return { items: JSON.parse(storedCart) };

      return initialState;
    }
  );

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const getTotalItems = (): number => {
    return state.items.reduce(
      (total: number, item: CartItem) => total + item.quantity,
      0
    );
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getTotalPrice = (): number => {
    return state.items.reduce(
      (total: number, item: CartItem) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
