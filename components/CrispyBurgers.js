// components/CrispyBurgers.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function CrispyBurgers() {
  const items = [
    {
      name: 'The Red Agent',
      price: 695,
      description:
        'Spicy premium Nashville-style fillet, Buffalo sauce, all stacked in a buttery brioche bun.',
      image: '/images/crispy/the-red-agent.jpg',
    },
    {
      name: 'The Runner',
      price: 395,
      description:
        'Single crispy patty, creamy house blend, all stacked in a soft sesame bun.',
      image: '/images/crispy/the-runner.jpg',
    },
    {
      name: 'The Crunch Dealer',
      price: 425,
      description:
        'Classic crispy Zinger fillet, house special drizzle, all stacked in a soft sesame bun.',
      image: '/images/crispy/the-crunch-dealer.jpg',
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
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-xl mb-1 text-black">{item.name}</h3>
              <p className="text-gray-600 text-sm flex-1">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-lg text-black">
                  Rs {item.price}
                </span>
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
