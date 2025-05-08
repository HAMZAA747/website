// website/context/CartContext.js
import { createContext, useContext, useState } from 'react'

// 1. Create the context
const CartContext = createContext()

// 2. Hook for easy access
export const useCart = () => useContext(CartContext)

// 3. Provider component
export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  // Add or update an item in the cart
  function addItem(newItem) {
    setItems(prev => {
      const idx = prev.findIndex(i => i.id === newItem.id && JSON.stringify(i.options) === JSON.stringify(newItem.options))
      if (idx > -1) {
        // merge quantities
        const updated = [...prev]
        updated[idx].qty += newItem.qty
        return updated
      }
      return [...prev, newItem]
    })
  }

  // Remove an item entirely
  function removeItem(itemId, options) {
    setItems(prev => prev.filter(i =>
      !(i.id === itemId && JSON.stringify(i.options) === JSON.stringify(options))
    ))
  }

  // Update quantity for a specific item
  function updateQty(itemId, options, qty) {
    setItems(prev => prev.map(i =>
      i.id === itemId && JSON.stringify(i.options) === JSON.stringify(options)
        ? { ...i, qty }
        : i
    ))
  }

  // Compute subtotal, GST, total, etc.
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const gst      = +(subtotal * 0.15).toFixed(0)
  const total    = subtotal + gst

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQty,
      subtotal,
      gst,
      total
    }}>
      {children}
    </CartContext.Provider>
  )
}
