// File: components/Drinks.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function Drinks() {
  const items = [
    {
      name: 'Coke (Can)',
      price: 150,
      description: 'Chilled 330ml can of Coca-Cola.',
      image: '/images/drinks/coke-can.jpg',
    },
    {
      name: 'Sprite (Can)',
      price: 150,
      description: 'Chilled 330ml can of Sprite.',
      image: '/images/drinks/sprite-can.jpg',
    },
    {
      name: 'Fanta (Can)',
      price: 150,
      description: 'Chilled 330ml can of Fanta Orange.',
      image: '/images/drinks/fanta-can.jpg',
    },
  ]

  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)

  const openModal = item => {
    setSelected({ ...item, category: 'Drinks' })
    setOpen(true)
  }

  return (
    <section id="drinks" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Drinks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div
            key={item.name}
            onClick={() => openModal(item)}
            className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow cursor-pointer"
          >
            <div className="relative h-48 w-full">
              <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="mt-2 text-sm text-gray-600 flex-1">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium">Rs {item.price}</span>
                <button
                  onClick={e => { e.stopPropagation(); openModal(item) }}
                  className="bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold hover:brightness-90 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProductModal isOpen={open} onClose={() => setOpen(false)} product={selected} />
    </section>
)
}
