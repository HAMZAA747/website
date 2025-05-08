import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function GrilledBurgers() {
  const items = [
    {
      name: 'Sweet Chili Syndicate',
      price: 645,
      description: 'Tender grilled chicken thigh…',
      image: '/images/sweet-chili-syndicate.jpg',
    },
    {
      name: 'The Fiery Peri Hitman',
      price: 625,
      description: 'Juicy grilled chicken thigh…',
      image: '/images/fiery-peri-hitman.jpg',
    },
    {
      name: 'Malai Boti Supreme',
      price: 625,
      description: 'Creamy, richly spiced grilled chicken thigh…',
      image: '/images/malai-boti-supreme.jpg',
    },
  ]

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="grilled-burgers" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Grilled Burgers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.name} className="bg-white rounded-xl overflow-hidden shadow">
            <Image
              src={item.image}
              alt={item.name}
              width={360}
              height={260}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium">Rs {item.price}</span>
                <button
                  className="bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold hover:brightness-90 transition"
                  onClick={() => {
                    setSelectedProduct({ ...item, category: 'Grilled Burgers' })
                    setIsModalOpen(true)
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Customization Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </section>
  )
}
