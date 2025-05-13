// components/Sides.js
import React from 'react'
import Image from 'next/image'
import { useCartContext } from '@/context/CartContext'

const sidesItems = [
  {
    id: 'tender-strips',
    name: 'Tender Strips',
    description: 'Golden, crispy chicken tenders — juicy on the inside, coated for the perfect crunch.',
    price: 410,
    image: '/images/sides/tender-strips.jpg',
  },
  {
    id: 'nuggets',
    name: 'Nuggets',
    description: 'Bite-sized crispy chicken nuggets with a golden crunch and tender core.',
    price: 345,
    image: '/images/sides/nuggets.jpg',
  },
  {
    id: 'sweet-chili-wings',
    name: 'Sweet Chili Wings',
    description: 'Crispy golden wings glazed in a glossy Sweet Chili sauce.',
    price: 450,
    image: '/images/sides/sweet-chili-wings.jpg',
  },
  {
    id: 'garlic-mayo-wings',
    name: 'Garlic Mayo Wings',
    description: 'Golden-fried wings tossed in rich, velvety garlic mayo — creamy, garlicky, and dangerously addictive.',
    price: 450,
    image: '/images/sides/garlic-mayo-wings.jpg',
  },
  {
    id: 'fiery-peri-wings',
    name: 'Fiery Peri Wings',
    description: 'Crispy bone-in wings coated in our bold Fiery Peri sauce — spicy, vibrant, and packed with heat.',
    price: 450,
    image: '/images/sides/fiery-peri-wings.jpg',
  },
]

// Safe function for toLowerCase
const safeToLowerCase = (value) => 
  typeof value === 'string' ? value.toLowerCase() : '';

export default function Sides({ searchQuery }) {
  const { openModal, addToCart } = useCartContext()

  // Filter items by name or description
  const query = safeToLowerCase(searchQuery);
  const filtered = sidesItems.filter(item =>
    safeToLowerCase(item.name).includes(query) ||
    safeToLowerCase(item.description).includes(query)
  );

  return (
    <section id="sides" className="py-12 px-4">
      <h2 className="text-3xl font-semibold mb-8">Sides</h2>
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
                  onClick={e => {
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
