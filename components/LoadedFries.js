// File: components/LoadedFries.js

import Image from 'next/image'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function LoadedFries() {
  const items = [
    {
      name: 'Nashville Hot Crunch',
      price: 745,
      description: 'Crispy fries tossed in Nashville hot seasoning — bold, spicy, and unforgettable.',
      image: '/images/fries/nashville-hot-crunch.jpg',
    },
    {
      name: 'Sweet Chilli Loaded',
      price: 745,
      description: 'Straight-cut fries dusted with our signature Sweet Chilli spice blend — sweet heat, perfectly crisp.',
      image: '/images/fries/sweet-chilli-loaded.jpg',
    },
    {
      name: 'Fiery Peri Loaded',
      price: 745,
      description: 'Loaded fries coated in our bold Fiery Peri sauce — vibrant, spicy, and tough to resist.',
      image: '/images/fries/fiery-peri-loaded.jpg',
    },
    {
      name: 'Malai Boti Loaded',
      price: 745,
      description: 'Fries topped with creamy Malai Boti sauce and tender chicken bits — rich, smooth, and indulgent.',
      image: '/images/fries/malai-boti-loaded.jpg',
    },
    {
      name: 'Plain Fries',
      price: 245,
      description: 'Crispy, golden straight-cut fries — simple, clean, and freshly fried. Let the flavor come from what you pair them with.',
      image: '/images/fries/plain-fries.jpg',
    },
    {
      name: 'Cartel Crush (Masala Fries)',
      price: 295,
      description: 'Straight-cut fries dusted with our signature Cartel spice blend — bold, flavorful, and perfectly crisp.',
      image: '/images/fries/cartel-crush.jpg',
    },
  ]

  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)

  const openModal = item => {
    setSelected({ ...item, category: 'Loaded Fries' })
    setOpen(true)
  }

  return (
    <section id="loaded-fries" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">Loaded Fries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div
            key={item.name}
            role="button"
            tabIndex={0}
            onClick={() => openModal(item)}
            onKeyPress={e => e.key === 'Enter' && openModal(item)}
            className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
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
                  onClick={e => { e.stopPropagation(); openModal(item) }}
                  className="bg-[#f2aa21] text-black px-4 py-2 rounded-full font-semibold text-sm hover:brightness-95 transition"
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

