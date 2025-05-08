// File: website/components/Sides.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function Sides() {
  const items = [
    {
      name: 'Tender Strips',
      price: 410,
      description: 'Golden, crispy chicken tenders—juicy on the inside, coated for the perfect crunch.',
      image: '/images/tender-strips.jpg',
    },
    {
      name: 'Nuggets',
      price: 345,
      description: 'Bite-sized crispy chicken nuggets with a golden crunch and tender core.',
      image: '/images/nuggets.jpg',
    },
    {
      name: 'Plain Fries',
      price: 245,
      description: 'Crispy, golden straight-cut fries—freshly fried.',
      image: '/images/plain-fries.jpg',
    },
    {
      name: 'Cartel Crush (Masala Fries)',
      price: 295,
      description: 'Signature Cartel spice–dust fries—bold, flavorful, and perfectly crisp.',
      image: '/images/cartel-crush.jpg',
    },
  ]

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="sides" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Sides</h2>
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
                    setSelectedProduct({ ...item, category: 'Sides' })
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
