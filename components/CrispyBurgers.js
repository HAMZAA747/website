// File: components/CrispyBurgers.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function CrispyBurgers() {
  const items = [
    {
      name: 'Crispy Chicken Supreme',
      price: 649,
      description: 'Crispy fried chicken patty, fresh lettuce, pickles, and our signature mayo.',
      image: '/images/crispy/crispy-chicken-supreme.jpg',
    },
    {
      name: 'Cartel Crunch Burger',
      price: 629,
      description: 'Double-crunch chicken, spicy slaw, and zesty sauce on a buttery brioche bun.',
      image: '/images/crispy/cartel-crunch-burger.jpg',
    },
    {
      name: 'Spicy Crunch Deluxe',
      price: 639,
      description: 'Crispy chicken with fiery Peri dust, jalapeños, and melted cheese.',
      image: '/images/crispy/spicy-crunch-deluxe.jpg',
    },
  ]

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (item) => {
    setSelectedProduct({ ...item, category: 'Crispy Burgers' })
    setIsModalOpen(true)
  }

  return (
    <section id="crispy-burgers" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">Crispy Burgers</h2>
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
              <h3 className="font-semibold text-xl mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm flex-1">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-lg">Rs {item.price}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(item)
                  }}
                  className="bg-[#f2aa21] text-black px-4 py-1 rounded-full font-semibold text-sm hover:brightness-95 transition"
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
