import { createContext, type ReactNode, useState } from "react";

export interface CartItem {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  imageDescription: string;
  quantity: number;
}

export interface CartContextType {
  addItem: (item: Omit<CartItem, "quantity">) => void;
  getTotalItems: () => number;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const getTotalItems = (): number => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
