import Header from './Header'
import Footer from './Footer'
import ProductModal from './ProductModal'
import { useCartContext } from '@/context/CartContext'

export default function Layout({ children, searchQuery, setSearchQuery }) {
  const { isModalOpen, modalItem, closeModal } = useCartContext()

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={modalItem}
      />
    </>
  )
}
