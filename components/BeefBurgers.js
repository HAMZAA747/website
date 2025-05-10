// components/BeefBurgers.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function BeefBurgers() {
  const items = [
    {
      name: 'Cartel Smash',
      price: 690,
      description:
        'Crispy-edged beef patty, melted cheese, all stacked in a buttery brioche bun.',
      image: '/images/beef/cartel-smash.jpg',
    },
    {
      name: 'Oklahoma',
      price: 995,
      description:
        'Beef patties, caramelized onions, melted cheese, all stacked in a buttery brioche bun.',
      image: '/images/beef/oklahoma.jpg',
    },
    {
      name: 'Big Stack',
      price: 960,
      description:
        'Double beef patties, melted cheese, all stacked in a buttery brioche bun.',
      image: '/images/beef/big-stack.jpg',
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
      <h2 className="text-3xl font-semibold mb-8">Beef Burgers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            role="button"
            tabIndex={0}
            onClick={() => openModal(item)}
            onKeyPress={(e) => e.key === 'Enter' && openModal(item)}
            className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer transition"
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
              <p className="mt-2 text-gray-600 flex-1">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium">Rs {item.price}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(item)
                  }}
                  className="bg-[#f2aa21] text-black px-4 py-2 rounded-full text-sm font-semibold hover:brightness-90 transition"
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
