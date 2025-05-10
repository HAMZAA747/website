// components/GrilledBurgers.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function GrilledBurgers() {
  const items = [
    {
      name: 'Sweet Chili Syndicate',
      price: 645,
      description: 'Tender grilled chicken thigh, smooth yet spicy Sweet Chili Sauce, fresh lettuce — all stacked in a buttery Brioche Bun.',
      image: '/images/sweet-chili-syndicate.jpg',
    },
    {
      name: 'The Fiery Peri Hitman',
      price: 625,
      description: 'Juicy grilled chicken thigh, bold & fiery Peri Peri Sauce, fresh lettuce — all stacked in a buttery Brioche Bun.',
      image: '/images/fiery-peri-hitman.jpg',
    },
    {
      name: 'Malai Boti Supreme',
      price: 625,
      description: 'Creamy & richly spiced grilled chicken thigh, loaded with Garlic Mayo, fresh lettuce — all stacked in a buttery Brioche Bun.',
      image: '/images/malai-boti-supreme.jpg',
    },
  ]

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (item) => {
    setSelectedProduct({ ...item, category: 'Grilled Burgers' })
    setIsModalOpen(true)
  }

  return (
    <section id="grilled-burgers" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-6">Grilled Burgers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            onClick={() => openModal(item)}
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
              <h3 className="font-semibold text-xl mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm flex-1">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-lg">Rs {item.price}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(item)
                  }}
                  className="bg-[#F2AA21] text-black px-4 py-1 rounded-full font-semibold text-sm hover:brightness-95 transition"
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
