import { createContext, useState, useContext } from 'react'

// Create the Cart context
export const CartContext = createContext()

// Provider component to wrap your app
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [modalItem, setModalItem] = useState(null) // state for the modal item
  const [isModalOpen, setIsModalOpen] = useState(false) // state for modal visibility

  // Add an item to the cart
  const addToCart = (item) => setCart((c) => [...c, item])

  // Remove an item from the cart by id
  const removeFromCart = (id) => setCart((c) => c.filter((x) => x.id !== id))

  // Open the modal with the selected item
  const openModal = (item) => {
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
      modalItem // pass modal data
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook for components to consume cart context
export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}

// Alias for components expecting useCartContext
export const useCartContext = useCart
