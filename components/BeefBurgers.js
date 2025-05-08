// File: website/components/BeefBurgers.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'
import { useCart } from '@/context/CartContext'

export default function BeefBurgers() {
  const items = [
    {
      name: 'Cartel Samsh',
      price: 690,
      description: 'Crispy-edged beef patty with melted cheese, all stacked in a buttery Brioche Bun.',
      image: '/images/cartel-samsh.jpg',
    },
    {
      name: 'Oklahoma',
      price: 995,
      description: 'Seasoned beef patties with caramelized onions and melted cheese, all stacked in a buttery Brioche Bun.',
      image: '/images/oklahoma.jpg',
    },
    {
      name: 'Big Stack',
      price: 960,
      description: 'Double beef patties with melted cheese, all stacked in a buttery Brioche Bun.',
      image: '/images/big-stack.jpg',
    },
  ]

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="beef-burgers" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Beef Burgers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.name} className="bg-white rounded-xl overflow-hidden shadow">
            <Image
              src={item.image}
              alt={item.name}
              width={360}
              height={260}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium">Rs {item.price}</span>
                <button
                  className="bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold hover:brightness-90 transition"
                  onClick={() => {
                    setSelectedProduct({ ...item, category: 'Beef Burgers' })
                    setIsModalOpen(true)
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Customization Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </section>
  )
}
