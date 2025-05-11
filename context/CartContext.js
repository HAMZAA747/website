// context/CartContext.js
import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (item) => setCart((c) => [...c, item])
  const removeFromCart = (id) => setCart((c) => c.filter((x) => x.id !== id))

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
