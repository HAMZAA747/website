// components/Layout.js
import Header from './Header'
import Footer from './Footer'
import ProductModal from './ProductModal'
import { useCartContext } from '@/context/CartContext'

export default function Layout({ children }) {
  const { isModalOpen, modalItem, closeModal } = useCartContext()

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      {/* Global Product Modal controlled via CartContext */}
      <ProductModal isOpen={isModalOpen} onClose={closeModal} product={modalItem} />
    </>
  )
}
