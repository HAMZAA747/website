// File: components/Wraps.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function Wraps() {
  const items = [
    {
      name: 'Sweet Chili Syndicate Wrap',
      price: 645,
      description: 'Juicy grilled chicken glazed in bold Sweet Chili sauce, layered with crisp lettuce, onions, melted cheese, premium toppings — all in a soft tortilla.',
      image: '/images/wraps/sweet-chili-syndicate.jpg',
    },
    {
      name: 'Fiery Peri Hitman Wrap',
      price: 625,
      description: 'Flame-grilled chicken thigh drenched in our Fiery Peri sauce, stacked with lettuce, onions, melted cheese — sealed inside a warm tortilla.',
      image: '/images/wraps/fiery-peri-hitman.jpg',
    },
    {
      name: 'Malai Boti Supreme Wrap',
      price: 600,
      description: 'Creamy grilled chicken thigh folded with lettuce, onions, rich melted cheese, and classic toppings in a soft tortilla.',
      image: '/images/wraps/malai-boti-supreme.jpg',
    },
  ]

  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)

  const openModal = item => {
    setSelected({ ...item, category: 'Wraps' })
    setOpen(true)
  }

  return (
    <section id="wraps" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Wraps</h2>
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
