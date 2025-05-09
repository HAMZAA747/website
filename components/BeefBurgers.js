// File: components/BeefBurgers.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function BeefBurgers() {
  // TODO: replace these example items with your actual beef-burger data
  const items = [
    {
      name: 'Classic Beef Burger',
      price: 749,
      description: 'Juicy 100% beef patty, crisp lettuce, tomato, and our signature sauce.',
      image: '/images/beef/classic-beef.jpg',
    },
    {
      name: 'Inferno Beef Blaze',
      price: 799,
      description: 'Spicy beef patty drenched in fiery peri sauce, with jalapeños and onions.',
      image: '/images/beef/inferno-beef.jpg',
    },
    {
      name: 'Cheese-Lovers Beef',
      price: 849,
      description: 'Double beef patty smothered in melted cheddar and mozzarella blend.',
      image: '/images/beef/cheese-lovers-beef.jpg',
    },
  ]

  const [selected, setSelected] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal(item) {
    setSelected({ ...item, category: 'Beef Burgers' })
    setIsModalOpen(true)
  }

  return (
    <section id="beef-burgers" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Beef Burgers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div
            key={item.name}
            onClick={() => openModal(item)}
            className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="mt-2 text-sm text-gray-600 flex-1">
                {item.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium">Rs {item.price}</span>
                <button
                  onClick={e => {
                    e.stopPropagation()
                    openModal(item)
                  }}
                  className="bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold hover:brightness-90 transition"
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
        product={selected}
      />
    </section>
  )
}
