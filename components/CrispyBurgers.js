import React from 'react'
import Image from 'next/image'
import { useCartContext } from '@/context/CartContext'

const crispyItems = [
  {
    id: 'the-red-agent',
    name: 'The Red Agent',
    description: 'Spicy premium Nashville-style fillet, all stacked in a buttery Brioche bun.',
    price: 695,
    image: '/images/crispy/the-red-agent.jpg',
  },
  {
    id: 'the-runner',
    name: 'The Runner',
    description: 'Single crispy patty, creamy house blend, all stacked in a soft sesame bun.',
    price: 395,
    image: '/images/crispy/the-runner.jpg',
  },
  {
    id: 'the-crunch-dealer',
    name: 'The Crunch Dealer',
    description: 'Classic crispy Zinger fillet, house-special drizzle, all stacked in a soft sesame bun.',
    price: 425,
    image: '/images/crispy/the-crunch-dealer.jpg',
  },
]

export default function CrispyBurgers({ searchQuery = '' }) {
  const { addToCart, openModal } = useCartContext()

  // Always a string, then lowercase
  const q = searchQuery.toLowerCase()
  const filtered = crispyItems.filter(item =>
    item.name.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q)
  )

  return (
    <section id="crispy-burgers" className="py-12 px-4">
      <h2 className="text-3xl font-semibold mb-8">Crispy Burgers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div
            key={item.id}
            className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
            onClick={() => openModal(item)}
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
              <p className="text-gray-600 text-sm flex-1">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-lg text-black">Rs {item.price}</span>
                <button
                  onClick={e => { e.stopPropagation(); addToCart(item) }}
                  className="px-4 py-2 rounded-full text-sm bg-accent hover:bg-[#e29a1e] text-white transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ProductModal (from Layout) handles the modal display */}
    </section>
  )
}
