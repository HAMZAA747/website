// File: website/components/LoadedFries.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function LoadedFries() {
  const items = [
    {
      name: 'Nashville Hot Crunch',
      price: 745,
      description: 'Crispy Nashville fillet, Buffalo sauce, melted cheese with toppings.',
      image: '/images/nashville-hot-crunch.jpg',
    },
    {
      name: 'Sweet Chilli Loaded',
      price: 745,
      description: 'Grilled Sweet Chilli thigh, Sweet Chilli sauce, melted cheese with toppings.',
      image: '/images/sweet-chilli-loaded.jpg',
    },
    {
      name: 'Fiery Peri Loaded',
      price: 745,
      description: 'Grilled Peri thigh, Fiery Peri sauce, melted cheese with toppings.',
      image: '/images/fiery-peri-loaded.jpg',
    },
    {
      name: 'Malai Boti Loaded',
      price: 745,
      description: 'Grilled Malai thigh boti, Garlic Mayo, melted cheese with toppings.',
      image: '/images/malai-boti-loaded.jpg',
    },
    {
      name: 'Plain Fries',
      price: 245,
      description: 'Crispy, golden straight-cut fries—simple, clean, and freshly fried. Let the flavor come from what you pair them with.',
      image: '/images/plain-fries.jpg',
    },
    {
      name: 'Cartel Crush (Masala Fries)',
      price: 295,
      description: 'Straight-cut fries dusted with our signature Cartel spice blend—bold, flavorful, and perfectly crisp.',
      image: '/images/cartel-crush.jpg',
    },
  ]

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen,    setIsModalOpen]    = useState(false)

  return (
    <section id="loaded-fries" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Loaded Fries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
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
                    setSelectedProduct({ ...item, category: 'Loaded Fries' })
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
