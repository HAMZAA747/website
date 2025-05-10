// context/CartContext.js
import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalItem, setModalItem] = useState(null)

  const addItem = (item) => {
    setCartItems((prev) => [...prev, item])
  }

  const openModal = (item) => {
    setModalItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalItem(null)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, isModalOpen, modalItem, openModal, closeModal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
