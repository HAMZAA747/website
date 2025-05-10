// File: components/Wraps.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function Wraps() {
  const items = [
    {
      name: 'Sweet Chili Wrap',
      price: 645,
      description:
        'Juicy grilled chicken glazed in bold Sweet Chili sauce, layered with crisp lettuce, crunchy onions, melted cheese, and premium toppings — all wrapped in a soft, warm tortilla. The Syndicate Wrap doesn’t ask for permission.',
      image: '/images/wraps/sweet-chili-syndicate.jpg',
    },
    {
      name: 'Hitman Wrap',
      price: 625,
      description:
        'Flame-grilled chicken thigh drenched in our Fiery Peri sauce, stacked with fresh lettuce, sharp onions, melted cheese, and signature toppings — sealed inside a warm tortilla. The Hitman Wrap strikes with heat and leaves no witnesses.',
      image: '/images/wraps/fiery-peri-hitman.jpg',
    },
    {
      name: 'Supreme Wrap',
      price: 600,
      description:
        'Creamy grilled chicken thigh folded with crisp lettuce, fresh onions, rich melted cheese, and classic toppings — all wrapped in a soft tortilla. The Supreme Wrap brings smooth flavor with cartel-level control.',
      image: '/images/wraps/malai-boti-supreme.jpg',
    },
  ]

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (item) => {
    setSelectedProduct({ ...item, category: 'Wraps' })
    setIsModalOpen(true)
  }

  return (
    <section id="wraps" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">Wraps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            role="button"
            tabIndex={0}
            onClick={() => openModal(item)}
            onKeyPress={(e) => e.key === 'Enter' && openModal(item)}
            className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-xl mb-1 text-black">{item.name}</h3>
              <p className="mt-2 text-gray-600 text-sm flex-1">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-lg text-black">Rs {item.price}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(item)
                  }}
                  className="bg-[#f2aa21] text-black px-4 py-2 rounded-full font-semibold text-sm hover:brightness-95 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </section>
  )
}
