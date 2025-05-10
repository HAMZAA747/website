// File: context/CartContext.js
import React, { createContext, useContext, useState } from 'react'

// 1. Create context with a safe default shape
const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQty: () => {},
  subtotal: 0,
  gst: 0,
  total: 0,
})

// 2. Convenience hook
export const useCart = () => useContext(CartContext)

// 3. Provider
export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (newItem) => {
    setItems(prev => {
      const idx = prev.findIndex(
        i => i.id === newItem.id && JSON.stringify(i.options) === JSON.stringify(newItem.options)
      )
      if (idx > -1) {
        const updated = [...prev]
        updated[idx].qty += newItem.qty
        return updated
      }
      return [...prev, newItem]
    })
  }

  const removeItem = (itemId, options) => {
    setItems(prev =>
      prev.filter(i => !(i.id === itemId && JSON.stringify(i.options) === JSON.stringify(options)))
    )
  }

  const updateQty = (itemId, options, qty) => {
    setItems(prev =>
      prev.map(i =>
        i.id === itemId && JSON.stringify(i.options) === JSON.stringify(options)
          ? { ...i, qty }
          : i
      )
    )
  }

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const gst      = +(subtotal * 0.15).toFixed(0)
  const total    = subtotal + gst

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, subtotal, gst, total }}>
      {children}
    </CartContext.Provider>
  )
}
