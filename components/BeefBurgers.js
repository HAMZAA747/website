import React, { useContext } from 'react'
import Image from 'next/image'
import { CartContext } from '../context/CartContext'
import ProductModal from './ProductModal'

const beefItems = [
  {
    id: 1,
    name: 'Cartel Smash',
    image: '/images/cartel-smash.jpg',
    description: 'Crispy-edged beef patty, all stacked in a buttery Brioche Bun.',
    price: 690,
  },
  {
    id: 2,
    name: 'Oklahoma',
    image: '/images/oklahoma.jpg',
    description: 'Beef patties, caramelized onions, all stacked in a buttery Brioche Bun.',
    price: 995,
  },
  {
    id: 3,
    name: 'Big Stack',
    image: '/images/big-stack.jpg',
    description: 'Double beef patties, melted cheese, all stacked in a buttery Brioche Bun.',
    price: 960,
  },
]

export default function BeefBurgers() {
  const { addToCart, openModal } = useContext(CartContext)

  return (
    <section id="beef-burgers" className="py-12 px-4">
      <h2 className="text-3xl font-semibold mb-6">Beef Burgers</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {beefItems.map(item => (
          <div
            key={item.id}
            className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
            onClick={() => openModal(item)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
              {/* Bold price */}
              <p className="mt-4 text-lg font-bold">Rs {item.price}</p>
              <button
                onClick={e => { e.stopPropagation(); addToCart(item) }}
                className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Include your modal component at the end */}
      <ProductModal />
    </section>
  )
}
