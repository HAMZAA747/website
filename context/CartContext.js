// context/CartContext.js
import { createContext, useState, useContext } from 'react'

// Create the Cart context (default null ensures error if used outside provider)
export const CartContext = createContext(null)

// Provider component to wrap your app
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [modalItem, setModalItem] = useState(null) // state for the modal item
  const [isModalOpen, setIsModalOpen] = useState(false) // state for modal visibility

  // Add an item to the cart
  const addToCart = (item) => {
    if (!item || !item.id) return
    setCart((prevCart) => [...prevCart, item])
  }

  // Remove an item from the cart by id
  const removeFromCart = (id) => {
    if (!id) return
    setCart((prevCart) => prevCart.filter((x) => x.id !== id))
  }

  // Open the modal with the selected item
  const openModal = (item) => {
    if (!item) return
    setModalItem(item)
    setIsModalOpen(true)
  }

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false)
    setModalItem(null)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      openModal,
      closeModal,
      isModalOpen,
      modalItem
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook for consuming the cart context
export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}

// Alias for compatibility with existing components
export const useCartContext = useCart
