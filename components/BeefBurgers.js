import React, { useContext } from 'react'
import Image from 'next/image'
import { CartContext } from '../context/CartContext'
import ProductModal from './ProductModal'

const beefItems = [
  {
    id: 1,
    name: 'Cartel Smash',
    // Updated image path to match actual filename in public/images
    image: '/images/cartel-samsh.jpg',
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
    description: 'Double beef patties, all stacked in a buttery Brioche Bun.',
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
              {/* Item title in solid black */}
              <h3 className="text-xl font-semibold text-black">{item.name}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
              {/* Price stays bold black */}
              <p className="mt-4 text-lg font-bold text-black">Rs {item.price}</p>
              {/* Button in accent f2aa21 */}
              <button
                onClick={e => { e.stopPropagation(); addToCart(item) }}
                className="mt-4 px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-hover transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ProductModal />
    </section>
  )
}
