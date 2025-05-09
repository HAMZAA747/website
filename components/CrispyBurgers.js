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
      description: 'Double-crunch chicken, spicy slaw, and zesty sauce on a brioche bun.',
      image: '/images/crispy/cartel-crunch-burger.jpg',
    },
    {
      name: 'Spicy Crunch Deluxe',
      price: 639,
      description: 'Crispy chicken with fiery peri dust, jalapeños, and melted cheese.',
      image: '/images/crispy/spicy-crunch-deluxe.jpg',
    },
  ]

  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)

  const openModal = item => {
    setSelected({ ...item, category: 'Crispy Burgers' })
    setOpen(true)
  }

  return (
    <section id="crispy-burgers" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Crispy Burgers</h2>
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
