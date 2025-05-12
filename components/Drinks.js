// components/Drinks.js
import React from 'react'
import Image from 'next/image'
import { useCartContext } from '@/context/CartContext'

const drinkItems = [
  {
    id: 'regular-drink',
    name: 'Regular Drink',
    description: 'Chilled soft drink to refresh your meal.',
    price: 120,
    image: '/images/drinks/regular-drink.jpg',
  },
  {
    id: 'regular-water',
    name: 'Regular Water',
    description: 'Fresh, clean, and pure water to keep you hydrated.',
    price: 80,
    image: '/images/drinks/regular-water.jpg',
  },
  {
    id: 'large-drink',
    name: '1.5 LTR Drink',
    description: 'Big bottle for big thirsts, perfect for sharing.',
    price: 200,
    image: '/images/drinks/1-5ltr-drink.jpg',
  },
  {
    id: 'large-water',
    name: '1.5 LTR Water',
    description: 'Large pure water bottle for the whole table.',
    price: 120,
    image: '/images/drinks/1-5ltr-water.jpg',
  },
]

export default function Drinks({ searchQuery }) {
  const { openModal, addToCart } = useCartContext()

  // Filter items based on search query
  const filtered = drinkItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section id="drinks" className="py-12 px-4">
      <h2 className="text-3xl font-semibold mb-8">Drinks</h2>
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
                  onClick={(e) => {
                    e.stopPropagation()
                    addToCart(item)
                  }}
                  className="px-4 py-2 rounded-full text-sm bg-accent hover:bg-[#e29a1e] text-white transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
