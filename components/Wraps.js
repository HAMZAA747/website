// File: website/components/Wraps.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function Wraps() {
  const items = [
    {
      name: 'Syndicate Wrap',
      price: 645,
      description: 'Juicy grilled chicken glazed in bold Sweet Chili sauce, layered with crisp lettuce, crunchy onions and premium toppings — all wrapped in a soft, warm tortilla. The Syndicate Wrap doesn’t ask for permission.',
      image: '/images/syndicate-wrap.jpg',
    },
    {
      name: 'Hitman Wrap',
      price: 645,
      description: 'Flame-grilled chicken thigh drenched in our Fiery Peri sauce, stacked with fresh lettuce, sharp onions and signature toppings — sealed inside a warm tortilla. The Hitman Wrap strikes with heat and leaves no witnesses.',
      image: '/images/hitman-wrap.jpg',
    },
    {
      name: 'Supreme Wrap',
      price: 645,
      description: 'Creamy grilled chicken thigh folded with crisp lettuce, fresh onions and classic toppings — all wrapped in a soft tortilla. The Supreme Wrap brings smooth flavor with cartel-level control.',
      image: '/images/supreme-wrap.jpg',
    },
  ]

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="wraps" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Wraps</h2>
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
                    setSelectedProduct({ ...item, category: 'Wraps' })
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
