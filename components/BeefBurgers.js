// components/BeefBurgers.js
import React from 'react'
import Image from 'next/image'
import { useCartContext } from '@/context/CartContext'

const beefItems = [
  {
    id: 'cartel-smash',
    name: 'Cartel Smash',
    description: 'Crispy-edged beef patty, melted cheese, all stacked in a buttery Brioche bun.',
    price: 690,
    image: '/images/cartel-smash.jpg',
  },
  {
    id: 'oklahoma',
    name: 'Oklahoma',
    description: 'Beef patties, caramelized onions, melted cheese, all stacked in a buttery Brioche bun.',
    price: 995,
    image: '/images/oklahoma.jpg',
  },
  {
    id: 'big-stack',
    name: 'Big Stack',
    description: 'Double beef patties, melted cheese, all stacked in a buttery Brioche bun.',
    price: 960,
    image: '/images/big-stack.jpg',
  },
]

export default function BeefBurgers({ searchQuery }) {
  const { openModal } = useCartContext()

  // Filter items based on search query
  const filtered = beefItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section id="beef-burgers" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-6">Beef Burgers</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {filtered.map(item => (
          <div
            key={item.id}
            className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
            onClick={() => openModal({ ...item, category: 'Beef Burgers' })}
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-black">{item.name}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
              <p className="mt-4 text-lg font-bold text-black">Rs {item.price}</p>
              <button
                onClick={e => { e.stopPropagation(); openModal({ ...item, category: 'Beef Burgers' }) }}
                className="mt-4 px-4 py-2 bg-accent text-black rounded-full hover:bg-accent-hover transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
